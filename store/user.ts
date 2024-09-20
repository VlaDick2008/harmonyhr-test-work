import { create } from "zustand";

interface State {
	name: string;
	avatarUrl: string;
	setName: (name: string) => void;
	setAvatarUrl: (avatarUrl: string) => void;
}

export const useUserStore = create<State>((set) => ({
	name: "",
	avatarUrl: "",
	setName: (name: string) => set({ name }),
	setAvatarUrl: (avatarUrl: string) => set({ avatarUrl }),
}));
