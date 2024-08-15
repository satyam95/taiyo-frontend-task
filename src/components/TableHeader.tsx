interface Header {
  title: string;
  hideMobile?: boolean;
  readOnly?: boolean;
}

interface TableHeaderProps {
  headers: Header[];
}

const TableHeader = ({ headers }: TableHeaderProps) => {
  return (
    <thead className="[&_tr]:border-b">
      <tr className="border-b transition-colors hover:bg-gray-50 ">
        {headers.map((header, index) => (
          <th
            key={index}
            className={`h-10 px-2 text-left align-middle text-slate-500 font-medium ${
              header.hideMobile ? "hidden md:table-cell" : "table-cell"
            }`}
          >
            {header.readOnly ? (
              <span className="sr-only">{header.title}</span>
            ) : (
              header.title
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
