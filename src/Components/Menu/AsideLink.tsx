import { useState } from "react";
import { Link } from "react-router-dom";

type MenuItem = {
  label: string;
  href: string;
};

type AsideLinkProps = {
  title: string;
  items: MenuItem[];
};

export default function AsideLink({ title, items }: AsideLinkProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-64 text-white rounded-md px-2 py-1">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left font-semibold text-lg"
      >
        {title}
      </button>

      {open && (
        <ul className="mt-2 ml-2 space-y-1">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className="block text-sm text-gray-300 hover:text-white hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
