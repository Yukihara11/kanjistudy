interface PaginationProps {
    currentPage: number
    totalPages: number
    setCurrentPage: (value: number | ((prev: number) => number)) => void
}

export default function Pagination({ currentPage, totalPages, setCurrentPage }: PaginationProps) {
    return (
        <div className="flex flex-row gap-2 mt-4 justify-center text-2xl">
            <div className="border-2 border-solid p-2">
                <button
                    className="mr-3 hover:bg-gray-700 hover:cursor-pointer"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => p - 1)}
                >
                    Prev
                </button>

                <span>
          {currentPage} / {totalPages}
        </span>

                <button
                    className="ml-3 hover:bg-gray-700 hover:cursor-pointer"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(p => p + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
