import { create } from "zustand";

interface State {
	name: string;
	avatar: string;

	setData: ({ name, avatar }: { name: string; avatar: string }) => void;
}

export const useUserStore = create<State>((set) => ({
	name: "",
	avatar: "",

	setData: ({ name, avatar }: { name: string; avatar: string }) => {
		set({ name, avatar });
	},
}));
