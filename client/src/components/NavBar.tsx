'use client';
import { setIsSidebarCollapsed } from '@/store';
import { useAppDispatch, useAppSelector } from '@/store/redux';
import { Bell, Menu, Settings, Sun } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
	const dispatch = useAppDispatch();
	const isSidebarCollapsed = useAppSelector((state) => {
		return state.global.isSidebarCollapsed;
	});

	const toggleSidebar = () => {
		return dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
	};
	return (
		<div className='flex justify-between items-center w-full mb-7'>
			<div className='flex justify-between items-center gap-5'>
				<button className='p-3 rounded-full' onClick={toggleSidebar}>
					<Menu className='size-4'></Menu>
				</button>

				<div className='relative'>
					<input
						type='search'
						name=''
						id=''
						placeholder='Start typing to search groups & products'
						className='pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-base-100 rounded-lg focus:outline-none focus:border-primary'
					/>
					<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
						<Bell className='text-primary-content' size={20}></Bell>
					</div>
				</div>
			</div>
			{/*  RIGHT SIDE */}
			<div className='flex justify-between items-center gap-5'>
				<div className='hidden md:flex justify-between items-center gap-5'>
					<div className='relative'>
						<Bell className='cursor-pointer text-gray-500' size={24}></Bell>{' '}
						<span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-sm font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
							3
						</span>
					</div>
					<hr className='w-0 h-7 border border-solid border-l border-primary-content mx-3' />
					<div className='flex items-center gap-3 cursor-pointer'>
						<div className='size-9'>image</div>
						<span className='font-semibold'>Brandon Hach</span>
					</div>
				</div>
				<Link href={'/settings'}>
					<Settings className='cursor-pointer text-primary-content' size={24}></Settings>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
