import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, hasMany } from '@adonisjs/lucid/orm'
import BebeIncubadora from './bebe_incubadora.js'

export default class Incubadora extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasMany(() => BebeIncubadora)
  declare bebeIncubadoras: HasMany<typeof BebeIncubadora>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}