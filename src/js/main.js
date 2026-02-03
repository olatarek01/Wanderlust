/////////////////// GLOBAL /////////////////////
const cities = {
  // UNITED STATES
  US: [
    { name: "New York", lat: 40.7128, lon: -74.006 },
    { name: "Los Angeles", lat: 34.0522, lon: -118.2437 },
    { name: "Chicago", lat: 41.8781, lon: -87.6298 },
    { name: "Miami", lat: 25.7617, lon: -80.1918 },
    { name: "San Francisco", lat: 37.7749, lon: -122.4194 },
    { name: "Las Vegas", lat: 36.1699, lon: -115.1398 },
    { name: "Seattle", lat: 47.6062, lon: -122.3321 },
    { name: "Boston", lat: 42.3601, lon: -71.0589 },
  ],

  // UNITED KINGDOM
  GB: [
    { name: "London", lat: 51.5074, lon: -0.1278 },
    { name: "Manchester", lat: 53.4808, lon: -2.2426 },
    { name: "Edinburgh", lat: 55.9533, lon: -3.1883 },
    { name: "Birmingham", lat: 52.4862, lon: -1.8904 },
    { name: "Liverpool", lat: 53.4084, lon: -2.9916 },
    { name: "Glasgow", lat: 55.8642, lon: -4.2518 },
  ],

  // GERMANY
  DE: [
    { name: "Berlin", lat: 52.52, lon: 13.405 },
    { name: "Munich", lat: 48.1351, lon: 11.582 },
    { name: "Frankfurt", lat: 50.1109, lon: 8.6821 },
    { name: "Hamburg", lat: 53.5511, lon: 9.9937 },
    { name: "Cologne", lat: 50.9375, lon: 6.9603 },
    { name: "Stuttgart", lat: 48.7758, lon: 9.1829 },
  ],

  // FRANCE
  FR: [
    { name: "Paris", lat: 48.8566, lon: 2.3522 },
    { name: "Lyon", lat: 45.764, lon: 4.8357 },
    { name: "Marseille", lat: 43.2965, lon: 5.3698 },
    { name: "Nice", lat: 43.7102, lon: 7.262 },
    { name: "Bordeaux", lat: 44.8378, lon: -0.5792 },
    { name: "Strasbourg", lat: 48.5734, lon: 7.7521 },
  ],

  // ITALY
  IT: [
    { name: "Rome", lat: 41.9028, lon: 12.4964 },
    { name: "Milan", lat: 45.4642, lon: 9.19 },
    { name: "Florence", lat: 43.7696, lon: 11.2558 },
    { name: "Venice", lat: 45.4408, lon: 12.3155 },
    { name: "Naples", lat: 40.8518, lon: 14.2681 },
    { name: "Turin", lat: 45.0703, lon: 7.6869 },
  ],

  // SPAIN
  ES: [
    { name: "Madrid", lat: 40.4168, lon: -3.7038 },
    { name: "Barcelona", lat: 41.3851, lon: 2.1734 },
    { name: "Seville", lat: 37.3891, lon: -5.9845 },
    { name: "Valencia", lat: 39.4699, lon: -0.3763 },
    { name: "Bilbao", lat: 43.263, lon: -2.935 },
    { name: "Malaga", lat: 36.7213, lon: -4.4214 },
  ],

  // NETHERLANDS
  NL: [
    { name: "Amsterdam", lat: 52.3676, lon: 4.9041 },
    { name: "Rotterdam", lat: 51.9244, lon: 4.4777 },
    { name: "The Hague", lat: 52.0705, lon: 4.3007 },
    { name: "Utrecht", lat: 52.0907, lon: 5.1214 },
    { name: "Eindhoven", lat: 51.4416, lon: 5.4697 },
  ],

  // PORTUGAL
  PT: [
    { name: "Lisbon", lat: 38.7223, lon: -9.1393 },
    { name: "Porto", lat: 41.1579, lon: -8.6291 },
    { name: "Faro", lat: 37.0194, lon: -7.9322 },
    { name: "Coimbra", lat: 40.2033, lon: -8.4103 },
  ],

  // AUSTRIA
  AT: [
    { name: "Vienna", lat: 48.2082, lon: 16.3738 },
    { name: "Salzburg", lat: 47.8095, lon: 13.055 },
    { name: "Innsbruck", lat: 47.2692, lon: 11.4041 },
    { name: "Graz", lat: 47.0707, lon: 15.4395 },
  ],

  // SWITZERLAND
  CH: [
    { name: "Zurich", lat: 47.3769, lon: 8.5417 },
    { name: "Geneva", lat: 46.2044, lon: 6.1432 },
    { name: "Bern", lat: 46.948, lon: 7.4474 },
    { name: "Basel", lat: 47.5596, lon: 7.5886 },
  ],

  // BELGIUM
  BE: [
    { name: "Brussels", lat: 50.8503, lon: 4.3517 },
    { name: "Antwerp", lat: 51.2194, lon: 4.4025 },
    { name: "Bruges", lat: 51.2093, lon: 3.2247 },
    { name: "Ghent", lat: 51.0543, lon: 3.7174 },
  ],

  // SWEDEN
  SE: [
    { name: "Stockholm", lat: 59.3293, lon: 18.0686 },
    { name: "Gothenburg", lat: 57.7089, lon: 11.9746 },
    { name: "Malmo", lat: 55.6059, lon: 13.0007 },
    { name: "Uppsala", lat: 59.8586, lon: 17.6389 },
  ],

  // NORWAY
  NO: [
    { name: "Oslo", lat: 59.9139, lon: 10.7522 },
    { name: "Bergen", lat: 60.3913, lon: 5.3221 },
    { name: "Trondheim", lat: 63.4305, lon: 10.3951 },
  ],

  // DENEMARK
  DK: [
    { name: "Copenhagen", lat: 55.6761, lon: 12.5683 },
    { name: "Aarhus", lat: 56.1629, lon: 10.2039 },
    { name: "Odense", lat: 55.4038, lon: 10.4024 },
  ],

  // POLAND
  PL: [
    { name: "Warsaw", lat: 52.2297, lon: 21.0122 },
    { name: "Krakow", lat: 50.0647, lon: 19.945 },
    { name: "Gdansk", lat: 54.352, lon: 18.6466 },
    { name: "Wroclaw", lat: 51.1079, lon: 17.0385 },
  ],

  // CZECH REPUBLIC
  CZ: [
    { name: "Prague", lat: 50.0755, lon: 14.4378 },
    { name: "Brno", lat: 49.1951, lon: 16.6068 },
    { name: "Ostrava", lat: 49.8209, lon: 18.2625 },
  ],

  // GREECE
  GR: [
    { name: "Athens", lat: 37.9838, lon: 23.7275 },
    { name: "Thessaloniki", lat: 40.6401, lon: 22.9444 },
    { name: "Heraklion", lat: 35.3387, lon: 25.1442 },
  ],

  // JAPAN
  JP: [
    { name: "Tokyo", lat: 35.6762, lon: 139.6503 },
    { name: "Osaka", lat: 34.6937, lon: 135.5023 },
    { name: "Kyoto", lat: 35.0116, lon: 135.7681 },
    { name: "Hiroshima", lat: 34.3853, lon: 132.4553 },
    { name: "Yokohama", lat: 35.4437, lon: 139.638 },
  ],

  // AUSTRALIA
  AU: [
    { name: "Sydney", lat: -33.8688, lon: 151.2093 },
    { name: "Melbourne", lat: -37.8136, lon: 144.9631 },
    { name: "Brisbane", lat: -27.4698, lon: 153.0251 },
    { name: "Perth", lat: -31.9505, lon: 115.8605 },
    { name: "Adelaide", lat: -34.9285, lon: 138.6007 },
  ],

  // CANADA
  CA: [
    { name: "Toronto", lat: 43.6532, lon: -79.3832 },
    { name: "Vancouver", lat: 49.2827, lon: -123.1207 },
    { name: "Montreal", lat: 45.5017, lon: -73.5673 },
    { name: "Calgary", lat: 51.0447, lon: -114.0719 },
    { name: "Ottawa", lat: 45.4215, lon: -75.6972 },
  ],

  // BRAZIL
  BR: [
    { name: "São Paulo", lat: -23.5505, lon: -46.6333 },
    { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 },
    { name: "Brasilia", lat: -15.8267, lon: -47.9218 },
    { name: "Salvador", lat: -12.9714, lon: -38.5014 },
  ],

  // MEXICE
  MX: [
    { name: "Mexico City", lat: 19.4326, lon: -99.1332 },
    { name: "Cancun", lat: 21.1619, lon: -86.8515 },
    { name: "Guadalajara", lat: 20.6597, lon: -103.3496 },
    { name: "Monterrey", lat: 25.6866, lon: -100.3161 },
  ],

  // EGYPT
  EG: [
    { name: "Cairo", lat: 30.0444, lon: 31.2357 },
    { name: "Alexandria", lat: 31.2001, lon: 29.9187 },
    { name: "Giza", lat: 30.0131, lon: 31.2089 },
    { name: "Luxor", lat: 25.6872, lon: 32.6396 },
    { name: "Aswan", lat: 24.0889, lon: 32.8998 },
    { name: "Hurghada", lat: 27.2579, lon: 33.8116 },
    { name: "Sharm El Sheikh", lat: 27.9158, lon: 34.33 },
  ],

  // IRELAND
  IE: [
    { name: "Dublin", lat: 53.3498, lon: -6.2603 },
    { name: "Cork", lat: 51.8985, lon: -8.4756 },
    { name: "Galway", lat: 53.2707, lon: -9.0568 },
  ],

  // FINLAND
  FI: [
    { name: "Helsinki", lat: 60.1699, lon: 24.9384 },
    { name: "Tampere", lat: 61.4978, lon: 23.761 },
    { name: "Turku", lat: 60.4518, lon: 22.2666 },
  ],

  // UAE
  AE: [
    { name: "Dubai", lat: 25.2048, lon: 55.2708 },
    { name: "Abu Dhabi", lat: 24.4539, lon: 54.3773 },
    { name: "Sharjah", lat: 25.3463, lon: 55.4209 },
  ],

  // SAUDI ARABIA
  SA: [
    { name: "Riyadh", lat: 24.7136, lon: 46.6753 },
    { name: "Jeddah", lat: 21.5433, lon: 39.1728 },
    { name: "Mecca", lat: 21.4225, lon: 39.8262 },
    { name: "Medina", lat: 24.5247, lon: 39.5692 },
  ],

  // TURKEY
  TR: [
    { name: "Istanbul", lat: 41.0082, lon: 28.9784 },
    { name: "Ankara", lat: 39.9334, lon: 32.8597 },
    { name: "Izmir", lat: 38.4237, lon: 27.1428 },
    { name: "Antalya", lat: 36.8969, lon: 30.7133 },
  ],

  // SOUTH KOREA
  KR: [
    { name: "Seoul", lat: 37.5665, lon: 126.978 },
    { name: "Busan", lat: 35.1796, lon: 129.0756 },
    { name: "Incheon", lat: 37.4563, lon: 126.7052 },
  ],

  // INDIA
  IN: [
    { name: "Mumbai", lat: 19.076, lon: 72.8777 },
    { name: "Delhi", lat: 28.7041, lon: 77.1025 },
    { name: "Bangalore", lat: 12.9716, lon: 77.5946 },
    { name: "Chennai", lat: 13.0827, lon: 80.2707 },
  ],

  // CHINA
  CN: [
    { name: "Beijing", lat: 39.9042, lon: 116.4074 },
    { name: "Shanghai", lat: 31.2304, lon: 121.4737 },
    { name: "Guangzhou", lat: 23.1291, lon: 113.2644 },
    { name: "Shenzhen", lat: 22.5431, lon: 114.0579 },
  ],

  // SINGAPORE
  SG: [{ name: "Singapore", lat: 1.3521, lon: 103.8198 }],

  // THAILAND
  TH: [
    { name: "Bangkok", lat: 13.7563, lon: 100.5018 },
    { name: "Phuket", lat: 7.8804, lon: 98.3923 },
    { name: "Chiang Mai", lat: 18.7883, lon: 98.9853 },
  ],

  // SOUTH AFRICA
  ZA: [
    { name: "Cape Town", lat: -33.9249, lon: 18.4241 },
    { name: "Johannesburg", lat: -26.2041, lon: 28.0473 },
    { name: "Durban", lat: -29.8587, lon: 31.0218 },
  ],
};

const loadingOverlay = document.getElementById("loading-overlay");
window.addItem = addItem;
const toast = document.getElementById("toast-container");

/////////////////// DATA /////////////////////
const currentDatetime = document.getElementById("current-datetime");
const date = new Date();
const day = date.getDate();
const year = date.getFullYear();
const month = date.getMonth();
currentDatetime.innerHTML = `${date.toLocaleDateString("en-us", {
  weekday: "short",
})}, ${date.toLocaleDateString("en-us", {
  month: "short",
})} ${date.getDate()}, ${date.getHours()}:${date.getMinutes()} ${date.getHours() >= 12 ? "PM" : "AM"}`;

// SHOW TARGET SECTION AND HIDE OTHER SIDE
const navItem = document.querySelectorAll(".nav-item");
const section = document.querySelectorAll("section");
navItem.forEach(function (item, id) {
  item.addEventListener("click", function (e) {
    loadingOverlay.classList.remove("hidden");
    setTimeout(() => {
      loadingOverlay.classList.add("hidden");
    }, 500);
    navItem.forEach(function (e) {
      e.classList.remove("active");
      section.forEach(function (sec) {
        sec.classList.remove("active");
      });
    });
    section[id].classList.add("active");
    item.classList.add("active");
  });
});

// DASHBORD OF COUNTRY
const API_KEY = "https://date.nager.at/api/v3";
const globalCountry = document.getElementById("global-country");
const globalCity = document.getElementById("global-city");
const globalYear = document.getElementById("global-year");
const globalBtn = document.getElementById("global-search-btn");

let countryCode = "";
let countryName = "";
let currentCity = null;
let selectedCity = null;

// DASHBOARD VIEW
const dashboardInfo = document.getElementById("dashboard-country-info");
async function countryData() {
  let response = await fetch(`${API_KEY}/AvailableCountries`);
  let data = await response.json();
  let box = "";
  for (let i = 0; i < data.length; i++) {
    box += `
        <option value="${data[i].countryCode}" >${data[i].name}  - ${data[i].countryCode}</option>
        `;
  }
  globalCountry.innerHTML = box;
  dashboardInfo.innerHTML = `
  <div class="country-info-placeholder">
        <div class="placeholder-icon">
          <i data-fa-i2svg=""><svg class="svg-inline--fa fa-globe" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"></path></svg></i>
        </div>
        <p>Select a country to view detailed information</p>
      </div>
  `;
  return data;
}
///////////////// COUNTRY ////////////////////
const customSelect = document.getElementById("country-select");
const selected = customSelect.querySelector(".selected");
const dropdown = customSelect.querySelector(".dropdown");
const search = document.getElementById("country-search");
const optionsList = document.getElementById("country-options");
const originalSelect = document.getElementById("global-country");

selected.addEventListener("click", () => {
  const isOpen = dropdown.style.display === "block";

  dropdown.style.display = isOpen ? "none" : "block";
  selected.classList.toggle("open", !isOpen);
});

function syncCountries() {
  optionsList.innerHTML = "";

  [...originalSelect.options].forEach((opt) => {
    if (!opt.value) return;

    const li = document.createElement("li");

    li.innerHTML = `
  <img 
    src="https://flagcdn.com/w20/${opt.value.toLowerCase()}.png"
    alt="${opt.text}"
    class="country-flag"
  />
  <span>${opt.text}</span>
`;

    li.addEventListener("click", () => {
      selected.childNodes[0].textContent = opt.text;
      selected.classList.add("has-value");

      originalSelect.value = opt.value;
      originalSelect.dispatchEvent(new Event("change", { bubbles: true }));

      dropdown.style.display = "none";

      selected.classList.remove("open");
    });

    optionsList.appendChild(li);
  });
}

// search
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  [...optionsList.children].forEach((li) => {
    li.style.display = li.textContent.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});

countryData();
async function restcountries(countryCode) {
  let response = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryCode}`,
  );
  let data = await response.json();
  const country = data[0];
  globalBtn.addEventListener("click", () => {
    dashboardInfo.innerHTML = dashboardContent(country);
  });
  return country;
}

countryData().then(syncCountries);

// SELECT COUNTRY
const viewHeader = document.querySelectorAll(".view-header-selection");

let nameCity, latitude, longitude;
globalCountry.addEventListener("change", async function () {
  const country = await restcountries(this.value);
  countryCode = country.cca2;
  currentCity = cities[countryCode.toUpperCase()];
  document.getElementById("selected-destination").innerHTML = `
  <div class="selected-destination">
      <div class="selected-flag" >
        <img id="selected-country-flag" src="${country.flags.png}" alt="${country.flags.alt}">
      </div>
      <div class="selected-info">
        <span class="selected-country-name" id="selected-country-name">${country.name.common}</span>
        <span class="selected-city-name" id="selected-city-name">• ${country.capital}</span>
      </div>
      <button class="clear-selection-btn" id="clear-selection-btn">
        <i class="fa-solid fa-xmark"></i>
      </button>
      </div>
  `;

  if (currentCity && currentCity.length > 0) {
    nameCity = currentCity[0].name;
    latitude = currentCity[0].lat;
    longitude = currentCity[0].lon;
  } else {
    nameCity = country.capital;
    latitude = country.latlng[0];
    longitude = country.latlng[1];
  }
  viewHeader.forEach((view) => {
    view.style.display = "block";
    view.innerHTML = `
                 <div class="current-selection-badge">
      <img src="https://flagcdn.com/w40/${countryCode.toLowerCase()}.png" alt="${countryName}" class="selection-flag">
      <span>${country.name.common}</span>
      <span class="selection-city"> ${selectedCity ? selectedCity.name : country.capital}</span>
      <span class="selection-year">${globalYear.value}</span>
    </div>
  `;
  });
  let cityBox = "";
  if (!currentCity) {
    cityBox += `
    <option value="${country.capital}" >${country.capital}(capital)</option>
    `;
  } else {
    for (let i = 0; i < currentCity.length; i++) {
      cityBox += `
      <option value="${currentCity[i].name}" >${currentCity[i].name}</option>
      `;
    }
  }
  globalCity.innerHTML = cityBox;
  syncCities();

  holidayDisplay(globalYear.value);
  eventsDisplay();
  weatherDisplay(latitude, longitude);
  LongWeekendDisplay(globalYear.value);
  sunTimeDisplay(latitude, longitude, year - month - day);
});
const dashboardView = document.getElementById("dashboard-view");
function dashboardContent(country) {
  const language = Object.values(country.languages).join(" , ");
  const currency = Object.values(country.currencies)[0];
  const borders = country.borders || [];

  /////////////////// TIME OF COUNTRY /////////////////////
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const initialTime = date.toLocaleString("en-US", options);
  setTimeout(() => {
    const timeElement = document.getElementById("country-local-time");
    if (timeElement) {
      setInterval(() => {
        const date = new Date();
        const formatTime = date.toLocaleString("en-US", options);
        timeElement.textContent = formatTime;
      }, 1000);
    }
  });

  return `
    <div class="dashboard-country-header">
                <img src="${country.flags.png}" alt="${country.flags.alt}" class="dashboard-country-flag">
                <div class="dashboard-country-title">
                  <h3>${country.name.common}</h3>
                  <p class="official-name">${country.name.official}</p>
                  <span class="region"><i class="fa-solid fa-location-dot"></i> ${country.region} • ${country.subregion}</span>
                </div>
              </div>

              <div class="dashboard-local-time">
                <div class="local-time-display">
                  <i class="fa-solid fa-clock"></i>
                  <span class="local-time-value" id="country-local-time">${initialTime}</span>
                  <span class="local-time-zone">${country.timezones}</span>
                </div>
              </div>

              <div class="dashboard-country-grid">
                <div class="dashboard-country-detail">
                  <i class="fa-solid fa-building-columns"></i>
                  <span class="label">$Capital</span>
                  <span class="value">${country.capital}</span>
                </div>
                <div class="dashboard-country-detail">
                  <i class="fa-solid fa-users"></i>
                  <span class="label">Population</span>
                  <span class="value">${country.population}</span>
                </div>
                <div class="dashboard-country-detail">
                  <i class="fa-solid fa-ruler-combined"></i>
                  <span class="label">Area</span>
                  <span class="value">${country.area} km²</span>
                </div>
                <div class="dashboard-country-detail">
                  <i class="fa-solid fa-globe"></i>
                  <span class="label">Continent</span>
                  <span class="value">${country.region}</span>
                </div>
                <div class="dashboard-country-detail">
                  <i class="fa-solid fa-phone"></i>
                  <span class="label">Calling Code</span>
                  <span class="value">${country.idd.root}</span>
                </div>
                <div class="dashboard-country-detail">
                  <i class="fa-solid fa-car"></i>
                  <span class="label">Driving Side</span>
                  <span class="value">${country.car.side}</span>
                </div>
                <div class="dashboard-country-detail">
                  <i class="fa-solid fa-calendar-week"></i>
                  <span class="label">Week Starts</span>
                  <span class="value">${country.startOfWeek}</span>
                </div>
              </div>

              <div class="dashboard-country-extras">
                <div class="dashboard-country-extra">
                  <h4><i class="fa-solid fa-coins"></i> Currency</h4>
                  <div class="extra-tags">
                    <span class="extra-tag"> ${currency.name}  (${country.cca2} ${currency.symbol})</span>
                  </div>
                </div>
                <div class="dashboard-country-extra">
                  <h4><i class="fa-solid fa-language"></i> Languages</h4>
                  <div class="extra-tags">
                    <span class="extra-tag">${language}</span>
                  </div>
                </div>
                <div class="dashboard-country-extra">
                  <h4><i class="fa-solid fa-map-location-dot"></i> Neighbors</h4>
                  <div class="extra-tags">
                  ${borders
                    .map((border) => {
                      return `<span class="extra-tag border-tag">${border}</span>`;
                    })
                    .join("")}
                  </div>
                </div>
              </div>

              <div class="dashboard-country-actions">
                <a href="${country.maps.googleMaps}" target="_blank" class="btn-map-link">
                  <i class="fa-solid fa-map"></i> View on Google Maps
                </a>
              </div>
    `;
}

///////////////////// SELECT CITY //////////////////////
let selectedCityName = "";
globalCity.addEventListener("change", function () {
  selectedCityName = this.value;
  selectedCity = currentCity.find((city) => city.name === selectedCityName);
  if (selectedCity) {
    weatherDisplay(selectedCity.lat, selectedCity.lon);
    sunTimeDisplay(selectedCity.lat, selectedCity.lon, year - month - day);
  }
});

const citySelect = document.getElementById("city-select");
const citySelected = document.getElementById("city-selected");
const cityOptions = document.getElementById("city-options");
const originalCitySelect = document.getElementById("global-city");

const cityLabel = document.getElementById("city-label");

cityLabel.addEventListener("click", () => {
  const dropdown = citySelect.querySelector(".dropdown");

  dropdown.style.display = "block";
  citySelected.classList.add("open");

  syncCities();
});

citySelected.addEventListener("click", () => {
  const dropdown = citySelect.querySelector(".dropdown");
  const isOpen = dropdown.style.display === "block";

  syncCities();

  dropdown.style.display = isOpen ? "none" : "block";
  citySelected.classList.toggle("open", !isOpen);
});

function syncCities() {
  cityOptions.innerHTML = "";

  if (
    !originalCitySelect.options.length ||
    originalCitySelect.options[0].value === ""
  ) {
    citySelect.classList.add("disabled");

    citySelected.querySelector(".selected-text").innerHTML = `
      <i class="fa-solid fa-city"></i>
      Select Country
    `;

    const li = document.createElement("li");
    li.textContent = "Select a country first";
    li.classList.add("placeholder");

    cityOptions.appendChild(li);
    return;
  }

  citySelect.classList.remove("disabled");

  [...originalCitySelect.options].forEach((opt, index) => {
    const li = document.createElement("li");
    li.textContent = opt.text;

    if (index === 0) {
      citySelected.querySelector(".selected-text").innerHTML = `
        <i class="fa-solid fa-city"></i>
        ${opt.text}
      `;
    }

    li.addEventListener("click", () => {
      citySelected.querySelector(".selected-text").innerHTML = `
        <i class="fa-solid fa-city"></i>
        ${opt.text}
      `;

      originalCitySelect.value = opt.value;

      originalCitySelect.dispatchEvent(new Event("change", { bubbles: true }));

      citySelect.querySelector(".dropdown").style.display = "none";
      citySelected.classList.remove("open");
    });

    cityOptions.appendChild(li);
  });
}

///////////////////// SELECT YEAR //////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const yearSelect = document.getElementById("year-select");
  const yearSelected = document.getElementById("year-selected");
  const yearOptions = document.getElementById("year-options");
  const originalYearSelect = document.getElementById("global-year");

  yearSelected.addEventListener("click", () => {
    const dropdown = yearSelect.querySelector(".dropdown");
    const isOpen = dropdown.style.display === "block";

    dropdown.style.display = isOpen ? "none" : "block";
    yearSelected.classList.toggle("open", !isOpen);
  });

  function syncYears() {
    yearOptions.innerHTML = "";

    [...originalYearSelect.options].forEach((opt) => {
      const li = document.createElement("li");
      li.textContent = opt.text;

      if (opt.selected) {
        yearSelected.querySelector(".selected-text").lastChild.textContent =
          opt.text;
      }

      li.addEventListener("click", () => {
        yearSelected.querySelector(".selected-text").lastChild.textContent =
          opt.text;

        originalYearSelect.value = opt.value;

        originalYearSelect.dispatchEvent(
          new Event("change", { bubbles: true }),
        );

        yearSelect.querySelector(".dropdown").style.display = "none";
        yearSelected.classList.remove("open");
      });

      yearOptions.appendChild(li);
    });
  }

  syncYears();
});

//////////////// HOLIDAY SECTION ///////////////////////
async function puplicHoliday(year, countryCode) {
  let response = await fetch(
    `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`,
  );
  let holidayData = await response.json();
  return holidayData;
}
const holidaysContent = document.getElementById("holidays-content");
globalYear.addEventListener("change", function () {
  if (!countryCode) return;
  puplicHoliday(this.value, countryCode);
});
async function holidayDisplay(year) {
  let holidayData = await puplicHoliday(year, countryCode);
  let box = ``;
  for (let i = 0; i < holidayData.length; i++) {
    box += `
<div class="holiday-card">
              <div class="holiday-card-header">
                <div class="holiday-date-box"><span class="day">${holidayData[i].date.split("-")[2]}</span>
                <span class="month">${new Date(
                  holidayData[i].date,
                ).toLocaleDateString("en-Us", {
                  month: "short",
                })}</span></div>
                <button class="holiday-action-btn" onclick="addItem('holiday', '${holidayData[i].localName}', new Date('${holidayData[i].date}'), '${holidayData[i].name.replace(/'/g, "\\'")}')"><i class="fa-regular fa-heart"></i></button>
              </div>
              <h3>${holidayData[i].localName}</h3>
              <p class="holiday-name">${holidayData[i].name}</p>
              <div class="holiday-card-footer">
                <span class="holiday-day-badge"><i class="fa-regular fa-calendar"></i>${new Date(
                  holidayData[i].date,
                ).toLocaleDateString("en-US", {
                  weekday: "long",
                })}</span>
                <span class="holiday-type-badge">${holidayData[i].types}</span>
              </div>
            </div>
`;
  }
  holidaysContent.innerHTML = box;
}

//////////////// EVENTS SECTION ////////////////////
async function events() {
  let response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=VwECw2OiAzxVzIqnwmKJUG41FbeXJk1y&city=New York&countryCode=US&size=20`,
  );
  let data = await response.json();
  let eventsData = data._embedded.events;
  return eventsData;
}
events();
const eventsContent = document.getElementById("events-content");
async function eventsDisplay() {
  let eventsData = await events();
  let box = "";
  for (let i = 0; i < eventsData.length; i++) {
    box += `
    <div class="event-card">
              <div class="event-card-image">
                <img src="${eventsData[i].images[0].url}"
                  alt="${eventsData[i].name}">
                <span class="event-card-category">${eventsData[i].type}</span>
                <button class="event-card-save" onclick="addItem('event', '${eventsData[i].name}', new Date('${eventsData[i].dates.start.localDate}'), '${eventsData[i].dates.timezone}')"><i class="fa-regular fa-heart"></i></button>
              </div>
              <div class="event-card-body">
                <h3>${eventsData[i].name}</h3>
                <div class="event-card-info">
                  <div><i class="fa-regular fa-calendar"></i>${new Date(eventsData[i].dates.start.localDate).toDateString} at ${eventsData[i].dates.start.localTime}</div>
                  <div><i class="fa-solid fa-location-dot"></i>${eventsData[i].dates.timezone}</div>
                </div>
                <div class="event-card-footer">
                  <button class="btn-event"><i class="fa-regular fa-heart"></i> Save</button>
                  <a href="#" class="btn-buy-ticket"><i class="fa-solid fa-ticket"></i> Buy Tickets</a>
                </div>
              </div>
            </div>
    `;
  }
  eventsContent.innerHTML = box;
}

//////////////// WETHER SECTION //////////////////////
async function weather(lat, lon) {
  let response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,uv_index&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto`,
  );

  let weatherData = await response.json();
  return weatherData;
}
const weatherContent = document.getElementById("weather-content");
async function weatherDisplay(lat, lon) {
  let weatherData = await weather(lat || 40.7128, lon || -74.006);
  let weatherBox = "";

  weatherBox = `
    <div class="weather-hero-card weather-sunny">
              <div class="weather-location">
                <i class="fa-solid fa-location-dot"></i>
                <span>${weatherData.timezone}</span>
                <span class="weather-time">${new Date(
                  weatherData.current.time,
                ).toLocaleDateString("en-Us", {
                  weekday: "long",
                })},${new Date(weatherData.current.time).toLocaleDateString(
                  "en-Us",
                  {
                    month: "short",
                  },
                )},${new Date(weatherData.current.time).toLocaleDateString(
                  "en-Us",
                  {
                    day: "numeric",
                  },
                )} </span>
              </div>
              <div class="weather-hero-main">
                <div class="weather-hero-left">
                  <div class="weather-hero-icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="weather-hero-temp">
                    <span class="temp-value">${weatherData.current.temperature_2m}</span>
                    <span class="temp-unit">${weatherData.current_units.temperature_2m}</span>
                  </div>
                </div>
                <div class="weather-hero-right">
                  <div class="weather-feels">Feels like ${weatherData.current.apparent_temperature}</div>
                  <div class="weather-high-low">
                    <span class="high"><i class="fa-solid fa-arrow-up"></i> ${weatherData.daily.temperature_2m_max[0]}</span>
                    <span class="low"><i class="fa-solid fa-arrow-down"></i> ${weatherData.daily.temperature_2m_min[0]}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="weather-details-grid">
              <div class="weather-detail-card">
                <div class="detail-icon humidity"><i class="fa-solid fa-droplet"></i></div>
                <div class="detail-info">
                  <span class="detail-label">Humidity</span>
                  <span class="detail-value">${weatherData.current.relative_humidity_2m}%</span>
                </div>
              </div>
              <div class="weather-detail-card">
                <div class="detail-icon wind"><i class="fa-solid fa-wind"></i></div>
                <div class="detail-info">
                  <span class="detail-label">Wind</span>
                  <span class="detail-value">${weatherData.current.wind_speed_10m}</span>
                </div>
              </div>
              <div class="weather-detail-card">
                <div class="detail-icon uv"><i class="fa-solid fa-sun"></i></div>
                <div class="detail-info">
                  <span class="detail-label">UV Index</span>
                  <span class="detail-value">${weatherData.current.uv_index}</span>
                </div>
              </div>
              <div class="weather-detail-card">
                <div class="detail-icon precip"><i class="fa-solid fa-cloud-rain"></i></div>
                <div class="detail-info">
                  <span class="detail-label">Precipitation</span>
                  <span class="detail-value">${weatherData.daily.precipitation_probability_max[0]}</span>
                </div>
              </div>
            </div>

            <div class="weather-section">
              <h3 class="weather-section-title"><i class="fa-solid fa-clock"></i> Hourly Forecast</h3>
              <div class="hourly-scroll">
                <div class="hourly-item now">
                  <span class="hourly-time">Now</span>
                  <div class="hourly-icon"><i class="fa-solid fa-sun"></i></div>
                  <span class="hourly-temp">${weatherData.hourly.temperature_2m[0]}°</span>
                </div>
                <div class="hourly-item">
                  <span class="hourly-time">10 AM</span>
                  <div class="hourly-icon"><i class="fa-solid fa-sun"></i></div>
                  <span class="hourly-temp">${weatherData.hourly.temperature_2m[10]}°</span>
                </div>
                <div class="hourly-item">
                  <span class="hourly-time">11 AM</span>
                  <div class="hourly-icon"><i class="fa-solid fa-sun"></i></div>
                  <span class="hourly-temp">${weatherData.hourly.temperature_2m[11]}°</span>
                </div>
                <div class="hourly-item">
                  <span class="hourly-time">12 PM</span>
                  <div class="hourly-icon"><i class="fa-solid fa-sun"></i></div>
                  <span class="hourly-temp">${weatherData.hourly.temperature_2m[12]}°</span>
                </div>
                <div class="hourly-item">
                  <span class="hourly-time">1 PM</span>
                  <div class="hourly-icon"><i class="fa-solid fa-sun"></i></div>
                  <span class="hourly-temp">${weatherData.hourly.temperature_2m[13]}°</span>
                </div>
                <div class="hourly-item">
                  <span class="hourly-time">2 PM</span>
                  <div class="hourly-icon"><i class="fa-solid fa-cloud-sun"></i></div>
                  <span class="hourly-temp">${weatherData.hourly.temperature_2m[14]}°</span>
                </div>
                <div class="hourly-item">
                  <span class="hourly-time">3 PM</span>
                  <div class="hourly-icon"><i class="fa-solid fa-cloud-sun"></i></div>
                  <span class="hourly-temp">${weatherData.hourly.temperature_2m[15]}°</span>
                </div>
                <div class="hourly-item">
                  <span class="hourly-time">4 PM</span>
                  <div class="hourly-icon"><i class="fa-solid fa-cloud"></i></div>
                  <span class="hourly-temp">${weatherData.hourly.temperature_2m[16]}°</span>
                </div>
              </div>
            </div>


            <div class="weather-section">
              <h3 class="weather-section-title"><i class="fa-solid fa-calendar-week"></i> 7-Day Forecast</h3>
              <div class="forecast-list">
                <div class="forecast-day today">
                  <div class="forecast-day-name"><span class="day-label">Today</span><span class="day-date">
                  ${new Date(weatherData.daily.time[0]).getDate()} ${new Date(
                    weatherData.daily.time[0],
                  ).toLocaleDateString("en-Us", {
                    month: "short",
                  })}</span></div>
                  <div class="forecast-icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="forecast-temps"><span class="temp-max">${weatherData.daily.temperature_2m_max[0]}°</span><span class="temp-min">${weatherData.daily.temperature_2m_min[0]}°</span></div>
                  <div class="forecast-precip">
                  <i class="fa-solid fa-droplet"></i><span>${weatherData.daily.precipitation_probability_max[0]}%</span>
                  </div>
                </div>
                <div class="forecast-day">
                  <div class="forecast-day-name"><span class="day-label">${new Date(
                    weatherData.daily.time[1],
                  ).toLocaleDateString("en-Us", {
                    month: "short",
                  })}</span><span class="day-date">${new Date(weatherData.daily.time[1]).getDate()} ${new Date(
                    weatherData.daily.time[1],
                  ).toLocaleDateString("en-Us", {
                    month: "short",
                  })}</span>
                  </div>
                  <div class="forecast-icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="forecast-temps"><span class="temp-max">${weatherData.daily.temperature_2m_max[1]}°</span><span class="temp-min">${weatherData.daily.temperature_2m_min[1]}°</span></div>
                  <div class="forecast-precip">
                  <i class="fa-solid fa-droplet"></i><span>${weatherData.daily.precipitation_probability_max[1]}%</span>
                  </div>
                </div>
                <div class="forecast-day">
                  <div class="forecast-day-name"><span class="day-label">${new Date(
                    weatherData.daily.time[2],
                  ).toLocaleDateString("en-Us", {
                    month: "short",
                  })}</span><span class="day-date">${new Date(weatherData.daily.time[2]).getDate()} ${new Date(
                    weatherData.daily.time[2],
                  ).toLocaleDateString("en-Us", {
                    month: "short",
                  })}</span>
                  </div>
                  <div class="forecast-icon"><i class="fa-solid fa-cloud-sun"></i></div>
                  <div class="forecast-temps"><span class="temp-max">${weatherData.daily.temperature_2m_max[2]}°</span><span class="temp-min">${weatherData.daily.temperature_2m_min[2]}°</span></div>
                  <div class="forecast-precip"><i class="fa-solid fa-droplet"></i><span>${weatherData.daily.precipitation_probability_max[2]}%</span></div>
                </div>
                <div class="forecast-day">
                  <div class="forecast-day-name"><span class="day-label">${new Date(
                    weatherData.daily.time[3],
                  ).toLocaleDateString("en-Us", {
                    month: "short",
                  })}</span><span class="day-date">${new Date(weatherData.daily.time[3]).getDate()} ${new Date(
                    weatherData.daily.time[3],
                  ).toLocaleDateString("en-Us", {
                    month: "short",
                  })}</span>
                  </div>
                  <div class="forecast-icon"><i class="fa-solid fa-cloud"></i></div>
                  <div class="forecast-temps"><span class="temp-max">${weatherData.daily.temperature_2m_max[3]}°</span><span class="temp-min">${weatherData.daily.temperature_2m_min[3]}°</span></div>
                  <div class="forecast-precip"><i class="fa-solid fa-droplet"></i><span>${weatherData.daily.precipitation_probability_max[3]}%</span></div>
                </div>
                <div class="forecast-day">
                  <div class="forecast-day-name"><span class="day-label">${new Date(
                    weatherData.daily.time[4],
                  ).toLocaleDateString("en-Us", {
                    month: "short",
                  })}</span><span class="day-date">${new Date(weatherData.daily.time[4]).getDate()} ${new Date(
                    weatherData.daily.time[4],
                  ).toLocaleDateString("en-Us", {
                    month: "short",
                  })}</span>
                  </div>
                  <div class="forecast-icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="forecast-temps"><span class="temp-max">${weatherData.daily.temperature_2m_max[4]}°</span><span class="temp-min">${weatherData.daily.temperature_2m_min[4]}°</span></div>
                  <div class="forecast-precip"><i class="fa-solid fa-droplet"></i><span>${weatherData.daily.precipitation_probability_max[4]}%</span></div>
                </div>
                <div class="forecast-day">
                  <div class="forecast-day-name"><span class="day-label">${new Date(
                    weatherData.daily.time[5],
                  ).toLocaleDateString("en-Us", {
                    month: "short",
                  })}</span><span class="day-date">${new Date(weatherData.daily.time[5]).getDate()} ${new Date(
                    weatherData.daily.time[5],
                  ).toLocaleDateString("en-Us", {
                    month: "short",
                  })}</span>
                  </div>
                  <div class="forecast-icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="forecast-temps"><span class="temp-max">${weatherData.daily.temperature_2m_max[5]}°</span><span class="temp-min">${weatherData.daily.temperature_2m_min[5]}°</span></div>
                  <div class="forecast-precip">
                  <i class="fa-solid fa-droplet"></i><span>${weatherData.daily.precipitation_probability_max[5]}%</span>
                  </div>
                </div>
                <div class="forecast-day">
                  <div class="forecast-day-name"><span class="day-label">${new Date(
                    weatherData.daily.time[6],
                  ).toLocaleDateString("en-Us", {
                    month: "short",
                  })}</span><span class="day-date">${new Date(weatherData.daily.time[6]).getDate()} ${new Date(
                    weatherData.daily.time[6],
                  ).toLocaleDateString("en-Us", {
                    month: "short",
                  })}</span>
                  </div>
                  <div class="forecast-icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="forecast-temps"><span class="temp-max">${weatherData.daily.temperature_2m_max[6]}°</span><span class="temp-min">${weatherData.daily.temperature_2m_min[6]}°</span></div>
                  <div class="forecast-precip">
                  <i class="fa-solid fa-droplet"></i><span>${weatherData.daily.precipitation_probability_max[6]}%</span>
                  </div>
                </div>
              </div>
            </div>

    `;

  weatherContent.innerHTML = weatherBox;
}

//////////////// LONGWEEKEND SECTION /////////////////
const lwContent = document.getElementById("lw-content");
async function LongWeekend(year, countryCode) {
  let response = await fetch(
    `https://date.nager.at/api/v3/LongWeekend/${year}/${countryCode}`,
  );
  let LongWeekendData = await response.json();
  return LongWeekendData;
}
async function LongWeekendDisplay(year) {
  let LongWeekendData = await LongWeekend(year, countryCode);
  let box = "";
  for (let i = 0; i < LongWeekendData.length; i++) {
    const startDate = new Date(LongWeekendData[i].startDate);
    const endDate = new Date(LongWeekendData[i].endDate);
    let currentDate = new Date(startDate);
    let days = "";
    while (currentDate <= endDate) {
      const isWeekend =
        currentDate.getDay() === 0 || currentDate.getDay() === 6;
      days += `
        <div class="lw-day ${isWeekend ? "weekend" : ""}">
          <span class="name">${currentDate.toLocaleDateString("en-US", { weekday: "short" })}</span>
          <span class="num">${currentDate.getDate()}</span>
        </div>
      `;
      currentDate.setDate(currentDate.getDate() + 1);
    }
    box += `
    <div class="lw-card">
              <div class="lw-card-header">
                <span class="lw-badge"><i class="fa-solid fa-calendar-days"></i>${LongWeekendData[i].dayCount} Days</span>
                <button class="holiday-action-btn" 
                onclick="addItem('longweekend','${LongWeekendData[i].dayCount} Day Long Weekend', new Date('${LongWeekendData[i].startDate}'),'${LongWeekendData[i].needBridgeDay ? "<span>Requires taking a bridge day off</span>" : "<span> No extra days off needed!</span>"}')"><i class="fa-regular fa-heart"></i></button>
              </div>
              <h3>Long Weekend #${i + 1}</h3>
              <div class="lw-dates"><i class="fa-regular fa-calendar"></i>${startDate.toLocaleDateString(
                "en-Us",
                {
                  month: "short",
                },
              )} ${startDate.getDate()} -  ${endDate.toLocaleDateString(
                "en-Us",
                {
                  month: "short",
                },
              )} ${endDate.getDate()} ,  ${endDate.getFullYear()}</div>

              ${
                LongWeekendData[i].needBridgeDay
                  ? `<div class="lw-info-box warning"><i class="fa-solid  fa-circle-info"></i> Requires taking a bridge day off</div>`
                  : `<div class="lw-info-box success"><i class="fa-solid fa-check-circle"></i> No extra days off needed!</div>
              `
              }
              <div class="lw-days-visual">
              
                ${days}
              </div>
            </div>
    `;
  }
  lwContent.innerHTML = box;
}

//////////////// CURRENCY SECTION /////////////////////
const currencyInput = document.getElementById("currency-amount");
const currencyFrom = document.getElementById("currency-from");
const currencyTo = document.getElementById("currency-to");

async function currencyCode() {
  let response = await fetch(
    `https://v6.exchangerate-api.com/v6/3bb61e7581f1d150041b4b88/codes`,
  );

  let data = await response.json();

  let code = data.supported_codes;
  let fromBox = '<option value="USD" selected>USD - US Dollar</option>';
  let toBox = '<option value="EGP" selected>EGP - Egyptian Pound</option>';
  for (let i = 0; i < code.length; i++) {
    fromBox += `
    <option  value="${code[i][0]}">${code[i][0]} - ${code[i][1]}</option>
    `;
    toBox += `
    <option  value="${code[i][0]}">${code[i][0]} - ${code[i][1]}</option>
    `;
  }
  currencyFrom.innerHTML = fromBox;
  currencyTo.innerHTML = toBox;

  return code;
}
async function fromTo(base, target) {
  let response = await fetch(
    `https://v6.exchangerate-api.com/v6/3bb61e7581f1d150041b4b88/pair/${base}/${target}`,
  );
  let convertData = await response.json();
  return convertData;
}
currencyCode();

let from = "USD";
let to = "EGP";
let amount = 1;
currencyFrom.addEventListener("change", function () {
  from = this.value;
});
currencyTo.addEventListener("change", function () {
  to = this.value;
});
currencyInput.addEventListener("input", function () {
  amount = this.value;
});
const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", async function () {
  let convertData = await fromTo(from, to);
  let convert = (amount * convertData.conversion_rate).toFixed(2);
  document.getElementById("currency-result").innerHTML = `
<div class="conversion-display">
                <div class="conversion-from">
                  <span class="amount">${amount}</span>
                  <span class="currency-code">${from}</span>
                </div>
                <div class="conversion-equals"><i class="fa-solid fa-equals"></i></div>
                <div class="conversion-to">
                  <span class="amount">${convert}</span>
                  <span class="currency-code">${to}</span>
                </div>
              </div>
              <div class="exchange-rate-info">
                <p>${amount} ${from} = ${convert} ${to}</p>
                <small>Last updated: ${convertData.time_last_update_utc.split("00")[0]}</small>
              </div>
`;
  updatePopularCurrencies(from);
});
const currencyCards = document.querySelectorAll(".popular-currency-card");
async function updatePopularCurrencies(from) {
  for (let card of currencyCards) {
    const code = card.querySelector(".code").innerHTML;
    const rate = card.querySelector(".rate");

    let response = await fetch(
      `https://v6.exchangerate-api.com/v6/3bb61e7581f1d150041b4b88/latest/${from}`,
    );
    let data = await response.json();

    let rateData = data.conversion_rates[code];

    rate.innerHTML = rateData.toFixed(3);
  }
}

//////////////// SWAP BUTTUN //////////////////////
const swapBtn = document.getElementById("swap-currencies-btn");
swapBtn.addEventListener("click", () => {
  let temp = currencyFrom.value;
  currencyFrom.value = currencyTo.value;
  currencyTo.value = temp;
  [from, to] = [to, from];
});

//////////////// SUN SECTION ////////////////////
async function sunTime(lat, lon, date) {
  let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=${date}&formatted=0`,
  );

  let sunTimeData = (await response.json()).results;
  return sunTimeData;
}
const sunTimeContent = document.getElementById("sun-times-content");
async function sunTimeDisplay(lat, lon, date) {
  let sunTimeData = await sunTime(lat, lon, date);

  let sunTimeBox = "";
  let lightH = Math.floor(sunTimeData.day_length / 3600);
  let lightMin = Math.floor((sunTimeData.day_length % 3600) / 60);
  let precent = ((sunTimeData.day_length / 86400) * 100).toFixed(2);

  sunTimeBox = `
  <div class="sun-main-card">
              <div class="sun-main-header">
                <div class="sun-location">
                  <h2><i class="fa-solid fa-location-dot"></i> ${selectedCity ? selectedCityName : nameCity}</h2>
                  <p>Sun times for your selected location</p>
                </div>
                <div class="sun-date-display">
                  <div class="date">${new Date().toLocaleDateString("en-Us", {
                    month: "long",
                  })} ${day}, ${year}</div>
                  <div class="day">${new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                  })}</div>
                </div>
              </div>

              <div class="sun-times-grid">
                <div class="sun-time-card dawn">
                  <div class="icon"><i class="fa-solid fa-moon"></i></div>
                  <div class="label">Dawn</div>
                  <div class="time">${new Date(sunTimeData.civil_twilight_begin).getHours()}:${new Date(sunTimeData.civil_twilight_begin).getMinutes()} AM</div>
                  <div class="sub-label">Civil Twilight</div>
                </div>
                <div class="sun-time-card sunrise">
                  <div class="icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="label">Sunrise</div>
                  <div class="time">${new Date(sunTimeData.sunrise).getHours()}:${new Date(sunTimeData.sunrise).getMinutes()} AM</div>
                  <div class="sub-label">Golden Hour Start</div>
                </div>
                <div class="sun-time-card noon">
                  <div class="icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="label">Solar Noon</div>
                  <div class="time">${new Date(sunTimeData.solar_noon).getHours()}:${new Date(sunTimeData.solar_noon).getMinutes()} PM</div>
                  <div class="sub-label">Sun at Highest</div>
                </div>
                <div class="sun-time-card sunset">
                  <div class="icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="label">Sunset</div>
                  <div class="time">${new Date(sunTimeData.sunset).getHours()}:${new Date(sunTimeData.sunset).getMinutes()} PM</div>
                  <div class="sub-label">Golden Hour End</div>
                </div>
                <div class="sun-time-card dusk">
                  <div class="icon"><i class="fa-solid fa-moon"></i></div>
                  <div class="label">Dusk</div>
                  <div class="time">${new Date(sunTimeData.civil_twilight_end).getHours()}:${new Date(sunTimeData.civil_twilight_end).getMinutes()} PM</div>
                  <div class="sub-label">Civil Twilight</div>
                </div>
                <div class="sun-time-card daylight">
                  <div class="icon"><i class="fa-solid fa-hourglass-half"></i></div>
                  <div class="label">Day Length</div>
                  <div class="time">${lightH}h ${lightMin}m</div>
                  <div class="sub-label">Total Daylight</div>
                </div>
              </div>
            </div>

            <div class="day-length-card">
              <h3><i class="fa-solid fa-chart-pie"></i> Daylight Distribution</h3>
              <div class="day-progress">
                <div class="day-progress-bar">
                  <div class="day-progress-fill" style="width: ${precent}%"></div>
                </div>
              </div>
              <div class="day-length-stats">
                <div class="day-stat">
                  <div class="value">${lightH}h ${lightMin}m</div>
                  <div class="label">Daylight</div>
                </div>
                <div class="day-stat">
                  <div class="value">${precent}%</div>
                  <div class="label">of 24 Hours</div>
                </div>
                <div class="day-stat">
                  <div class="value">${24 - lightH}h ${60 - lightMin}m</div>
                  <div class="label">Darkness</div>
                </div>
              </div>
            </div>
  `;

  sunTimeContent.innerHTML = sunTimeBox;
}

///////////////// MY PLANS /////////////////////
let plans = [];
const plansContent = document.getElementById("plans-content");
const plansCount = document.getElementById("plans-count");
const allCount = document.getElementById("filter-all-count");
const holidayCount = document.getElementById("filter-holiday-count");
const eventCount = document.getElementById("filter-event-count");
const lwCount = document.getElementById("filter-lw-count");
const filterBtn = document.querySelectorAll(".plan-filter");
const statSaved = document.getElementById("stat-saved");

/////////////////// FILTER TABS ///////////////////
filterBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    filterBtn.forEach(function (e) {
      e.classList.remove("active");
    });
    btn.classList.add("active");
    const filter = e.target.getAttribute("data-filter");
    console.log(filter);
    planDisplay(filter);
  });
});

///////////////// LOCAL STORAGE //////////////////
if (localStorage.getItem("planStorage")) {
  plans = JSON.parse(localStorage.getItem("planStorage"));
  plans = plans.map((plan) => ({
    ...plan,
    itemDate: new Date(plan.itemDate),
  }));
  planDisplay();
}

/////////////////// ADD PLAN ////////////////////
function addItem(itemType, itemName, itemDate, itemLocation) {
  let isExist = false;
  for (const plan of plans) {
    if (
      plan.itemName === itemName &&
      plan.itemType === itemType &&
      plan.itemDate.getTime() === itemDate.getTime()
    ) {
      isExist = true;
      break;
    }
  }

  if (!isExist) {
    let itemObj = {
      itemId: Date.now(),
      itemType,
      itemName,
      itemDate,
      itemLocation,
    };

    toast.classList.remove("hidden");
    toast.style.cssText =
      "color: white; background: green; border-radius: 10px; padding: 15px; font-weight: bold;";
    toast.innerHTML = `<span><i class='fa-solid fa-check-circle'></i> Added to plans!</span>`;
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 1000);

    plans.push(itemObj);

    localStorage.setItem("planStorage", JSON.stringify(plans));
    planDisplay();
  } else {
    toast.classList.remove("hidden");
    toast.style.cssText =
      "color: white; background: red; border-radius: 10px; padding: 15px; font-weight: bold;";
    toast.innerHTML = `<span><i class="fa-solid  fa-circle-info"></i> Already saved!</span>`;
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 1000);
  }
}

/////////////// DISPLAY PLAN ////////////////////
function planDisplay(filter = "all") {
  let filteredPlans = plans;
  if (filter != "all") {
    filteredPlans = plans.filter((plan) => plan.itemType == filter);
  }
  if (filteredPlans.length == 0) {
    plansContent.innerHTML = `
  <div class="empty-state">
              <div class="empty-icon"><i class="fa-solid fa-heart-crack"></i></div>
              <h3>No Saved Plans Yet</h3>
              <p>Start exploring and save holidays, events, or long weekends you like!</p>
              <button class="btn-primary" id="start-exploring-btn">
                <i class="fa-solid fa-compass"></i> Start Exploring
              </button>
            </div>
  `;
    plansCount.classList.add("hidden");
    allCount.innerHTML = 0;
    return;
  }

  let box = "";
  for (let i = 0; i < filteredPlans.length; i++) {
    box += `
    <div class="plan-card">
              <span class="plan-card-type ${filteredPlans[i].itemType.toLowerCase()}">${filteredPlans[i].itemType.toUpperCase()}</span>
              <div class="plan-card-content">

                <h4>${filteredPlans[i].itemName}</h4>
                <div class="plan-card-details">
                  <div><i data-fa-i2svg=""><svg class="svg-inline--fa fa-calendar" aria-hidden="true" focusable="false"
                        data-prefix="far" data-icon="calendar" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor"
                          d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z">
                        </path>
                      </svg></i>${filteredPlans[i].itemDate.toLocaleDateString(
                        "en-Us",
                        {
                          month: "short",
                        },
                      )} ${filteredPlans[i].itemDate.getDate()}, ${filteredPlans[i].itemDate.getFullYear()}</div>
                  <div><i data-fa-i2svg=""><svg class="svg-inline--fa fa-location-dot" aria-hidden="true"
                        focusable="false" data-prefix="fas" data-icon="location-dot" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg="">
                        <path fill="currentColor"
                          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z">
                        </path>
                      </svg></i>${filteredPlans[i].itemLocation}</div>
                </div>

                <div class="plan-card-actions">
                  <button class="btn-plan-remove" onclick="deletePlan(${filteredPlans[i].itemId})">
                    <i data-fa-i2svg=""><svg class="svg-inline--fa fa-trash" aria-hidden="true" focusable="false"
                        data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor"
                          d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z">
                        </path>
                      </svg></i> Remove
                  </button>
                </div>
              </div>
            </div>
    `;
  }
  plansContent.innerHTML = box;

  allCount.innerHTML = plans.length;
  holidayCount.innerHTML = plans.filter(
    (type) => type.itemType === "holiday",
  ).length;
  eventCount.innerHTML = plans.filter(
    (type) => type.itemType === "event",
  ).length;
  lwCount.innerHTML = plans.filter(
    (type) => type.itemType === "longweekend",
  ).length;
  statSaved.innerHTML = plans.length;
  plansCount.innerHTML = plans.length;
  plansCount.classList.remove("hidden");
  allCount.innerHTML = plans.length;
}
planDisplay();

/////////////////// DELETE PLAN ////////////////////
window.deletePlan = function (id) {
  const index = plans.findIndex(function (plan) {
    return plan.itemId === id;
  });
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      plans.splice(index, 1);
      localStorage.setItem("planStorage", JSON.stringify(plans));
      planDisplay();
    }
  });
};

///////////////////// CLEAR ALL //////////////////////
const clearAll = document.getElementById("clear-all-plans-btn");
clearAll.addEventListener("click", () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      localStorage.clear();
      plans = [];
      planDisplay();
    }
  });
});
