import factory from '@adonisjs/lucid/factories'
import Incubadora from '#models/incubadora'

const estados = ['abierto', 'cerrado']

export const IncubadoraFactory = factory
  .define(Incubadora, async () => {
    return {
      estado: estados[Math.floor(Math.random() * estados.length)],
    }
  })
  .build()