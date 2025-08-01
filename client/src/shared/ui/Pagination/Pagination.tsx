import { memo, useCallback, useState } from 'react'
import { Button } from '../Button'

interface PaginationProps {
    totalPages: number
    initialPage?: number
    onPageChange?: (page: number) => void
    maxVisiblePages?: number
}

export const Pagination = memo(
    ({ totalPages, initialPage = 1, onPageChange, maxVisiblePages = 5 }: PaginationProps) => {
        const [currentPage, setCurrentPage] = useState(initialPage)

        const handlePageChange = useCallback(
            (page: number) => {
                if (page < 1 || page > totalPages) return
                setCurrentPage(page)
                onPageChange?.(page)
            },
            [setCurrentPage, onPageChange]
        )

        const getVisiblePages = useCallback(() => {
            const pages = []
            const half = Math.floor(maxVisiblePages / 2)
            let start = Math.max(1, currentPage - half)
            let end = Math.min(totalPages, currentPage + half)

            if (end - start + 1 < maxVisiblePages) {
                if (start === 1) {
                    end = Math.min(totalPages, start + maxVisiblePages - 1)
                } else if (end === totalPages) {
                    start = Math.max(1, end - maxVisiblePages + 1)
                }
            }

            for (let i = start; i <= end; i++) {
                pages.push(i)
            }
            return pages
        }, [maxVisiblePages, totalPages])

        return (
            <nav className='w-full flex justify-center'>
                <div className=' flex items-center gap-2'>
                    <Button
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Назад
                    </Button>

                    {getVisiblePages().map(page => (
                        <Button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 rounded ${
                                page === currentPage
                                    ? 'bg-blue-500 font-bold'
                                    : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                        >
                            {page}
                        </Button>
                    ))}

                    <Button
                        className='px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50'
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Вперёд
                    </Button>
                </div>
            </nav>
        )
    }
)
