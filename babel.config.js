module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: 'src',
            rootPathPrefix: '@/',
          },
          {
            rootPathSuffix: 'jest',
            rootPathPrefix: 'jest/',
          },
        ],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
