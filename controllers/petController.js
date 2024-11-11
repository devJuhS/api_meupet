const { Pet } = require('../models');
require('dotenv').config();

module.exports = class PetController {
    static async showAll(req, res) {
        try {
            const pets = await Pet.findAll();
            res.send(pets);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar pets', error });
        }
    }

    static async showOne(req, res) {
        try {
            const pet = await Pet.findByPk(req.params.id);
            res.send(pet);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar o pet', error });
        }
    }

    static async create(req, res) {
        try {
            const pet = await Pet.create({
                nome: req.body.nome,
                idade: req.body.idade,
                especie: req.body.especie,
                raca: req.body.raca,
            });
            res.send(pet);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar o pet', error });
        }
    }

    static async update(req, res) {
        try {
            await Pet.update(
                {
                    nome: req.body.nome,
                    idade: req.body.idade,
                    especie: req.body.especie,
                    raca: req.body.raca,
                },
                {
                    where: { id: req.params.id },
                }
            );
            res.send({ message: 'Pet atualizado com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar o pet', error });
        }
    }

    static async delete(req, res) {
        try {
            const pet = await Pet.findByPk(req.params.id);
            await pet.destroy();
            res.send({ message: 'Pet deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar o pet', error });
        }
    }
};
