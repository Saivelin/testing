import { memo, type InputHTMLAttributes } from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string
}

export const Input = memo((props: IInputProps) => {
    return (
        <div className='w-full'>
            <input
                {...props}
                className={`p-1 rounded-md w-full bg-white ${props.className}`}
            ></input>
            {props?.error ? <p className='text-red-300'>{props.error}</p> : null}
        </div>
    )
})
