
import { INITIAL_Z_INDEX, WINDOW_CONFIG, type WindowConfig, type WindowId } from "@constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
    windows: WindowConfig;
    nextZIndex: number;
}

type Action = {
    openWindow: (key: WindowId, data?: unknown | null) => void
    closeWindow: (key: WindowId) => void
    focusWindow: (key: WindowId) => void
}

const useWindowStore = create<State & Action>()(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (key, data) =>
            set((state) => {
                const w = state.windows[key];
                w.isOpen = true;
                w.zIndex = state.nextZIndex;
                w.data = data ?? w.data;
                state.nextZIndex += 1;
            }),
        closeWindow: (key) => set((state) => {
            const w = state.windows[key];

            w.isOpen = false;
            w.zIndex = INITIAL_Z_INDEX;
            w.data = null;
        }),
        focusWindow: (key) => set((state) => {
            const w = state.windows[key];
            w.zIndex = state.nextZIndex++;
        }),
    }))
);

export default useWindowStore;