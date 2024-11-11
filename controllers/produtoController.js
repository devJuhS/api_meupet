const { Product } = require('../models');
require('dotenv').config();

module.exports = class ProductController {
    static async showAll(req, res) {
        try {
            const products = await Product.findAll();
            res.send(products);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar produtos', error });
        }
    }

    static async showOne(req, res) {
        try {
            const product = await Product.findByPk(req.params.id);
            res.send(product);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar o produto', error });
        }
    }

    static async create(req, res) {
        try {
            const product = await Product.create({
                nome_produto: req.body.nome,
                descricao_produto: req.body.descricao,
                preco_produto: req.body.preco,
                estoque_produto: req.body.estoque,
            });
            res.send(product);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar o produto', error });
        }
    }

    static async update(req, res) {
        try {
            await Product.update(
                {
                    nome: req.body.nome,
                    descricao: req.body.descricao,
                    preco: req.body.preco,
                    estoque: req.body.estoque,
                },
                {
                    where: { id: req.params.id },
                }
            );
            res.send({ message: 'Produto atualizado com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar o produto', error });
        }
    }

    static async delete(req, res) {
        try {
            const product = await Product.findByPk(req.params.id);
            await product.destroy();
            res.send({ message: 'Produto deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar o produto', error });
        }
    }
};
