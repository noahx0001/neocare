import factory from '@adonisjs/lucid/factories'
import Rol from '#models/rol'

const roles = ['admin', 'enfermera', 'secretaria']

export const RolFactory = factory
  .define(Rol, async () => {
    return {
      nombre: roles[Math.floor(Math.random() * roles.length)],
    }
  })
  .build()