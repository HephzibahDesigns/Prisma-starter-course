import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

// get users in our table
app.get("/users", async (_, res) => {
  const users = await prisma.user.findMany({
    where: {
      // isMarried: true,
      // age: {
      //   gte: 30,
      // },

      // using the OR property
      OR: [
        {
          nationality: "Nigerian",
          age: {
            gte: 25,
          },
        },
      ],
    },
  });

  // const users = await prisma.user.findUnique({
  //   where: { id: 3 },
  // });
  res.json(users);
});

// update users
app.put("/users", async (_, res) => {
  const updateUsers = await prisma.user.update({
    where: {
      email: "martha24@yahoo.com ",
    },
    data: {
      age: 27,
      isMarried: true,
      nationality: "United States",
    },
  });

  res.json(updateUsers);
});

app.delete("/users", async (_, res) => {
  const deleteUsers = await prisma.user.delete({
    where: {
      email: "daniel25@gmail.com ",
    },
  });

  res.json(deleteUsers);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
