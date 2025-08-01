import { memo } from 'react'

type Row = { title: string; key: string }

type TableProps<Rows extends ReadonlyArray<Row>> = {
    rows: Rows
    data: Array<{
        [K in Rows[number]['key']]: any
    }>
    className?: string
}

export const Table = memo(<Rows extends ReadonlyArray<Row>>({ rows, data, className }: TableProps<Rows>) => {
    return (
        <div className={`rounded-xs overflow-x-auto ${className}`}>
            <table className='min-w-full border border-gray-300 divide-y divide-gray-200 text-sm text-left'>
                <thead className='bg-gray-100'>
                    <tr>
                        {rows.map(row => (
                            <th
                                key={row.key}
                                className='px-4 py-2 font-semibold text-gray-700 uppercase tracking-wider'
                            >
                                {row.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-100'>
                    {data.map((item, idx) => (
                        <tr
                            key={idx}
                            className='hover:bg-gray-50'
                        >
                            {rows.map(row => (
                                <td
                                    key={row.key}
                                    className='px-4 py-2 text-gray-800'
                                >
                                    {item[row.key as keyof typeof item]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
})
