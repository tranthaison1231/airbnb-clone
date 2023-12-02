import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono().basePath("/api");

app.use("*", logger());
app.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.get("/categories", (c) =>
  c.json([
    {
      id: "1",
      name: "Rooms",
      icon: "https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg",
    },
    {
      id: "234",
      name: "Cabins",
      icon: "	https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    },
    {
      id: "345",
      name: "Beach",
      icon: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    },
    {
      id: "456",
      name: "A-frames",
      icon: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
    },
    {
      id: "789",
      name: "Castels",
      icon: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    },
    {
      id: "345",
      name: "Beach",
      icon: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    },
    {
      id: "456",
      name: "A-frames",
      icon: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
    },
    {
      id: "789",
      name: "Castels",
      icon: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    },
    {
      id: "234",
      name: "Cabins",
      icon: "	https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    },
    {
      id: "345",
      name: "Beach",
      icon: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    },
    {
      id: "456",
      name: "A-frames",
      icon: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
    },
    {
      id: "789",
      name: "Castels",
      icon: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    },
    {
      id: "345",
      name: "Beach",
      icon: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    },
    {
      id: "456",
      name: "A-frames",
      icon: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
    },
    {
      id: "789",
      name: "Castels",
      icon: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    },
  ])
);

app.get("/categories/:categoryId/rooms", (c) =>
  c.json([
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
  ])
);

export default app;
