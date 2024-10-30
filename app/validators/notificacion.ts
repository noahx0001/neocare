import vine from '@vinejs/vine'

export const notificacionPost = vine.compile(
    vine.object({
        id: vine.number(),
        bebe_id: vine.number(),
        enfermera_id: vine.number(),
    })
)