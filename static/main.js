const noCreds = document.getElementById('no-creds');
const creds = document.getElementById('creds');
const clearCookieNoCreds = document.getElementById('clear-cookie-no-creds');
const clearCookieCreds = document.getElementById('clear-cookie-creds');

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

noCreds.addEventListener('click', e => {
  fetch('/200')
    .then(r => r.text())
    .then(r => console.log(r))
});

creds.addEventListener('click', e => {
  fetch('/200', { credentials: 'include' })
    .then(r => r.text())
    .then(r => console.log(r))
});

clearCookieNoCreds.addEventListener('click', e => {
  fetch('/del')
    .then(r => {
      if (getCookie('X-Cookie')) console.log('Cookie still exists. Cookie clearing failed.');
      else console.log('Cookie cleared');
    })
});

clearCookieCreds.addEventListener('click', e => {
  fetch('/del', { credentials: 'include' })
    .then(r => {
      if (getCookie('X-Cookie')) console.log('Cookie still exists. Cookie clearing failed.');
      else console.log('Cookie cleared');
    })
});
