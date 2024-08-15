import { SVGProps } from "react";

interface TableRowItemProps {
  imageSrc?: string;
  name: string;
  status: string;
  email: string;
  number: string;
  onEdit: () => void;
  onDelete: () => void;
}

const TableRowItem = ({
  imageSrc,
  name,
  status,
  email,
  number,
  onEdit,
  onDelete,
}: TableRowItemProps) => {
  return (
    <tr className="border-b transition-colors hover:bg-gray-50">
      <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] hidden md:table-cell">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`Headshot of ${name}`}
            className="w-16 h-16 rounded-md"
          />
        ) : (
          <div className="w-16 h-16 rounded-md bg-slate-300" />
        )}
      </td>
      <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] font-medium">
        {name}
      </td>
      <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
          {status}
        </div>
      </td>
      <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] hidden md:table-cell">
        {email}
      </td>
      <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] table-cell">
        {number}
      </td>
      <td className="relative p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] flex md:block">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
          aria-haspopup="true"
          type="button"
          aria-expanded="false"
          data-state="closed"
          onClick={onEdit}
        >
          <EditIcon className="lucide lucide-ellipsis h-4 w-4" />
          <span className="sr-only">{`Edit button for ${name}`}</span>
        </button>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
          aria-haspopup="true"
          type="button"
          aria-expanded="false"
          data-state="closed"
          onClick={onDelete}
        >
          <DeleteIcon className="lucide lucide-ellipsis h-4 w-4" />
          <span className="sr-only">{`Delete button for ${name}`}</span>
        </button>
      </td>
    </tr>
  );
};

export default TableRowItem;

const EditIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
        fill="#0F0F0F"
      />
    </svg>
  );
};

const DeleteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 12V17"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 12V17"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 7H20"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
