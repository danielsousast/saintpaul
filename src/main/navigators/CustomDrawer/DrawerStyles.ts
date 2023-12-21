import styled from 'styled-components/native';

export const COLORS = {
  primary: '#FF6C44', //orange
  transparentPrimary: 'rgba(227, 120, 75, 0.4)',
  orange: '#FFA133',
  lightOrange: '#FFA133',
  lightOrange2: '#FDDED4',
  lightOrange3: '#FFD9AD',
  green: '#27AE60',
  red: '#FF1717',
  blue: '#0064C0',
  darkBlue: '#111A2C',
  darkGray: '#525C67',
  darkGray2: '#757D85',
  gray: '#898B9A',
  gray2: '#BBBDC1',
  gray3: '#CFD0D7',
  lightGray1: '#DDDDDD',
  lightGray2: '#F5F5F8',
  white2: '#FBFBFB',
  white: '#FFFFFF',
  black: '#000000',

  transparent: 'transparent',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
};
export const FONTS = {
  largeTitle: {fontFamily: 'Poppins-Black', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h5, lineHeight: 22},
  body1: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

export const Content = styled.View`
  flex: 1;
  padding-right: ${SIZES.radius}px;
  padding-left: ${SIZES.radius}px;
`;

export const Header = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const Icon = styled.Image`
  height: 35px;
  width: 35px;
  tint-color: ${COLORS.white};
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: ${SIZES.radius}px;
`;

export const User = styled.View`
  margin-left: ${SIZES.radius}px;
`;

export const UserName = styled.Text`
  color: ${COLORS.white};
  font-weight: bold;
`;

export const UserLabel = styled.Text`
  color: ${({theme}) => theme.colors.text};
`;

export const DrawerItems = styled.View`
  flex: 1;
  margin-top: ${SIZES.padding}px;
`;

export const Divider = styled.View`
  height: 1px;
  margin: ${SIZES.radius}px 0;
  margin-left: ${SIZES.radius}px;
  background-color: ${COLORS.lightGray1};
`;

export const Footer = styled.View`
  margin-bottom: ${SIZES.padding}px;
`;

export const DrawerItemContainer = styled.TouchableOpacity<{active?: boolean}>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 16px 12px;
  padding-left: ${SIZES.radius}px;
  border-radius: ${SIZES.base}px;
  margin-bottom: ${SIZES.base}px;
  background-color: ${({theme, active}) =>
    active ? theme.colors.shape : 'transparent'};
`;

export const Label = styled.Text<{active?: boolean}>`
  margin-left: 15px;
  color: ${({theme, active}) =>
    active ? theme.colors.primary : theme.colors.text};
`;
