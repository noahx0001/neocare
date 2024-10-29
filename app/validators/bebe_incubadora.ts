import vine from '@vinejs/vine'

export const bebeIncubadoraPost = vine.compile(
    vine.object({
        id: vine.number(),
        bebe_id: vine.number(),
        incubadora_id: vine.number(),
        fecha_ingreso: vine.date(),
        fecha_salida: vine.date().optional(),
    })
)

export const bebeIncubadoraUpdate = vine.compile(
    vine.object({
        incubadora_id: vine.number(),
        fecha_ingreso: vine.date().optional(),
        fecha_salida: vine.date().optional(),
    })
)