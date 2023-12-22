import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  padding-right: 12px;
  padding-left: 12px;
`;

export const DrawerItems = styled.View`
  flex: 1;
  margin-top: 24px;
`;

export const DrawerItemContainer = styled.TouchableOpacity<{active?: boolean}>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 16px 12px;
  padding-left: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: ${({theme, active}) =>
    active ? theme.colors.shape : 'transparent'};
`;

export const Label = styled.Text<{active?: boolean}>`
  margin-left: 15px;
  color: ${({theme, active}) =>
    active ? theme.colors.primary : theme.colors.text};
`;
