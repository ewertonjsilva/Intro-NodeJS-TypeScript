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

router.post('/', (req, res) => {
    const newCustomer : Customer = {
        id: parseInt(req.body.id),
        name: req.body.name,
        birthDate: new Date(req.body.birthDate)
    };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
});

export default router;

