import React from 'react';
import {Screen} from '@/presentation/components';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {HistoricItem} from './components/HistoricItem';
import {Quiz} from '@/modules/quiz';
import {useHistoricStore} from '@/main/state/useHistoricStore';

const HistoricScreen = () => {
  const {quizes} = useHistoricStore();
  function renderItem({item}: ListRenderItemInfo<Quiz>) {
    return <HistoricItem quiz={item} />;
  }
  return (
    <Screen>
      <FlatList data={quizes} renderItem={renderItem} />
    </Screen>
  );
};

export default HistoricScreen;
