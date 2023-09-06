const circleContainer = document.getElementById('circle');
const totalItems = 12; // Łączna liczba elementów
const radius = 230; // Promień koła
const iconSizeWidth = 35; // Wielkość ikon
const iconSizeHeight = 40; // Wielkość ikon
const radiusTextX = 170; // Promień koła
const radiusTextY = 40; // Promień koła

const iconPaths = [
  'icon1.png',
  'icon2.png',
  'icon3.png',
  'icon4.png',
  'icon5.png',
  'icon6.png',
  'icon7.png',
  'icon8.png',
  'icon9.png',
  'icon10.png',
  'icon11.png',
  'icon12.png',
];

const labels = [
  'Prawo międzynarodowe',
  'Finansowanie handlu międzynarodowego',
  'Pozyskiwanie inwestorów (M&A)',
  'Nieruchomości',
  'Komercjalizacja własności intelektualnej',
  'Podnoszenie produktywności',
  'Crowdfunding',
  'Ubezpieczenia międzynarodowe',
  'Marketing 360º',
  'Zarządzanie projektami',
  'Dotacje i granty międzynarodowe',
  'Międzynarodowa księgowość, kadry i podatki',
];

circleContainer.style.backgroundImage = "url('main-background.png')";

for (let i = 0; i < totalItems; i++) {
  const angle = (i / totalItems) * 2 * Math.PI;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const circleItem = document.createElement('div');
  circleItem.classList.add('circle-item');
  circleItem.style.left = `${300 + x}px`;
  circleItem.style.top = `${295 + y}px`;


  const img = document.createElement('img');
  img.src = iconPaths[i % iconPaths.length];
  img.style.width = `${iconSizeWidth}px`;
  img.style.height = `${iconSizeHeight}px`;
  circleItem.appendChild(img);


  const label = document.createElement('div');
  label.classList.add('circle-label');
  label.innerText = labels[i % labels.length];
  const labelX = 300 + x + (radiusTextX + iconSizeWidth / 2 + 10) * Math.cos(angle);
  const labelY = 300 + y + (radiusTextY + iconSizeWidth / 2 + 10) * Math.sin(angle);
  label.style.left = `${labelX}px`;
  label.style.top = `${labelY}px`;
  circleContainer.appendChild(circleItem);
  circleContainer.appendChild(label);
}
