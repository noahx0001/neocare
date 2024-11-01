import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bebes_incubadoras'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('bebe_id').notNullable().unsigned().references('id').inTable('bebes').onDelete('CASCADE')
      table.integer('incubadora_id').notNullable().unsigned().references('id').inTable('incubadoras').onDelete('CASCADE')
      table.date('fecha_ingreso').notNullable()
      table.date('fecha_egreso').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.timestamp('deleted_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}