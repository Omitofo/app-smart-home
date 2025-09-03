import { create } from 'zustand';

export const useStore = create((set) => ({
  devices: [
    { id: 1, name: 'Living Room Light', status: false },
    { id: 2, name: 'Thermostat', status: 22 },
  ],
  toggleDevice: (id) =>
    set((state) => ({
      devices: state.devices.map((d) =>
        d.id === id
          ? { ...d, status: typeof d.status === 'boolean' ? !d.status : d.status }
          : d
      ),
    })),
  setDeviceStatus: (id, status) =>
    set((state) => ({
      devices: state.devices.map((d) => (d.id === id ? { ...d, status } : d)),
    })),
}));
