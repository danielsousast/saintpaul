import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAppSafeArea} from '@/presentation/hooks';
import {useTheme} from 'styled-components/native';
import {Button} from '../Button/Button';
import {Icon} from '../Icon/Icon';
import * as S from './ScreenStyles';

interface Props {
  children: React.ReactNode;
  buttonText?: string;
  onButtonPress?: () => void;
  onBackPress?: () => void;
}

export function Screen({
  children,
  onButtonPress,
  buttonText,
  onBackPress,
}: Props) {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const {top} = useAppSafeArea();

  function _onButtonPress() {
    onButtonPress && onButtonPress();
  }

  function _onBackPress() {
    if (!onBackPress) {
      navigation.goBack();
    }
    onBackPress && onBackPress();
  }

  return (
    <S.Container
      style={{
        paddingTop: top,
      }}>
      <S.Header>
        <S.IconButton onPress={_onBackPress}>
          <Icon size={28} color={colors.text} />
        </S.IconButton>
      </S.Header>

      <S.Content>{children}</S.Content>
      {!!buttonText && <Button onPress={_onButtonPress}>{buttonText}</Button>}
    </S.Container>
  );
}
