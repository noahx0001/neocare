import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Familiar from './familiar.js'
import Enfermera from './enfermera.js'
import Bebe from './bebe.js'

export default class Persona extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

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
}