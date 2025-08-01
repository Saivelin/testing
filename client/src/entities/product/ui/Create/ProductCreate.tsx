import { memo } from 'react'
import { Button } from '../../../../shared/ui/Button'
import { Input } from '../../../../shared/ui/Input'
import { useCreate } from '../../lib/useCreate'

export const ProductCreate = memo(({ className }: { className?: string }) => {
    const { register, formState, onSubmit } = useCreate()

    return (
        <div className={`${className} w-full flex flex-col gap-1`}>
            <h1 className='text-white'>Добавить</h1>
            <Input
                placeholder='Название'
                error={formState.errors?.name?.message}
                {...register('name', { required: { value: true, message: 'Обязательно' } })}
            />
            <Input
                {...register('article')}
                placeholder='Артикль'
            />
            <Input
                type='number'
                placeholder='Кол-во'
                error={formState.errors?.quantity?.message}
                {...register('quantity', { min: { value: 0, message: 'Минимально 0' } })}
            />
            <Input
                placeholder='Цена'
                type='number'
                error={formState.errors?.price?.message}
                {...register('price', { min: { value: 1, message: 'Минимально 1' } })}
            />
            <Button onClick={onSubmit}>Добавить</Button>
        </div>
    )
})
