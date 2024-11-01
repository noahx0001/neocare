import factory from '@adonisjs/lucid/factories'
import Notificacion from '#models/notificacion'

export const NotificacionFactory = factory
  .define(Notificacion, async ({ faker }) => {
    return {
      bebe_id: faker.number.int({ min: 1, max: 10 }),
      enfermera_id: faker.number.int({ min: 1, max: 10 }),
    }
  })
  .build()