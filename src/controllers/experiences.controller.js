import { getConnection } from "./../database/database";

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

const addExperiences = async (req, res) => {
    try {
        console.log(req.body);
        const connection = await getConnection();

        res.json(addExperience);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }    
};

export const methods = {
    getExperiences,
    addExperiences
};