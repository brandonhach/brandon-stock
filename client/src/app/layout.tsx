import type { Metadata } from 'next';

import './globals.css';
import DashboardWrapper from '@/components/Wrapper/DashboardWrapper';

export const metadata: Metadata = {
	title: 'BrandonStock',
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<DashboardWrapper>{children}</DashboardWrapper>
			</body>
		</html>
	);
}
