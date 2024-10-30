import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'datos_bebes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('bebe_incubadora_id').notNullable().unsigned().references('id').inTable('bebes_incubadoras').onDelete('CASCADE')
      table.integer('oxigenacion').notNullable()
      table.smallint('pulsaciones').notNullable()
      table.double('temperatura').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}