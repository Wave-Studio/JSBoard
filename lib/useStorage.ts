//Code origgionally from https://dev.to/devlargs/nextjs-hook-for-accessing-local-or-session-storage-variables-3n0

import { useEffect, useState } from "react";

type StorageType = "session" | "local";
type UseStorageReturnValue = {
	getItem: (key: string, type?: StorageType) => string;
	setItem: (key: string, value: string, type?: StorageType) => boolean;
	removeItem: (key: string, type?: StorageType) => void;
};

const useStorage = (): UseStorageReturnValue => {
	const storageType = (type?: StorageType): "localStorage" | "sessionStorage" =>
		`${type ?? "session"}Storage`;

	const isBrowser: boolean = ((): boolean => typeof window !== "undefined")();

	const getItem = (key: string, type?: StorageType): string => {
		return isBrowser ? window[storageType(type)][key] : "failed";
	};

	const setItem = (key: string, value: string, type?: StorageType): boolean => {
		const [r, setR] = useState(false);
		useEffect(() => {
			if (isBrowser) {
				window[storageType(type)].setItem(key, value);

				setR(true);
			}
		});
		return r;
	};

	const removeItem = (key: string, type?: StorageType): void => {
		window[storageType(type)].removeItem(key);
	};

	return {
		getItem,
		setItem,
		removeItem,
	};
};

export default useStorage;
