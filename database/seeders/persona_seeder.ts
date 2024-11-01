import { PersonaFactory } from '#database/factories/persona_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await PersonaFactory.createMany(10)
  }
}