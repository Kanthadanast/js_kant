import { PrismaClient} from '@prima/client'
const prismaClient = new PrismaClient();

export async function create(office) {
    const newOffice = await prisma.office.create(
        {data: office}
    );
    return newOffice;
}