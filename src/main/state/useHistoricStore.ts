import {MMKVStorage} from '@/infra/storage/MMKVStorage';
import {Quiz} from '@/modules/quiz';
import {create} from 'zustand';

import {persist} from 'zustand/middleware';

interface State {
  quizes: Quiz[];
  setQuiz: (quiz: Quiz) => void;
  clearQuizes: () => void;
}

export const useHistoricStore = create<State>()(
  persist(
    set => ({
      quizes: [],
      setQuiz: (quiz: Quiz) => {
        set(state => {
          return {quizes: [...state.quizes, quiz]};
        });
      },
      clearQuizes: () => {
        set({quizes: []});
      },
    }),
    {
      name: 'quiz-historic',
      storage: MMKVStorage,
    },
  ),
);
