export interface Room {
  id: string
  name: string
  price: number
  date: string
  distance: string
  images: string[]
}

export const fetchRooms = async () => {
  return Promise.resolve([
    {
      id: '1',
      name: 'Dubai, UAE',
      price: 204,
      date: 'Nov 18 - 23',
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-721540609203378406/original/9dfaf7d6-40f2-4673-b468-7c5ab3147f86.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-819372798923685800/original/18753c6d-1663-4535-9dde-78c7b3bc1646.jpeg?im_w=720'
      ],
      distance: '5164'
    },
    {
      id: '2',
      name: 'Tiny home in Jeju-si, South Korea',
      price: 179,
      date: 'Nov 18 - 23',
      images: [
        'https://a0.muscache.com/im/pictures/0c69d004-1506-41d8-b1dc-e7c15905a249.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/14fdb221-6bee-45ab-9974-0ec643dfd176.jpg?im_w=720'
      ],
      distance: '5164'
    },
    {
      id: '3',
      name: 'Silang, Philippines',
      price: 179,
      date: 'Nov 18 - 23',
      images: [
        'https://a0.muscache.com/im/pictures/0b65b1cd-0787-45c6-87a1-da3ff9e96760.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/720247f0-c6d3-4188-b3da-c9a0f5c1475f.jpg?im_w=720'
      ],
      distance: '5164'
    },
    {
      id: '4',
      name: 'Silang, Philippines',
      price: 179,
      date: 'Nov 18 - 23',
      images: [
        'https://a0.muscache.com/im/pictures/0b65b1cd-0787-45c6-87a1-da3ff9e96760.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/720247f0-c6d3-4188-b3da-c9a0f5c1475f.jpg?im_w=720'
      ],
      distance: '5164'
    },
    {
      id: '5',
      name: 'Silang, Philippines',
      price: 179,
      date: 'Nov 18 - 23',
      images: [
        'https://a0.muscache.com/im/pictures/0b65b1cd-0787-45c6-87a1-da3ff9e96760.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/720247f0-c6d3-4188-b3da-c9a0f5c1475f.jpg?im_w=720'
      ],
      distance: '5164'
    },
    {
      id: '6',
      name: 'Silang, Philippines',
      price: 179,
      date: 'Nov 18 - 23',
      images: [
        'https://a0.muscache.com/im/pictures/0b65b1cd-0787-45c6-87a1-da3ff9e96760.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/720247f0-c6d3-4188-b3da-c9a0f5c1475f.jpg?im_w=720'
      ],
      distance: '5164'
    },
    {
      id: '7',
      name: 'Silang, Philippines',
      price: 179,
      date: 'Nov 18 - 23',
      images: [
        'https://a0.muscache.com/im/pictures/0b65b1cd-0787-45c6-87a1-da3ff9e96760.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/720247f0-c6d3-4188-b3da-c9a0f5c1475f.jpg?im_w=720'
      ],
      distance: '5164'
    }
  ])
}
