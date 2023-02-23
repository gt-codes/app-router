import Avatar from '@/components/avatar';
import { getUser } from '@/lib/get-user';
import Link from 'next/link';
import { Suspense, use } from 'react';

interface Props {
	userId: number;
}

function UserUI({ userId }: Props) {
	const user = use(getUser(userId));

	return (
		<Link
			href={`/users/${userId}`}
			className='py-3 justify-center items-center flex h-64 border border-gray-200 rounded-xl flex-col gap-2'>
			<Avatar userId={userId} />
			<span>{user.name}</span>
			<span>{user.email}</span>
		</Link>
	);
}

const Skeleton = () => {
	return (
		<div className='py-3 justify-center items-center flex h-64 border border-gray-200 rounded-xl flex-col gap-2'>
			<div className='h-6 w-6 bg-gray-200 rounded-full animate-pulse' />
			<div className='h-6 w-24 bg-gray-300 rounded-md animate-pulse' />
			<div className='h-6 w-40 bg-gray-300 rounded-md animate-pulse' />
		</div>
	);
};

export default function User(props: Props) {
	return (
		<Suspense fallback={<Skeleton />}>
			<UserUI {...props} />
		</Suspense>
	);
}
