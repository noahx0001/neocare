import factory from '@adonisjs/lucid/factories'
import BebeIncubadora from '#models/bebe_incubadora'

export const BebeIncubadoraFactory = factory
  .define(BebeIncubadora, async ({ faker }) => {
    return {
      bebe_id: faker.number.int({ min: 1, max: 10 }),
      incubadora_id: faker.number.int({ min: 1, max: 10 }),
      fecha_ingreso: faker.date.past(),
      fecha_egreso: faker.date.future(),
    }
  })
  .build()