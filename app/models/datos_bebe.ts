import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo } from '@adonisjs/lucid/orm'
import BebeIncubadora from './bebe_incubadora.js'
import { compose } from '@adonisjs/core/helpers'
import { SoftDeletes } from 'adonis-lucid-soft-deletes'
export default class DatosBebe extends compose(BaseModel, SoftDeletes) {
  @column({ isPrimary: true })
  declare id: number

  @belongsTo(() => BebeIncubadora)
  declare bebeIncubadora: BelongsTo<typeof BebeIncubadora>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare deletedAt: DateTime
}