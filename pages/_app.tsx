import '../styles/global.css';
import nightwind from 'nightwind/helper';
import Head from 'next/head';

export default function JSboard({ Component, pageProps }) {
	return (
		<>
			<Head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						const theme = window.localStorage.getItem('nightwind-mode');
						if (!theme) {
							if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
								window.localStorage.setItem('nightwind-mode', 'light');
								document.documentElement.classList.remove('dark')
							} else {
								window.localStorage.setItem('nightwind-mode', 'dark');
							}
						}`,
					}}
				/>
				<script
					dangerouslySetInnerHTML={{ __html: nightwind.init() }}
				/>
			</Head>
			<div className="flex flex-col min-h-screen bg-coolGray-700">
				<Component {...pageProps} />
			</div>
		</>
	);
}
