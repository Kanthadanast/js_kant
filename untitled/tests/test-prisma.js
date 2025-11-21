import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const offices = await prisma.office.findMany();
console.log(offices);