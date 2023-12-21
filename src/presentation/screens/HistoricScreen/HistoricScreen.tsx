import React from 'react';
import styled from 'styled-components/native';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {LinkButton, Screen} from '@/presentation/components';
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
      <Title>Questionários respondidos</Title>
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

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
  align-self: center;
  color: ${props => props.theme.colors.text};
`;
