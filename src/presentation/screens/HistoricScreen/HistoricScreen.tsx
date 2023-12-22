import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {LinkButton, Screen, Text} from '@/presentation/components';
import {useHistoricStore} from '@/main/state/useHistoricStore';
import {EmptyList, HistoricItem} from './components';
import {Quiz} from '@/modules/quiz';

export const HistoricScreen = () => {
  const {quizes, clearQuizes} = useHistoricStore();

  function renderItem({item}: ListRenderItemInfo<Quiz>) {
    return <HistoricItem quiz={item} />;
  }

  function renderEmpty() {
    return <EmptyList />;
  }

  return (
    <Screen canGoBack>
      <Text variant="subtitle">Questionários respondidos</Text>
      <FlatList
        data={quizes}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
      />
      {quizes?.length > 0 && (
        <LinkButton onPress={clearQuizes}>Limpar Histórico</LinkButton>
      )}
    </Screen>
  );
};
