import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo } from '@adonisjs/lucid/orm'
import Bebe from './bebe.js'
import Enfermera from './enfermera.js'
import { compose } from '@adonisjs/core/helpers'
import { SoftDeletes } from 'adonis-lucid-soft-deletes'

export default class Notificacion extends compose(BaseModel, SoftDeletes) {
  public static table = 'notificaciones'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare bebe_id: number

  @column()
  declare enfermera_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare deletedAt: DateTime

  @belongsTo(() => Bebe)
  declare bebe: BelongsTo<typeof Bebe>

  @belongsTo(() => Enfermera)
  declare enfermera: BelongsTo<typeof Enfermera>
}