import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateMedicoController {
  async handle(request: Request, response: Response) {
    const { nome, imagem, especialidade, plano, localAtendimento, endereco, telefone,  } = request.body

    if (!nome || !imagem || !especialidade || !plano || !localAtendimento || !endereco || !telefone ) {
      return response.status(400).json({ message: 'Dados incorretos' })
    }

    const medico = await prismaClient.medico.create({
      data: {
        nome,
        imagem,
        especialidade,
        plano,
        localAtendimento,
        endereco,
        telefone,
      }
    })

    return response.json(medico)
  }
}