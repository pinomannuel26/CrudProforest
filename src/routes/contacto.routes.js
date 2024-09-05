import {Router} from 'express';
import {getAllContactos, getContacto, createContacto, deleteContacto, updateContacto} from '../controllers/contacto.controllers.js'

const router = Router();

router.get("/contacto", getAllContactos );

router.get("/contacto/:id", getContacto )

router.post('/contacto', createContacto);

router.delete('/contacto/:id', deleteContacto );

router.put('/contacto/:id', updateContacto);


export default router; 