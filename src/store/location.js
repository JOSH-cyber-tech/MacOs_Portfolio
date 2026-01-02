import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "#constants";

const DEFAULT_LOCATION = locations.work;

const useLocation = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location = null) => // Fixed: removed 's'
      set((state) => {
        state.activeLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),

    locations, 
  }))
);

export const useLocationStore = useLocation;
export default useLocation;