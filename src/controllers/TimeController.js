const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class TimeController {
    async create(request, response) {
        try {
            const { name, anoFundacao, pais, tecnico } = request.body
            const time = await prisma.time.create({
                data: {
                    name, 
                    anoFundacao,
                    pais,
                    tecnico,
                },
            })

            response.json(time)
        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }
    }


    async delete(request, response) {

        try {
            const { id } = request.params


            const deleteTime = await prisma.time.delete({
                where: {
                    id: id,
                },
            })

            return response.status(200).send()

        } catch (err) {
            console.log(err)
            return response.status(409).send()
        }

    }
}

module.exports = TimeController