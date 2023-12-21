import styled from 'styled-components/native';

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  margin-bottom: 30px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

export const Description = styled.Text`
  font-size: 18px;
  line-height: 22px;
  margin: 20px 0 40px;
  font-weight: 300;
  color: ${({theme}) => theme.colors.text};
`;
