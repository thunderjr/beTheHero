const connection = require('./../database/connection');

module.exports = {
    create: async (request, response) => {
        const { id } = request.body;
        const ong = await connection('ongs').where('id', id).select('name').first();
        
        if (!ong) {
            return response.status(400).json({ error: "ONG não encontrada com o ID especificado!"});
        } 

        return response.json(ong);
    }
}