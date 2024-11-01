import factory from '@adonisjs/lucid/factories'
import DatosBebe from '#models/datos_bebe'

export const DatosBebeFactory = factory
  .define(DatosBebe, async ({ faker }) => {
    return {
      bebe_incubadora_id: faker.number.int({ min: 1, max: 10 }),
      oxigenacion: faker.number.int({ min: 80, max: 100 }),
      pulsaciones: faker.number.int({ min: 60, max: 180 }),
      temperatura_ambient: faker.number.float({ min: 20, max: 25}),
      temperatura_corporal: faker.number.float({ min: 35.5, max: 37.5})
    }
  })
  .build()