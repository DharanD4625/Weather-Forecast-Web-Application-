let celsiusTemperature = null;
let apiKey = "f7723d8882b9271f98520a36bb9efdee";//city,country
let pexelsApiKey = "IsTEfmZigeQN0idAe9om3tAtkRkdWRtKxEnsnXq6NXfVC2mPbk3cct6q";//picture,location

// A larger dataset of popular landmarks for 150+ cities
const popularLandmarks = {
    "New York": ["Statue of Liberty", "Central Park", "Empire State Building", "Brooklyn Bridge"],
    "Paris": ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Arc de Triomphe"],
    "London": ["Big Ben", "London Eye", "Buckingham Palace", "Tower of London"],
    "Tokyo": ["Tokyo Tower", "Shibuya Crossing", "Senso-ji Temple", "Tokyo Skytree"],
    "Rome": ["Colosseum", "Pantheon", "Trevi Fountain", "St. Peter's Basilica"],
    "Berlin": ["Brandenburg Gate", "Berlin Wall", "Reichstag Building", "Berlin Cathedral"],
    "Sydney": ["Sydney Opera House", "Sydney Harbour Bridge", "Bondi Beach", "Royal Botanic Garden"],
    "Dubai": ["Burj Khalifa", "Burj Al Arab", "Palm Jumeirah", "Dubai Marina"],
    "Barcelona": ["Sagrada Familia", "Park Güell", "Casa Batlló", "La Rambla"],
    // Add 150+ cities with their landmarks
    "Moscow": ["Red Square", "Kremlin", "St. Basil's Cathedral", "Bolshoi Theatre"],
    "Los Angeles": ["Hollywood Sign", "Santa Monica Pier", "Venice Beach", "Griffith Observatory"],
    "Paris": ["Eiffel Tower", "Louvre Museum", "Arc de Triomphe"],
    "Chennai": ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"],
    "Delhi": ["India Gate", "Red Fort", "Lotus Temple"],
    "Bangkok": ["Grand Palace", "Wat Pho", "Chatuchak Market"],
    "Singapore": ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"],
    "Istanbul": ["Hagia Sophia", "Blue Mosque", "Topkapi Palace"],
    "Amsterdam": ["Rijksmuseum", "Van Gogh Museum", "Anne Frank House"],
    "Rio de Janeiro": ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana Beach"],
    "Buenos Aires": ["Casa Rosada", "Obelisco", "La Boca"],
    "Cairo": ["Pyramids of Giza", "Sphinx", "Egyptian Museum"],
    "Toronto": ["CN Tower", "Royal Ontario Museum", "Toronto Islands"],
    "Seoul": ["Gyeongbokgung Palace", "N Seoul Tower", "Bukchon Hanok Village"],
    "Hong Kong": ["Victoria Peak", "Tian Tan Buddha", "Hong Kong Disneyland"],
    "Kuala Lumpur": ["Petronas Towers", "Batu Caves", "KL Tower"],
    "Lisbon": ["Belem Tower", "Jerónimos Monastery", "St. George's Castle"],
    "Madrid": ["Prado Museum", "Royal Palace", "Retiro Park"],
    "Mexico City": ["Zócalo", "Chapultepec Park", "Frida Kahlo Museum"],
    "Sao Paulo": ["Avenida Paulista", "Ibirapuera Park", "Sao Paulo Museum of Art"],
    "Mumbai": ["Gateway of India", "Marine Drive", "Chhatrapati Shivaji Terminus"],
    "Jakarta": ["National Monument", "Istiqlal Mosque", "Taman Mini Indonesia Indah"],
    "Lagos": ["Lekki Conservation Centre", "Nike Art Gallery", "National Museum Lagos"],
    "Nairobi": ["Nairobi National Park", "David Sheldrick Wildlife Trust", "Giraffe Centre"],
    "Copenhagen": ["Tivoli Gardens", "Nyhavn", "Little Mermaid Statue"],
    "Helsinki": ["Suomenlinna", "Helsinki Cathedral", "Market Square"],
    "Stockholm": ["Vasa Museum", "Gamla Stan", "Skansen"],
    "Oslo": ["Vigeland Park", "Oslo Opera House", "Akershus Fortress"],
    "Vienna": ["Schönbrunn Palace", "St. Stephen's Cathedral", "Belvedere Palace"],
    "Brussels": ["Atomium", "Grand Place", "Manneken Pis"],
    "Zurich": ["Lake Zurich", "Old Town", "Swiss National Museum"],
    "Budapest": ["Buda Castle", "Parliament Building", "Széchenyi Thermal Bath"],
    "Prague": ["Charles Bridge", "Prague Castle", "Old Town Square"],
    "Warsaw": ["Royal Castle", "Lazienki Park", "Palace of Culture and Science"],
    "Athens": ["Acropolis", "Parthenon", "Plaka"],
    "Dublin": ["Trinity College", "Guinness Storehouse", "Dublin Castle"],
    "Edinburgh": ["Edinburgh Castle", "Royal Mile", "Arthur's Seat"],
    "Glasgow": ["Kelvingrove Art Gallery", "Glasgow Cathedral", "Riverside Museum"],
    "Belfast": ["Titanic Belfast", "Giant's Causeway", "Belfast City Hall"],
    "Cardiff": ["Cardiff Castle", "Millennium Stadium", "National Museum Cardiff"],
    "Amsterdam": ["Rijksmuseum", "Van Gogh Museum", "Anne Frank House"],
    "Brussels": ["Atomium", "Grand Place", "Manneken Pis"],
    "Helsinki": ["Suomenlinna", "Helsinki Cathedral", "Market Square"],
    "Oslo": ["Vigeland Park", "Oslo Opera House", "Akershus Fortress"],
    "Copenhagen": ["Tivoli Gardens", "Nyhavn", "Little Mermaid Statue"],
    "Stockholm": ["Vasa Museum", "Gamla Stan", "Skansen"],
    "Helsinki": ["Suomenlinna", "Helsinki Cathedral", "Market Square"],
    "Tallinn": ["Tallinn Old Town", "Alexander Nevsky Cathedral", "Toompea Hill"],
    "Riga": ["Riga Old Town", "House of Blackheads", "Freedom Monument"],
    "Hong Kong": ["Victoria Peak", "Tian Tan Buddha", "Hong Kong Disneyland"],
    "Taipei": ["Taipei 101", "National Palace Museum", "Chiang Kai-shek Memorial Hall"],
    "Manila": ["Intramuros", "Rizal Park", "Fort Santiago"],
    "Chengalpattu": ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"],
    "Ahmedabad": ["Sabarmati Ashram", "Akshardham Temple", "Kankaria Lake"],
    "Jaipur": ["Hawa Mahal", "Amber Fort", "City Palace"],
    "Udaipur": ["City Palace", "Lake Pichola", "Jag Mandir"],
    "Agra": ["Taj Mahal", "Agra Fort", "Mehtab Bagh"],
    "Varanasi": ["Ganges River", "Kashi Vishwanath Temple", "Sarnath"],
    "Kolkata": ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Kali Temple"],
    "Hyderabad": ["Charminar", "Golconda Fort", "Hussain Sagar Lake"],
    "Pune": ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort"],
    "Surat": ["Sarthana Nature Park", "Dutch and Armenian Cemetery", "Gopi Talav"],
    "Vadodara": ["Laxmi Vilas Palace", "Sayaji Garden", "Baroda Museum and Picture Gallery"],
    "Nagpur": ["Deekshabhoomi", "Futala Lake", "Sitabuldi Fort"],
    "Indore": ["Rajwada Palace", "Lal Baag Palace", "Sarafa Bazar"],
    "Bhopal": ["Taj-ul-Masajid", "Upper Lake", "Sanchi Stupa"],
    "Patna": ["Golghar", "Mahavir Mandir", "Bihar Museum"],
    "Lucknow": ["Bara Imambara", "Chota Imambara", "Rumi Darwaza"],
    "Kanpur": ["Allen Forest Zoo", "Kanpur Memorial Church", "J.K. Temple"],
    "Visakhapatnam": ["Kailasagiri", "Rishikonda Beach", "Submarine Museum"],
    "Coimbatore": ["Marudamalai Temple", "VOC Park", "Perur Patteeswarar Temple"],
    "Madurai": ["Meenakshi Temple", "Thirumalai Nayakkar Mahal", "Gandhi Memorial Museum"],
    "Tiruchirappalli": ["Rockfort Temple", "Sri Ranganathaswamy Temple", "Kallanai Dam"],
    "Salem": ["Yercaud", "Kottai Mariamman Temple", "Sugavaneshwarar Temple"],
    "Tirunelveli": ["Nellaiappar Temple", "Tirunelveli Kottai", "Kalakkad Wildlife Sanctuary"],
    "Thanjavur": ["Brihadeeswarar Temple", "Thanjavur Palace", "Saraswathi Mahal Library"],
    "Kochi": ["Fort Kochi", "Mattancherry Palace", "Jewish Synagogue"],
    "Kozhikode": ["Kozhikode Beach", "Beypore", "Mishkal Mosque"],
    "Thrissur": ["Vadakkunnathan Temple", "Athirappilly Falls", "Thrissur Zoo"],
    "Kottayam": ["Vembanad Lake", "Kumarakom Bird Sanctuary", "St. Mary's Church"],
    "Alappuzha": ["Alleppey Beach", "Vembanad Lake", "Krishna Temple"],
    "Pathanamthitta": ["Sabarimala", "Perunthenaruvi Waterfall", "Parumala Church"],
    "Idukki": ["Munnar", "Periyar Wildlife Sanctuary", "Cheruthoni Dam"],
    "Wayanad": ["Edakkal Caves", "Banasura Sagar Dam", "Wayanad Wildlife Sanctuary"],
    "Moscow": ["Red Square", "Kremlin", "St. Basil's Cathedral"],
    "Saint Petersburg": ["Hermitage Museum", "Peterhof Palace", "Church of the Savior on Spilled Blood"],
    "Novosibirsk": ["Novosibirsk Opera and Ballet Theatre", "Central Park", "Lenin Square"],
    "Yekaterinburg": ["Church on the Blood", "Vysotsky Tower", "Ganina Yama"],
    "Nizhny Novgorod": ["Nizhny Novgorod Kremlin", "Chkalov Stairs", "Bolshaya Pokrovskaya Street"],
    "Munich": ["Marienplatz", "Nymphenburg Palace", "Englischer Garten"],
    "Frankfurt": ["Römer", "Palmengarten", "Städel Museum"],
    "Hamburg": ["Miniatur Wunderland", "Elbphilharmonie", "Speicherstadt"],
    "Berlin": ["Brandenburg Gate", "Berlin Wall", "Reichstag Building"],
    "Cologne": ["Cologne Cathedral", "Hohenzollern Bridge", "Museum Ludwig"],
    "Düsseldorf": ["Königsallee", "Rheinturm", "Museum Kunstpalast"],
    "Stuttgart": ["Mercedes-Benz Museum", "Porsche Museum", "Wilhelma Zoo"],
    "Dortmund": ["Signal Iduna Park", "Westfalenpark", "Museum Ostwall"],
    "Essen": ["Zollverein Coal Mine", "Museum Folkwang", "Villa Hügel"],
    "Leipzig": ["St. Thomas Church", "Leipzig Zoo", "Monument to the Battle of the Nations"],
    "Dresden": ["Zwinger Palace", "Dresden Frauenkirche", "Semper Opera House"],
    "Hannover": ["Herrenhausen Gardens", "Lower Saxony State Museum", "Marktkirche"],
    "Nuremberg": ["Nuremberg Castle", "Documentation Center", "Albrecht Dürer's House"],
    "Bremen": ["Bremen Town Hall", "Roland Statue", "Schnoorviertel"],
    "Düsseldorf": ["Königsallee", "Rheinturm", "Museum Kunstpalast"],
    "Scotland": ["Edinburgh Castle", "Loch Ness", "Isle of Skye"],
    "Wales": ["Snowdonia National Park", "Cardiff Castle", "Brecon Beacons"],
    "Ireland": ["Cliffs of Moher", "Giant's Causeway", "Ring of Kerry"],
    "London": ["Tower of London", "British Museum", "Buckingham Palace"],
    "Manchester": ["Old Trafford", "Manchester Museum", "Whitworth Art Gallery"],
    "Birmingham": ["Cadbury World", "Birmingham Museum and Art Gallery", "Bullring Shopping Centre"],
    "Liverpool": ["The Beatles Story", "Liverpool Cathedral", "Albert Dock"],
    "Glasgow": ["Kelvingrove Art Gallery", "Glasgow Cathedral", "Riverside Museum"],
    "Edinburgh": ["Edinburgh Castle", "Royal Mile", "Arthur's Seat"],
    "Aberdeen": ["Aberdeen Maritime Museum", "Duthie Park", "Marischal College"],
    "Inverness": ["Loch Ness", "Inverness Castle", "Culloden Battlefield"],
    "Stirling": ["Stirling Castle", "Battle of Bannockburn", "Wallace Monument"],
    "Perth": ["Scone Palace", "Perth Museum and Art Gallery", "Kinnoull Hill"],
    "Dundee": ["V&A Dundee", "Discovery Point", "Dundee Law"],
    "Falkirk": ["The Kelpies", "Falkirk Wheel", "Callendar House"],
    "Aberfeldy": ["Dunkeld Cathedral", "Birnam Oak", "Loch Tay"],
    "Pitlochry": ["Blair Castle", "Edradour Distillery", "Loch Faskally"],
    "St Andrews": ["St Andrews Castle", "Old Course", "St Andrews Cathedral"],
    "Sydney": ["Sydney Opera House", "Sydney Harbour Bridge", "Bondi Beach"],
    "Melbourne": ["Federation Square", "Royal Botanic Gardens", "Queen Victoria Market"],
    "Brisbane": ["South Bank Parklands", "Lone Pine Koala Sanctuary", "Story Bridge"],
    "Perth": ["Kings Park", "Swan River", "Fremantle Markets"],
    "Adelaide": ["Adelaide Zoo", "Glenelg Beach", "Barossa Valley"],
    "Hobart": ["MONA", "Mount Wellington", "Salamanca Market"],
    "Canberra": ["Parliament House", "Australian War Memorial", "National Gallery of Australia"],
    "Darwin": ["Mindil Beach", "Kakadu National Park", "Litchfield National Park"],
    "Cairns": ["Great Barrier Reef", "Daintree Rainforest", "Kuranda Scenic Railway"],
    "Gold Coast": ["Surfers Paradise", "Theme Parks", "Currumbin Wildlife Sanctuary"],
    "Auckland": ["Sky Tower", "Waiheke Island", "Auckland War Memorial Museum"],
    "Wellington": ["Te Papa", "Wellington Cable Car", "Mount Victoria"],
    "Christchurch": ["Christchurch Botanic Gardens", "Canterbury Museum", "Cardboard Cathedral"],
    "Queenstown": ["Lake Wakatipu", "Skyline Queenstown", "Milford Sound"],
    "Dunedin": ["Otago Peninsula", "Dunedin Railway Station", "Larnach Castle"],
    "Rotorua": ["Te Puia", "Wai-O-Tapu", "Redwoods Treewalk"],
    "Taupo": ["Lake Taupo", "Huka Falls", "Tongariro National Park"],
    "Dublin": ["Trinity College", "Guinness Storehouse", "Dublin Castle"],
    "Switzerland": ["Lake Geneva", "Matterhorn", "Jungfrau Region"],
    "Zurich": ["Lake Zurich", "Old Town", "Swiss National Museum"],
    "Geneva": ["Jet d'Eau", "United Nations Office", "St. Pierre Cathedral"],
    "Lucerne": ["Chapel Bridge", "Lion Monument", "Mount Pilatus"],
    // Add more cities and landmarks...
};

function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    
    return `${day}, ${hours}:${minutes}`;
}

function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
}

function updateCityImage(city) {
    let landmarks = popularLandmarks[city] || [city];  // Use landmarks for city or just the city name
    let landmark = landmarks[Math.floor(Math.random() * landmarks.length)];  // Pick a random landmark
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${landmark}&per_page=1`;

    axios.get(pexelsUrl, { headers: { Authorization: pexelsApiKey } })
        .then(response => {
            let photoUrl = response.data.photos.length > 0 ? response.data.photos[0].src.landscape : "default-image.jpg";
            document.querySelector("#city-image").src = photoUrl;
        })
        .catch(error => {
            console.error("Error fetching city image:", error);
            // Set a fallback image in case of an error
            document.querySelector("#city-image").src = "default-image.jpg";
        });
}

function getSeason(month) {
    if (month >= 2 && month <= 4) return "Spring";
    if (month >= 5 && month <= 7) return "Summer";
    if (month >= 8 && month <= 10) return "Autumn";
    return "Winter";
}

function displayWeatherData(response) {
    let city = response.data.name;
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = Math.round(response.data.wind.speed);
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    let date = formatDate(response.data.dt * 1000);
    let season = getSeason(new Date().getMonth());

    document.querySelector("#city").innerHTML = city;
    document.querySelector("#date").innerHTML = date;
    document.querySelector("#description").innerHTML = description;
    document.querySelector("#temperature").innerHTML = temperature;
    document.querySelector("#humidity").innerHTML = humidity;
    document.querySelector("#wind").innerHTML = wind;
    document.querySelector("#icon").setAttribute("src", icon);
    document.querySelector("#icon").setAttribute("alt", description);
    document.querySelector("#season").innerHTML = `Season: ${season}`;

    updateCityImage(city);  // Updated image based on random landmark or city
}

function getWeatherData(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherData);
}

function handleSearch(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input").value;
    getWeatherData(cityInput);
}

document.querySelector("#search-form").addEventListener("submit", handleSearch);

// Load default city
getWeatherData("New York");
