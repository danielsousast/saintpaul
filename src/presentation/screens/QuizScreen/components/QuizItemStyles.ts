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
  ${({selected, theme}) =>
    selected &&
    css`
      border-color: ${theme.colors.primary};
      border-width: 2px;
    `};
`;
