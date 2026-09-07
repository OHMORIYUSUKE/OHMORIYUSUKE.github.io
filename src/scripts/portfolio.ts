import L from 'leaflet';
import { location } from '../data/portfolio';

const themeButton = document.querySelector<HTMLButtonElement>('.theme-button');
const themeColor = document.querySelector('meta[name="theme-color"]');

const syncThemeColor = () => {
  const color = document.documentElement.classList.contains('dark') ? '#1b1d26' : '#ffffff';
  themeColor?.setAttribute('content', color);
};

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') document.documentElement.classList.add('dark');
syncThemeColor();

themeButton?.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem(
    'theme',
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );
  syncThemeColor();
});

const identityToggle = document.querySelector<HTMLButtonElement>('.identity-toggle');
const displayName = document.querySelector<HTMLElement>('[data-display-name]');
const portraitSwitcher = document.querySelector<HTMLElement>('.portrait-switcher');
const introCard = document.querySelector<HTMLElement>('.intro');

type Identity = 'alias' | 'legal';

const getIdentityFromQuery = (): Identity =>
  new URLSearchParams(window.location.search).get('profile') === 'real' ? 'legal' : 'alias';

const applyIdentity = (identity: Identity) => {
  const revealed = identity === 'legal';
  identityToggle?.classList.toggle('is-revealed', revealed);
  portraitSwitcher?.classList.toggle('is-revealed', revealed);
  introCard?.classList.toggle('is-legal', revealed);
  identityToggle?.setAttribute('aria-pressed', String(revealed));
  identityToggle?.setAttribute(
    'aria-label',
    revealed ? 'うーたんの表示へ戻す' : '本人写真と名前を表示する'
  );
  if (displayName) displayName.textContent = revealed ? '大森 裕介 / Yusuke Ohmori' : 'うーたん';
};

const syncIdentityQuery = (identity: Identity) => {
  const url = new URL(window.location.href);
  url.searchParams.set('profile', identity === 'legal' ? 'real' : 'alias');
  window.history.replaceState({}, '', url);
};

applyIdentity(getIdentityFromQuery());

identityToggle?.addEventListener('click', () => {
  const nextIdentity: Identity = identityToggle.classList.contains('is-revealed')
    ? 'alias'
    : 'legal';
  applyIdentity(nextIdentity);
  syncIdentityQuery(nextIdentity);
});

window.addEventListener('popstate', () => applyIdentity(getIdentityFromQuery()));

const greeting = document.querySelector<HTMLElement>('[data-greeting]');
const greetings = ['こんにちは、', 'Hello,', 'Hola,', 'Bonjour,', 'Ciao,', '안녕하세요,', '你好，'];

if (greeting && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let greetingIndex = 0;
  window.setInterval(() => {
    greeting.classList.add('is-changing');
    window.setTimeout(() => {
      greetingIndex = (greetingIndex + 1) % greetings.length;
      greeting.textContent = greetings[greetingIndex];
      greeting.classList.remove('is-changing');
    }, 180);
  }, 4200);
}

const mapNode = document.querySelector('#nerima-map');
if (mapNode instanceof HTMLElement) {
  const map = L.map(mapNode, {
    center: [location.latitude, location.longitude],
    zoom: location.zoom,
    zoomControl: false,
    attributionControl: true,
    scrollWheelZoom: false
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  L.control.zoom({ position: 'topright' }).addTo(map);

  const marker = L.divIcon({
    className: 'nerima-marker-wrap',
    html: '<span class="nerima-marker"><i></i></span>',
    iconSize: [24, 30],
    iconAnchor: [12, 28]
  });
  L.marker([location.latitude, location.longitude], { icon: marker, title: location.label }).addTo(
    map
  );
}
