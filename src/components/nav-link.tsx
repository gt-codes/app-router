'use client';

import { classNames } from '@/lib/classnames';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

interface Props {
	href: string;
	label: string;
}

export default function NavLink({ href, label }: Props) {
	const segment = useSelectedLayoutSegment();
	const isActive = segment === label.toLowerCase();

	return (
		<Link
			href={href}
			className={classNames(
				isActive ? 'bg-gray-600 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
				'px-4 py-2 rounded-lg text-sm font-medium'
			)}>
			{label}
		</Link>
	);
}
