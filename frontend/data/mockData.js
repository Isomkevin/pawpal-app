// mockData.js
export const petDetails = [
  {
    id: '001',
    name: 'Moose',
    category: 'dogs',
    breed: 'Poodle',
    age: '04 months',
    weight: '2.8 kg',
    description: "Moose loves to play and explore, and he's always ready for a cuddle after a day of adventures. His friendly nature and boundless energy make him a wonderful addition to any home.",
    imageUrl: 'https://th.bing.com/th/id/OIP.GfBwvpZpzVNadap3BT7VsgHaE7?w=1024&h=682&rs=1&pid=ImgDetMain',
    location: { latitude: -1.28333, longitude: 36.81667 }, // Example coordinates (Nairobi)
  },
  {
    id: '002',
    name: 'Whiskers',
    category: 'cats',
    breed: 'Siamese',
    age: '02 years',
    weight: '4.5 kg',
    description: 'A playful and affectionate Siamese cat with striking blue eyes.',
    imageUrl: 'https://th.bing.com/th/id/R.05002022b84e38a39462fc055c2fe889?rik=bfzpBhqZjQ3ejQ&riu=http%3a%2f%2fmusicgirl094.files.wordpress.com%2f2010%2f12%2fsiamese-cat1.jpg&ehk=EBK65YwIozxMhlMaUmALrLAwzd%2bHS0qx0sMIcC9%2bHcg%3d&risl=&pid=ImgRaw&r=0',
    location: { latitude: -1.2921, longitude: 36.8219 }, // Example coordinates (Nairobi)
  },
  {
    id: '003',
    name: 'Coco',
    category: 'dogs',
    breed: 'Beagle',
    age: '1 year',
    weight: '8.2 kg',
    description: 'Friendly and energetic Beagle with a love for outdoor adventures.',
    imageUrl: 'https://buzzsharer.com/wp-content/uploads/2015/07/awesome-beagle-photo.jpg',
    location: { latitude: -1.28333, longitude: 36.81667 }, // Example coordinates (Nairobi)
  },
  {
    id: '004',
    name: 'Bella',
    category: 'cats',
    breed: 'Maine Coon',
    age: '3 years',
    weight: '6.8 kg',
    description: 'A large and gentle Maine Coon with a luxurious coat and friendly demeanor.',
    imageUrl: 'https://www.zooplus.de/magazin/wp-content/uploads/2017/03/fotolia_138361424.jpg',
    location: { latitude: -1.3533184, longitude: 36.6641152 }, // Example coordinates (Nairobi)
  },
  {
    id: '005',
    name: 'Rocky',
    category: 'dogs',
    breed: 'German Shepherd',
    age: '2 years',
    weight: '30 kg',
    description: 'A strong and loyal German Shepherd, perfect for protection and companionship.',
    imageUrl: 'https://th.bing.com/th/id/OIP.7Ujk641Pa2i2dkmxTvRFgQHaE6?rs=1&pid=ImgDetMain',
    location: { latitude: -1.3000, longitude: 36.8000 }, // Example coordinates (Nairobi)
  },
  {
    id: '006',
    name: 'Mittens',
    category: 'cats',
    breed: 'Persian',
    age: '5 years',
    weight: '5.2 kg',
    description: 'A beautiful Persian cat with a calm demeanor, loves to be pampered.',
    imageUrl: 'https://th.bing.com/th/id/OIP.DySWvyujxo3I_yb7Ci7CUwHaE8?rs=1&pid=ImgDetMain',
    location: { latitude: -1.2884, longitude: 36.8233 }, // Example coordinates (Nairobi)
  },
  {
    id: '007',
    name: 'Chirpy',
    category: 'birds',
    breed: 'Parrot',
    age: '1.5 years',
    weight: '0.9 kg',
    description: 'A talkative and colorful parrot, perfect for adding some cheer to your home.',
    imageUrl: 'https://th.bing.com/th/id/OIP.tNtDFztHBlqoHmo5gAD9PwAAAA?rs=1&pid=ImgDetMain',
    location: { latitude: -1.2990, longitude: 36.8190 }, // Example coordinates (Nairobi)
  },
  {
    id: '008',
    name: 'Speedy',
    category: 'reptiles',
    breed: 'Tortoise',
    age: '1 year',
    weight: '5 g',
    description: 'A slow but steady tortoise, easy to care for and lives a long life.',
    imageUrl: 'https://th.bing.com/th/id/R.c52c0e2b18aed2e9423b560118af9fb0?rik=XINz9NjBXq6e1Q&pid=ImgRaw&r=0',
    location: { latitude: -1.3600, longitude: 36.6840 }, // Example coordinates (Nairobi)
  },
  {
    id: '009',
    name: 'Nemo',
    category: 'fish',
    breed: 'Clownfish',
    age: '6 months',
    weight: '0.1 kg',
    description: 'A vibrant clownfish, ideal for adding color to your aquarium.',
    imageUrl: 'https://th.bing.com/th/id/R.e1d53074393b6db9d6d83b203a2be9ca?rik=DcZlAYcmpzRnBQ&pid=ImgRaw&r=0',
    location: { latitude: -1.2987, longitude: 36.8022 }, // Example coordinates (Nairobi)
  },
  {
    id: '010',
    name: 'BunBun',
    category: 'rabbits',
    breed: 'Netherland Dwarf',
    age: '8 months',
    weight: '1.2 kg',
    description: 'A cute and cuddly Netherland Dwarf rabbit, great for families with children.',
    imageUrl: 'https://th.bing.com/th/id/R.0a458de92debe7a994c21a500f84dc5f?rik=Knef03PGsbX%2fIw&pid=ImgRaw&r=0',
    location: { latitude: -1.3200, longitude: 36.8600 }, // Example coordinates (Nairobi)
  },
];




export const petCategories = [
    { id: '1', title: 'Cats', image: 'https://th.bing.com/th/id/OIP.YwA6xGkFItqFcdN8eHm-aAHaHZ?rs=1&pid=ImgDetMain'},
    { id: '2', title: 'Dogs', image: 'https://th.bing.com/th/id/R.cfcea7bab839544cbd50bad837242ed3?rik=i38TTljz3p%2foig&pid=ImgRaw&r=0'},
    { id: '3', title: 'Rabbits', image: 'https://th.bing.com/th/id/OIP.KFlez8w0LJs8HQIZYZntAgAAAA?rs=1&pid=ImgDetMain'},
    { id: '4', title: 'Birds', image: 'https://th.bing.com/th/id/OIP.fn-EvnT6F4MG3Ki5cE8FKgHaFj?rs=1&pid=ImgDetMain'},
    { id: '5', title: 'Rodents', image: 'https://www.burgesspetcare.com/wp-content/uploads/2020/09/rodent-pets.jpg'},
  ];

export const dogWalkers = [
  {
    id: '1',
    name: 'John Doe',
    rating: 4.5,
    availability: {
      start: '8:00 AM',
      end: '6:00 PM',
      unavailableDates: ['2024-08-25', '2024-08-26'], // Dates when John is unavailable
      unavailableHours: [12, 13], // Hours when John is unavailable
    },
    imageUrl: 'https://th.bing.com/th/id/OIP.hFB1rF_fubxT1pd--YaXsgHaFM?rs=1&pid=ImgDetMain',
    pricePerHour: 20, // Price in USD
  },
  {
    id: '2',
    name: 'Jane Smith',
    rating: 4.8,
    availability: {
      start: '10:00 AM',
      end: '4:00 PM',
      unavailableDates: ['2024-08-27'], // Dates when Jane is unavailable
      unavailableHours: [14, 15], // Hours when Jane is unavailable
    },
    imageUrl: 'https://th.bing.com/th/id/OIP._ZpunMwNtV8SrnMSh3XOlAAAAA?w=276&h=184&c=7&r=0&o=5&pid=1.7',
    pricePerHour: 25, // Price in USD
  },
  {
    id: '3',
    name: 'Chris Johnson',
    rating: 4.9,
    availability: {
      start: '7:00 AM',
      end: '5:00 PM',
      unavailableDates: ['2024-08-28'], // Dates when Chris is unavailable
      unavailableHours: [9, 10], // Hours when Chris is unavailable
    },
    imageUrl: 'https://th.bing.com/th/id/OIP.7nTSNhg80tNr2_NfDHS08wAAAA?w=176&h=180&c=7&r=0&o=5&pid=1.7',
    pricePerHour: 22, // Price in USD
  },
];
