import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import UsuarioRol from './usuario_rol.js'
import Enfermera from './enfermera.js'
import { SoftDeletes } from 'adonis-lucid-soft-deletes'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder, SoftDeletes) {
  public static table = 'users'

  @column({ isPrimary: true })
  declare id: number

  @hasMany(() => UsuarioRol)
  declare usuarioRol: HasMany<typeof UsuarioRol>

  @hasMany(() => Enfermera)
  declare enfermera: HasMany<typeof Enfermera>

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @column.dateTime({ serializeAs: null })
  declare deletedAt: DateTime | null

  static accessTokens = DbAccessTokensProvider.forModel(User)
}