import Avatar from '@/components/avatar';
import { PostType } from '@/lib/types';
import { Suspense, use } from 'react';

const getPost = async (id: number): Promise<PostType> => {
	// Random timer to highlight Streaming
	const randomMs = Math.floor(Math.random() * 10000);
	await new Promise((resolve) => setTimeout(resolve, randomMs));
	return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json());
};

interface Props {
	id: number;
}

function PostUI({ id }: Props) {
	const post = use(getPost(id));

	return (
		<>
			<Avatar userId={post.userId} />
			<span>{post.title}</span>
		</>
	);
}

const Skeleton = () => {
	return (
		<>
			<div className='h-6 w-6 bg-gray-200 rounded-full animate-pulse' />
			<div className='h-6 w-32 bg-gray-300 rounded-md animate-pulse' />
		</>
	);
};

export default function Post(props: Props) {
	return (
		<div className='py-3 flex gap-2 items-center'>
			<Suspense fallback={<Skeleton />}>
				<PostUI {...props} />
			</Suspense>
		</div>
	);
}
