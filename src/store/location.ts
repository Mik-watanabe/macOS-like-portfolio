import { locations, type FolderItem } from "@constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

type State = {
    activeLocation: FolderItem | null
}

type Action = {
    setActiveLocation: (location: FolderItem | null) => void
    resetActiveLocation: () => void
}

const useLocationStore = create<State & Action>()(immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) => set((state) => {
        state.activeLocation = location;
    }),

    resetActiveLocation: () => set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
    }),
    
})))

export default useLocationStore;