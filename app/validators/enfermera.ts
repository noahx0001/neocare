import vine from '@vinejs/vine'

export const enfermeraPost = vine.compile(
    vine.object({
      id: vine.number(),
      user_id: vine.number(),
      persona_id: vine.number(),
      rfc: vine
        .string()
        .trim()
        .minLength(13)
        .maxLength(13)
        .escape()
        .regex(/^[A-ZÑ&]{3,4}\d{6}[A-Z\d]{2}\d$/)
    })
  )