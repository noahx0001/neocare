import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { BebeFactory } from '#database/factories/bebe_factory'

export default class extends BaseSeeder {
  async run() {
    await BebeFactory.createMany(10)
  }
}