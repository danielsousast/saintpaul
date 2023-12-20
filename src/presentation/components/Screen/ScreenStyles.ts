import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-bottom: 40px;
  background-color: ${props => props.theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
`;

export const IconButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;
