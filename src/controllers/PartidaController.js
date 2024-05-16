const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class PartidaController {
    async create(request, response) {
        try {
            const { data, local, placar, timeCasa, timeVisitante } = request.body
            const partida = await prisma.partida.create({
                data: {
                    data, 
                    local,
                    placar,
                    timeCasa,
                    timeVisitante,
                },
            })

            response.json(partida)
        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }
    }

    async show(request, response) {
        try {
            const { id } = request.params
            const partida = await prisma.partida.findMany({ where: { id } });

            response.json(partida)

        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }
    }

    async update(request, response) {
        try {

            const { data, local, placar, timeCasa, timeVisitante, } = request.body
            const { id } = request.params

            const result = await prisma.partida.update({
                where: {
                    id: id,
                },
                data: {
                    data, 
                    local,
                    placar,
                    timeCasa,
                    timeVisitante,
                },
            });

            return response.status(200).send()

        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }

    }

}

module.exports = PartidaController