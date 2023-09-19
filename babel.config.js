module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          '@app/components': './src/components',
          '@app/routes': './src/routes',
          '@app/pages': './src/pages',
          '@app/utils': './src/utils',
          '@app/themes': './src/global/themes',
          '@app/clients': './src/clients',
          '@app/services': './src/services',
          '@app/models': './src/models',
          '@app/contexts': './src/contexts',
          '@app/assets': './src/assets',
        },
      },
    ],
    [
      require.resolve('react-native-reanimated/plugin'),
    ],
  ],
};
