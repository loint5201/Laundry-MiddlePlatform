export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Home Page",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Services",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },

    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },

    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },

    ],
  },

];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Services",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];

export const products = [
  {
    id: 1,
    img: "data:image/jpeg;base64,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",
    title: "Regular Wash",
    quantity: "1",
    store: "Thủ Đức",
    price: "50.000đ",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEzZ4YgWKVnvZqyeNqjbAUq8TbBz9LD0bqQ_Tk9EDDw&s",
    title: "Regular Wash",
    quantity: "1",
    store: "Thủ Đức",
    price: "230.000đ",
    createdAt: "01.02.2023",
    inStock: true,
  },




];



export const singleUser = {
  id: 1,
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "Johndoe99",
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Regular Wash",
      time: "3 day ago",
    },
    {
      text: "John Doe added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "John Doe purchased Regular Wash",
      time: "2 weeks ago",
    },
    {
      text: "John Doe reviewed a service",
      time: "1 month ago",
    },
    {
      text: "John Doe added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "John Doe reviewed a service",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Regular Wash",
  img: "data:image/jpeg;base64,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",
  info: {
    productId: "Ps5SDF1156d",
    quantity: "1",
    price: "50.000đ",
    Store: "Thủ Đức",

  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Regular Wash",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added  Regular Wash into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased  Regular Wash",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the service",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added  Regular Wash into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the service",
      time: "2 months ago",
    },
  ],
};
