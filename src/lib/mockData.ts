
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

// Profiles detalhados para cada jogador
export const mockPlayerProfiles = {
  "WildKing": {
    name: "WildKing",
    clan: "Elite",
    rank: 1,
    joinDate: "2023-01-15",
    lastSeen: "2024-01-10",
    discord: "@wildking_br",
    stats: {
      hg: {
        wins: 2847,
        losses: 423,
        kills: 15672,
        deaths: 1289,
        winStreak: 25,
        bestStreak: 47,
        rank: 1
      },
      duels: {
        wins: 1234,
        losses: 89,
        kills: 3456,
        deaths: 234,
        winStreak: 12,
        bestStreak: 28,
        rank: 5
      },
      academy: {
        wins: 567,
        losses: 23,
        kills: 1234,
        deaths: 67,
        winStreak: 8,
        bestStreak: 15,
        rank: 3
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
  },
  "ShadowHunter": {
    name: "ShadowHunter",
    clan: "Legends",
    rank: 2,
    joinDate: "2023-02-20",
    lastSeen: "2024-01-09",
    discord: "@shadow_hunter",
    stats: {
      hg: {
        wins: 2156,
        losses: 567,
        kills: 12890,
        deaths: 1456,
        winStreak: 18,
        bestStreak: 39,
        rank: 2
      },
      duels: {
        wins: 890,
        losses: 123,
        kills: 2890,
        deaths: 345,
        winStreak: 8,
        bestStreak: 22,
        rank: 8
      },
      academy: {
        wins: 234,
        losses: 45,
        kills: 567,
        deaths: 89,
        winStreak: 3,
        bestStreak: 12,
        rank: 7
      }
    },
    recentMatches: [
      {
        id: "1",
        mode: "HG",
        result: "Vitória",
        kills: 6,
        deaths: 2,
        date: "2024-01-09",
        duration: "15:23"
      },
      {
        id: "2",
        mode: "Duels",
        result: "Derrota",
        kills: 2,
        deaths: 1,
        date: "2024-01-09",
        duration: "3:45"
      }
    ]
  },
  "FireStorm": {
    name: "FireStorm",
    clan: "Elite",
    rank: 3,
    joinDate: "2023-03-10",
    lastSeen: "2024-01-08",
    stats: {
      hg: {
        wins: 1987,
        losses: 234,
        kills: 11567,
        deaths: 987,
        winStreak: 22,
        bestStreak: 35,
        rank: 3
      },
      duels: {
        wins: 756,
        losses: 98,
        kills: 2345,
        deaths: 278,
        winStreak: 6,
        bestStreak: 18,
        rank: 6
      },
      academy: {
        wins: 345,
        losses: 67,
        kills: 789,
        deaths: 123,
        winStreak: 5,
        bestStreak: 14,
        rank: 4
      }
    },
    recentMatches: [
      {
        id: "1",
        mode: "HG",
        result: "Vitória",
        kills: 7,
        deaths: 1,
        date: "2024-01-08",
        duration: "11:12"
      },
      {
        id: "2",
        mode: "Academy",
        result: "Vitória",
        kills: 4,
        deaths: 0,
        date: "2024-01-08",
        duration: "8:34"
      }
    ]
  },
  "IceBreaker": {
    name: "IceBreaker",
    clan: "Frost",
    rank: 4,
    joinDate: "2023-04-05",
    lastSeen: "2024-01-07",
    discord: "@icebreaker_mc",
    stats: {
      hg: {
        wins: 1845,
        losses: 678,
        kills: 10234,
        deaths: 1123,
        winStreak: 12,
        bestStreak: 28,
        rank: 4
      },
      duels: {
        wins: 634,
        losses: 156,
        kills: 1890,
        deaths: 234,
        winStreak: 4,
        bestStreak: 15,
        rank: 9
      },
      academy: {
        wins: 289,
        losses: 89,
        kills: 567,
        deaths: 134,
        winStreak: 2,
        bestStreak: 9,
        rank: 8
      }
    },
    recentMatches: [
      {
        id: "1",
        mode: "HG",
        result: "Derrota",
        kills: 3,
        deaths: 1,
        date: "2024-01-07",
        duration: "9:45"
      },
      {
        id: "2",
        mode: "Duels",
        result: "Vitória",
        kills: 1,
        deaths: 0,
        date: "2024-01-07",
        duration: "2:15"
      }
    ]
  },
  "LightningBolt": {
    name: "LightningBolt",
    clan: "Storm",
    rank: 5,
    joinDate: "2023-05-18",
    lastSeen: "2024-01-06",
    stats: {
      hg: {
        wins: 1678,
        losses: 456,
        kills: 9876,
        deaths: 1034,
        winStreak: 9,
        bestStreak: 24,
        rank: 5
      },
      duels: {
        wins: 523,
        losses: 134,
        kills: 1567,
        deaths: 189,
        winStreak: 3,
        bestStreak: 13,
        rank: 12
      },
      academy: {
        wins: 234,
        losses: 78,
        kills: 456,
        deaths: 98,
        winStreak: 1,
        bestStreak: 8,
        rank: 11
      }
    },
    recentMatches: [
      {
        id: "1",
        mode: "HG",
        result: "Vitória",
        kills: 5,
        deaths: 2,
        date: "2024-01-06",
        duration: "13:21"
      }
    ]
  },
  "DuelMaster": {
    name: "DuelMaster",
    clan: "Champions",
    rank: 1,
    joinDate: "2023-01-10",
    lastSeen: "2024-01-11",
    discord: "@duelmaster_pro",
    stats: {
      hg: {
        wins: 1256,
        losses: 234,
        kills: 7890,
        deaths: 567,
        winStreak: 8,
        bestStreak: 19,
        rank: 8
      },
      duels: {
        wins: 3456,
        losses: 234,
        kills: 8967,
        deaths: 567,
        winStreak: 45,
        bestStreak: 67,
        rank: 1
      },
      academy: {
        wins: 567,
        losses: 89,
        kills: 1234,
        deaths: 123,
        winStreak: 12,
        bestStreak: 23,
        rank: 2
      }
    },
    recentMatches: [
      {
        id: "1",
        mode: "Duels",
        result: "Vitória",
        kills: 1,
        deaths: 0,
        date: "2024-01-11",
        duration: "1:45"
      },
      {
        id: "2",
        mode: "Duels",
        result: "Vitória",
        kills: 1,
        deaths: 0,
        date: "2024-01-11",
        duration: "2:12"
      }
    ]
  },
  "BladeRunner": {
    name: "BladeRunner",
    clan: "Elite",
    rank: 2,
    joinDate: "2023-02-15",
    lastSeen: "2024-01-10",
    stats: {
      hg: {
        wins: 1789,
        losses: 345,
        kills: 9876,
        deaths: 789,
        winStreak: 15,
        bestStreak: 28,
        rank: 6
      },
      duels: {
        wins: 2890,
        losses: 345,
        kills: 7834,
        deaths: 678,
        winStreak: 23,
        bestStreak: 41,
        rank: 2
      },
      academy: {
        wins: 456,
        losses: 67,
        kills: 987,
        deaths: 145,
        winStreak: 7,
        bestStreak: 18,
        rank: 5
      }
    },
    recentMatches: [
      {
        id: "1",
        mode: "Duels",
        result: "Vitória",
        kills: 1,
        deaths: 0,
        date: "2024-01-10",
        duration: "3:21"
      },
      {
        id: "2",
        mode: "HG",
        result: "Vitória",
        kills: 6,
        deaths: 1,
        date: "2024-01-10",
        duration: "14:56"
      }
    ]
  },
  "QuickStrike": {
    name: "QuickStrike",
    clan: "Speed",
    rank: 3,
    joinDate: "2023-03-20",
    lastSeen: "2024-01-09",
    stats: {
      hg: {
        wins: 1345,
        losses: 267,
        kills: 7654,
        deaths: 654,
        winStreak: 11,
        bestStreak: 22,
        rank: 9
      },
      duels: {
        wins: 2567,
        losses: 198,
        kills: 6789,
        deaths: 456,
        winStreak: 18,
        bestStreak: 34,
        rank: 3
      },
      academy: {
        wins: 234,
        losses: 45,
        kills: 567,
        deaths: 89,
        winStreak: 4,
        bestStreak: 12,
        rank: 9
      }
    },
    recentMatches: [
      {
        id: "1",
        mode: "Duels",
        result: "Vitória",
        kills: 1,
        deaths: 0,
        date: "2024-01-09",
        duration: "2:43"
      },
      {
        id: "2",
        mode: "Duels",
        result: "Vitória",
        kills: 1,
        deaths: 0,
        date: "2024-01-09",
        duration: "1:56"
      }
    ]
  },
  "StudentOne": {
    name: "StudentOne",
    clan: "Learners",
    rank: 1,
    joinDate: "2023-06-01",
    lastSeen: "2024-01-12",
    stats: {
      hg: {
        wins: 567,
        losses: 123,
        kills: 2345,
        deaths: 345,
        winStreak: 5,
        bestStreak: 12,
        rank: 15
      },
      duels: {
        wins: 789,
        losses: 156,
        kills: 1890,
        deaths: 234,
        winStreak: 8,
        bestStreak: 15,
        rank: 7
      },
      academy: {
        wins: 1234,
        losses: 123,
        kills: 3456,
        deaths: 234,
        winStreak: 25,
        bestStreak: 34,
        rank: 1
      }
    },
    recentMatches: [
      {
        id: "1",
        mode: "Academy",
        result: "Vitória",
        kills: 3,
        deaths: 0,
        date: "2024-01-12",
        duration: "8:23"
      },
      {
        id: "2",
        mode: "Academy",
        result: "Vitória",
        kills: 2,
        deaths: 1,
        date: "2024-01-12",
        duration: "6:45"
      }
    ]
  },
  "AcademyPro": {
    name: "AcademyPro",
    clan: "Students",
    rank: 2,
    joinDate: "2023-07-15",
    lastSeen: "2024-01-11",
    discord: "@academy_pro",
    stats: {
      hg: {
        wins: 456,
        losses: 98,
        kills: 1789,
        deaths: 267,
        winStreak: 3,
        bestStreak: 9,
        rank: 18
      },
      duels: {
        wins: 567,
        losses: 134,
        kills: 1456,
        deaths: 189,
        winStreak: 6,
        bestStreak: 13,
        rank: 11
      },
      academy: {
        wins: 1098,
        losses: 156,
        kills: 2987,
        deaths: 289,
        winStreak: 15,
        bestStreak: 27,
        rank: 2
      }
    },
    recentMatches: [
      {
        id: "1",
        mode: "Academy",
        result: "Vitória",
        kills: 4,
        deaths: 1,
        date: "2024-01-11",
        duration: "9:12"
      },
      {
        id: "2",
        mode: "Duels",
        result: "Derrota",
        kills: 0,
        deaths: 1,
        date: "2024-01-11",
        duration: "1:23"
      }
    ]
  }
};

// Para compatibilidade, mantemos o mockPlayerProfile apontando para WildKing
export const mockPlayerProfile = mockPlayerProfiles["WildKing"];
