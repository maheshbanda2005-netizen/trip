import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  href: string;
  footer?: string;
}

export default function Card({ title, description, href, footer }: CardProps) {
  return (
    <Link href={href} className="group block border border-black dark:border-white transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
      <div className="p-6">
        <h3 className="text-lg font-bold uppercase mb-2">{title}</h3>
        <p className="text-sm line-clamp-2 mb-4 opacity-70 group-hover:opacity-100">{description}</p>
        {footer && <div className="text-xs font-bold uppercase mt-4 border-t border-current pt-4">{footer}</div>}
      </div>
    </Link>
  );
}
