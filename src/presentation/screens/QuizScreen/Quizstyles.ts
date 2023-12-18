import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1741e3;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 10px;
  padding: 20px;
  background-color: #fafafa;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const QuizItemWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid #eee;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const QuizQuestion = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const QuizTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 68px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
`;

export const QuizItemText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
