import styled from 'styled-components/native';

export const ButtonWrapper = styled.TouchableOpacity<{disabled?: boolean}>`
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  opacity: ${props => (props.disabled ? 0.7 : 1)};
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
