import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const gyms = await prisma.gyms.findMany();
  console.log(gyms);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })