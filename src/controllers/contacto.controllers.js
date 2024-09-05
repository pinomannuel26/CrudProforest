import { pool } from '../db.js';
import {createTelefono} from './telefono.controller.js'

export const getAllContactos = async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM contacto;");
        res.json(rows);
    } catch (error) {
        console.log(error.message)
    }
};

export const getContacto = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await pool.query(`SELECT * FROM contacto WHERE id = ${id}`);
        if (rows.length === 0) {
            return res.status(404).json({ message: "Contacto not found" });
        }
        res.json(rows[0]);
    } catch (error) {
        console.log(error.message);
    }

};

export const createContacto = async (req, res) => {
    try {
        const data = req.body;
        const { rows, rowCount } = await pool.query(`INSERT INTO contacto (nombre, apellido, correo, direccion) VALUES ('${data.nombre}', '${data.apellido}', '${data.correo}', '${data.direccion}') RETURNING *`);
        if (rowCount === 0) {
            return res.status(404).json({ message: "Contacto not post" });
        }
        return res.json(rows[0]);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal server error" });
      
    }
};

export const deleteContacto = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows, rowCount } = await pool.query(`DELETE FROM contacto WHERE id = ${id} RETURNING *`);
        if (rowCount === 0) {
            return res.status(404).json({ message: "Contacto not found" });
        }
        // es otra forma de decir que se ejecuto correctamente 
        // return res.sendStatus(204);
        return res.json(rows);
    } catch (error) {
        console.log(error.message);
    }

};

export const updateContacto = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await pool.query(`UPDATE contacto SET nombre = '${data.nombre}', apellido = '${data.apellido}', correo = '${data.correo}', direccion = '${data.direccion}' WHERE id = ${id} RETURNING *`);
        if(result.rowCount === 0){
            return res.status(404).json({message: "Contacto not found"});
        }
        return res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }

};
