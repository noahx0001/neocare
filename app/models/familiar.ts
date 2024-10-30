import { DateTime } from 'luxon'
import Persona from './persona.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo } from '@adonisjs/lucid/orm'
import Bebe from './bebe.js'
export default class Familiar extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @belongsTo(() => Persona)
  declare persona: BelongsTo<typeof Persona>

  @belongsTo(() => Bebe)
  declare bebe: BelongsTo<typeof Bebe>


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}