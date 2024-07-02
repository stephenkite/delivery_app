import { create } from 'zustand'


export const useStore = create((set) => ({
  products: 12,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
  updateProducts: (newProducts) => set({ products: newProducts }),
}))