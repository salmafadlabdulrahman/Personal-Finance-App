import Image from "next/image";

interface PaginationProps {
  totalPages: number;
  goToPage: (num: number) => void;
  currentPage: number;
}

const Pagination = ({ totalPages, goToPage, currentPage }: PaginationProps) => {
  return (
    <div className="flex-row mt-5">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-border"
      >
        <Image
          alt="right arrow"
          src={"/assets/images/icon-caret-left.svg"}
          width={12}
          height={12}
          className="m-auto"
        />
      </button>
      <div className="hidden md:flex gap-5">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`border-[1px] border-gray-500 w-[40px] h-[40px] rounded-lg ${
              currentPage === index + 1 ? "bg-grey900 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-border"
      >
        <Image
          alt="right arrow"
          src={"/assets/images/icon-caret-right.svg"}
          width={12}
          height={12}
          className="m-auto"
        />
      </button>
    </div>
  );
};

export default Pagination;
