import vine from '@vinejs/vine'

export const usuarioRolPost = vine.compile(
    vine.object({
        user_id: vine.number(),
        rol_id: vine.number(),
    })
  )

  export const usuarioRolUpdate = vine.compile(
    vine.object({
        rol_id: vine.number(),
    })
  )