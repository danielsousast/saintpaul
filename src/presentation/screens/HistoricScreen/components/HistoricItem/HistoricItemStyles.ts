import styled from 'styled-components/native';

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border: 2px solid ${props => props.theme.colors.shape};
  background-color: ${props => props.theme.colors.shape};
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
