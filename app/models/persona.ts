import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Familiar from './familiar.js'
import Enfermera from './enfermera.js'
import Bebe from './bebe.js'
import { compose } from '@adonisjs/core/helpers'
import { SoftDeletes } from 'adonis-lucid-soft-deletes'

export default class Persona extends compose(BaseModel, SoftDeletes) {
  public static table = 'personas'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare apellido_paterno: string

  @column()
  declare apellido_materno: string

  @hasMany(() => Familiar)
  declare familiares: HasMany<typeof Familiar>

  @hasMany(() => Enfermera)
  declare enfermeras: HasMany<typeof Enfermera>

  @hasMany(() => Bebe)
  declare bebes: HasMany<typeof Bebe>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare deletedAt: DateTime
}