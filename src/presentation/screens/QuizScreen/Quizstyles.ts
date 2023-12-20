import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  margin-top: 10px;
  padding: 20px;
  background-color: ${props => props.theme.colors.background};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ContentWrapper = styled.View`
  flex: 1;
`;

export const QuizQuestion = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.text};
`;

export const QuizTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.text};
  text-align: center;
  text-transform: uppercase;
`;

export const QuizItemText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
