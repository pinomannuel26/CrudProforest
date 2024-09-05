import { pool } from '../db.js';

export const getAllTelefonos = async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM telefono;");
        res.json(rows);
    } catch (error) {
        console.log(error.message)
    }
};

export const getTelefono= async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await pool.query(`SELECT * FROM telefono WHERE id = ${id}`);
        if (rows.length === 0) {
            return res.status(404).json({ message: "Telefono not found" });
        }
        res.json(rows[0]);
    } catch (error) {
        console.log(error.message);
    }

};

export const createTelefono = async (req, res) => {
    try {
        const data = req.body;
        const { rows, rowCount } = await pool.query(`INSERT INTO telefono (contacto_id, tipo, numero_telefono) VALUES ('${data.contacto_id}', '${data.tipo}', '${data.numero_telefono}') RETURNING *`);
        if (rowCount === 0) {
            return res.status(404).json({ message: "telefono not post" });
        }
        return res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteTelefono = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows, rowCount } = await pool.query(`DELETE FROM telefono WHERE id = ${id} RETURNING *`);
        if (rowCount === 0) {
            return res.status(404).json({ message: "telefono not found" });
        }
        // es otra forma de decir que se ejecuto correctamente 
        // return res.sendStatus(204);
        return res.json(rows);
    } catch (error) {
        console.log(error.message);
    }

};

export const updateTelefono = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await pool.query(`UPDATE telefono SET contacto_id = '${data.contacto_id}', tipo = '${data.tipo}', numero_telefono = '${data.numero_telefono}', direccion = '${data.direccion}' WHERE id = ${id} RETURNING *`);
        if(result.rowCount === 0){
            return res.status(404).json({message: "Telefono not found"});
        }
        return res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }

};