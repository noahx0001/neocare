import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo } from '@adonisjs/lucid/orm'
import Bebe from './bebe.js'
import Enfermera from './enfermera.js'

export default class Notificacion extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @belongsTo(() => Bebe)
  declare bebe: BelongsTo<typeof Bebe>

  @belongsTo(() => Enfermera)
  declare enfermera: BelongsTo<typeof Enfermera>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}