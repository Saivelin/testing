import { memo, Suspense, useMemo, useState } from 'react'
import { Pagination } from '../../../../shared/ui/Pagination'
import { Table } from '../../../../shared/ui/Table'
import { useGetProductsQuery } from '../../api/productsApi'

// article: string
// name: string
// price: number
// quantity: number

const COUNT = 1
const ROWS = [
    {
        key: 'id',
        title: 'ID'
    },
    {
        key: 'article',
        title: 'Артикль'
    },
    {
        key: 'name',
        title: 'Название'
    },
    {
        key: 'price',
        title: 'Цена'
    },
    {
        key: 'quantity',
        title: 'Кол-во'
    },
    {
        key: 'createdAt',
        title: 'Создано'
    }
]

export const ProductsTable = memo(() => {
    const [page, setPage] = useState<number>(1)

    const { data } = useGetProductsQuery()

    const startIdx = useMemo(() => (page - 1) * COUNT, [data, page])
    const endIdx = useMemo(() => startIdx + COUNT, [data, page])
    const pagedData = useMemo(() => (data ? data.slice(startIdx, endIdx) : []), [data, page])
    const totalPages = useMemo(() => (data ? Math.ceil(data.length / COUNT) : 0), [data, page])

    return (
        <Suspense fallback={'Loading...'}>
            {data && data?.length && data?.length > 0 && pagedData ? (
                <>
                    <Table
                        rows={ROWS}
                        data={pagedData}
                        className='mb-1'
                    />
                    <Pagination
                        totalPages={totalPages}
                        onPageChange={p => {
                            setPage(p)
                        }}
                    />
                </>
            ) : null}
        </Suspense>
    )
})
