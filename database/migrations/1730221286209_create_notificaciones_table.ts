import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'notificaciones'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('bebe_id').notNullable().unsigned().references('id').inTable('bebes').onDelete('CASCADE')
      table.integer('enferma_id').notNullable().unsigned().references('id').inTable('enfermeras').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}