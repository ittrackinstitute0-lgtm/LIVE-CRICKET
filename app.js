/**
 * CRICPULSE WORLD CRICKET PLATFORM - JAVASCRIPT ENGINE
 * Handles world cricket fixtures, live simulation, filtering, search, modal scorecards, and ICC rankings.
 */

// ==========================================
// 1. GLOBAL MATCHES DATA STORE
// ==========================================
const MATCHES_DATA = [
  {
    id: "m1",
    tournament: "ICC Champions Trophy - Grand Final",
    format: "ODI",
    status: "live", // live, upcoming, recent
    featured: true,
    teamHome: {
      name: "India",
      short: "IND",
      flag: "🇮🇳",
      score: "328/6",
      overs: "47.4",
      runs: 328,
      wickets: 6,
      currentOver: 47,
      currentBall: 4
    },
    teamAway: {
      name: "Australia",
      short: "AUS",
      flag: "🇦🇺",
      score: "324/9",
      overs: "50.0",
      runs: 324,
      wickets: 9,
      currentOver: 50,
      currentBall: 0
    },
    battingFirst: "Australia",
    currentBatting: "India",
    situation: "India need 7 runs in 14 balls to lift the ICC Trophy!",
    crr: "6.88",
    rrr: "3.00",
    venue: "Melbourne Cricket Ground, Australia",
    toss: "India won the toss & elected to bowl first",
    pitch: "Batting paradise with true bounce; slight reverse swing for pacers",
    weather: "22°C Clear Sky, 0% Rain probability",
    batter1: { name: "Virat Kohli", runs: 114, balls: 98, fours: 11, sixes: 3, sr: "116.3" },
    batter2: { name: "Hardik Pandya", runs: 38, balls: 22, fours: 2, sixes: 3, sr: "172.7" },
    bowler: { name: "Mitchell Starc", overs: "9.4", maidens: 0, runs: 64, wickets: 2, econ: "6.62" },
    recentBalls: ["1", "4", "2", "6", "1", "W", "2"],
    commentary: [
      { over: "47.4", desc: "Starc to Hardik Pandya, 2 runs, driven powerfully through extra cover, good running between the wickets." },
      { over: "47.3", desc: "Starc to Hardik Pandya, <strong>SIX!</strong> What a strike! Slower ball in the slot, hoisted 94 meters over long-on!" },
      { over: "47.2", desc: "Starc to Virat Kohli, 1 run, pushed softly to mid-off for a quick single." },
      { over: "47.1", desc: "Starc to Virat Kohli, <strong>FOUR!</strong> Pure class! Leans into a textbook cover drive that rattles the boundary ropes." }
    ],
    playingXI: {
      home: ["Rohit Sharma (C)", "Shubman Gill", "Virat Kohli", "Shreyas Iyer", "KL Rahul (WK)", "Hardik Pandya", "Ravindra Jadeja", "Kuldeep Yadav", "Jasprit Bumrah", "Mohammed Shami", "Mohammed Siraj"],
      away: ["David Warner", "Travis Head", "Mitchell Marsh (C)", "Steve Smith", "Marnus Labuschagne", "Glenn Maxwell", "Josh Inglis (WK)", "Pat Cummins", "Mitchell Starc", "Adam Zampa", "Josh Hazlewood"]
    }
  },
  {
    id: "m2",
    tournament: "The Ashes - 4th Test (Day 4)",
    format: "Test",
    status: "live",
    featured: false,
    teamHome: {
      name: "England",
      short: "ENG",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      score: "384 & 240/4",
      overs: "62.3",
      runs: 240,
      wickets: 4,
      currentOver: 62,
      currentBall: 3
    },
    teamAway: {
      name: "Australia",
      short: "AUS",
      flag: "🇦🇺",
      score: "412 & 186",
      overs: "58.1",
      runs: 186,
      wickets: 10,
      currentOver: 58,
      currentBall: 1
    },
    battingFirst: "Australia",
    currentBatting: "England",
    situation: "England lead by 212 runs with 6 wickets in hand. Day 4 Evening Session.",
    crr: "3.84",
    rrr: "-",
    venue: "Lord's Cricket Ground, London",
    toss: "Australia won the toss and elected to bat",
    pitch: "Grass covering has dried; variable bounce creating trouble outside off-stump.",
    weather: "19°C Overcast, Mild breeze",
    batter1: { name: "Joe Root", runs: 86, balls: 142, fours: 9, sixes: 0, sr: "60.5" },
    batter2: { name: "Harry Brook", runs: 42, balls: 38, fours: 5, sixes: 1, sr: "110.5" },
    bowler: { name: "Pat Cummins", overs: "16.3", maidens: 3, runs: 58, wickets: 2, econ: "3.51" },
    recentBalls: ["0", "0", "4", "1", "0", "1"],
    commentary: [
      { over: "62.3", desc: "Cummins to Harry Brook, 1 run, tucked off his pads towards backward square leg." },
      { over: "62.2", desc: "Cummins to Harry Brook, <strong>FOUR!</strong> Audacious scoop over fine leg! Brook plays with supreme audacity." },
      { over: "62.1", desc: "Cummins to Joe Root, 1 run, guided down towards third man." }
    ],
    playingXI: {
      home: ["Zak Crawley", "Ben Duckett", "Ollie Pope", "Joe Root", "Harry Brook", "Ben Stokes (C)", "Jamie Smith (WK)", "Chris Woakes", "Gus Atkinson", "Mark Wood", "Shoaib Bashir"],
      away: ["Usman Khawaja", "Nathan McSweeney", "Marnus Labuschagne", "Steve Smith", "Travis Head", "Mitchell Marsh", "Alex Carey (WK)", "Pat Cummins (C)", "Mitchell Starc", "Nathan Lyon", "Josh Hazlewood"]
    }
  },
  {
    id: "m3",
    tournament: "Pakistan vs South Africa T20I Series",
    format: "T20I",
    status: "live",
    featured: false,
    teamHome: {
      name: "Pakistan",
      short: "PAK",
      flag: "🇵🇰",
      score: "185/5",
      overs: "20.0",
      runs: 185,
      wickets: 5,
      currentOver: 20,
      currentBall: 0
    },
    teamAway: {
      name: "South Africa",
      short: "SA",
      flag: "🇿🇦",
      score: "148/3",
      overs: "15.2",
      runs: 148,
      wickets: 3,
      currentOver: 15,
      currentBall: 2
    },
    battingFirst: "Pakistan",
    currentBatting: "South Africa",
    situation: "South Africa need 38 runs in 28 balls to seal the T20 series.",
    crr: "9.65",
    rrr: "8.14",
    venue: "Gaddafi Stadium, Lahore",
    toss: "South Africa won the toss & elected to bowl",
    pitch: "Flat track under lights, high scoring venue with slight dew",
    weather: "26°C Humid, Dew expected",
    batter1: { name: "Heinrich Klaasen", runs: 54, balls: 28, fours: 4, sixes: 4, sr: "192.8" },
    batter2: { name: "David Miller", runs: 24, balls: 14, fours: 2, sixes: 1, sr: "171.4" },
    bowler: { name: "Shaheen Shah Afridi", overs: "3.2", maidens: 0, runs: 32, wickets: 2, econ: "9.60" },
    recentBalls: ["6", "1", "4", "2", "0", "6"],
    commentary: [
      { over: "15.2", desc: "Shaheen to Klaasen, <strong>SIX!</strong> Smashed over long-off! Klaasen is in unbelievable form tonight!" },
      { over: "15.1", desc: "Shaheen to Miller, 1 run, full toss driven to deep mid-wicket." }
    ],
    playingXI: {
      home: ["Babar Azam", "Mohammad Rizwan (WK)", "Fakhar Zaman", "Saim Ayub", "Iftikhar Ahmed", "Shadab Khan", "Shaheen Afridi (C)", "Naseem Shah", "Haris Rauf", "Abrar Ahmed", "Abbas Afridi"],
      away: ["Quinton de Kock (WK)", "Reeza Hendricks", "Aiden Markram (C)", "Heinrich Klaasen", "David Miller", "Tristan Stubbs", "Marco Jansen", "Keshav Maharaj", "Kagiso Rabada", "Anrich Nortje", "Ottneil Baartman"]
    }
  },
  {
    id: "m4",
    tournament: "Indian Premier League (IPL) - Clash of Titans",
    format: "League",
    status: "upcoming",
    featured: false,
    teamHome: {
      name: "Mumbai Indians",
      short: "MI",
      flag: "🇮🇳",
      score: "Yet to bat",
      overs: "-",
      runs: 0,
      wickets: 0
    },
    teamAway: {
      name: "Chennai Super Kings",
      short: "CSK",
      flag: "🇮🇳",
      score: "Yet to bat",
      overs: "-",
      runs: 0,
      wickets: 0
    },
    situation: "Match starts today at 19:30 IST / 14:00 GMT",
    venue: "Wankhede Stadium, Mumbai",
    toss: "Toss scheduled at 19:00 IST",
    pitch: "Red soil surface, batting paradise with lightning-fast outfield",
    weather: "29°C Warm, Coastal sea breeze",
    playingXI: {
      home: ["Rohit Sharma", "Ishan Kishan (WK)", "Suryakumar Yadav", "Hardik Pandya (C)", "Tilak Varma", "Tim David", "Gerald Coetzee", "Jasprit Bumrah", "Piyush Chawla", "Nuwan Thushara"],
      away: ["Ruturaj Gaikwad (C)", "Devon Conway", "Rachin Ravindra", "Shivam Dube", "Ravindra Jadeja", "MS Dhoni (WK)", "Shardul Thakur", "Matheesha Pathirana", "Mustafizur Rahman", "Tushar Deshpande"]
    }
  },
  {
    id: "m5",
    tournament: "New Zealand Tour of West Indies - 2nd ODI",
    format: "ODI",
    status: "upcoming",
    featured: false,
    teamHome: {
      name: "West Indies",
      short: "WI",
      flag: "🌴",
      score: "Yet to bat",
      overs: "-",
      runs: 0,
      wickets: 0
    },
    teamAway: {
      name: "New Zealand",
      short: "NZ",
      flag: "🇳🇿",
      score: "Yet to bat",
      overs: "-",
      runs: 0,
      wickets: 0
    },
    situation: "Match starts tomorrow at 13:30 GMT at Kensington Oval",
    venue: "Kensington Oval, Bridgetown, Barbados",
    toss: "Toss in 18 hours",
    pitch: "Balanced surface with pace and carry for fast bowlers early on",
    weather: "28°C Sunny, pleasant Caribbean breeze",
    playingXI: {
      home: ["Shai Hope (C & WK)", "Brandon King", "Keacy Carty", "Nicholas Pooran", "Shimron Hetmyer", "Rovman Powell", "Romario Shepherd", "Gudakesh Motie", "Alzarri Joseph", "Akeal Hosein", "Jayden Seales"],
      away: ["Devon Conway", "Finn Allen", "Rachin Ravindra", "Kane Williamson (C)", "Daryl Mitchell", "Glenn Phillips", "Tom Blundell (WK)", "Mitchell Santner", "Matt Henry", "Lockie Ferguson", "Trent Boult"]
    }
  },
  {
    id: "m6",
    tournament: "Sri Lanka vs Afghanistan T20I Series",
    format: "T20I",
    status: "recent",
    featured: false,
    teamHome: {
      name: "Afghanistan",
      short: "AFG",
      flag: "🇦🇫",
      score: "192/4",
      overs: "20.0",
      runs: 192,
      wickets: 4
    },
    teamAway: {
      name: "Sri Lanka",
      short: "SL",
      flag: "🇱🇰",
      score: "188/8",
      overs: "20.0",
      runs: 188,
      wickets: 8
    },
    situation: "Afghanistan won by 4 runs in a nail-biting final over thriller!",
    venue: "Sharjah Cricket Stadium, UAE",
    toss: "Afghanistan won the toss and elected to bat",
    pitch: "Dry surface, low grip under lights",
    weather: "25°C Dry Desert climate",
    playerOfTheMatch: "Rahmanullah Gurbaz (84 off 45 balls)",
    playingXI: {
      home: ["Rahmanullah Gurbaz (WK)", "Ibrahim Zadran", "Gulbadin Naib", "Azmatullah Omarzai", "Mohammad Nabi", "Rashid Khan (C)", "Karim Janat", "Noor Ahmad", "Naveen-ul-Haq", "Fazalhaq Farooqi"],
      away: ["Pathum Nissanka", "Kusal Mendis (WK)", "Kamindu Mendis", "Charith Asalanka (C)", "Wanindu Hasaranga", "Dasun Shanaka", "Angelo Mathews", "Maheesh Theekshana", "Matheesha Pathirana", "Nuwan Thushara"]
    }
  },
  {
    id: "m7",
    tournament: "Big Bash League (BBL) - Qualifier",
    format: "League",
    status: "recent",
    featured: false,
    teamHome: {
      name: "Sydney Sixers",
      short: "SYS",
      flag: "🇦🇺",
      score: "172/3",
      overs: "18.4",
      runs: 172,
      wickets: 3
    },
    teamAway: {
      name: "Perth Scorchers",
      short: "PER",
      flag: "🇦🇺",
      score: "168/7",
      overs: "20.0",
      runs: 168,
      wickets: 7
    },
    situation: "Sydney Sixers won by 7 wickets with 8 balls to spare.",
    venue: "Sydney Cricket Ground, Sydney",
    toss: "Sydney Sixers won the toss and opted to bowl",
    pitch: "Classic SCG pitch aiding wrist spinners and good strokemakers",
    weather: "24°C Pleasant evening",
    playerOfTheMatch: "Josh Philippe (76* off 48 balls)",
    playingXI: {
      home: ["Josh Philippe (WK)", "Daniel Hughes", "Moises Henriques (C)", "Jordan Silk", "Tom Curran", "Sean Abbott", "Ben Dwarshuis", "Steve O'Keefe"],
      away: ["Josh Inglis (WK)", "Aaron Hardie (C)", "Ashton Turner", "Laurie Evans", "Cooper Connolly", "Ashton Agar", "Andrew Tye", "Jason Behrendorff"]
    }
  },
  {
    id: "m8",
    tournament: "ICC World Test Championship - 1st Test",
    format: "Test",
    status: "upcoming",
    featured: false,
    teamHome: {
      name: "South Africa",
      short: "SA",
      flag: "🇿🇦",
      score: "Yet to bat",
      overs: "-",
      runs: 0,
      wickets: 0
    },
    teamAway: {
      name: "India",
      short: "IND",
      flag: "🇮🇳",
      score: "Yet to bat",
      overs: "-",
      runs: 0,
      wickets: 0
    },
    situation: "Starts on Dec 26 (Boxing Day Test) at SuperSport Park",
    venue: "SuperSport Park, Centurion, South Africa",
    toss: "Toss on Day 1 at 09:30 local time",
    pitch: "High altitude, fiery pace and steep bounce expected",
    weather: "23°C Sunny, slight afternoon storm chance",
    playingXI: {
      home: ["Aiden Markram", "Tony de Zorzi", "Temba Bavuma (C)", "David Bedingham", "Kyle Verreynne (WK)", "Marco Jansen", "Keshav Maharaj", "Kagiso Rabada", "Nandre Burger"],
      away: ["Rohit Sharma (C)", "Yashasvi Jaiswal", "Shubman Gill", "Virat Kohli", "Rishabh Pant (WK)", "KL Rahul", "Ravindra Jadeja", "Jasprit Bumrah", "Mohammed Siraj"]
    }
  },
  {
    id: "m9",
    tournament: "Bangladesh vs New Zealand ODI Series",
    format: "ODI",
    status: "recent",
    featured: false,
    teamHome: {
      name: "Bangladesh",
      short: "BAN",
      flag: "🇧🇩",
      score: "271/7",
      overs: "50.0",
      runs: 271,
      wickets: 7
    },
    teamAway: {
      name: "New Zealand",
      short: "NZ",
      flag: "🇳🇿",
      score: "258/10",
      overs: "48.2",
      runs: 258,
      wickets: 10
    },
    situation: "Bangladesh won by 13 runs to claim a historic ODI series win!",
    venue: "Sher-e-Bangla National Cricket Stadium, Mirpur, Dhaka",
    toss: "Bangladesh won the toss and elected to bat",
    pitch: "Slow and turning surface, spin dominated the middle overs",
    weather: "27°C Humid",
    playerOfTheMatch: "Mehidy Hasan Miraz (64 runs & 3 wickets)",
    playingXI: {
      home: ["Litton Das (WK)", "Najmul Hossain Shanto (C)", "Towhid Hridoy", "Mushfiqur Rahim", "Mahmudullah", "Mehidy Hasan Miraz", "Mustafizur Rahman", "Taskin Ahmed", "Shoriful Islam"],
      away: ["Will Young", "Rachin Ravindra", "Henry Nicholls", "Tom Latham (C & WK)", "Mark Chapman", "Glenn Phillips", "Mitchell Santner", "Ish Sodhi", "Trent Boult"]
    }
  }
];

// ==========================================
// 2. ICC RANKINGS DATA
// ==========================================
const ICC_RANKINGS = {
  t20: [
    { pos: 1, team: "India", flag: "🇮🇳", matches: 68, points: "18,240", rating: 268, trend: "up" },
    { pos: 2, team: "Australia", flag: "🇦🇺", matches: 54, points: "13,870", rating: 257, trend: "steady" },
    { pos: 3, team: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", matches: 52, points: "13,110", rating: 252, trend: "up" },
    { pos: 4, team: "South Africa", flag: "🇿🇦", matches: 46, points: "11,510", rating: 250, trend: "steady" },
    { pos: 5, team: "New Zealand", flag: "🇳🇿", matches: 56, points: "13,780", rating: 246, trend: "down" },
    { pos: 6, team: "West Indies", flag: "🌴", matches: 58, points: "14,020", rating: 242, trend: "up" },
    { pos: 7, team: "Pakistan", flag: "🇵🇰", matches: 62, points: "14,880", rating: 240, trend: "down" },
    { pos: 8, team: "Sri Lanka", flag: "🇱🇰", matches: 48, points: "11,140", rating: 232, trend: "steady" },
    { pos: 9, team: "Afghanistan", flag: "🇦🇫", matches: 44, points: "9,980", rating: 227, trend: "up" },
    { pos: 10, team: "Bangladesh", flag: "🇧🇩", matches: 50, points: "11,100", rating: 222, trend: "down" }
  ],
  odi: [
    { pos: 1, team: "India", flag: "🇮🇳", matches: 55, points: "6,645", rating: 121, trend: "up" },
    { pos: 2, team: "Australia", flag: "🇦🇺", matches: 48, points: "5,616", rating: 117, trend: "steady" },
    { pos: 3, team: "South Africa", flag: "🇿🇦", matches: 42, points: "4,620", rating: 110, trend: "up" },
    { pos: 4, team: "Pakistan", flag: "🇵🇰", matches: 40, points: "4,240", rating: 106, trend: "down" },
    { pos: 5, team: "New Zealand", flag: "🇳🇿", matches: 44, points: "4,444", rating: 101, trend: "down" },
    { pos: 6, team: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", matches: 38, points: "3,686", rating: 97, trend: "steady" },
    { pos: 7, team: "Sri Lanka", flag: "🇱🇰", matches: 52, points: "4,836", rating: 93, trend: "up" },
    { pos: 8, team: "Afghanistan", flag: "🇦🇫", matches: 36, points: "3,132", rating: 87, trend: "up" },
    { pos: 9, team: "Bangladesh", flag: "🇧🇩", matches: 48, points: "4,080", rating: 85, trend: "steady" },
    { pos: 10, team: "West Indies", flag: "🌴", matches: 40, points: "3,160", rating: 79, trend: "down" }
  ],
  test: [
    { pos: 1, team: "Australia", flag: "🇦🇺", matches: 36, points: "4,464", rating: 124, trend: "steady" },
    { pos: 2, team: "India", flag: "🇮🇳", matches: 40, points: "4,800", rating: 120, trend: "up" },
    { pos: 3, team: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", matches: 46, points: "4,968", rating: 108, trend: "up" },
    { pos: 4, team: "South Africa", flag: "🇿🇦", matches: 28, points: "2,912", rating: 104, trend: "steady" },
    { pos: 5, team: "New Zealand", flag: "🇳🇿", matches: 32, points: "3,072", rating: 96, trend: "down" },
    { pos: 6, team: "Sri Lanka", flag: "🇱🇰", matches: 30, points: "2,550", rating: 85, trend: "steady" },
    { pos: 7, team: "Pakistan", flag: "🇵🇰", matches: 30, points: "2,370", rating: 79, trend: "down" },
    { pos: 8, team: "West Indies", flag: "🌴", matches: 28, points: "2,128", rating: 76, trend: "steady" }
  ]
};

// ==========================================
// 3. GLOBAL NEWS DATA
// ==========================================
const NEWS_DATA = [
  {
    title: "Kohli's Masterclass Puts India on the Brink of ICC Silverware",
    tag: "Match Analysis",
    time: "25 mins ago",
    author: "Cricket Correspondent",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=700&q=80",
    snippet: "A breathtaking century from India's star anchor has shifted momentum dramatically against Australia in the final overs."
  },
  {
    title: "The Ashes Drama: Cummins Strikes Twice as Evening Session Ignites",
    tag: "The Ashes",
    time: "2 hours ago",
    author: "Lord's Bureau",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=700&q=80",
    snippet: "Pat Cummins bowled a sensational spell of reverse swing under gloomy skies to check England's aggressive lead."
  },
  {
    title: "Klaasen's Blistering Fifty Keeps Proteas in Hunt at Gaddafi Stadium",
    tag: "T20 International",
    time: "3 hours ago",
    author: "Lahore Dispatch",
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=700&q=80",
    snippet: "Heinrich Klaasen cleared the ropes four times in an over, turning the chase on its head in a high-octane encounter."
  },
  {
    title: "IPL Mega Auction Recap: Record Bids and Surprise Retentions",
    tag: "IPL 2026",
    time: "5 hours ago",
    author: "Franchise Watch",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=700&q=80",
    snippet: "Franchises spent heavily on express fast bowlers and power-hitting finishers ahead of the upcoming tournament season."
  }
];

// ==========================================
// 4. APPLICATION STATE & CONTROLS
// ==========================================
let currentStatusFilter = "all";
let currentFormatFilter = "all";
let currentTeamFilter = "all";
let searchQuery = "";
let currentRankingsFormat = "t20";
let liveSimInterval = null;
let isSimulating = true;
let selectedModalMatch = null;

// ==========================================
// 5. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderHeroSpotlight();
  renderTicker();
  renderMatches();
  renderRankings(currentRankingsFormat);
  renderNews();
  setupEventListeners();
  startLiveSimulation();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("cricpulse-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#themeToggle i");
  if (icon) {
    icon.className = theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("cricpulse-theme", newTheme);
  updateThemeIcon(newTheme);
}

// ==========================================
// 6. RENDER HERO SPOTLIGHT (FEATURED CLASH)
// ==========================================
function renderHeroSpotlight() {
  const heroMatch = MATCHES_DATA.find(m => m.featured) || MATCHES_DATA[0];
  const container = document.getElementById("featuredMatchBanner");
  if (!container || !heroMatch) return;

  container.innerHTML = `
    <div class="banner-clash-row">
      <!-- Home Team -->
      <div class="banner-team">
        <span class="banner-flag">${heroMatch.teamHome.flag}</span>
        <div class="banner-team-info">
          <h3>${heroMatch.teamHome.name}</h3>
          <div class="banner-score" id="heroHomeScore">${heroMatch.teamHome.score}</div>
          <span class="banner-overs" id="heroHomeOvers">(${heroMatch.teamHome.overs} ov)</span>
        </div>
      </div>

      <!-- Center VS & Situation -->
      <div class="banner-vs-center">
        <span class="vs-badge">${heroMatch.format} FINAL</span>
        <div class="banner-status-text" id="heroSituation">${heroMatch.situation}</div>
        <div class="banner-crr" id="heroRunRates">CRR: ${heroMatch.crr} | RRR: ${heroMatch.rrr}</div>
        <button class="btn btn-sm mt-2" onclick="openMatchModal('${heroMatch.id}')" style="margin-top: 10px;">
          <i class="fa-solid fa-bolt"></i> Live Center
        </button>
      </div>

      <!-- Away Team -->
      <div class="banner-team team-away">
        <span class="banner-flag">${heroMatch.teamAway.flag}</span>
        <div class="banner-team-info">
          <h3>${heroMatch.teamAway.name}</h3>
          <div class="banner-score">${heroMatch.teamAway.score}</div>
          <span class="banner-overs">(${heroMatch.teamAway.overs} ov)</span>
        </div>
      </div>
    </div>

    <div class="banner-footer">
      <span><i class="fa-solid fa-location-dot"></i> ${heroMatch.venue}</span>
      <span><i class="fa-solid fa-cloud-sun"></i> ${heroMatch.weather}</span>
      <span><i class="fa-solid fa-coins"></i> ${heroMatch.toss}</span>
    </div>
  `;
}

// ==========================================
// 7. RENDER TOP TICKER (LIVE MARQUEE)
// ==========================================
function renderTicker() {
  const track = document.getElementById("tickerTrack");
  if (!track) return;

  const liveMatches = MATCHES_DATA.filter(m => m.status === "live");
  // Duplicate array so marquee scrolls continuously seamlessly
  const matchesToRender = [...liveMatches, ...liveMatches];

  track.innerHTML = matchesToRender.map(m => `
    <div class="ticker-item" onclick="openMatchModal('${m.id}')">
      <span class="ticker-match-name">${m.teamHome.short} vs ${m.teamAway.short}</span>
      <span class="ticker-score">${m.teamHome.short}: ${m.teamHome.score} | ${m.teamAway.short}: ${m.teamAway.score}</span>
      <span class="ticker-status"><i class="fa-solid fa-circle" style="font-size: 6px; color: var(--cricket-red);"></i> LIVE</span>
    </div>
  `).join("");
}

// ==========================================
// 8. RENDER MATCH CARDS (GRID)
// ==========================================
function renderMatches() {
  const grid = document.getElementById("matchesGrid");
  const noResults = document.getElementById("noResults");
  if (!grid) return;

  const filtered = MATCHES_DATA.filter(match => {
    // Status filter
    if (currentStatusFilter !== "all" && match.status !== currentStatusFilter) {
      return false;
    }
    // Format filter
    if (currentFormatFilter !== "all" && match.format !== currentFormatFilter) {
      return false;
    }
    // Team chip filter
    if (currentTeamFilter !== "all") {
      const homeMatch = match.teamHome.name.toLowerCase().includes(currentTeamFilter.toLowerCase());
      const awayMatch = match.teamAway.name.toLowerCase().includes(currentTeamFilter.toLowerCase());
      if (!homeMatch && !awayMatch) return false;
    }
    // Search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchText = `${match.tournament} ${match.teamHome.name} ${match.teamAway.name} ${match.venue} ${match.format}`.toLowerCase();
      if (!matchText.includes(q)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");

  grid.innerHTML = filtered.map(match => {
    const isLive = match.status === "live";
    const statusClass = match.status;
    const statusText = match.status === "live" ? "LIVE" : (match.status === "upcoming" ? "UPCOMING" : "COMPLETED");

    return `
      <div class="match-card ${isLive ? 'is-live' : ''}" onclick="openMatchModal('${match.id}')">
        <div class="card-header">
          <span class="match-format-tag">${match.format}</span>
          <span class="match-tournament" title="${match.tournament}">${match.tournament}</span>
          <span class="status-pill ${statusClass}">${statusText}</span>
        </div>

        <div class="card-teams">
          <!-- Home Team -->
          <div class="team-row ${match.currentBatting === match.teamHome.name ? 'batting' : ''}">
            <div class="team-meta">
              <span class="team-flag">${match.teamHome.flag}</span>
              <span class="team-name">${match.teamHome.name}</span>
            </div>
            <div class="team-score-block">
              <span class="team-runs" id="score_${match.id}_home">${match.teamHome.score}</span>
              <span class="team-overs" id="overs_${match.id}_home">${match.teamHome.overs !== '-' ? '(' + match.teamHome.overs + ' ov)' : ''}</span>
            </div>
          </div>

          <!-- Away Team -->
          <div class="team-row ${match.currentBatting === match.teamAway.name ? 'batting' : ''}">
            <div class="team-meta">
              <span class="team-flag">${match.teamAway.flag}</span>
              <span class="team-name">${match.teamAway.name}</span>
            </div>
            <div class="team-score-block">
              <span class="team-runs" id="score_${match.id}_away">${match.teamAway.score}</span>
              <span class="team-overs" id="overs_${match.id}_away">${match.teamAway.overs !== '-' ? '(' + match.teamAway.overs + ' ov)' : ''}</span>
            </div>
          </div>
        </div>

        <div class="match-situation" id="situation_${match.id}">${match.situation}</div>

        ${isLive && match.batter1 ? `
          <div class="live-key-stats">
            <span>Batting: <strong>${match.batter1.name}</strong> (${match.batter1.runs}*)</span>
            <span>Bowler: <strong>${match.bowler.name}</strong> (${match.bowler.wickets}/${match.bowler.runs})</span>
          </div>
        ` : ''}

        <div class="card-footer">
          <span class="venue-text" title="${match.venue}">
            <i class="fa-solid fa-location-dot"></i> ${match.venue}
          </span>
          <span class="view-center-link">
            Match Center <i class="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================
// 9. RENDER ICC RANKINGS TABLE
// ==========================================
function renderRankings(format = "t20") {
  const tbody = document.getElementById("rankingsTableBody");
  if (!tbody) return;

  const list = ICC_RANKINGS[format] || ICC_RANKINGS.t20;

  tbody.innerHTML = list.map((item, index) => {
    let topClass = "";
    if (item.pos === 1) topClass = "rank-top-1";
    else if (item.pos === 2) topClass = "rank-top-2";
    else if (item.pos === 3) topClass = "rank-top-3";

    let trendHtml = `<span class="trend-steady"><i class="fa-solid fa-minus"></i> Steady</span>`;
    if (item.trend === "up") {
      trendHtml = `<span class="trend-up"><i class="fa-solid fa-arrow-up"></i> +1</span>`;
    } else if (item.trend === "down") {
      trendHtml = `<span class="trend-down"><i class="fa-solid fa-arrow-down"></i> -1</span>`;
    }

    return `
      <tr>
        <td class="rank-pos ${topClass}">${item.pos}</td>
        <td>
          <div class="team-rank-info">
            <span style="font-size: 1.4rem;">${item.flag}</span>
            <span>${item.team}</span>
          </div>
        </td>
        <td>${item.matches}</td>
        <td>${item.points}</td>
        <td><span class="rating-badge">${item.rating}</span></td>
        <td>${trendHtml}</td>
      </tr>
    `;
  }).join("");
}

// ==========================================
// 10. RENDER NEWS SECTION
// ==========================================
function renderNews() {
  const container = document.getElementById("newsGrid");
  if (!container) return;

  container.innerHTML = NEWS_DATA.map(news => `
    <article class="news-card">
      <div class="news-image" style="background-image: url('${news.image}')">
        <span class="news-tag">${news.tag}</span>
      </div>
      <div class="news-content">
        <h3>${news.title}</h3>
        <p>${news.snippet}</p>
        <div class="news-meta">
          <span><i class="fa-solid fa-clock"></i> ${news.time}</span>
          <span><i class="fa-solid fa-pen-nib"></i> ${news.author}</span>
        </div>
      </div>
    </article>
  `).join("");
}

// ==========================================
// 11. MATCH DETAILS & SCORECARD MODAL
// ==========================================
function openMatchModal(matchId) {
  const match = MATCHES_DATA.find(m => m.id === matchId);
  if (!match) return;

  selectedModalMatch = match;
  const backdrop = document.getElementById("matchModalBackdrop");

  // Headers
  document.getElementById("modalSeriesName").textContent = `${match.tournament} • ${match.format}`;
  document.getElementById("modalMatchTitle").textContent = `${match.teamHome.name} vs ${match.teamAway.name}`;
  document.getElementById("modalVenue").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${match.venue}`;

  // Summary Banner
  document.getElementById("modalSummaryBanner").innerHTML = `
    <div style="text-align: center;">
      <div style="font-size: 2.2rem;">${match.teamHome.flag}</div>
      <h4 style="font-size: 1.1rem; font-weight: 800;">${match.teamHome.name}</h4>
      <div style="font-family: var(--font-accent); font-size: 1.4rem; color: var(--cricket-green); font-weight: 800;">
        ${match.teamHome.score}
      </div>
      <span style="font-size: 0.8rem; color: var(--text-secondary);">(${match.teamHome.overs} ov)</span>
    </div>
    
    <div style="padding: 0 1rem;">
      <div class="vs-badge">${match.status.toUpperCase()}</div>
      <div style="font-weight: 700; color: var(--cricket-gold); font-size: 0.92rem; max-width: 280px; margin: 4px auto;">
        ${match.situation}
      </div>
    </div>

    <div style="text-align: center;">
      <div style="font-size: 2.2rem;">${match.teamAway.flag}</div>
      <h4 style="font-size: 1.1rem; font-weight: 800;">${match.teamAway.name}</h4>
      <div style="font-family: var(--font-accent); font-size: 1.4rem; color: var(--text-highlight); font-weight: 800;">
        ${match.teamAway.score}
      </div>
      <span style="font-size: 0.8rem; color: var(--text-secondary);">(${match.teamAway.overs} ov)</span>
    </div>
  `;

  // Render Tabs
  renderModalLiveFeed(match);
  renderModalScorecard(match);
  renderModalSquads(match);
  renderModalInfo(match);

  // Switch to first tab by default
  switchModalTab("liveFeed");

  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMatchModal() {
  const backdrop = document.getElementById("matchModalBackdrop");
  backdrop.classList.remove("open");
  document.body.style.overflow = "auto";
  selectedModalMatch = null;
}

function switchModalTab(tabId) {
  document.querySelectorAll(".modal-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.remove("active");
  });
  const activePane = document.getElementById(`tab${tabId.charAt(0).toUpperCase() + tabId.slice(1)}`);
  if (activePane) activePane.classList.add("active");
}

function renderModalLiveFeed(match) {
  const overSummary = document.getElementById("modalOverSummary");
  const commFeed = document.getElementById("modalCommentaryFeed");

  if (!match.recentBalls) {
    overSummary.innerHTML = `<span>Match status: ${match.situation}</span>`;
    commFeed.innerHTML = `<p style="color: var(--text-muted); padding: 1rem 0;">Ball by ball commentary will commence once play begins.</p>`;
    return;
  }

  // Render recent balls pill bar
  overSummary.innerHTML = `
    <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-secondary); margin-right: 0.5rem;">Recent Balls:</span>
    ${match.recentBalls.map(ball => {
      let bClass = "";
      if (ball === "4") bClass = "four";
      else if (ball === "6") bClass = "six";
      else if (ball === "W") bClass = "wicket";
      return `<div class="ball-circle ${bClass}">${ball}</div>`;
    }).join("")}
  `;

  // Render commentary list
  commFeed.innerHTML = match.commentary.map(comm => `
    <div class="comm-item">
      <div class="comm-over">${comm.over}</div>
      <div class="comm-desc">${comm.desc}</div>
    </div>
  `).join("");
}

function renderModalScorecard(match) {
  const container = document.getElementById("modalScorecardContainer");
  if (!match.batter1) {
    container.innerHTML = `<p style="color: var(--text-muted); padding: 1.5rem 0;">Scorecards will be published after the toss and teams take the field.</p>`;
    return;
  }

  container.innerHTML = `
    <!-- Current Batting Card -->
    <div class="scorecard-subheading">
      <span>Batting: ${match.currentBatting}</span>
      <span style="color: var(--cricket-green); font-size: 0.9rem;">Current Innings</span>
    </div>
    <table class="scorecard-table">
      <thead>
        <tr>
          <th>Batter</th>
          <th>R</th>
          <th>B</th>
          <th>4s</th>
          <th>6s</th>
          <th>SR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>${match.batter1.name}</strong> <span style="color: var(--cricket-green);">*</span></td>
          <td><strong>${match.batter1.runs}</strong></td>
          <td>${match.batter1.balls}</td>
          <td>${match.batter1.fours}</td>
          <td>${match.batter1.sixes}</td>
          <td>${match.batter1.sr}</td>
        </tr>
        <tr>
          <td><strong>${match.batter2.name}</strong> <span style="color: var(--cricket-green);">*</span></td>
          <td><strong>${match.batter2.runs}</strong></td>
          <td>${match.batter2.balls}</td>
          <td>${match.batter2.fours}</td>
          <td>${match.batter2.sixes}</td>
          <td>${match.batter2.sr}</td>
        </tr>
      </tbody>
    </table>

    <!-- Current Bowling Card -->
    <div class="scorecard-subheading">
      <span>Bowling</span>
    </div>
    <table class="scorecard-table">
      <thead>
        <tr>
          <th>Bowler</th>
          <th>O</th>
          <th>M</th>
          <th>R</th>
          <th>W</th>
          <th>ECON</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>${match.bowler.name}</strong></td>
          <td>${match.bowler.overs}</td>
          <td>${match.bowler.maidens}</td>
          <td>${match.bowler.runs}</td>
          <td><strong>${match.bowler.wickets}</strong></td>
          <td>${match.bowler.econ}</td>
        </tr>
      </tbody>
    </table>
  `;
}

function renderModalSquads(match) {
  const container = document.getElementById("modalSquadsContainer");
  if (!match.playingXI) {
    container.innerHTML = `<p style="color: var(--text-muted); padding: 1rem 0;">Playing XIs not announced yet.</p>`;
    return;
  }

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
      <div>
        <h4 style="font-weight: 800; margin-bottom: 0.8rem; color: var(--cricket-green);">
          ${match.teamHome.flag} ${match.teamHome.name} XI
        </h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.88rem;">
          ${match.playingXI.home.map((p, i) => `<li style="padding: 0.4rem 0.6rem; background: var(--bg-secondary); border-radius: 6px;">${i+1}. ${p}</li>`).join("")}
        </ul>
      </div>
      <div>
        <h4 style="font-weight: 800; margin-bottom: 0.8rem; color: var(--cricket-blue);">
          ${match.teamAway.flag} ${match.teamAway.name} XI
        </h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.88rem;">
          ${match.playingXI.away.map((p, i) => `<li style="padding: 0.4rem 0.6rem; background: var(--bg-secondary); border-radius: 6px;">${i+1}. ${p}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

function renderModalInfo(match) {
  const container = document.getElementById("modalInfoGrid");
  container.innerHTML = `
    <div class="info-item">
      <div class="info-label">Tournament</div>
      <div class="info-val">${match.tournament}</div>
    </div>
    <div class="info-item">
      <div class="info-label">Venue & Stadium</div>
      <div class="info-val">${match.venue}</div>
    </div>
    <div class="info-item">
      <div class="info-label">Toss Result</div>
      <div class="info-val">${match.toss || 'Scheduled before play'}</div>
    </div>
    <div class="info-item">
      <div class="info-label">Pitch Condition</div>
      <div class="info-val">${match.pitch || 'Standard international track'}</div>
    </div>
    <div class="info-item">
      <div class="info-label">Weather Forecast</div>
      <div class="info-val">${match.weather || 'Good weather conditions'}</div>
    </div>
    <div class="info-item">
      <div class="info-label">Format Regulations</div>
      <div class="info-val">${match.format} Standard ICC Rules</div>
    </div>
  `;
}

// ==========================================
// 12. REAL-TIME LIVE MATCH SIMULATION ENGINE
// ==========================================
function startLiveSimulation() {
  if (liveSimInterval) clearInterval(liveSimInterval);

  liveSimInterval = setInterval(() => {
    if (!isSimulating) return;

    // Pick a random live match to simulate a ball
    const liveMatches = MATCHES_DATA.filter(m => m.status === "live");
    if (liveMatches.length === 0) return;

    // Simulate for Match 1 (India vs Australia)
    simulateMatchBall(MATCHES_DATA[0]);

    // Update Hero Spotlight if match 1 was updated
    updateHeroSpotlightLive(MATCHES_DATA[0]);

    // If modal is open for this match, refresh its contents
    if (selectedModalMatch && selectedModalMatch.id === MATCHES_DATA[0].id) {
      renderModalLiveFeed(MATCHES_DATA[0]);
      renderModalScorecard(MATCHES_DATA[0]);
    }
  }, 4000);
}

function simulateMatchBall(match) {
  const outcomes = [1, 2, 0, 4, 1, 6, 1, 0, "W", 2];
  const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

  // Update balls & overs
  match.teamHome.currentBall += 1;
  if (match.teamHome.currentBall >= 6) {
    match.teamHome.currentBall = 0;
    match.teamHome.currentOver += 1;
  }
  match.teamHome.overs = `${match.teamHome.currentOver}.${match.teamHome.currentBall}`;

  if (outcome === "W") {
    match.teamHome.wickets += 1;
    match.recentBalls.unshift("W");
    match.commentary.unshift({
      over: match.teamHome.overs,
      desc: `<strong>WICKET!</strong> ${match.bowler.name} strikes! Edged and taken cleanly by the wicketkeeper!`
    });
  } else {
    const runs = Number(outcome);
    match.teamHome.runs += runs;
    match.batter1.runs += runs;
    match.batter1.balls += 1;
    match.bowler.runs += runs;
    match.recentBalls.unshift(String(outcome));

    let commentaryText = `${match.bowler.name} to ${match.batter1.name}, ${runs} run${runs > 1 ? 's' : ''}, pushed into the gap.`;
    if (runs === 4) {
      commentaryText = `${match.bowler.name} to ${match.batter1.name}, <strong>FOUR!</strong> Beautiful boundary driven through covers!`;
      match.batter1.fours += 1;
    } else if (runs === 6) {
      commentaryText = `${match.bowler.name} to ${match.batter1.name}, <strong>SIX!</strong> Massive blow towering high into the stands!`;
      match.batter1.sixes += 1;
    }
    match.commentary.unshift({
      over: match.teamHome.overs,
      desc: commentaryText
    });
  }

  // Keep recent balls at max 7
  if (match.recentBalls.length > 7) match.recentBalls.pop();
  if (match.commentary.length > 10) match.commentary.pop();

  // Update score string
  match.teamHome.score = `${match.teamHome.runs}/${match.teamHome.wickets}`;

  // Calculate target & situation
  const target = match.teamAway.runs + 1;
  const runsNeeded = target - match.teamHome.runs;
  const ballsRemaining = Math.max(0, 300 - (match.teamHome.currentOver * 6 + match.teamHome.currentBall));

  if (runsNeeded <= 0) {
    match.situation = `India won the ICC Champions Trophy Final by ${10 - match.teamHome.wickets} wickets!`;
    match.status = "recent";
  } else {
    match.situation = `India need ${runsNeeded} runs in ${ballsRemaining} balls to lift the trophy!`;
  }

  // Update Card UI directly without full re-render
  const scoreElem = document.getElementById(`score_${match.id}_home`);
  const oversElem = document.getElementById(`overs_${match.id}_home`);
  const situationElem = document.getElementById(`situation_${match.id}`);
  if (scoreElem) scoreElem.textContent = match.teamHome.score;
  if (oversElem) oversElem.textContent = `(${match.teamHome.overs} ov)`;
  if (situationElem) situationElem.textContent = match.situation;
}

function updateHeroSpotlightLive(match) {
  const heroHomeScore = document.getElementById("heroHomeScore");
  const heroHomeOvers = document.getElementById("heroHomeOvers");
  const heroSituation = document.getElementById("heroSituation");
  if (heroHomeScore) heroHomeScore.textContent = match.teamHome.score;
  if (heroHomeOvers) heroHomeOvers.textContent = `(${match.teamHome.overs} ov)`;
  if (heroSituation) heroSituation.textContent = match.situation;
}

function toggleSimulation() {
  isSimulating = !isSimulating;
  const btnText = document.getElementById("simBtnText");
  const btn = document.getElementById("toggleLiveSimBtn");
  if (isSimulating) {
    btnText.textContent = "Live Auto-Update: ON";
    btn.classList.add("pulse-accent");
  } else {
    btnText.textContent = "Live Auto-Update: OFF";
    btn.classList.remove("pulse-accent");
  }
}

// ==========================================
// 13. EVENT LISTENERS
// ==========================================
function setupEventListeners() {
  // Theme Toggle
  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);

  // Live Sim Toggle
  document.getElementById("toggleLiveSimBtn")?.addEventListener("click", toggleSimulation);

  // Status Filter Buttons
  document.querySelectorAll("#statusFilter .segment-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll("#statusFilter .segment-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentStatusFilter = btn.dataset.status;
      renderMatches();
    });
  });

  // Format Dropdown
  document.getElementById("formatFilter")?.addEventListener("change", (e) => {
    currentFormatFilter = e.target.value;
    renderMatches();
  });

  // Country Chips
  document.querySelectorAll(".team-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".team-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentTeamFilter = chip.dataset.team;
      renderMatches();
    });
  });

  // Search input
  document.getElementById("globalSearch")?.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderMatches();
  });

  // Reset Filters Button
  document.getElementById("resetFiltersBtn")?.addEventListener("click", () => {
    currentStatusFilter = "all";
    currentFormatFilter = "all";
    currentTeamFilter = "all";
    searchQuery = "";
    document.getElementById("globalSearch").value = "";
    document.getElementById("formatFilter").value = "all";
    document.querySelectorAll("#statusFilter .segment-btn").forEach((b, i) => b.classList.toggle("active", i === 0));
    document.querySelectorAll(".team-chip").forEach((c, i) => c.classList.toggle("active", i === 0));
    renderMatches();
  });

  // ICC Rankings Format Selector
  document.querySelectorAll("#rankingsFormatSelector .segment-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#rankingsFormatSelector .segment-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentRankingsFormat = btn.dataset.rankFormat;
      renderRankings(currentRankingsFormat);
    });
  });

  // Modal Close & Backdrop Click
  document.getElementById("closeModalBtn")?.addEventListener("click", closeMatchModal);
  document.getElementById("matchModalBackdrop")?.addEventListener("click", (e) => {
    if (e.target.id === "matchModalBackdrop") closeMatchModal();
  });

  // Keyboard ESC to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && selectedModalMatch) closeMatchModal();
  });

  // Modal Tabs
  document.querySelectorAll(".modal-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      switchModalTab(btn.dataset.tab);
    });
  });
}

// Quick filter helpers for links
window.filterByFormat = function(format) {
  const select = document.getElementById("formatFilter");
  if (select) {
    select.value = format;
    currentFormatFilter = format;
    renderMatches();
    document.getElementById("matches")?.scrollIntoView({ behavior: "smooth" });
  }
};

window.filterByTeam = function(team) {
  const chips = document.querySelectorAll(".team-chip");
  chips.forEach(c => {
    if (c.dataset.team.toLowerCase() === team.toLowerCase()) {
      c.click();
      document.getElementById("matches")?.scrollIntoView({ behavior: "smooth" });
    }
  });
};

window.filterByTournament = function(tourName) {
  searchQuery = tourName;
  const input = document.getElementById("globalSearch");
  if (input) input.value = tourName;
  renderMatches();
  document.getElementById("matches")?.scrollIntoView({ behavior: "smooth" });
};

window.openMatchModal = openMatchModal;
