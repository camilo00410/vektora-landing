import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="px-6 py-3" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-5xl mx-auto">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-gray-700 transition-colors">
              Inicio
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <span aria-hidden>/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-gray-700 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span style={{ color: "#2D2D2D" }} className="font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
