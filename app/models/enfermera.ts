import { DateTime } from 'luxon'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Persona from './persona.js'
import User from './user.js'
import Horario from './horario.js'
import Notificacion from './notificacion.js'
import Chequeo from './chequeo.js'
import { compose } from '@adonisjs/core/helpers'
import { SoftDeletes } from 'adonis-lucid-soft-deletes'

export default class Enfermera extends compose(BaseModel, SoftDeletes) {
  @column({ isPrimary: true })
  declare id: number

  @belongsTo(() => Persona)
  declare persona: BelongsTo<typeof Persona>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(() => Horario)
  declare horario: HasMany<typeof Horario>

  @hasMany(() => Notificacion)
  declare notificacion: HasMany<typeof Notificacion>

  @hasMany(() => Chequeo)
  declare chequeo: HasMany<typeof Chequeo>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare deletedAt: DateTime
}