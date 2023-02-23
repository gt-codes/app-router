import { UserType } from '@/lib/types';
import Image from 'next/image';
import { Suspense, use } from 'react';

interface Props {
	userId: number;
}

const Skeleton = () => {
	return <div className='h-6 w-6 bg-gray-200 rounded-full animate-pulse' />;
};

const UserUI = ({ userId }: Props) => {
	const user = use(getUser(userId));
	return (
		<div className='h-6 w-6 rounded-full flex justify-center border border-gray-200 items-center font-medium text-sm'>
			{user.name[0]}
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

const getUser = async (id: number): Promise<UserType> => {
	// Random timer to highlight Streaming
	const randomMs = Math.floor(Math.random() * 10000);
	await new Promise((resolve) => setTimeout(resolve, randomMs));
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json());
};
