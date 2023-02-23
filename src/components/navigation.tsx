import { constants } from '@/lib/constants';
import NavLink from './nav-link';

export default function Navigation() {
	return (
		<nav className='flex items-center gap-2 p-3 sticky top-0 bg-white'>
			{constants.navigation.map((el) => (
				<NavLink key={el.label} {...el} />
			))}
		</nav>
	);
}
