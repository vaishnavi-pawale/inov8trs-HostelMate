export const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <table className="table-auto w-full border-collapse">{children}</table>;
};

// Table Header Component
export const TableHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <thead className={`bg-gray-300 ${className || ""}`}>{children}</thead>;
};

// Table Row Component
export const TableRow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <tr className={`border-b border-gray-200 ${className || ""}`}>{children}</tr>;
};

// Table Data Component  
export const TableData: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <td className={`p-4 ${className || ""}`}>{children}</td>;
};

// Table Footer Component
export const TableFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <tfoot className={`bg-gray-300 ${className || ""}`}>{children}</tfoot>;
};

// Table Cell Component
export const TableCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <td className={`p-4 border-b border-gray-200 ${className || ""}`}>{children}</td>;
};

// Table Caption Component
export const TableCaption: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <caption className={`text-lg font-semibold ${className || ""}`}>{children}</caption>;
};

// Table Pagination Component
export const TablePagination: React.FC<{
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="flex justify-between items-center mt-4">
            {/* Previous Button */}
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className={`px-3 py-1 rounded-full cursor-pointer ${
                    currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "hover:bg-gray-200"
                }`}
            >
                &larr; Previous
            </button>

            {/* Page Numbers */}
            <ul className="flex space-x-2">
                {pageNumbers.map((page) => (
                    <li
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`px-3 py-1 rounded-full cursor-pointer ${
                            currentPage === page ? "bg-gray-300" : "hover:bg-gray-200"
                        }`}
                    >
                        {page}
                    </li>
                ))}
            </ul>

            {/* Next Button */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className={`px-3 py-1 rounded-full cursor-pointer ${
                    currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "hover:bg-gray-200"
                }`}
            >
                Next &rarr;
            </button>
        </div>
    );
};

// Table Head Component
export const TableHead: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <th className={`p-4 bg-gray-200 text-left font-semibold ${className || ""}`}>{children}</th>;
};

// Table Body Component
export const TableBody: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <tbody className={className || ""}>{children}</tbody>;
};
