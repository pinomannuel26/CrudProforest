import express from 'express';
import morgan from 'morgan';
import contactoRoutes from './routes/contacto.routes.js';
import telefonoRoutes from './routes/telefono.routes.js';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(contactoRoutes);
app.use(telefonoRoutes);
//Manejador de errores
// app.use((err, req, res, next) => {
//     return res.json({
//         message : err.message
//     })
// })
app.listen(3000);
console.log("Serve on port 3000");