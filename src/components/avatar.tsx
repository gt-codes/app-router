import { getUser } from '@/lib/get-user';
import { UserType } from '@/lib/types';
import Image from 'next/image';
import { Suspense, use } from 'react';

interface Props {
	userId: number;
}

const Skeleton = () => {
return <div className='h-6 w-6 bg-gray-200 rounded-full animate-pulse' />;
};

const AvatarUI = ({ userId }: Props) => {
	const user = use(getUser(userId));
	return (
		<div className='h-6 w-6 rounded-full flex justify-center border border-gray-200 items-center font-medium text-sm'>
			{user.name[0]}
		</div>
	);
};

export default function Avatar(props: Props) {
	return (
		<Suspense fallback={<Skeleton />}>
			<AvatarUI {...props} />
		</Suspense>
	);
}

