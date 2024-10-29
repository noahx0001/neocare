import vine from '@vinejs/vine'

export const personaPost = vine.compile(
    vine.object({
        id: vine.number(),
        persona_id: vine.number(),
        fecha_nacimiento: vine.date(),
    })
  )

  export const bebeUpdate = vine.compile(
    vine.object({
        fecha_nacimiento: vine.date().optional(),
    })
  )