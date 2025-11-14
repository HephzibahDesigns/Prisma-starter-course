# Prisma Starter Course

A simple starter project demonstrating the basics of **Prisma ORM**,
seeding databases, and performing CRUD operations in a Node.js +
TypeScript environment.

---

## 🚀 Features

- Prisma schema setup\
- Database migrations\
- Database seeding\
- Prisma Client usage\
- Basic User model\
- Example seed data\
- Environment variable configuration

---

## 📦 Tech Stack

- **Node.js**
- **TypeScript**
- **Prisma ORM**
- **SQLite / PostgreSQL / MySQL**\
  (any Prisma-supported database)
- **ts-node**

---

## 📁 Project Structure

    prisma/
      ├── schema.prisma
      ├── seed.ts
    src/
      ├── index.ts
    .env
    package.json

---

## 🔧 Installation

### 1. Clone the repo:

```bash
git clone <your-repo-url>
cd Prisma-starter-course
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Generate Prisma Client:

```bash
npx prisma generate
```

### 4. Create & migrate the database:

```bash
npx prisma migrate dev --name init
```

### 5. Seed the database:

```bash
npx prisma db seed
```

---

## 🌱 Seeding

The seeding script (`prisma/seed.ts`) inserts user data:

```ts
await prisma.user.createMany({
  data: [
    { name: "Alice", email: "alice@example.com", age: 24 },
    { name: "Victor", email: "victor@example.com", age: 27 },
  ],
});
```

---

## 🧪 Running the Project

```bash
npm run dev
```
