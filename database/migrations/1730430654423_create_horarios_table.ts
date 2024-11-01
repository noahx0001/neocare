import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'horarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('enfermera_id').notNullable().unsigned().references('id').inTable('enfermeras').onDelete('CASCADE')
      table.string('dia').notNullable()
      table.time('hora_inicial').notNullable()
      table.time('hora_final').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}