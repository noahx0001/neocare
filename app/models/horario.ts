import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo } from '@adonisjs/lucid/orm'
import Enfermera from './enfermera.js'

export default class Horario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @belongsTo(() => Enfermera)
  declare enfermera: BelongsTo<typeof Enfermera>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}