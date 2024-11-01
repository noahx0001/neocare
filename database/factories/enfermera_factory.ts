import factory from '@adonisjs/lucid/factories'
import Enfermera from '#models/enfermera'



export const EnfermeraFactory = factory
  .define(Enfermera, async ({ faker }) => {
    const apellidoPaterno = faker.person.lastName().slice(0, 2).toUpperCase()
    const apellidoMaterno = faker.person.lastName().slice(0, 1).toUpperCase()
    const nombre = faker.person.firstName().slice(0, 1).toUpperCase()

    const year = String(faker.number.int({ min: 1950, max: 2023 })).slice(-2)
    const month = String(faker.number.int({ min: 1, max: 12 })).padStart(2, '0')
    const day = String(faker.number.int({ min: 1, max: 28 })).padStart(2, '0')
    const fecha = `${year}${month}${day}`

    const homoclave = faker.string.alphanumeric(3).toUpperCase()

    const rfc = `${apellidoPaterno}${apellidoMaterno}${nombre}${fecha}${homoclave}`

    return {
      user_id: faker.number.int({ min: 1, max: 10 }),
      persona_id: faker.number.int({ min: 1, max: 10 }),
      rfc: rfc
    }
  })
  .build()