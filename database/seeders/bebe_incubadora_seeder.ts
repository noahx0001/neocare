import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { BebeIncubadoraFactory } from '#database/factories/bebe_incubadora_factory'

export default class extends BaseSeeder {
  async run() {
    await BebeIncubadoraFactory.createMany(10)
  }
}