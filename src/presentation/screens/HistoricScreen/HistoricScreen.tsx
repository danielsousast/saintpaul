import React from 'react';
import {Screen} from '@/presentation/components';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {HistoricItem} from './components/HistoricItem';
import {Quiz} from '@/modules/quiz';

// fake quiz history
const fakeQuizHistory: Quiz[] = [
  {
    id: 1,
    date: '2021-01-01',
    correctAnswers: 5,
    totalQuestions: 10,
    score: 30,
  },
  {
    id: 2,
    date: '2021-01-01',
    correctAnswers: 5,
    totalQuestions: 10,
    score: 50,
  },
  {
    id: 3,
    date: '2021-01-01',
    correctAnswers: 5,
    totalQuestions: 10,
    score: 90,
  },
];

const HistoricScreen = () => {
  function renderItem({item}: ListRenderItemInfo<Quiz>) {
    return <HistoricItem quiz={item} />;
  }
  return (
    <Screen>
      <FlatList data={fakeQuizHistory} renderItem={renderItem} />
    </Screen>
  );
};

export default HistoricScreen;
