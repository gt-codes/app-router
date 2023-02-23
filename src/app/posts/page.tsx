import { PostType } from '@/lib/types';
import Post from './post';

export default async function PostsPage() {
	const res: PostType[] = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
	const posts = res.map((el) => el.id);
	
	// shuffle posts into random order
	for (let i = posts.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[posts[i], posts[j]] = [posts[j], posts[i]];
	}

	return (
		<ul className='flex flex-col p-3 overflow-y-auto divide-y divide-gray-200 grow'>
			{posts.map((el) => (
				<Post key={el} id={el} />
			))}
		</ul>
	);
}
