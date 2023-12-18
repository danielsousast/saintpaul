import styled from 'styled-components/native';

interface WrapperProps {
  selected: boolean;
}

export const QuizItemWrapper = styled.TouchableOpacity<WrapperProps>`
  flex-direction: row;
  align-items: center;
  border: 1px solid #eee;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  border-color: ${props => (props.selected ? '#1741e3' : '#eee')};
`;

export const QuizItemText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
