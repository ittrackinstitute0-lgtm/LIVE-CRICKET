/**
 * CRICPULSE WORLD CRICKET PLATFORM - JAVASCRIPT ENGINE
 * Handles world cricket fixtures, live simulation, filtering, search, modal scorecards, and ICC rankings.
 */

// ==========================================
// 1. GLOBAL MATCHES DATA STORE
// ==========================================
const MATCHES_DATA = [
  {
    "id": "m1",
    "tournament": "Border-Gavaskar Trophy - 2nd Test (Adelaide Oval)",
    "format": "Test",
    "status": "live",
    "featured": true,
    "teamHome": {
      "name": "Australia",
      "short": "AUS",
      "flag": "🇦🇺",
      "score": "337 & 182/4",
      "overs": "46.2",
      "runs": 182,
      "wickets": 4,
      "currentOver": 46,
      "currentBall": 2
    },
    "teamAway": {
      "name": "India",
      "short": "IND",
      "flag": "🇮🇳",
      "score": "180 & 175",
      "overs": "53.5",
      "runs": 175,
      "wickets": 10,
      "currentOver": 53,
      "currentBall": 5
    },
    "battingFirst": "India",
    "currentBatting": "Australia",
    "situation": "Australia lead by 164 runs with 6 wickets in hand. Day 3 Pink Ball twilight session.",
    "crr": "3.92",
    "rrr": "-",
    "venue": "Adelaide Oval, Adelaide, Australia",
    "toss": "India won the toss and elected to bat first",
    "pitch": "Pink ball track offering vicious swing and seam movement under the floodlights",
    "weather": "22°C Clear twilight sky, brisk southern breeze",
    "batter1": {
      "name": "Travis Head",
      "runs": 84,
      "balls": 89,
      "fours": 10,
      "sixes": 1,
      "sr": "94.4"
    },
    "batter2": {
      "name": "Mitchell Marsh",
      "runs": 28,
      "balls": 34,
      "fours": 3,
      "sixes": 1,
      "sr": "82.3"
    },
    "bowler": {
      "name": "Jasprit Bumrah",
      "overs": "14.2",
      "maidens": 2,
      "runs": 48,
      "wickets": 2,
      "econ": "3.34"
    },
    "recentBalls": [
      "1",
      "4",
      "0",
      "2",
      "6",
      "1"
    ],
    "commentary": [
      {
        "over": "46.2",
        "desc": "Bumrah to Travis Head, 1 run, pushed softly wide of point for a single."
      },
      {
        "over": "46.1",
        "desc": "Bumrah to Travis Head, <strong>SIX!</strong> What a counter-attack! Full delivery whipped audaciously over mid-wicket into the Adelaide crowd!"
      },
      {
        "over": "45.6",
        "desc": "Siraj to Marsh, 2 runs, clipped through square leg, good running between the wickets."
      }
    ],
    "playingXI": {
      "home": [
        "Usman Khawaja",
        "Nathan McSweeney",
        "Marnus Labuschagne",
        "Steve Smith",
        "Travis Head",
        "Mitchell Marsh",
        "Alex Carey (WK)",
        "Pat Cummins (C)",
        "Mitchell Starc",
        "Nathan Lyon",
        "Scott Boland"
      ],
      "away": [
        "Rohit Sharma (C)",
        "Yashasvi Jaiswal",
        "KL Rahul",
        "Virat Kohli",
        "Rishabh Pant (WK)",
        "Dhruv Jurel",
        "Nitish Kumar Reddy",
        "Washington Sundar",
        "Jasprit Bumrah",
        "Mohammed Siraj",
        "Akash Deep"
      ]
    }
  },
  {
    "id": "m2",
    "tournament": "Pakistan Tour of Zimbabwe - 1st ODI",
    "format": "ODI",
    "status": "live",
    "featured": false,
    "teamHome": {
      "name": "Zimbabwe",
      "short": "ZIM",
      "flag": "🇿🇼",
      "score": "205",
      "overs": "40.2",
      "runs": 205,
      "wickets": 10,
      "currentOver": 40,
      "currentBall": 2
    },
    "teamAway": {
      "name": "Pakistan",
      "short": "PAK",
      "flag": "🇵🇰",
      "score": "164/3",
      "overs": "28.4",
      "runs": 164,
      "wickets": 3,
      "currentOver": 28,
      "currentBall": 4
    },
    "battingFirst": "Zimbabwe",
    "currentBatting": "Pakistan",
    "situation": "Pakistan need 42 runs in 128 balls with 7 wickets in hand.",
    "crr": "5.72",
    "rrr": "1.96",
    "venue": "Queens Sports Club, Bulawayo, Zimbabwe",
    "toss": "Pakistan won the toss and elected to bowl",
    "pitch": "True batting surface with consistent bounce; spinners getting subtle grip",
    "weather": "26°C Sunny, low humidity",
    "batter1": {
      "name": "Kamran Ghulam",
      "runs": 62,
      "balls": 58,
      "fours": 6,
      "sixes": 2,
      "sr": "106.9"
    },
    "batter2": {
      "name": "Mohammad Rizwan",
      "runs": 39,
      "balls": 44,
      "fours": 3,
      "sixes": 0,
      "sr": "88.6"
    },
    "bowler": {
      "name": "Sikandar Raza",
      "overs": "6.4",
      "maidens": 0,
      "runs": 34,
      "wickets": 1,
      "econ": "5.10"
    },
    "recentBalls": [
      "1",
      "4",
      "1",
      "0",
      "2",
      "1"
    ],
    "commentary": [
      {
        "over": "28.4",
        "desc": "Raza to Kamran Ghulam, 1 run, worked off the hip towards fine leg."
      },
      {
        "over": "28.3",
        "desc": "Raza to Kamran Ghulam, <strong>FOUR!</strong> Stepped down the track and carved through cover point!"
      }
    ],
    "playingXI": {
      "home": [
        "Joylord Gumbie (WK)",
        "Tadiwanashe Marumani",
        "Dion Myers",
        "Craig Ervine (C)",
        "Sikandar Raza",
        "Ryan Burl",
        "Clive Madande",
        "Faraz Akram",
        "Wellington Masakadza",
        "Richard Ngarava",
        "Blessing Muzarabani"
      ],
      "away": [
        "Saim Ayub",
        "Abdullah Shafique",
        "Kamran Ghulam",
        "Mohammad Rizwan (C & WK)",
        "Salman Ali Agha",
        "Irfan Khan",
        "Aamer Jamal",
        "Shaheen Afridi",
        "Haris Rauf",
        "Abrar Ahmed",
        "Faisal Akram"
      ]
    }
  },
  {
    "id": "m3",
    "tournament": "Border-Gavaskar Trophy - 1st Test (Perth)",
    "format": "Test",
    "status": "recent",
    "featured": false,
    "teamHome": {
      "name": "India",
      "short": "IND",
      "flag": "🇮🇳",
      "score": "150 & 487/6 d",
      "overs": "134.3",
      "runs": 487,
      "wickets": 6,
      "currentOver": 134,
      "currentBall": 3
    },
    "teamAway": {
      "name": "Australia",
      "short": "AUS",
      "flag": "🇦🇺",
      "score": "104 & 238",
      "overs": "58.4",
      "runs": 238,
      "wickets": 10,
      "currentOver": 58,
      "currentBall": 4
    },
    "battingFirst": "India",
    "currentBatting": "Australia",
    "situation": "India won by 295 runs! Jasprit Bumrah takes 8 wickets (5/30 in 1st innings).",
    "crr": "3.62",
    "rrr": "-",
    "venue": "Perth Stadium, Perth, Australia",
    "toss": "India won the toss and elected to bat first",
    "pitch": "Fiery Optus Stadium surface with steep bounce and lethal pace",
    "weather": "28°C Sunny and warm",
    "batter1": {
      "name": "Yashasvi Jaiswal",
      "runs": 161,
      "balls": 297,
      "fours": 15,
      "sixes": 3,
      "sr": "54.2"
    },
    "batter2": {
      "name": "Virat Kohli",
      "runs": 100,
      "balls": 143,
      "fours": 8,
      "sixes": 2,
      "sr": "69.9"
    },
    "bowler": {
      "name": "Jasprit Bumrah",
      "overs": "18.0",
      "maidens": 3,
      "runs": 42,
      "wickets": 3,
      "econ": "2.33"
    },
    "recentBalls": [
      "W",
      "0",
      "1",
      "0",
      "W"
    ],
    "commentary": [
      {
        "over": "58.4",
        "desc": "<strong>WICKET!</strong> Bumrah cleans up the tail! Australia are bowled out for 238, India record a monumental 295-run victory!"
      },
      {
        "over": "58.3",
        "desc": "Bumrah to Hazlewood, no run, searing yorker dug out right in the blockhole."
      }
    ],
    "playingXI": {
      "home": [
        "KL Rahul",
        "Yashasvi Jaiswal",
        "Devdutt Padikkal",
        "Virat Kohli",
        "Rishabh Pant (WK)",
        "Dhruv Jurel",
        "Washington Sundar",
        "Nitish Kumar Reddy",
        "Harshit Rana",
        "Jasprit Bumrah (C)",
        "Mohammed Siraj"
      ],
      "away": [
        "Usman Khawaja",
        "Nathan McSweeney",
        "Marnus Labuschagne",
        "Steve Smith",
        "Travis Head",
        "Mitchell Marsh",
        "Alex Carey (WK)",
        "Pat Cummins (C)",
        "Mitchell Starc",
        "Nathan Lyon",
        "Josh Hazlewood"
      ]
    }
  },
  {
    "id": "m4",
    "tournament": "Pakistan Tour of Australia - 3rd ODI Decider",
    "format": "ODI",
    "status": "recent",
    "featured": false,
    "teamHome": {
      "name": "Australia",
      "short": "AUS",
      "flag": "🇦🇺",
      "score": "140",
      "overs": "31.5",
      "runs": 140,
      "wickets": 10,
      "currentOver": 31,
      "currentBall": 5
    },
    "teamAway": {
      "name": "Pakistan",
      "short": "PAK",
      "flag": "🇵🇰",
      "score": "143/2",
      "overs": "26.5",
      "runs": 143,
      "wickets": 2,
      "currentOver": 26,
      "currentBall": 5
    },
    "battingFirst": "Australia",
    "currentBatting": "Pakistan",
    "situation": "Pakistan won by 8 wickets with 139 balls remaining to win the historic series 2-1!",
    "crr": "5.32",
    "rrr": "-",
    "venue": "Perth Stadium, Perth, Australia",
    "toss": "Pakistan won the toss and elected to bowl",
    "pitch": "Lethal bounce exploited by Pakistan pacers",
    "weather": "25°C Clear Sky",
    "batter1": {
      "name": "Saim Ayub",
      "runs": 42,
      "balls": 52,
      "fours": 4,
      "sixes": 1,
      "sr": "80.7"
    },
    "batter2": {
      "name": "Babar Azam",
      "runs": 28,
      "balls": 30,
      "fours": 4,
      "sixes": 0,
      "sr": "93.3"
    },
    "bowler": {
      "name": "Haris Rauf",
      "overs": "7.0",
      "maidens": 0,
      "runs": 24,
      "wickets": 3,
      "econ": "3.42"
    },
    "recentBalls": [
      "4",
      "1",
      "1",
      "1",
      "4"
    ],
    "commentary": [
      {
        "over": "26.5",
        "desc": "<strong>FOUR!</strong> Babar Azam pulls through midwicket to seal Pakistan's first ODI series victory in Australia in 22 years!"
      }
    ],
    "playingXI": {
      "home": [
        "Matt Short",
        "Jake Fraser-McGurk",
        "Josh Inglis (C & WK)",
        "Cooper Connolly",
        "Marcus Stoinis",
        "Glenn Maxwell",
        "Aaron Hardie",
        "Sean Abbott",
        "Adam Zampa",
        "Spencer Johnson",
        "Lance Morris"
      ],
      "away": [
        "Saim Ayub",
        "Abdullah Shafique",
        "Babar Azam",
        "Mohammad Rizwan (C & WK)",
        "Kamran Ghulam",
        "Salman Ali Agha",
        "Irfan Khan",
        "Shaheen Afridi",
        "Naseem Shah",
        "Haris Rauf",
        "Mohammad Hasnain"
      ]
    }
  },
  {
    "id": "m5",
    "tournament": "India Tour of South Africa - 4th T20I",
    "format": "T20I",
    "status": "recent",
    "featured": false,
    "teamHome": {
      "name": "India",
      "short": "IND",
      "flag": "🇮🇳",
      "score": "283/1",
      "overs": "20.0",
      "runs": 283,
      "wickets": 1,
      "currentOver": 20,
      "currentBall": 0
    },
    "teamAway": {
      "name": "South Africa",
      "short": "SA",
      "flag": "🇿🇦",
      "score": "148",
      "overs": "18.2",
      "runs": 148,
      "wickets": 10,
      "currentOver": 18,
      "currentBall": 2
    },
    "battingFirst": "India",
    "currentBatting": "South Africa",
    "situation": "India won by 135 runs! Twin centuries by Tilak Varma (120*) & Sanju Samson (109*).",
    "crr": "14.15",
    "rrr": "-",
    "venue": "The Wanderers Stadium, Johannesburg",
    "toss": "India won the toss and elected to bat first",
    "pitch": "True high-scoring surface with short boundaries",
    "weather": "21°C Mild evening",
    "batter1": {
      "name": "Tilak Varma",
      "runs": 120,
      "balls": 47,
      "fours": 9,
      "sixes": 10,
      "sr": "255.3"
    },
    "batter2": {
      "name": "Sanju Samson",
      "runs": 109,
      "balls": 56,
      "fours": 6,
      "sixes": 9,
      "sr": "194.6"
    },
    "bowler": {
      "name": "Arshdeep Singh",
      "overs": "4.0",
      "maidens": 0,
      "runs": 20,
      "wickets": 3,
      "econ": "5.00"
    },
    "recentBalls": [
      "W",
      "0",
      "1",
      "W"
    ],
    "commentary": [
      {
        "over": "18.2",
        "desc": "<strong>WICKET!</strong> Ramandeep takes a sharp catch at deep midwicket! South Africa are bowled out for 148."
      }
    ],
    "playingXI": {
      "home": [
        "Sanju Samson (WK)",
        "Abhishek Sharma",
        "Tilak Varma",
        "Suryakumar Yadav (C)",
        "Hardik Pandya",
        "Rinku Singh",
        "Ramandeep Singh",
        "Axar Patel",
        "Arshdeep Singh",
        "Ravi Bishnoi",
        "Varun Chakaravarthy"
      ],
      "away": [
        "Ryan Rickelton",
        "Reeza Hendricks",
        "Aiden Markram (C)",
        "Tristan Stubbs",
        "Heinrich Klaasen (WK)",
        "David Miller",
        "Marco Jansen",
        "Andile Simelane",
        "Gerald Coetzee",
        "Keshav Maharaj",
        "Lutho Sipamla"
      ]
    }
  },
  {
    "id": "m6",
    "tournament": "ICC World Test Championship - South Africa vs Sri Lanka 1st Test",
    "format": "Test",
    "status": "recent",
    "featured": false,
    "teamHome": {
      "name": "South Africa",
      "short": "SA",
      "flag": "🇿🇦",
      "score": "191 & 366/5 d",
      "overs": "103.0",
      "runs": 366,
      "wickets": 5,
      "currentOver": 103,
      "currentBall": 0
    },
    "teamAway": {
      "name": "Sri Lanka",
      "short": "SL",
      "flag": "🇱🇰",
      "score": "42 & 282",
      "overs": "79.0",
      "runs": 282,
      "wickets": 10,
      "currentOver": 79,
      "currentBall": 0
    },
    "battingFirst": "South Africa",
    "currentBatting": "Sri Lanka",
    "situation": "South Africa won by 233 runs. Marco Jansen took 11 wickets in the match (7/13 in 1st inn).",
    "crr": "3.55",
    "rrr": "-",
    "venue": "Kingsmead, Durban, South Africa",
    "toss": "Sri Lanka won the toss and elected to bowl",
    "pitch": "Green seaming pitch with lethal seam movement and swing",
    "weather": "24°C Humid coastal condition",
    "batter1": {
      "name": "Tristan Stubbs",
      "runs": 122,
      "balls": 221,
      "fours": 9,
      "sixes": 1,
      "sr": "55.2"
    },
    "batter2": {
      "name": "Temba Bavuma",
      "runs": 113,
      "balls": 218,
      "fours": 11,
      "sixes": 0,
      "sr": "51.8"
    },
    "bowler": {
      "name": "Marco Jansen",
      "overs": "16.0",
      "maidens": 4,
      "runs": 73,
      "wickets": 4,
      "econ": "4.56"
    },
    "recentBalls": [
      "W",
      "0",
      "0",
      "1",
      "W"
    ],
    "commentary": [
      {
        "over": "79.0",
        "desc": "<strong>WICKET!</strong> Marco Jansen cleans up Asitha Fernando! South Africa wrap up a crushing 233-run victory at Kingsmead!"
      }
    ],
    "playingXI": {
      "home": [
        "Aiden Markram",
        "Tony de Zorzi",
        "Tristan Stubbs",
        "Temba Bavuma (C)",
        "David Bedingham",
        "Kyle Verreynne (WK)",
        "Marco Jansen",
        "Keshav Maharaj",
        "Gerald Coetzee",
        "Kagiso Rabada",
        "Dane Paterson"
      ],
      "away": [
        "Pathum Nissanka",
        "Dimuth Karunaratne",
        "Dinesh Chandimal",
        "Angelo Mathews",
        "Kamindu Mendis",
        "Dhananjaya de Silva (C)",
        "Kusal Mendis (WK)",
        "Prabath Jayasuriya",
        "Lahiru Kumara",
        "Asitha Fernando",
        "Vishwa Fernando"
      ]
    }
  },
  {
    "id": "m7",
    "tournament": "ICC World Test Championship - South Africa vs Sri Lanka 2nd Test",
    "format": "Test",
    "status": "upcoming",
    "featured": false,
    "teamHome": {
      "name": "South Africa",
      "short": "SA",
      "flag": "🇿🇦",
      "score": "Yet to bat",
      "overs": "-",
      "runs": 0,
      "wickets": 0
    },
    "teamAway": {
      "name": "Sri Lanka",
      "short": "SL",
      "flag": "🇱🇰",
      "score": "Yet to bat",
      "overs": "-",
      "runs": 0,
      "wickets": 0
    },
    "situation": "Crucial WTC fixture at St George's Park; Proteas push for World Test Championship final spot.",
    "venue": "St George's Park, Gqeberha, South Africa",
    "toss": "Scheduled before Day 1 start",
    "pitch": "Abrasive surface offering reverse swing and reverse spin on Days 4 & 5",
    "weather": "22°C Windy coastal conditions",
    "playingXI": {
      "home": [
        "Aiden Markram",
        "Tony de Zorzi",
        "Tristan Stubbs",
        "Temba Bavuma (C)",
        "David Bedingham",
        "Kyle Verreynne (WK)",
        "Marco Jansen",
        "Keshav Maharaj",
        "Kagiso Rabada",
        "Dane Paterson"
      ],
      "away": [
        "Pathum Nissanka",
        "Dimuth Karunaratne",
        "Dinesh Chandimal",
        "Kamindu Mendis",
        "Angelo Mathews",
        "Dhananjaya de Silva (C)",
        "Kusal Mendis (WK)",
        "Prabath Jayasuriya",
        "Lahiru Kumara",
        "Asitha Fernando"
      ]
    }
  },
  {
    "id": "m8",
    "tournament": "Border-Gavaskar Trophy - 3rd Test (The Gabba)",
    "format": "Test",
    "status": "upcoming",
    "featured": false,
    "teamHome": {
      "name": "Australia",
      "short": "AUS",
      "flag": "🇦🇺",
      "score": "Yet to bat",
      "overs": "-",
      "runs": 0,
      "wickets": 0
    },
    "teamAway": {
      "name": "India",
      "short": "IND",
      "flag": "🇮🇳",
      "score": "Yet to bat",
      "overs": "-",
      "runs": 0,
      "wickets": 0
    },
    "situation": "The Gabba Test match in Brisbane; high bounce and fast outfield expected.",
    "venue": "The Gabba, Brisbane, Australia",
    "toss": "Day 1 toss at 09:30 local time",
    "pitch": "Traditional bouncy Gabba wicket with early seam and great carry",
    "weather": "29°C Humid, afternoon storm risk",
    "playingXI": {
      "home": [
        "Usman Khawaja",
        "Nathan McSweeney",
        "Marnus Labuschagne",
        "Steve Smith",
        "Travis Head",
        "Mitchell Marsh",
        "Alex Carey (WK)",
        "Pat Cummins (C)",
        "Mitchell Starc",
        "Nathan Lyon",
        "Josh Hazlewood"
      ],
      "away": [
        "Rohit Sharma (C)",
        "Yashasvi Jaiswal",
        "KL Rahul",
        "Virat Kohli",
        "Rishabh Pant (WK)",
        "Dhruv Jurel",
        "Nitish Kumar Reddy",
        "Washington Sundar",
        "Jasprit Bumrah",
        "Mohammed Siraj",
        "Akash Deep"
      ]
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
