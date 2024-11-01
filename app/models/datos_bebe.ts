import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo } from '@adonisjs/lucid/orm'
import BebeIncubadora from './bebe_incubadora.js'
import { compose } from '@adonisjs/core/helpers'
import { SoftDeletes } from 'adonis-lucid-soft-deletes'
export default class DatosBebe extends compose(BaseModel, SoftDeletes) {
  public static table = 'datos_bebes'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare bebe_incubadora_id: number

  @column()
  declare oxigenacion: number

  @column()
  declare pulsaciones: number

  @column()
  declare temperatura_ambient: number

  @column()
  declare temperatura_corporal: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare deletedAt: DateTime

  @belongsTo(() => BebeIncubadora)
  declare bebeIncubadora: BelongsTo<typeof BebeIncubadora>
}