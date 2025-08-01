import { memo, type ReactNode } from 'react'

interface IContainerProps {
    children: ReactNode
}

export const Container = memo(({ children }: IContainerProps) => {
    return <main className='w-3xl mx-auto pt-1'>{children}</main>
})
