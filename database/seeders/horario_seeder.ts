import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { HorarioFactory } from '#database/factories/horario_factory'

export default class extends BaseSeeder {
  async run() {
    await HorarioFactory.createMany(10)
  }
}