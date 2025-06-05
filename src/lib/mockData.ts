
// Mock data para demonstração
export const mockPlayers = {
  hg: [
    {
      id: "1",
      name: "WildKing",
      rank: 1,
      wins: 2847,
      losses: 423,
      kills: 15672,
      deaths: 1289,
      clan: "Elite"
    },
    {
      id: "2", 
      name: "ShadowHunter",
      rank: 2,
      wins: 2156,
      losses: 567,
      kills: 12890,
      deaths: 1456,
      clan: "Legends"
    },
    {
      id: "3",
      name: "FireStorm",
      rank: 3,
      wins: 1987,
      losses: 234,
      kills: 11567,
      deaths: 987,
      clan: "Elite"
    },
    {
      id: "4",
      name: "IceBreaker",
      rank: 4,
      wins: 1845,
      losses: 678,
      kills: 10234,
      deaths: 1123,
      clan: "Frost"
    },
    {
      id: "5",
      name: "LightningBolt",
      rank: 5,
      wins: 1678,
      losses: 456,
      kills: 9876,
      deaths: 1034,
      clan: "Storm"
    }
  ],
  duels: [
    {
      id: "6",
      name: "DuelMaster",
      rank: 1,
      wins: 3456,
      losses: 234,
      kills: 8967,
      deaths: 567,
      clan: "Champions"
    },
    {
      id: "7",
      name: "BladeRunner",
      rank: 2,
      wins: 2890,
      losses: 345,
      kills: 7834,
      deaths: 678,
      clan: "Elite"
    },
    {
      id: "8",
      name: "QuickStrike",
      rank: 3,
      wins: 2567,
      losses: 198,
      kills: 6789,
      deaths: 456,
      clan: "Speed"
    }
  ],
  academy: [
    {
      id: "9",
      name: "StudentOne",
      rank: 1,
      wins: 1234,
      losses: 123,
      kills: 3456,
      deaths: 234,
      clan: "Learners"
    },
    {
      id: "10",
      name: "AcademyPro",
      rank: 2,
      wins: 1098,
      losses: 156,
      kills: 2987,
      deaths: 289,
      clan: "Students"
    }
  ]
};

export const mockClans = [
  {
    id: "elite",
    name: "Elite",
    description: "Os melhores jogadores do servidor Wild",
    members: 25,
    leader: "WildKing",
    totalWins: 15678,
    averageKD: 8.9,
    rank: 1,
    members_list: [
      { name: "WildKing", role: "Líder", wins: 2847, kd: 12.1 },
      { name: "FireStorm", role: "Co-Líder", wins: 1987, kd: 11.7 },
      { name: "BladeRunner", role: "Membro", wins: 2890, kd: 11.5 }
    ]
  },
  {
    id: "legends",
    name: "Legends",
    description: "Lendas do PvP",
    members: 18,
    leader: "ShadowHunter",
    totalWins: 12456,
    averageKD: 7.8,
    rank: 2,
    members_list: [
      { name: "ShadowHunter", role: "Líder", wins: 2156, kd: 8.8 }
    ]
  }
];

export const mockPlayerProfile = {
  name: "WildKing",
  clan: "Elite",
  rank: 1,
  joinDate: "2023-01-15",
  lastSeen: "2024-01-10",
  stats: {
    hg: {
      wins: 2847,
      losses: 423,
      kills: 15672,
      deaths: 1289,
      winStreak: 25,
      bestStreak: 47
    },
    duels: {
      wins: 1234,
      losses: 89,
      kills: 3456,
      deaths: 234,
      winStreak: 12,
      bestStreak: 28
    },
    academy: {
      wins: 567,
      losses: 23,
      kills: 1234,
      deaths: 67,
      winStreak: 8,
      bestStreak: 15
    }
  },
  recentMatches: [
    {
      id: "1",
      mode: "HG",
      result: "Vitória",
      kills: 8,
      deaths: 1,
      date: "2024-01-10",
      duration: "12:34"
    },
    {
      id: "2",
      mode: "Duels",
      result: "Vitória",
      kills: 3,
      deaths: 0,
      date: "2024-01-10",
      duration: "5:23"
    }
  ]
};
