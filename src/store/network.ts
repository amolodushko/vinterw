import {create} from 'zustand'

interface NetworkState {
  networkId: string
  setNetworkId: (networkId: string) => void
}

const useNetworksStore = create<NetworkState>((set) => ({
  networkId: '',
  setNetworkId: (networkId: string) => set(() => ({networkId})),
}))


export default useNetworksStore
