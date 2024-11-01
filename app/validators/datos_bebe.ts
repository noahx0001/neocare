import vine from '@vinejs/vine'

export const datosBebePost = vine.compile(
    vine.object({
        id: vine.number(),
        bebe_incubadora_id: vine.number(),
        oxigenacion: vine.number(),
        pulsaciones: vine.number(),
        temperatura_ambiental: vine.number(),
        temperatura_corporal: vine.number(),
        fecha_registro: vine.date(),
    })
)