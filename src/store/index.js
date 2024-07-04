import { create } from 'zustand'


export const useStore = create((set) => ({
  products: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
  updateProducts: (newProducts) => set({ products: newProducts }),
}))

export const useProduct = create((set) => ({
  product: {},
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
  setProduct: (newProduct) => set({ product: newProduct }),
}))