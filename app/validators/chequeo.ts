import vine from '@vinejs/vine'

export const chequeoPost = vine.compile(
    vine.object({
        id: vine.number(),
        bebe_incubadora_id: vine.number(),
        enfermera_id: vine.number(),
        descripcion: vine.string().trim().escape(),
        fecha_hora: vine.date(),
    })
)

export const chequeoUpdate = vine.compile(
    vine.object({
        descripcion: vine.string().trim().escape().optional(),
        fecha_hora: vine.date().optional(),
    })
)