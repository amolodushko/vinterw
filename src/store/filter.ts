import {create} from 'zustand'

interface FiltersState {
  filterValue: string
  setFilterValue: (filterValue: string) => void
}

const useFiltersStore = create<FiltersState>((set) => ({
  filterValue: '',
  setFilterValue: (filterValue: string) => set(() => ({filterValue})),
}))


export default useFiltersStore
