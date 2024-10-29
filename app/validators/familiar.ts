import vine from '@vinejs/vine'
export const familiarPost = vine.compile(
    vine.object({
        id: vine.number(),
        persona_id: vine.number(),
        bebe_id: vine.number(),
        telefono: vine.number().min(10).max(10),
        contacto: vine.string().trim().minLength(10).escape().optional().nullable(),
    })
  )

  export const familiarUpdate = vine.compile(
    vine.object({
        telefono: vine.number().min(10).max(10).optional(),
        contacto: vine.string().trim().minLength(10).escape().optional().nullable(),
    })
  )