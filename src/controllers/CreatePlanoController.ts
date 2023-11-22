import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreatePlanoController {
  async handle(request: Request, response: Response) {
    const { nome, imagem, descricao, valor, status } = request.body

    if (!nome || !imagem || !descricao || !valor) {
      return response.status(400).json({ message: 'Dados incorretos' })
    }

    const plano = await prismaClient.plano.create({
      data: {
        nome,
        imagem,
        descricao,
        valor,
        status
      }
    })

    return response.json(plano)
  }
}