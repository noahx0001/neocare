import factory from '@adonisjs/lucid/factories'
import Persona from '#models/persona'

export const PersonaFactory = factory
  .define(Persona, async ({ faker }) => {
    return {
      nombre: faker.person.firstName(),
      apellido_paterno: faker.person.lastName(),
      apellido_materno: faker.person.lastName(),
    }
  })
  .build()