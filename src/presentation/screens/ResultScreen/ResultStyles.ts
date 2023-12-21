import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const BOX_SIZE = SCREEN_WIDTH - 40;

export const ResultBox = styled.View`
  width: ${BOX_SIZE}px;
  height: ${BOX_SIZE}px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.shape};
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
`;

export const RightContent = styled.View``;

export const LeftContent = styled.View``;

export const Label = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.text};
`;

export const Value = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;
