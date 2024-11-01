import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Persona from './persona.js'
import Familiar from './familiar.js'
import Notificacion from './notificacion.js'
import BebeIncubadora from './bebe_incubadora.js'
import { compose } from '@adonisjs/core/helpers'
import { SoftDeletes } from 'adonis-lucid-soft-deletes'

export default class Bebe extends compose(BaseModel, SoftDeletes) {
  public static table = 'bebes'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare persona_id: number

  @column()
  declare fecha_nacimiento: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare deletedAt: DateTime

  @belongsTo(() => Persona)
  declare persona: BelongsTo<typeof Persona>

  @hasMany(() => Familiar)
  declare familiares: HasMany<typeof Familiar>

  @hasMany(() => Notificacion)
  declare notificaciones: HasMany<typeof Notificacion>

  @hasMany(() => BebeIncubadora)
  declare bebeIncubadoras: HasMany<typeof BebeIncubadora>
}