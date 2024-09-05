import {Router} from 'express';
import {getAllTelefonos, getTelefono, createTelefono, deleteTelefono, updateTelefono} from '../controllers/telefono.controller.js'

const routerTelefono = Router();

routerTelefono.get("/telefono", getAllTelefonos );

routerTelefono.get("/telefono/:id", getTelefono )

routerTelefono.post('/telefono', createTelefono);

routerTelefono.delete('/telefono/:id', deleteTelefono );

routerTelefono.put('/telefono/:id', updateTelefono);


export default routerTelefono; 