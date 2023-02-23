import { UserType } from './types';

export const getUser = async (id: number): Promise<UserType> => {
	// Random timer to highlight Streaming
	const randomMs = Math.floor(Math.random() * 10000);
	await new Promise((resolve) => setTimeout(resolve, randomMs));
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json());
};
