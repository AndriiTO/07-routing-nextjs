import ReactPaginate from 'react-paginate'
import css from './Pagination.module.css'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      forcePage={currentPage - 1}
      onPageChange={event => onPageChange(event.selected + 1)}
      containerClassName={css.pagination}
      pageClassName={css.page}
      pageLinkClassName={css.link}
      activeClassName={css.active}
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
    />
  )
}