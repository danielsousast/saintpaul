/* eslint-disable react-native/no-inline-styles */
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
  rightContent?: React.ReactNode;
  onRightContentPress?: () => void;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  onButtonPress,
  buttonText,
  rightContent,
  onRightContentPress,
  canGoBack = false,
  scrollable = false,
}: Props) {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const {top} = useAppSafeArea();

  const Content = scrollable ? S.ScrollContent : S.ViewContent;

  function _onButtonPress() {
    onButtonPress && onButtonPress();
  }

  function onBackPress() {
    navigation.goBack();
  }

  return (
    <S.Container
      style={{
        paddingTop: top,
      }}>
      <S.Header>
        {!!canGoBack && (
          <S.IconButton onPress={onBackPress}>
            <Icon name="arrowLeft" size={28} color={colors.text} />
          </S.IconButton>
        )}
        <S.IconButton
          onPress={onRightContentPress}
          style={{
            marginLeft: canGoBack ? undefined : 'auto',
          }}>
          {rightContent}
        </S.IconButton>
      </S.Header>

      <Content>{children}</Content>
      {!!buttonText && <Button onPress={_onButtonPress}>{buttonText}</Button>}
    </S.Container>
  );
}
