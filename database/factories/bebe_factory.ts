import factory from '@adonisjs/lucid/factories'
import Bebe from '#models/bebe'

export const BebeFactory = factory
  .define(Bebe, async ({ faker }) => {
    return {
      persona_id: faker.number.int({ min: 1, max: 10 }),
      fecha_nacimiento: faker.date.past(),
    }
  })
  .build()