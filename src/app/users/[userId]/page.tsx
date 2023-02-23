import { getUser } from '@/lib/get-user';

export default async function DynamicUserPage({ params }: { params: { userId: string } }) {
	const user = await getUser(parseInt(params.userId), false);

	return (
		<div className='grow p-3'>
			<h1 className='font-black text-4xl'>
				{user.name} <span className='text-lg font-medium'>@{user.username}</span>
			</h1>
			<div className='mt-4 flex flex-col gap-1'>
				<p className='font-medium text-lg text-neutral-700'>{user.email}</p>
				<p className='font-medium text-lg text-neutral-700'>{user.phone}</p>
				<p className='font-medium text-lg text-neutral-700'>{user.website}</p>
			</div>
			<pre className='mt-24'>{JSON.stringify(user, null, 2)}</pre>
		</div>
	);
}
