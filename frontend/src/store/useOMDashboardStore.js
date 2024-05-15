import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialState = {
  selectedTab: "Dashboard",
};

const store = (set) => ({
  ...initialState,
  setSelectedTab: (tab) => set({ selectedTab: tab }),
});

export const useOMDashboardStore = create(devtools(store, "OMDashboardStore"));
