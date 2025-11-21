import * as service from './office-service';
export async function createOffice(req, res) {
    const newOffice = service.create(req.body);
    res.json(newOffice);
}