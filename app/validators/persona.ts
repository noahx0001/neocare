import vine from '@vinejs/vine'

export const personaPost = vine.compile(
    vine.object({
        id: vine.number(),
        nombre: vine.string().trim().minLength(3).escape(),
        apellido_paterno: vine.string().trim().minLength(10).escape(),
        apellido_materno: vine.string().trim().minLength(10).escape().nullable(),
    })
  )

  export const personaUpdate = vine.compile(
    vine.object({
        nombre: vine.string().trim().minLength(3).escape().optional(),
        apellido_paterno: vine.string().trim().minLength(10).escape().optional(),
        apellido_materno: vine.string().trim().minLength(10).escape().nullable().optional(),
    })
  )