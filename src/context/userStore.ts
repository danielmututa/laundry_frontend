// import interfaces that are inpotant here 
// import interfaces that are inpotant here 
// import interfaces that are inpotant here 
import { create } from 'zustand';


interface UserState {
    workspaces: WorkSpace[] | null;

    mode: string | null;
    setMode: (mode: string) => void;
    userProfile: IUserProfile | ILawyerProfile | null;
    userId: string;
    setWorkspace: (workspace: WorkSpace[]) => void;
    setUser: (userId: string) => void;
    setProfile: (profile: IUserProfile) => void;
    clearUser: () => void;
}

export const useUserStore = create<UserState>()((set) => {
    const storedMode = typeof window !== 'undefined' ? localStorage.getItem('mode') : null;

    return {
        workspaces: null,
        setWorkspace: (workspaces: WorkSpace[]) => set(() => ({ workspaces })),
        mode: storedMode,
        setMode: (mode: string) => {
            localStorage.setItem('mode', mode);
            set(() => ({ mode }));
        },
        userProfile: null,
        userId: '',
        setUser: (userId: string) => set(() => ({ userId })),
        setProfile: (profile: IUserProfile | ILawyerProfile) => set(() => ({ userProfile: profile })),
        clearUser: () => set(() => ({ userId: '' })),
    }
});