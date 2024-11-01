import { ChequeoFactory } from '#database/factories/chequeo_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await ChequeoFactory.createMany(10)
  }
}