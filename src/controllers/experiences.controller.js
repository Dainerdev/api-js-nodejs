import { getConnection } from "./../database/database";

// GET function
const getExperiences = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, empresa, puesto, fecha_inicio, fecha_fin, responsabilidades, salario FROM experiences");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }    
};

// POST function
const addExperiences = async (req, res) => {
    try {
        const { empresa, puesto, fecha_inicio, 
            fecha_fin, responsabilidades, salario } = req.body;

        if (empresa === undefined || puesto === undefined || fecha_inicio === undefined ||
            fecha_fin === undefined || responsabilidades === undefined || salario === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
        }

        const experience = {
            empresa, puesto, fecha_inicio, 
            fecha_fin, responsabilidades, salario
        };

        const connection = await getConnection();
        await connection.query("INSERT INTO experiences SET ?", experience);
        res.json({ message: "Experience added." });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }    
};

// GET BY ID function
const getExperience = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, empresa, puesto, fecha_inicio, fecha_fin, responsabilidades, salario FROM experiences WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }    
};

// UPDATE function
const updateExperience = async (req, res) => {
    try {
        const { id } = req.params;
        const { empresa, puesto, fecha_inicio, 
            fecha_fin, responsabilidades, salario } = req.body;

        if ( id === undefined || empresa === undefined || puesto === undefined ||
            fecha_inicio === undefined || fecha_fin === undefined || responsabilidades === undefined ||
            salario === undefined
        ) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
        }

        const experience = {
            id, empresa, puesto, fecha_inicio,
            fecha_fin, responsabilidades, salario
        };            
            
        const connection = await getConnection();
        const result = await connection.query("UPDATE experiences SET ? WHERE id = ?", [experience, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }    
};

// DELETE function
const deleteExperience = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM experiences WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }    
};

export const methods = {
    getExperiences,
    addExperiences,
    getExperience,
    deleteExperience,
    updateExperience
};