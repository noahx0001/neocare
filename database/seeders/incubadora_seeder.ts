import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { IncubadoraFactory } from '#database/factories/incubadora_factory'

export default class extends BaseSeeder {
  async run() {
    await IncubadoraFactory.createMany(10)
  }
}