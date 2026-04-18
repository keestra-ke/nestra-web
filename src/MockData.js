export const mockData = {
  listings: [
    {
      id: 'listing-001',
      name: 'Sunrise Apartments Block B',
      area: 'Githurai 44',
      floor: '3rd floor, Room 7',
      type: 'Bedsitter',
      price: 5500,
      deposit: 5500,
      garbageFee: 200,
      earlyDiscount: { amount: 100, payBeforeDay: 5 },
      caretaker: { name: 'Mama Akinyi', phone: '0712 345 678' },
      landlord: { name: 'Mr. James Kariuki', idNumber: 'KE12345678' },
      water: { status: 'Constant', storage: true },
      electricity: { type: 'Token prepaid', meter: 'Individual' },
      wifi: { available: true, provider: 'Safaricom Home Fibre' },
      security: 'Gated compound, guard 6pm–6am',
      gateClosing: '10:00 PM',
      gps: { lat: -1.2181, lng: 36.9251 },
      rating: 4.3,
      reviewCount: 27,
      verified: true,
      dimensions: { length: 4.5, width: 3.8 },
      rules: ['Gate closes 10pm', 'Visitors leave by 9pm', 'No loud music after 10pm', 'No subletting', 'Sort garbage before collection'],
      verifiedTenants: 21,
      totalRooms: 24,
      vacantRooms: 3,
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a9f4ef888?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop'
      ],
      reviews: [
        { name: 'Kevin Otieno', rating: 5, date: 'March 2025', text: 'Water is always available — I have lived here 8 months and never had a cut. Mama Akinyi is the best caretaker, responds to everything. Highly recommend.' },
        { name: 'Fatuma Abdalla', rating: 4, date: 'January 2025', text: 'Good building overall. Security is tight which I like. Electricity tokens can be confusing at first but manageable.' },
        { name: 'Brian Kamau', rating: 3, date: 'November 2024', text: 'The room itself is fine but the corridor lights go out sometimes. Reported it and it took two weeks to fix.' },
        { name: 'Winnie Njeri', rating: 5, date: 'October 2024', text: 'Moved here from Kayole and it is much better. The caretaker keeps the building clean and there is a real community feeling.' }
      ],
      distances: {
        'Githurai Stage (matatu)': '0.3 km',
        'Equity Bank': '0.6 km',
        'Githurai Primary School': '0.4 km',
        'Githurai Nursing Home': '1.2 km',
        'Police Post Githurai 44': '0.8 km',
        'Githurai Mosque': '0.5 km',
        'PCEA Githurai Church': '0.2 km',
        'Mama Pima Market': '0.3 km'
      }
    },
    {
      id: 'listing-002',
      name: 'Kimani Plaza',
      area: 'Githurai 45',
      floor: '2nd floor, Room 12',
      type: 'Single room',
      price: 3500,
      deposit: 3500,
      garbageFee: 150,
      caretaker: { name: 'John Waweru', phone: '0723 456 789' },
      landlord: { name: 'Mrs. Grace Wanjiku', idNumber: 'KE23456789' },
      water: { status: 'Rationed', schedule: '6am–10am and 5pm–8pm', storage: false },
      electricity: { type: 'Token prepaid', meter: 'Shared per floor' },
      wifi: { available: false },
      security: 'Gate locks at 10pm, no guard',
      gps: { lat: -1.2213, lng: 36.9278 },
      rating: 3.8,
      reviewCount: 14,
      verified: true,
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop'
      ]
    },
    {
      id: 'listing-003',
      name: 'Mwangi Heights',
      area: 'Baba Dogo',
      floor: '4th floor, Room 3',
      type: 'One bedroom',
      price: 9000,
      deposit: 9000,
      garbageFee: 300,
      earlyDiscount: { amount: 200, payBeforeDay: 3 },
      caretaker: { name: 'Peter Otieno', phone: '0734 567 890' },
      landlord: { name: 'Mr. David Mwangi', idNumber: 'KE34567890' },
      water: { status: 'Constant', storage: true },
      electricity: { type: 'Postpaid', meter: 'Individual' },
      wifi: { available: true, provider: 'Zuku' },
      security: 'CCTV, gated, 24hr guard',
      gps: { lat: -1.2155, lng: 36.9301 },
      rating: 4.7,
      reviewCount: 43,
      verified: true,
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a9f4ef888?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop'
      ]
    },
    {
      id: 'listing-004',
      name: 'Nyota Court',
      area: 'Kasarani',
      floor: '1st floor, Room 5',
      type: 'Bedsitter',
      price: 6500,
      deposit: 13000,
      garbageFee: 250,
      caretaker: { name: 'Susan Chebet', phone: '0745 678 901' },
      landlord: { name: 'Chebet Holdings Ltd', idNumber: 'KE45678901' },
      water: { status: 'Constant', storage: true },
      electricity: { type: 'Token prepaid', meter: 'Individual' },
      wifi: { available: true, provider: 'Faiba' },
      security: 'Gated compound',
      gps: { lat: -1.2089, lng: 36.9198 },
      rating: 4.1,
      reviewCount: 19,
      verified: true,
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a9f4ef888?w=600&h=400&fit=crop'
      ]
    },
    {
      id: 'listing-005',
      name: 'Gitau Flats',
      area: 'Githurai 44',
      floor: '2nd floor, Room 9',
      type: 'Single room',
      price: 4000,
      deposit: 4000,
      garbageFee: 100,
      caretaker: { name: 'Mary Gitau', phone: '0756 789 012' },
      landlord: { name: 'Joseph Gitau', idNumber: 'KE56789012' },
      water: { status: 'Rationed', schedule: 'Off Tuesdays and Fridays' },
      electricity: { type: 'Token prepaid', meter: 'Shared per 2 rooms' },
      wifi: { available: false },
      security: 'Gate only, no guard',
      gps: { lat: -1.2204, lng: 36.9262 },
      rating: 3.5,
      reviewCount: 8,
      verified: false,
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop'
      ]
    },
    {
      id: 'listing-006',
      name: 'Green Valley Apartments',
      area: 'Roysambu',
      floor: '3rd floor, Room 14',
      type: 'Two bedroom',
      price: 14000,
      deposit: 14000,
      garbageFee: 400,
      earlyDiscount: { amount: 500, payBeforeDay: 5 },
      caretaker: { name: 'Agnes Muthoni', phone: '0767 890 123' },
      landlord: { name: 'Green Valley Properties', idNumber: 'KE67890123' },
      water: { status: 'Constant', storage: true, source: 'borehole' },
      electricity: { type: 'Postpaid', meter: 'Individual' },
      wifi: { available: true, provider: 'Safaricom Home' },
      security: 'Electric fence, CCTV, 24hr guard',
      gps: { lat: -1.2071, lng: 36.9154 },
      rating: 4.9,
      reviewCount: 67,
      verified: true,
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a9f4ef888?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop'
      ]
    }
  ],

  secondHandItems: [
    { id: 1, name: 'Samsung 32-inch TV', price: 8500, condition: 'Good', seller: 'Kevin', room: 'Room 7', building: 'Sunrise Block B', distance: '0.1 km', category: 'Electronics', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop' },
    { id: 2, name: 'Single bed and mattress', price: 4200, condition: 'Fair', seller: 'Mercy Wanjiku', room: 'Kimani Plaza', building: 'Githurai 45', distance: '0.4 km', category: 'Furniture', image: 'https://images.unsplash.com/photo-1524626990895-46418ace1595?w=400&h=300&fit=crop' },
    { id: 3, name: '2-burner gas cooker', price: 2800, condition: 'Good', seller: 'John Mwangi', room: 'Gitau Flats', building: 'Githurai 44', distance: '0.3 km', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
    { id: 4, name: 'Wooden wardrobe 3 doors', price: 5500, condition: 'Good', seller: 'Agnes Muthoni', room: 'Green Valley', building: 'Roysambu', distance: '1.2 km', category: 'Furniture', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
    { id: 5, name: 'Baby cot and mattress', price: 3000, condition: 'Excellent', seller: 'Fatuma Abdalla', room: 'Sunrise Block B', building: 'Githurai 44', distance: '0.1 km', category: 'Baby items', image: 'https://images.unsplash.com/photo-1516996087931-20bedde1c5c8?w=400&h=300&fit=crop' },
    { id: 6, name: 'Engineering textbooks JKUAT set', price: 800, condition: 'Good', seller: 'Brian Kamau', room: 'Sunrise Block B', building: 'Githurai 44', distance: '0.1 km', category: 'Books', image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfbb?w=400&h=300&fit=crop' },
    { id: 7, name: 'Sofa 3-seater', price: 6000, condition: 'Fair', seller: 'Susan Chebet', room: 'Nyota Court', building: 'Kasarani', distance: '0.8 km', category: 'Furniture', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop' },
    { id: 8, name: 'Laptop bag and accessories', price: 1200, condition: 'Good', seller: 'David Muthui', room: 'Baba Dogo', building: 'Baba Dogo', distance: '0.6 km', category: 'Electronics', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop' }
  ],

  jobs: [
    { id: 1, title: 'Shelf packers needed', salary: 800, period: '/day', employer: 'Naivas Githurai Branch', location: 'Ground floor, 5 min walk', applications: 11, posted: 'Today', verified: true, icon: '🏪' },
    { id: 2, title: 'Plumber needed for 2 hours', salary: 1500, period: 'fixed', employer: 'Brian Kamau, Room 11', location: 'Caretaker approved', applications: 0, posted: 'Yesterday', verified: false, icon: '🔧' },
    { id: 3, title: 'Babysitter needed Saturday', salary: 800, period: '10am–6pm', employer: 'Winnie Njeri, Room 3', location: 'Must live in same building', applications: 0, posted: '2 days ago', verified: false, icon: '👶' },
    { id: 4, title: 'Nursery teacher assistant', salary: 15000, period: '/month', employer: 'Githurai Primary School', location: 'ECDE certificate preferred', applications: 23, posted: '3 days ago', verified: true, icon: '🎓' },
    { id: 5, title: 'Collect parcel from stage', salary: 100, period: 'today', employer: 'Kevin Otieno, Room 7', location: 'This afternoon only', applications: 5, posted: '4 hours ago', verified: false, icon: '📦' }
  ],

  wallPosts: [
    { id: 1, author: 'Mama Akinyi', role: 'Caretaker', time: 'Today 9:04 AM', text: 'Good morning everyone. Water is back on as of 9am. Rooftop tank was cleaned yesterday, that is why it was off. Sorry for the inconvenience.', likes: 12 },
    { id: 2, author: 'Kevin', room: 'Room 7', time: 'Today 8:47 AM', text: 'Football screening tonight! Arsenal vs Liverpool. Ground floor corridor 8pm. Everyone welcome. Bring your own seat.', likes: 8 },
    { id: 3, author: 'Winnie', room: 'Room 3', time: 'Yesterday', text: 'The corridor light on 3rd floor is fixed now. Thanks to Brian for calling the electrician!', likes: 5 }
  ],

  leaderboard: [
    { rank: 1, name: 'Mama Akinyi', points: 520, title: 'Building Keeper' },
    { rank: 2, name: 'Fatuma Abdalla, Room 4', points: 310, title: '' },
    { rank: 3, name: 'James Mwangi, Room 7', points: 285, title: 'YOU', isUser: true },
    { rank: 4, name: 'Winnie Njeri, Room 3', points: 240, title: '' },
    { rank: 5, name: 'Brian Kamau, Room 11', points: 190, title: '' }
  ]
};

export default mockData;
