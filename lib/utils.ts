import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short", // Short month name (e.g., Jan, Feb, etc.)
		day: "2-digit", // Two-digit day (e.g., 01, 02, etc.)
	};

	return new Intl.DateTimeFormat("en-US", options).format(date);
};
