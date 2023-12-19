import styled, {css} from 'styled-components/native';

interface WrapperProps {
  selected: boolean;
}

export const QuizItemWrapper = styled.TouchableOpacity<WrapperProps>`
  flex-direction: row;
  align-items: center;
  border: 2px solid ${props => props.theme.colors.shape};
  background-color: ${props => props.theme.colors.shape};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  ${props =>
    props.selected &&
    css`
      border-color: #6a5ae0;
      border-width: 2px;
    `};
`;

export const QuizItemText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;
