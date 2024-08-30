'use client';
import React, { ReactNode } from 'react';
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import StoreProvider, { useAppSelector } from '@/store/redux';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
	return (
		<div className={`flex bg-base-100 text-primary-content w-full min-h-screen`}>
			<SideBar></SideBar>
			<main
				className={`flex flex-col w-full h-full py-7 px-9 bg-primary ${
					isSidebarCollapsed ? 'md:pl-24' : 'md:pl-72'
				}`}>
				<NavBar></NavBar>
				{children}
			</main>
		</div>
	);
};

// Wrapping Dashboard with Redux's context provider
// If you want to access the state outside of DashboardWrapper, it wouldn't work because its not in the domain.
// Wrapping another layer called Dashboard layout will work.
const DashboardWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<StoreProvider>
			<DashboardLayout>{children}</DashboardLayout>
		</StoreProvider>
	);
};

export default DashboardWrapper;
