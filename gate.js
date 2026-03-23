(function () {
  var STORAGE_KEY = 'portfolio_unlocked';

  function showPage() {
    var hide = document.getElementById('gate-hide');
    if (hide) hide.remove();
    document.documentElement.style.visibility = '';
  }

  if (localStorage.getItem(STORAGE_KEY) === '1') {
    showPage();
    return;
  }

  var css = [
    '#gate{position:fixed;inset:0;z-index:9999;background:#FAF7F2;display:flex;align-items:center;justify-content:center;font-family:"DM Sans",sans-serif}',
    '.gate-box{width:100%;max-width:360px;padding:0 24px;display:flex;flex-direction:column;gap:20px}',
    '.gate-lbl{font-family:"DM Mono",monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#7A6F68}',
    '.gate-row{display:flex;gap:10px}',
    '.gate-inp{flex:1;padding:12px 14px;background:#F2EDE4;border:1px solid #E0D8CE;border-radius:6px;font-family:"DM Mono",monospace;font-size:14px;color:#1A1614;outline:none;transition:border-color .2s}',
    '.gate-inp:focus{border-color:#7A6F68}',
    '.gate-inp.gate-err{border-color:#F4743B}',
    '.gate-btn{padding:12px 18px;background:#1A1614;color:#FAF7F2;border:none;border-radius:6px;font-family:"DM Sans",sans-serif;font-size:14px;font-weight:500;cursor:pointer;transition:opacity .15s}',
    '.gate-btn:hover{opacity:.8}',
    '.gate-msg{font-size:13px;color:#F4743B;min-height:18px}'
  ].join('');

  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  var gate = document.createElement('div');
  gate.id = 'gate';
  gate.innerHTML =
    '<div class="gate-box">' +
      '<div class="gate-lbl">Password required</div>' +
      '<div class="gate-row">' +
        '<input id="gate-inp" class="gate-inp" type="password" placeholder="Enter password" autocomplete="current-password" />' +
        '<button class="gate-btn" onclick="gateSubmit()">Enter</button>' +
      '</div>' +
      '<div class="gate-msg" id="gate-msg"></div>' +
    '</div>';
  document.body.insertBefore(gate, document.body.firstChild);

  showPage();

  var inp = document.getElementById('gate-inp');
  inp.focus();
  inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') gateSubmit(); });

  window.gateSubmit = function () {
    var inp = document.getElementById('gate-inp');
    var msg = document.getElementById('gate-msg');
    if (inp.value === 'F1NDJ0BN0W!') {
      localStorage.setItem(STORAGE_KEY, '1');
      document.getElementById('gate').remove();
    } else {
      inp.classList.add('gate-err');
      msg.textContent = 'Incorrect password.';
      inp.value = '';
      setTimeout(function () { inp.classList.remove('gate-err'); }, 1500);
    }
  };
})();
