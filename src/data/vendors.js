const vendors = [
  {
    id: 'kafe-hasanbasri',
    name: 'Kafe Hasan Basri',
    location: 'IIUM Mall, Level 1',
    openHours: '8:00 am - 9:00 pm',
    isOpen: true,
    menu: [
      { id: 'hasanbasri-1', name: 'Nasi Ayam Penyet', description: 'Smashed fried chicken with sambal and rice', price: 9, category: 'Rice', available: true },
      { id: 'hasanbasri-2', name: 'Nasi Goreng Kampung', description: 'Kampung-style fried rice with anchovies', price: 6.5, category: 'Rice', available: true },
      { id: 'hasanbasri-3', name: 'Nasi Lemak Telur', description: 'Coconut rice with fried egg and sambal', price: 5, category: 'Rice', available: false },
      { id: 'hasanbasri-4', name: 'Laksa Johor', description: 'Spaghetti in spicy fish gravy with herbs', price: 8, category: 'Noodles', available: true },
      { id: 'hasanbasri-5', name: 'Mee Goreng Mamak', description: 'Yellow noodles fried with tofu and egg', price: 6, category: 'Noodles', available: true },
      { id: 'hasanbasri-6', name: 'Air Bandung', description: 'Rose syrup with milk', price: 3, category: 'Drinks', available: true },
      { id: 'hasanbasri-7', name: 'Teh Tarik', description: 'Pulled milk tea', price: 2.5, category: 'Drinks', available: true },
      { id: 'hasanbasri-8', name: 'Milo Ais', description: 'Iced chocolate malt drink', price: 3.5, category: 'Drinks', available: true },
    ],
  },
  {
    id: 'kafe-ali',
    name: 'Kafe Mahallah Ali',
    location: 'Mahallah Ali, Block C',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      { id: 'ali-1', name: 'Nasi Lemak Ayam', description: 'Coconut rice, fried chicken, sambal, egg and peanuts', price: 7.5, category: 'Rice', available: true },
      { id: 'ali-2', name: 'Roti Canai', description: 'Flaky flatbread with dhal', price: 2, category: 'Bread', available: true },
      { id: 'ali-3', name: 'Teh O Ais', description: 'Iced tea without milk', price: 2, category: 'Drinks', available: true },
    ],
  },
  {
    id: 'kafe-zubair',
    name: 'Kafe Mahallah Zubair',
    location: 'Mahallah Zubair, Block A',
    openHours: '9:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      { id: 'zubair-1', name: 'Nasi Lemak Ayam', description: 'Coconut rice, fried chicken, sambal, egg and peanuts', price: 7.5, category: 'Rice', available: true },
      { id: 'zubair-2', name: 'Roti Canai', description: 'Flaky flatbread with dhal', price: 2, category: 'Bread', available: true },
      { id: 'zubair-3', name: 'Teh O Ais', description: 'Iced tea without milk', price: 2, category: 'Drinks', available: true },
    ],
  },
]

export default vendors
