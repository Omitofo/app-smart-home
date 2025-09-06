import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      // Lights
      lights: [
        { id: 1, room: "Living Room", status: true, brightness: 80, color: "#FFD700" },
        { id: 2, room: "Bedroom", status: false, brightness: 0, color: "#FFFFFF" },
        { id: 3, room: "Kitchen", status: true, brightness: 60, color: "#FFA500" },
        { id: 4, room: "Master Bedroom", status: true, brightness: 70, color: "#FF69B4" },
        { id: 5, room: "Kids Room 1", status: false, brightness: 0, color: "#ADD8E6" },
        { id: 6, room: "Kids Room 2", status: true, brightness: 50, color: "#90EE90" },
        { id: 7, room: "Family Room", status: false, brightness: 0, color: "#FFB347" },
      ],
      toggleLight: (id) =>
        set((state) => ({
          lights: state.lights.map((l) =>
            l.id === id ? { ...l, status: !l.status } : l
          ),
        })),
      setLightBrightness: (id, value) =>
        set((state) => ({
          lights: state.lights.map((l) =>
            l.id === id ? { ...l, brightness: Number(value) } : l
          ),
        })),
      setLightColor: (id, value) =>
        set((state) => ({
          lights: state.lights.map((l) =>
            l.id === id ? { ...l, color: value } : l
          ),
        })),

      // Thermostats
      zones: [
        { id: 1, name: "Living Room", temp: 22, mode: "Normal", active: true },
        { id: 2, name: "Master Bedroom", temp: 22, mode: "Normal", active: true },
        { id: 3, name: "Kids Room 1", temp: 22, mode: "Normal", active: true },
        { id: 4, name: "Kitchen", temp: 22, mode: "Normal", active: false },
      ],
      toggleZone: (id) =>
        set((state) => ({
          zones: state.zones.map((z) =>
            z.id === id ? { ...z, active: !z.active } : z
          ),
        })),
      setZoneMode: (id, mode, temp) =>
        set((state) => ({
          zones: state.zones.map((z) =>
            z.id === id ? { ...z, mode, temp } : z
          ),
        })),
      setZoneTemp: (id, temp) =>
        set((state) => ({
          zones: state.zones.map((z) =>
            z.id === id ? { ...z, temp: Number(temp) } : z
          ),
        })),

      // Cameras
      cameras: [
        { id: 1, name: "Front Door", status: true, mic: false },
        { id: 2, name: "Backyard", status: false, mic: false },
        { id: 3, name: "Garage", status: true, mic: false },
      ],
      toggleCamera: (id) =>
        set((state) => ({
          cameras: state.cameras.map((c) =>
            c.id === id ? { ...c, status: !c.status } : c
          ),
        })),
      toggleMic: (id) =>
        set((state) => ({
          cameras: state.cameras.map((c) =>
            c.id === id ? { ...c, mic: !c.mic } : c
          ),
        })),

      // Speakers
      speakers: [
        { id: 1, room: "Living Room", status: true, volume: 70 },
        { id: 2, room: "Kitchen", status: true, volume: 50 },
        { id: 3, room: "Master Bedroom", status: false, volume: 0 },
        { id: 4, room: "Family Room", status: true, volume: 50 },
        { id: 5, room: "Office", status: false, volume: 0 },
        { id: 6, room: "Patio", status: false, volume: 0 },
        { id: 7, room: "Garage", status: false, volume: 0 },
      ],
      toggleSpeaker: (id) =>
        set((state) => ({
          speakers: state.speakers.map((s) =>
            s.id === id ? { ...s, status: !s.status } : s
          ),
        })),
      setSpeakerVolume: (id, value) =>
        set((state) => ({
          speakers: state.speakers.map((s) =>
            s.id === id ? { ...s, volume: Number(value) } : s
          ),
        })),

      // Settings (Dark Mode removed)
          settings: [
        { id: 1, name: "Notifications", enabled: true },
        { id: 2, name: "Auto Updates", enabled: true },
        { id: 3, name: "Energy Saver Mode", enabled: true },
        { id: 4, name: "Silence Mode", enabled: false },
        { id: 5, name: "Location Access", enabled: true },
        { id: 6, name: "Voice Control", enabled: false },
          ],
      toggleSetting: (id) =>
        set((state) => ({
          settings: state.settings.map((s) =>
            s.id === id ? { ...s, enabled: !s.enabled } : s
          ),
        })),

      // Locks
      locks: [
        { id: 1, name: "Front Door", locked: true },
        { id: 2, name: "Back Door", locked: true },
        { id: 3, name: "Garage Door", locked: true },
        { id: 4, name: "2nd Floor Door", locked: false },
        { id: 5, name: "Kids Room", locked: true },
        { id: 6, name: "Basement Door", locked: true },
        { id: 7, name: "Patio Door", locked: true },
        { id: 8, name: "Office Door", locked: false },
      ],
      toggleLock: (id) =>
        set((state) => ({
          locks: state.locks.map((l) =>
            l.id === id ? { ...l, locked: !l.locked } : l
          ),
        })),
    }),
    {
      name: "smart-home-storage-v4",
    }
  )
);
