import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId({ length: 10});

export async function create(office) {
    office.officeCode = uid.rnd();
    const newOffice = await repo.create(office);
    return office;
}