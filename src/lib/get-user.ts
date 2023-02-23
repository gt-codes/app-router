import { UserType } from './types';

export const getUser = async (id: number, sleep: boolean = true): Promise<UserType> => {
	// Random timer to highlight Streaming
	const randomMs = Math.floor(Math.random() * 10000);
	await new Promise((resolve) => setTimeout(resolve, sleep ? randomMs : 0));
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json());
};
