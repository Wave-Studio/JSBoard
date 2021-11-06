import "../styles/global.css";
import nightwind from "nightwind/helper";
import Head from "next/head";
import { FC } from "react";

export default function JSboard({
	Component,
	pageProps,
}: {
	Component: FC;
	pageProps: {
		[key: string]: unknown;
	};
}) {
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
				<meta name="application-name" content="JSBoard" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="default"
				/>
				<meta name="apple-mobile-web-app-title" content="JSBoard" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta
					name="msapplication-config"
					content="/ProfilePicture.png"
				/>
				<meta name="msapplication-TileColor" content="#2B5797" />
				<meta name="msapplication-tap-highlight" content="no" />

				<link rel="apple-touch-icon" href="/ProfilePicture.png" />
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/ProfilePicture.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/ProfilePicture.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="167x167"
					href="/ProfilePicture.png"
				/>

				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/ProfilePicture.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/ProfilePicture.png"
				/>
				<link rel="manifest" href="/manifest.json" />
				<link
					rel="mask-icon"
					href="/ProfilePicture.png"
					color="#5bbad5"
				/>
				<link rel="shortcut icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
				/>

				{
					/*} apple splash screen images

<link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
        */
				}
			</Head>
			<div className="flex flex-col min-h-screen bg-coolGray-700">
				<Component {...pageProps} />
			</div>
		</>
	);
}
