import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  // create data in our user table
  await prisma.user.createMany({
    data: [
      {
        name: "Alice Johnson",
        email: "alice20@yahoo.com",
        age: 20,
        isMarried: false,
        nationality: "Nigerian",
      },
      {
        name: "Victor Adams",
        email: "victor21@gmail.com",
        age: 21,
        isMarried: false,
        nationality: "Ghanaian",
      },
      {
        name: "James Joe",
        email: "james22@yahoo.com",
        age: 22,
        isMarried: false,
        nationality: "Kenyan",
      },
      {
        name: "Alfred Stone",
        email: "alfred23@gmail.com",
        age: 23,
        isMarried: true,
        nationality: "South African",
      },
      {
        name: "Martha Felix",
        email: "martha24@yahoo.com",
        age: 24,
        isMarried: false,
        nationality: "Cameroonian",
      },
      {
        name: "Daniel Craig",
        email: "daniel25@gmail.com",
        age: 25,
        isMarried: true,
        nationality: "Nigerian",
      },
      {
        name: "Sophia Bright",
        email: "sophia26@gmail.com",
        age: 26,
        isMarried: false,
        nationality: "Ghanaian",
      },
      {
        name: "Henry West",
        email: "henry27@yahoo.com",
        age: 27,
        isMarried: false,
        nationality: "Kenyan",
      },
      {
        name: "Ella Smith",
        email: "ella28@gmail.com",
        age: 28,
        isMarried: true,
        nationality: "Nigerian",
      },
      {
        name: "Michael King",
        email: "michael29@yahoo.com",
        age: 29,
        isMarried: false,
        nationality: "Ugandan",
      },
      {
        name: "Sandra Hope",
        email: "sandra30@gmail.com",
        age: 30,
        isMarried: true,
        nationality: "Nigerian",
      },
      {
        name: "Peter White",
        email: "peter31@yahoo.com",
        age: 31,
        isMarried: false,
        nationality: "Ghanaian",
      },
      {
        name: "Chloe Nash",
        email: "chloe32@gmail.com",
        age: 32,
        isMarried: true,
        nationality: "South African",
      },
      {
        name: "Samuel Grant",
        email: "samuel33@yahoo.com",
        age: 33,
        isMarried: false,
        nationality: "Nigerian",
      },
      {
        name: "Grace Moore",
        email: "grace34@gmail.com",
        age: 34,
        isMarried: false,
        nationality: "Kenyan",
      },
      {
        name: "David Carter",
        email: "david35@yahoo.com",
        age: 35,
        isMarried: true,
        nationality: "Rwandan",
      },
      {
        name: "Naomi Blake",
        email: "naomi36@gmail.com",
        age: 36,
        isMarried: true,
        nationality: "Nigerian",
      },
      {
        name: "Chris Allen",
        email: "chris37@yahoo.com",
        age: 37,
        isMarried: false,
        nationality: "Ghanaian",
      },
      {
        name: "Bella Stark",
        email: "bella38@gmail.com",
        age: 38,
        isMarried: true,
        nationality: "South African",
      },
      {
        name: "Leonard Ford",
        email: "leonard39@yahoo.com",
        age: 40,
        isMarried: false,
        nationality: "Kenyan",
      },
    ],
  });
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

//✅ Ensures Prisma disconnects no matter what happens  ⚠️ Shows you any errors instead of silently failing    🚪 Exits cleanly when finished
