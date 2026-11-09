// Home page photo strip ("Scenes from Taytay"): drifts sideways on its own and
// loops without an end. A mouse can drag it; phones and trackpads swipe it natively.
(function () {
  var strip = document.getElementById('scenes-strip');
  var track = document.getElementById('scenes-track');
  if (!strip || !track || !track.children.length) return;

  var SPEED = 35; // pixels per second
  var RESUME_AFTER = 1500; // ms after a swipe or drag before it drifts again

  var originals = Array.prototype.slice.call(track.children);
  var reduceMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false };
  var setWidth = 0;
  var pos = 0;
  var lastSet = -1;
  var dragging = false;
  var dragX = 0;
  var holdUntil = 0;
  var lastTime = 0;

  // The copies are decoration: a screen reader hears the eight photos once.
  function appendCopy() {
    originals.forEach(function (node) {
      var copy = node.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      copy.querySelectorAll('img').forEach(function (img) {
        img.alt = '';
      });
      track.appendChild(copy);
    });
  }

  // Enough copies that the strip can move a whole set's width either way from
  // where it sits, however wide the screen is.
  function fillTrack() {
    if (track.children.length === originals.length) appendCopy();
    setWidth =
      track.children[originals.length].getBoundingClientRect().left -
      originals[0].getBoundingClientRect().left;
    if (setWidth <= 0) return false;
    var needed = 2 + Math.ceil(strip.clientWidth / setWidth);
    while (track.children.length < needed * originals.length) appendCopy();
    return true;
  }

  // Keeps the position inside the second set. Jumping by one set's width lands
  // on an identical frame, so the loop never shows a seam.
  function wrap() {
    if (pos < setWidth * 0.5) {
      pos += setWidth;
      return true;
    }
    if (pos >= setWidth * 1.5) {
      pos -= setWidth;
      return true;
    }
    return false;
  }

  function set() {
    strip.scrollLeft = pos;
    lastSet = strip.scrollLeft;
  }

  function tick(now) {
    var dt = lastTime ? Math.min(now - lastTime, 100) : 0;
    lastTime = now;
    if (!dragging && !reduceMotion.matches && now >= holdUntil) {
      pos += (SPEED * dt) / 1000;
      wrap();
      set();
    }
    requestAnimationFrame(tick);
  }

  // A scroll this script did not make is a swipe, a trackpad or shift+wheel:
  // follow it, and wait before drifting again.
  strip.addEventListener(
    'scroll',
    function () {
      if (dragging || Math.abs(strip.scrollLeft - lastSet) <= 1) return;
      pos = strip.scrollLeft;
      holdUntil = performance.now() + RESUME_AFTER;
      if (wrap()) set();
      else lastSet = strip.scrollLeft;
    },
    { passive: true }
  );

  // Mouse drag. Touch and pen are left to the browser's own swipe.
  strip.addEventListener('pointerdown', function (e) {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    dragging = true;
    dragX = e.clientX;
    strip.classList.add('is-dragging');
    strip.setPointerCapture(e.pointerId);
  });
  strip.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    pos -= e.clientX - dragX;
    dragX = e.clientX;
    wrap();
    set();
  });
  function endDrag() {
    if (!dragging) return;
    dragging = false;
    strip.classList.remove('is-dragging');
    holdUntil = performance.now() + RESUME_AFTER;
  }
  strip.addEventListener('pointerup', endDrag);
  strip.addEventListener('pointercancel', endDrag);
  track.addEventListener('dragstart', function (e) {
    e.preventDefault();
  });

  window.addEventListener('resize', function () {
    if (fillTrack()) {
      wrap();
      set();
    }
  });

  if (!fillTrack()) return;
  pos = setWidth;
  set();
  requestAnimationFrame(tick);
})();
