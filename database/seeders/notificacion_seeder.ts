import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { NotificacionFactory } from '#database/factories/notificacion_factory'

export default class extends BaseSeeder {
  async run() {
    await NotificacionFactory.createMany(10)
  }
}