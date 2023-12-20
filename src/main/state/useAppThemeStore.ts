import {MMKVStorage} from '@/infra/storage/MMKVStorage';
import {create} from 'zustand';

import {persist} from 'zustand/middleware';

type ThemeStatus = 'dark' | 'light';

interface State {
  theme: ThemeStatus;
  setTheme: (theme: ThemeStatus) => void;
  toggleTheme: () => void;
}

export const useAppTheme = create<State>()(
  persist(
    set => ({
      theme: 'light',
      setTheme: (newTheme: ThemeStatus) => set({theme: newTheme}),
      toggleTheme: () => {
        set(state => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          return {theme: newTheme};
        });
      },
    }),
    {
      name: 'app-theme',
      storage: MMKVStorage,
    },
  ),
);
