import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function showDecimals(number: number) {
	return (Math.round(number * 100) / 100).toFixed(2);
}
