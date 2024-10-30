import vine from '@vinejs/vine'

export const horarioPost = vine.compile(
    vine.object({
        id: vine.number(),
        enfermera_id: vine.number(),
        dia: vine.string().trim().escape(),
        hora_entrada: vine.string().trim().escape(),
        hora_salida: vine.string().trim().escape(),
    })
)