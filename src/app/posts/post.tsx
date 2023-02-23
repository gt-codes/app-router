import User from '@/components/user';
import { PostType } from '@/lib/types';
import { Suspense, use } from 'react';

const getPost = async (id: number): Promise<PostType> => {
	// Random timer to highlight Streaming
	const randomMs = Math.floor(Math.random() * 10000);
	await new Promise((resolve) => setTimeout(resolve, randomMs));
	return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json());
};

function PostUI({ id }: { id: number }) {
	const post = use(getPost(id));

	return (
		<div className='py-3 flex gap-2 items-center'>
			<User userId={post.userId} />
			<span>{post.title}</span>
		</div>
	);
}

export default function Post({ id }: { id: number }) {
	return <Suspense fallback={<div>Loading...</div>}>{<PostUI id={id} />}</Suspense>;
}
