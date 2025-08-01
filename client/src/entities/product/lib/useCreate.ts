import { useForm } from 'react-hook-form'
import type { TProductDTO } from '../model/types'
import { useCreateProductsMutation } from '../api/productsApi'

export type IForm = TProductDTO

export const useCreate = () => {
    const { register, handleSubmit, formState } = useForm<IForm>({ defaultValues: { quantity: 0, price: 0 } })

    const [submit] = useCreateProductsMutation()

    const onSubmit = (data: IForm) => {
        data.price = Number(data.price)
        data.quantity = Number(data.quantity)
        submit(data)
    }

    return { register, formState, onSubmit: handleSubmit(onSubmit) }
}
