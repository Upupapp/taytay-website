// Barangays page: live search over the five barangay cards.
// Edit the data below to update populations, officials or numbers.
(function () {
  const barangays = [
      { name: 'Dolores (Poblacion)', pop: '75,883', share: '19.1%', bar: '56%', captain: 'Hon. Reinier Andrew S. Pacleb', hall: 'Mahinhin cor. C. Valle St.', phone: '(02) 8658 9874 · 0998 887 8676', rescue: '(02) 8543 4476 · (02) 8658 9792' },
      { name: 'Muzon', pop: '34,422', share: '8.7%', bar: '25%', captain: 'Hon. Aniel C. Cruz', hall: 'National Road cor. Dela Cuesta St.', phone: '(02) 8451 1571 · (02) 8990 0946', rescue: 'Call Sagip Taytay · 0985 488 3352' },
      { name: 'San Isidro', pop: '42,362', share: '10.7%', bar: '31%', captain: 'Hon. Vivian R. Yupangco', hall: 'Noli Pascual St., Gregoria Heights Subd.', phone: '(02) 8650 0139 · 0968 320 5175', rescue: '0999 882 8218' },
      { name: 'San Juan', pop: '135,535', share: '34.1%', bar: '100%', captain: 'Hon. Roseller Z. Valera', hall: 'Tanchoco Ave., El Monteverde Subd.', phone: '0998 220 5844 · (02) 8557 1425', rescue: '0928 958 7556 · (02) 8350 5261' },
      { name: 'Santa Ana', pop: '108,909', share: '27.4%', bar: '80%', captain: 'Hon. Jean Lalaine P. Calderon', hall: 'B.A. Cruz St., Tudela', phone: '(02) 8706 6332 · 0920 919 2434', rescue: '(02) 8658 3967' }
    ];

  const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const card = (b) => `<article style="border: 1px solid #E4E8F0; border-radius: 24px; padding: 28px; display: flex; flex-direction: column; gap: 18px">
<div style="display: flex; flex-direction: column; gap: 10px">
<div style="display: flex; justify-content: space-between; align-items: baseline; gap: 12px; flex-wrap: wrap">
<h3 style="margin: 0; font-family: 'Bricolage Grotesque', 'Arial Narrow', sans-serif; font-size: 30px; line-height: 1; font-weight: 800; color: #0B2A6F">${esc(b.name)}</h3>
<span style="font-size: 14px; color: #4B5468; font-variant-numeric: tabular-nums"><strong style="color: #101828; font-size: 17px">${esc(b.pop)}</strong> residents · ${esc(b.share)}</span>
</div>
<div style="height: 8px; border-radius: 999px; background: #EEF2FA; overflow: hidden"><div style="height: 100%; border-radius: 999px; background: #F5C02E; width: ${esc(b.bar)}"></div></div>
</div>
<dl style="margin: 0; display: flex; flex-direction: column; font-size: 15px">
<div style="display: grid; grid-template-columns: 130px 1fr; gap: 12px; padding: 10px 0; border-top: 1px solid #EEF2FA"><dt style="color: #4B5468">Punong Barangay</dt><dd style="margin: 0; font-weight: 700">${esc(b.captain)}</dd></div>
<div style="display: grid; grid-template-columns: 130px 1fr; gap: 12px; padding: 10px 0; border-top: 1px solid #EEF2FA"><dt style="color: #4B5468">Barangay hall</dt><dd style="margin: 0">${esc(b.hall)}</dd></div>
<div style="display: grid; grid-template-columns: 130px 1fr; gap: 12px; padding: 10px 0; border-top: 1px solid #EEF2FA"><dt style="color: #4B5468">Contact</dt><dd style="margin: 0; font-variant-numeric: tabular-nums">${esc(b.phone)}</dd></div>
<div style="display: grid; grid-template-columns: 130px 1fr; gap: 12px; padding: 10px 0; border-top: 1px solid #EEF2FA"><dt style="color: #C8102E; font-weight: 700">Rescue</dt><dd style="margin: 0; font-weight: 700; font-variant-numeric: tabular-nums">${esc(b.rescue)}</dd></div>
</dl>
</article>`;

  const list = document.getElementById('brgy-list');
  const none = document.getElementById('brgy-none');
  const input = document.getElementById('brgy-search');

  function render() {
    const q = (input.value || '').toLowerCase().trim();
    const shown = barangays.filter((b) => !q || (b.name + ' ' + b.captain).toLowerCase().includes(q));
    list.innerHTML = shown.map(card).join('');
    none.hidden = shown.length !== 0;
  }
  input.addEventListener('input', render);
  render();
})();
