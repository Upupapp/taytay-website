// News page: filterable list of updates (All / News / Announcements).
// To add a post, copy one object in the list below. kind is 'news' or 'announcement'.
// img is optional ('' = no photo); pos sets which part of the photo shows.
(function () {
  const site = 'https://www.taytayrizal.gov.ph/';
  const posts = [
      { kind: 'announcement', tag: 'Treasury', date: 'November 2026', title: '2027 Real Property Tax Early Bird Discount', summary: 'Pay your 2027 real property tax early to get the early-bird discount.', img: '', alt: '', pos: 'center', href: site + 'posts' },
      { kind: 'news', tag: 'Education', date: 'November 2026', title: "Taytay Celebrates Municipal World Teachers' Day 2026", summary: "The municipality honors its teachers on World Teachers' Day.", img: '', alt: '', pos: 'center', href: site + 'posts' },
      { kind: 'news', tag: 'Awards', date: 'November 2026', title: 'Taytay Named Provincial Products Account Data Excellence Awardee', summary: 'Taytay is recognized for excellence in its provincial products account data.', img: '', alt: '', pos: 'center', href: site + 'posts' },
      { kind: 'news', tag: 'Agriculture', date: 'November 2026', title: 'Taytay AgriVet Office Conducts Crop Insurance and RSBSA Updating', summary: 'Farmers update their crop insurance and RSBSA registration.', img: '', alt: '', pos: 'center', href: site + 'posts' },
      { kind: 'news', tag: 'Disaster Preparedness', date: 'November 2026', title: "Taytay MDRRMO Conducts Basic First Aid Training for De La Salle's Operation Safe Program", summary: 'MDRRMO trainers teach basic first aid to participants of Operation Safe.', img: '', alt: '', pos: 'center', href: site + 'posts' },
      { kind: 'news', tag: 'Awards', date: 'October 28, 2026', title: 'FITS Center Taytay Bags Awards at TGP Summit 2026', summary: "Taytay's FITS Center is recognized at the Techno Gabay Program Summit 2026.", img: 'assets/images/news-fits-center-awards.jpg', alt: 'FITS Center Taytay staff holding their awards', pos: 'center 38%', href: site + 'single-post/fits-center-taytay-bags-awards-at-tgp-summit-2026' },
      { kind: 'news', tag: 'Gender & Development', date: 'October 28, 2026', title: 'Gender Sensitivity Training for LGU Department Heads and Section Chiefs', summary: 'Department heads and section chiefs of LGU Taytay take part in gender sensitivity training.', img: 'assets/images/news-gender-sensitivity-training.jpg', alt: 'LGU Taytay officials in a training workshop', pos: 'center 52%', href: site + 'single-post/building-awareness-inspiring-action-gender-sensitivity-training-for-lgu-taytay-department-heads-an' },
      { kind: 'news', tag: 'Social Services', date: 'October 20, 2026', title: 'Strengthening Care Economy Initiatives Through Partnership Dialogues', summary: 'The municipality meets with partners to strengthen its care economy initiatives.', img: 'assets/images/news-care-economy-dialogue.jpg', alt: 'Partners and officials meeting in the session hall', pos: 'center 45%', href: site + 'single-post/strengthening-care-economy-initiatives-through-partnership-dialogues' },
      { kind: 'news', tag: 'Environment', date: 'October 19, 2026', title: 'Joint Clean-Up Operations Ahead of Undas 2026', summary: 'Cleanup teams prepare public areas ahead of Undas.', img: '', alt: '', pos: 'center', href: site + 'posts' },
      { kind: 'news', tag: 'Awards', date: 'October 14, 2026', title: 'DOST-CALABARZON Pinarangalan ang Bayan ng Taytay', summary: 'The Department of Science and Technology in CALABARZON honors the Municipality of Taytay.', img: '', alt: '', pos: 'center', href: site + 'posts' },
      { kind: 'news', tag: 'Livelihood', date: 'October 13, 2026', title: 'Project TAHI: LGU Taytay at DENR-ERDB', summary: 'LGU Taytay partners with DENR-ERDB on Project TAHI.', img: '', alt: '', pos: 'center', href: site + 'posts' },
      { kind: 'news', tag: 'Community', date: 'October 12, 2026', title: 'Liwanag na Hatid, Serbisyong Ramdam! Solar Lighting for Sitio Bukal 2', summary: 'Solar lighting reaches the residents of Sitio Bukal 2.', img: '', alt: '', pos: 'center', href: site + 'posts' },
      { kind: 'announcement', tag: 'Education', date: 'October 12, 2026', title: "Free DOST-SEI Scholarship Review Program at SMILE I.T. Lab and STTI", summary: 'A free review program for students taking the DOST-SEI scholarship exam.', img: '', alt: '', pos: 'center', href: site + 'posts' }
    ];

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'news', label: 'News' },
    { id: 'announcement', label: 'Announcements' }
  ];
  const base = 'min-height: 44px; padding: 0 18px; border-radius: 999px; font: inherit; font-size: 15px; font-weight: 700; cursor: pointer; ';
  const on = 'background: #0B2A6F; color: #FFFFFF; border: 1px solid #0B2A6F;';
  const off = 'background: #FFFFFF; color: #0B2A6F; border: 1px solid #C3CBDC;';

  const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const card = (n) => `<article style="border: 1px solid #E4E8F0; border-radius: 24px; overflow: hidden; display: flex; flex-direction: column">
${n.img ? `<img src="${esc(n.img)}" alt="${esc(n.alt)}" style="width: 100%; height: 210px; object-fit: cover; object-position: ${esc(n.pos)}">` : ''}
<div style="padding: 24px; display: flex; flex-direction: column; gap: 10px; flex-grow: 1">
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px">
<span style="font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 10px; border-radius: 999px; background: #EEF2FA; color: #0B2A6F">${esc(n.tag)}</span>
<span style="font-size: 14px; color: #4B5468; font-weight: 600">${esc(n.date)}</span>
</div>
<h3 style="margin: 0; font-family: 'Bricolage Grotesque', 'Arial Narrow', sans-serif; font-size: 22px; line-height: 1.15; font-weight: 700; color: #101828">${esc(n.title)}</h3>
<p style="margin: 0; color: #4B5468; font-size: 15px; flex-grow: 1">${esc(n.summary)}</p>
<a href="${esc(n.href)}" style="font-weight: 700; font-size: 15px">Read more</a>
</div>
</article>`;

  const tabsEl = document.getElementById('news-tabs');
  const grid = document.getElementById('news-grid');
  let filter = 'all';

  function render() {
    tabsEl.innerHTML = tabs.map((t) =>
      `<button type="button" data-id="${t.id}" aria-pressed="${t.id === filter}" style="${base + (t.id === filter ? on : off)}">${t.label}</button>`
    ).join('');
    grid.innerHTML = posts.filter((n) => filter === 'all' || n.kind === filter).map(card).join('');
  }
  tabsEl.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-id]');
    if (b) { filter = b.dataset.id; render(); }
  });
  render();
})();
