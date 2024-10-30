import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Rol extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


  @manyToMany(() => Rol, {
    pivotTable: 'usuarios_roles'
  })
  public roles!: ManyToMany<typeof Rol>
}