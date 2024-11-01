import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DatosBebeFactory } from '#database/factories/datos_bebe_factory'

export default class extends BaseSeeder {
  async run() {
    await DatosBebeFactory.createMany(10)
  }
}