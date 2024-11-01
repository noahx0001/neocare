import factory from '@adonisjs/lucid/factories'
import Horario from '#models/horario'

export const HorarioFactory = factory
  .define(Horario, async ({ faker }) => {
    const horaInicialInt = faker.number.int({ min: 0, max: 23 })
    const horaFinalInt = faker.number.int({ min: horaInicialInt + 1, max: 24 })

    const hora_inicial = `${horaInicialInt.toString().padStart(2, '0')}:00`
    const hora_final = `${horaFinalInt.toString().padStart(2, '0')}:00`

    return {
      enfermera_id: faker.number.int({ min: 1, max: 10 }),
      dia: faker.date.weekday(),
      hora_inicial: hora_inicial,
      hora_final: hora_final
    }
  })
  .build()
