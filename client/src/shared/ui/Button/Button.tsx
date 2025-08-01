import { memo, type ButtonHTMLAttributes } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = memo((props: IButtonProps) => {
    return (
        <button
            {...props}
            className={`px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 cursor-pointer ${props.className}`}
        >
            {props?.children}
        </button>
    )
})
