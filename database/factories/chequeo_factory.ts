import factory from '@adonisjs/lucid/factories'
import Chequeo from '#models/chequeo'

export const ChequeoFactory = factory
  .define(Chequeo, async ({ faker }) => {
    return {
      bebe_incubadora_id: faker.number.int({ min: 1, max: 10 }),
      enfermera_id: faker.number.int({ min: 1, max: 10 }),
      descripcion: faker.lorem.sentence(),
    }
  })
  .build()