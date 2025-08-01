export type TProduct = {
    id: number // автоинкремент
    article: string // артикул (уникальный)
    name: string // название товара (обязательное)
    price: number // цена (обязательное, >0)
    quantity: number // количество на складе (>=0)
    createdAt: Date // дата создания
}

export type TProductDTO = Omit<Omit<TProduct, 'id'>, 'createdAt'>
