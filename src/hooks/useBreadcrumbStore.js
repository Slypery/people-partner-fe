import { create } from "zustand";
const useBreadcrumbStore = create((set) => ({
    breadcrumbs: [],
    appendCrumb: (crumb) => set((state) => ({
        breadcrumbs: [...state.breadcrumbs, crumb]
    })),
    removeLastCrumb: (crumb) => set((state) => ({
        breadcrumbs: state.breadcrumbs.slice(0, -1)
    }))
}));

export default useBreadcrumbStore;