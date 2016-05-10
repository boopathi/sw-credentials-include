const noCreds = document.getElementById('no-creds');
const creds = document.getElementById('creds');

noCreds.addEventListener('click', e => {
  fetch('/200')
    .then(r => r.text())
    .then(console.log.bind(console))
});

creds.addEventListener('click', e => {
  fetch('/200', { credentials: 'include' })
    .then(r => r.text())
    .then(console.log.bind(console))
});
