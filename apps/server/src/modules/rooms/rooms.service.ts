export class RoomsService {
  static getAllBy(categoryId: string) {
    if (categoryId === "1") {
      return [
        {
          id: "1",
          name: "Dubai, UAE",
          price: 204,
          date: "Nov 18 - 23",
          images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-721540609203378406/original/9dfaf7d6-40f2-4673-b468-7c5ab3147f86.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-819372798923685800/original/18753c6d-1663-4535-9dde-78c7b3bc1646.jpeg?im_w=720",
          ],
          distance: "5164",
        },
      ];
    }
    if (categoryId === "2") {
      return [];
    }

    return [
      {
        id: "1",
        name: "Dubai, UAE",
        price: 204,
        date: "Nov 18 - 23",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-721540609203378406/original/9dfaf7d6-40f2-4673-b468-7c5ab3147f86.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-819372798923685800/original/18753c6d-1663-4535-9dde-78c7b3bc1646.jpeg?im_w=720",
        ],
        distance: "5164",
      },
      {
        id: "2",
        name: "Tiny home in Jeju-si, South Korea",
        price: 179,
        date: "Nov 18 - 23",
        images: [
          "https://a0.muscache.com/im/pictures/0c69d004-1506-41d8-b1dc-e7c15905a249.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/14fdb221-6bee-45ab-9974-0ec643dfd176.jpg?im_w=720",
        ],
        distance: "5164",
      },
      {
        id: "3",
        name: "Silang, Philippines",
        price: 179,
        date: "Nov 18 - 23",
        images: [
          "https://a0.muscache.com/im/pictures/0b65b1cd-0787-45c6-87a1-da3ff9e96760.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/720247f0-c6d3-4188-b3da-c9a0f5c1475f.jpg?im_w=720",
        ],
        distance: "5164",
      },
      {
        id: "4",
        name: "Silang, Philippines",
        price: 179,
        date: "Nov 18 - 23",
        images: [
          "https://a0.muscache.com/im/pictures/0b65b1cd-0787-45c6-87a1-da3ff9e96760.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/720247f0-c6d3-4188-b3da-c9a0f5c1475f.jpg?im_w=720",
        ],
        distance: "5164",
      },
      {
        id: "5",
        name: "Silang, Philippines",
        price: 179,
        date: "Nov 18 - 23",
        images: [
          "https://a0.muscache.com/im/pictures/0b65b1cd-0787-45c6-87a1-da3ff9e96760.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/720247f0-c6d3-4188-b3da-c9a0f5c1475f.jpg?im_w=720",
        ],
        distance: "5164",
      },
      {
        id: "6",
        name: "Silang, Philippines",
        price: 179,
        date: "Nov 18 - 23",
        images: [
          "https://a0.muscache.com/im/pictures/0b65b1cd-0787-45c6-87a1-da3ff9e96760.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/720247f0-c6d3-4188-b3da-c9a0f5c1475f.jpg?im_w=720",
        ],
        distance: "5164",
      },
      {
        id: "7",
        name: "Silang, Philippines",
        price: 179,
        date: "Nov 18 - 23",
        images: [
          "https://a0.muscache.com/im/pictures/0b65b1cd-0787-45c6-87a1-da3ff9e96760.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/720247f0-c6d3-4188-b3da-c9a0f5c1475f.jpg?im_w=720",
        ],
        distance: "5164",
      },
    ];
  }

  static getBy(roomId: string) {
    return {
      images: [
        "https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/e40a3f76-fefd-4fbb-893c-e1e2b2c6c8ca.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/9df73161-3743-4cdb-bc98-864e408af6f0.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/788ec8d8-fdd2-4c45-b6ed-a8b44d98a8df.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6713071b-519d-49ad-bc64-76db60d8de9d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6713071b-519d-49ad-bc64-76db60d8de9d.jpg?im_w=720",
      ],
    };
  }
}