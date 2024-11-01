import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { EnfermeraFactory } from '#database/factories/enfermera_factory'

export default class extends BaseSeeder {
  async run() {
    await EnfermeraFactory.createMany(10)
  }
}