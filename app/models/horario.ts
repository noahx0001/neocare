import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo } from '@adonisjs/lucid/orm'
import Enfermera from './enfermera.js'
import { compose } from '@adonisjs/core/helpers'
import { SoftDeletes } from 'adonis-lucid-soft-deletes'

export default class Horario extends compose(BaseModel, SoftDeletes) {
  public static table = 'horarios'
  
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare enfermera_id: number

  @column()
  declare dia: string 

  @column()
  declare hora_inicial: string

  @column()
  declare hora_final: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare deletedAt: DateTime

  @belongsTo(() => Enfermera)
  declare enfermera: BelongsTo<typeof Enfermera>
}
