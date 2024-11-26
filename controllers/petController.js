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
            if (pet) {
                res.send(pet);
            } else {
                res.status(404).json({ message: 'Pet não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar o pet', error });
        }
    }

    static async create(req, res) {
        try {
            const pet = await Pet.create({
                nome_pet: req.body.nome_pet,
                sexo_pet: req.body.sexo_pet,
                castracao: req.body.castracao,
                raca_pet: req.body.raca_pet,
                peso_pet: req.body.peso_pet,
                petid_user: req.body.petid_user,
            });
            res.status(201).send(pet);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar o pet', error });
        }
    }

    static async update(req, res) {
        try {
            const result = await Pet.update(
                {
                    nome_pet: req.body.nome_pet,
                    sexo_pet: req.body.sexo_pet,
                    castracao: req.body.castracao,
                    raca_pet: req.body.raca_pet,
                    peso_pet: req.body.peso_pet,
                    petid_user: req.body.petid_user,
                },
                {
                    where: { id_pet: req.params.id },
                }
            );
            if (result[0] === 1) {
                res.send({ message: 'Pet atualizado com sucesso' });
            } else {
                res.status(404).json({ message: 'Pet não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar o pet', error });
        }
    }

    static async delete(req, res) {
        try {
            const pet = await Pet.findByPk(req.params.id);
            if (pet) {
                await pet.destroy();
                res.send({ message: 'Pet deletado com sucesso' });
            } else {
                res.status(404).json({ message: 'Pet não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar o pet', error });
        }
    }
};

//teste//