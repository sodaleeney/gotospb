let selectedOption = 0;

const metroColors = {
  blue: '#4d6fcb',    // светло-синий с сероватым подтоном
  red: '#e26b6b',     // теплый красный, менее агрессивный
  green: '#5eae68',   // мягкий оливково-зелёный
  orange: '#ffc266',  // тёплый светло-оранжевый, как карамель
  purple: '#b38df6'   // светлая сирень, менее контрастная
};

const metroStation = {
  blue: ["Parnas", "Prospekt Prosveshcheniya", "Ozerki", "Udelnaya", "Pionerskaya", "Chyornaya Rechka", "Petrogradskaya", "Gorkovskaya", "Nevskiy Prospekt", "Sennaya Ploshchad", "Tekhnologicheskiy Institut", "Frunzenskaya", "Moskovskie Vorota", "Elektrosila", "Park Pobedy", "Moskovskaya", "Zvezdnaya", "Kupchino"],
  red: ["Devyatkino", "Grazhdanskiy Prospekt", "Akademicheskaya", "Politekhnicheskaya", "Ploshchad Muzhestva", "Lesnaya", "Vyborgskaya", "Ploshchad Lenina", "Chernyshevskaya", "Ploshchad Vosstaniya", "Vladimirskaya", "Pushkinskaya", "Tekhnologicheskiy Institut", "Baltiyskaya", "Narvskaya", "Kirovskiy Zavod", "Avtovo", "Leninskiy Prospekt", "Prospekt Veteranov"],
  green: ["Begovaya", "Zenit", "Primorskaya", "Vasileostrovskaya", "Gostiny Dvor", "Mayakovskaya", "Ploshchad Alexandra Nevskogo 1", "Yelizarovskaya", "Lomonosovskaya", "Proletarskaya", "Obukhovo", "Rybatskoye"],
  orange: ["Spasskaya", "Dostoyevskaya", "Ligovskiy Prospekt", "Ploshchad Alexandra Nevskogo 2", "Novocherkasskaya", "Ladozhskaya", "Prospekt Bolshevikov", "Ulitsa Dybenko"],
  purple: ["Komendantskiy Prospekt", "Staraya Derevnya", "Krestovskiy Ostrov", "Chkalovskaya", "Sportivnaya", "Admiralteyskaya", "Sadovaya", "Zvenigorodskaya", "Obvodny Kanal", "Volkovskaya", "Bukharestskaya", "Mezhdunarodnaya", "Prospekt Slavy", "Dunayskaya", "Shushary"]
};

const eat = [
  "burger",
  "sushi",
  "tacos",
  "ramen",
  "pasta",
  "steak",
  "salad",
  "falafel",
  "bbq ribs",
  "fried chicken",
  "shawarma",
  "pizza",
  "burrito",
  "noodles",
  "curry",
  "crepes",

  "coffee",
  "tea",
  "bubble tea",
  "lemonade",
  "milkshake",
  "hot chocolate",
  "ice cream",
  "donut",
  "sweet desert"
];

const place = [
  "park",
  "cinema",
  "shopping center",
  "museum",
  "riverwalk",
  "bookstore",
  "gallery",
  "historical square",
  "concert",
  "library",
  "indie theatre",
  "photospot",
  "board game cafe"
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Обработчик выбора действия
document.querySelectorAll('.choice-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedOption = parseInt(btn.dataset.value);
    document.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // отображение выбранного действия
    document.getElementById('selected-action').textContent = `You chose: ${btn.textContent}`;
  });
});

function generatePlan() {
  const lines = Object.keys(metroStation);
  const randomLine = getRandom(lines);
  const randomStation = getRandom(metroStation[randomLine]);

  // показать станцию и покрасить её
  const stationEl = document.getElementById('station');
  stationEl.textContent = `You're going to ${randomStation}`;
  stationEl.style.color = metroColors[randomLine];

  // логика выбора действия
  let result = '';
  if (selectedOption === 1) result = `Find a place with ${getRandom(eat)}.`;
  else if (selectedOption === 2) result = `Take a walk to the ${getRandom(place)}.`;
  else if (selectedOption === 3) result = `First go to the ${getRandom(place)}, and then try some ${getRandom(eat)}.`;
  else result = `You can stay at home or just go for a walk, sweety <3`;

  // отображение результата с анимацией
  const resultEl = document.getElementById('result');
  resultEl.textContent = result;
  resultEl.style.display = 'block';
  resultEl.classList.add('show');
}
