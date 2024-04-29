import { Router, Request, Response } from 'express'; 
import { Customer } from '../models/customer';

const customers : Customer[] = [
    {
        id: 1, 
        name: 'Neilberto', 
        birthDate: new Date('1999-07-30')
    }, 
    {
        id: 2, 
        name: 'Carmela', 
        birthDate: new Date('1980-12-22')
    }
];

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({success: true, customers});
});

type PostBody = {
    id: number,
    name: string,
    birthDate: string
}

router.post('/', (req: Request, res: Response) => {
    const body = req.body as PostBody;
    const newCustomer : Customer = {
        id: body.id,
        name: body.name,
        birthDate: new Date(body.birthDate)
    };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
});

export default router;

