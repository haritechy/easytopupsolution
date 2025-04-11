export async function getOverviewData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    views: {
      value: 3456,
      growthRate: 0.43,
    },
    profit: {
      value: 4220,
      growthRate: 4.35,
    },
    products: {
      value: 3456,
      growthRate: 2.59,
    },
    users: {
      value: 3456,
      growthRate: -0.95,
    },
  };
}

export const topupOperatorsByCountry: Record<string, { name: string; code: string }[]> = {
  '1': [
    { name: 'Verizon', code: 'vz' },
    { name: 'AT&T', code: 'att' },
  ],
  '2': [
    { name: 'EE', code: 'ee' },
    { name: 'Vodafone UK', code: 'vduk' },
  ],
  '3': [
    { name: 'Jio', code: 'jio' },
    { name: 'Airtel', code: 'airtel' },
  ],
  '4': [
    { name: 'Rogers', code: 'rogers' },
    { name: 'Bell', code: 'bell' },
  ],
  '5': [
    { name: 'Telstra', code: 'telstra' },
    { name: 'Optus', code: 'optus' },
  ],
  '6': [
    { name: 'T-Mobile DE', code: 'tmde' },
    { name: 'Vodafone DE', code: 'vdde' },
  ],
  '7': [
    { name: 'NTT Docomo', code: 'docomo' },
    { name: 'SoftBank', code: 'softbank' },
  ],
  '8': [
    { name: 'Orange', code: 'orange' },
    { name: 'SFR', code: 'sfr' },
  ],
};

export const topupCountries = [
  {
    id: '1',
    country: 'United States',
    currency: 'USD',
    flag: 'https://flagcdn.com/us.svg',
  },
  {
    id: '2',
    country: 'United Kingdom',
    currency: 'GBP',
    flag: 'https://flagcdn.com/gb.svg',
  },
  {
    id: '3',
    country: 'India',
    currency: 'INR',
    flag: 'https://flagcdn.com/in.svg',
  },
  {
    id: '4',
    country: 'Canada',
    currency: 'CAD',
    flag: 'https://flagcdn.com/ca.svg',
  },
  {
    id: '5',
    country: 'Australia',
    currency: 'AUD',
    flag: 'https://flagcdn.com/au.svg',
  },
  {
    id: '6',
    country: 'Germany',
    currency: 'EUR',
    flag: 'https://flagcdn.com/de.svg',
  },
  {
    id: '7',
    country: 'Japan',
    currency: 'JPY',
    flag: 'https://flagcdn.com/jp.svg',
  },
  {
    id: '8',
    country: 'France',
    currency: 'EUR',
    flag: 'https://flagcdn.com/fr.svg',
  },
];

export async function getChatsData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      name: "Jacob Jones",
      profile: "/images/user/user-01.png",
      isActive: true,
      lastMessage: {
        content: "See you tomorrow at the meeting!",
        type: "text",
        timestamp: "2024-12-19T14:30:00Z",
        isRead: false,
      },
      unreadCount: 3,
    },
    {
      name: "Wilium Smith",
      profile: "/images/user/user-03.png",
      isActive: true,
      lastMessage: {
        content: "Thanks for the update",
        type: "text",
        timestamp: "2024-12-19T10:15:00Z",
        isRead: true,
      },
      unreadCount: 0,
    },
    {
      name: "Johurul Haque",
      profile: "/images/user/user-04.png",
      isActive: false,
      lastMessage: {
        content: "What's up?",
        type: "text",
        timestamp: "2024-12-19T10:15:00Z",
        isRead: true,
      },
      unreadCount: 0,
    },
    {
      name: "M. Chowdhury",
      profile: "/images/user/user-05.png",
      isActive: false,
      lastMessage: {
        content: "Where are you now?",
        type: "text",
        timestamp: "2024-12-19T10:15:00Z",
        isRead: true,
      },
      unreadCount: 2,
    },
    {
      name: "Akagami",
      profile: "/images/user/user-07.png",
      isActive: false,
      lastMessage: {
        content: "Hey, how are you?",
        type: "text",
        timestamp: "2024-12-19T10:15:00Z",
        isRead: true,
      },
      unreadCount: 0,
    },
  ];
}