import vine from '@vinejs/vine'

export const rolPost = vine.compile(
    vine.object({
        id: vine.number(),
        rol: vine.string().trim().minLength(5).escape(),
    })
)

export const rolUpdate = vine.compile(
    vine.object({
        rol: vine.string().trim().minLength(5).escape(),
    })
)