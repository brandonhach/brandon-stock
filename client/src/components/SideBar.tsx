'use client';
import { setIsSidebarCollapsed } from '@/store';
import { useAppDispatch, useAppSelector } from '@/store/redux';
import { Archive, CircleDollarSign, Clipboard, Layout, LucideIcon, Menu, SlidersHorizontal, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type SidebarLinkProps = {
	href: string;
	icon: LucideIcon;
	label: string;
	isCollapsed: boolean;
};

const SidebarLink = ({ href, icon: Icon, label, isCollapsed }: SidebarLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === href || (pathname === '/' && href === '/dashboard');

	return (
		<Link href={href}>
			<div
				className={`cursor-pointer flex items-center ${
					isCollapsed ? 'justify-center py-4' : 'justify-start px-8 py-4'
				}
        hover:text-secondary-content hover:bg-secondary/70 gap-3 transition-colors ${
			isActive ? 'bg-secondary text-secondary-content' : ''
		}
      }`}>
				<Icon className='w-6 h-6 text-primary-content' />

				<span className={`${isCollapsed ? 'hidden' : 'block'} font-medium text-primary-content`}>{label}</span>
			</div>
		</Link>
	);
};

const SideBar = () => {
	const dispatch = useAppDispatch();
	const isSidebarCollapsed = useAppSelector((state) => {
		return state.global.isSidebarCollapsed;
	});

	const toggleSidebar = () => {
		dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
	};

	const sideBarClassName = `fixed flex flex-col ${
		isSidebarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'
	} bg-base-100 transition-all duration-300 overflow-hidden h-full shadow-md z-40`;
	return (
		<div className={sideBarClassName}>
			{/* TOP LOGO */}
			<div className='flex gap-3 justify-between md:justify-normal items-center pt-8 px-4'>
				<div>Logo</div>
				<h1 className={`${isSidebarCollapsed ? 'hidden' : 'block'} font-extrabold text-lg`}> BRANDON_STOCK</h1>

				<button className='md:hidden px-1 py-3 bg-base-100 ' onClick={toggleSidebar}>
					<Menu className='size-4 text-primary-content'></Menu>
				</button>
			</div>

			{/* LINKS */}
			<div className={`flex-grow ${isSidebarCollapsed ? 'mt-10' : 'mt-9'}`}>
				<SidebarLink href='/dashboard' icon={Layout} label='Dashboard' isCollapsed={isSidebarCollapsed} />
				<SidebarLink href='/inventory' icon={Archive} label='Inventory' isCollapsed={isSidebarCollapsed} />
				<SidebarLink href='/products' icon={Clipboard} label='Products' isCollapsed={isSidebarCollapsed} />
				<SidebarLink href='/users' icon={User} label='Users' isCollapsed={isSidebarCollapsed} />
				<SidebarLink
					href='/settings'
					icon={SlidersHorizontal}
					label='Settings'
					isCollapsed={isSidebarCollapsed}
				/>
				<SidebarLink
					href='/expenses'
					icon={CircleDollarSign}
					label='Expenses'
					isCollapsed={isSidebarCollapsed}
				/>
			</div>

			{/* FOOTER */}
			<div className={`${isSidebarCollapsed ? 'hidden' : 'block'} mb-10`}>
				<p className='text-center text-xs text-primary-content'>&copy; 2024 BrandonStock</p>
			</div>
		</div>
	);
};

export default SideBar;
