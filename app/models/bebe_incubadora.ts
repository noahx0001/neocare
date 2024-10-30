import { DateTime } from 'luxon'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Incubadora from './incubadora.js'
import Bebe from './bebe.js'
import Chequeo from './chequeo.js'
import DatosBebe from './datos_bebe.js'

export default class BebeIncubadora extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @belongsTo(() => Bebe)
  declare bebe: BelongsTo<typeof Bebe>

  @belongsTo(() => Incubadora)
  declare incubadora: BelongsTo<typeof Incubadora>

  @hasMany(() => Chequeo)
  declare chequeo: HasMany<typeof Chequeo>

  @hasMany(() => DatosBebe)
  declare DatosBebe: HasMany<typeof DatosBebe>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}