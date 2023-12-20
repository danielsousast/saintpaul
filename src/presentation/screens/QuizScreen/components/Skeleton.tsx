import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React from 'react';
import {Dimensions} from 'react-native';
import {useTheme} from 'styled-components/native';

interface Props {
  isLoading: boolean;
}

const SCREEN_WIDTH = Dimensions.get('window').width - 40;
const ITEM_HEIGHT = SCREEN_WIDTH / 4;

export function QuizSkeleton({isLoading}: Props) {
  const {colors} = useTheme();
  if (!isLoading) {
    return null;
  }
  return (
    <SkeletonPlaceholder
      backgroundColor={colors.shape}
      highlightColor={colors.background}>
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width={SCREEN_WIDTH / 2}
          height={40}
          borderRadius={8}
          alignSelf="center"
        />
        <SkeletonPlaceholder.Item
          width={SCREEN_WIDTH}
          height={60}
          borderRadius={8}
          marginTop={20}
        />
        <SkeletonPlaceholder.Item
          width={SCREEN_WIDTH}
          height={ITEM_HEIGHT}
          marginTop={20}
          borderRadius={8}
        />
        <SkeletonPlaceholder.Item
          marginTop={10}
          width={SCREEN_WIDTH}
          height={ITEM_HEIGHT}
          borderRadius={8}
        />
        <SkeletonPlaceholder.Item
          marginTop={10}
          width={SCREEN_WIDTH}
          height={ITEM_HEIGHT}
          borderRadius={8}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}
