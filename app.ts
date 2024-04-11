import express from 'express';

import indexRoutes from './routes/index';

const app = express();
app.use(express.json());
app.use(indexRoutes);

const porta = process.env.PORT || 3000;
app.listen(porta); 

console.log(`Servidor iniciado em: http://localhost:${porta}/`);


