import vine from '@vinejs/vine'

export const incubadoraPost = vine.compile(
    vine.object({
        id: vine.number(),
        estado: vine.string().trim().escape(),
    })
)

export const incubadoraUpdate = vine.compile(
    vine.object({
        estado: vine.string().trim().escape().optional(),
    })
)