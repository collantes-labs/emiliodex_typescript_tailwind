import { PaginationProps } from "../interface/interfaces";

export default function Pagination({
  current,
  count,
  onChange,
}: PaginationProps) {
  const pages = Array.from({ length: count }, (_, i) => i + 1);
  const pagesToShow = pages.slice(
    current > 2 ? current - 2 : 0,
    current < pages.length - 1 ? current + 3 : pages.length
  );

  return (
    <nav aria-label="Page navigation" className="pb-4 flex justify-center">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li
          className={
            current === 1
              ? "cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-gray-300 dark:bg-gray-600 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white pointer-events-none"
              : "cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }
          onClick={() => (current === 1 ? null : onChange(current - 1))}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-2.5 h-2.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </li>
        {pagesToShow.map((page) => (
          <li
            key={page}
            onClick={() => onChange(page)}
            className={
              current === page
                ? "cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-300 dark:bg-gray-600 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                : "cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }
          >
            {page}
          </li>
        ))}
        <li
          className={
            current === count
              ? "cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-gray-300 dark:bg-gray-600 border border-e-0 border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white pointer-events-none"
              : "cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }
          onClick={() => onChange(current + 1)}
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-2.5 h-2.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
}
