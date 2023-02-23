import { UserType } from '@/lib/types';
import User from './user';

export default async function UsersPage() {
	const res: UserType[] = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
	const users = res.map((el) => el.id);

	return (
		<div className='grow p-3 overflow-y-auto grid gap-4 grid-cols-4'>
			{users.map((el) => (
				<User userId={el} key={el} />
			))}
		</div>
	);
}
