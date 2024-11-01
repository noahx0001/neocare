import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { RolFactory } from '#database/factories/rol_factory'

export default class extends BaseSeeder {
  async run() {
    await RolFactory.createMany(6)
  }
}