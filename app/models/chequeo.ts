import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo } from '@adonisjs/lucid/orm'
import BebeIncubadora from './bebe_incubadora.js'
import Enfermera from './enfermera.js'

export default class Chequeo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @belongsTo(() => Enfermera)
  declare enfermera: BelongsTo<typeof Enfermera>

  @belongsTo(() => BebeIncubadora)
  declare bebeIncubadora: BelongsTo<typeof BebeIncubadora>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}