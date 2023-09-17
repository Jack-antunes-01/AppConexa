module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          '@app/atoms': './src/components/atoms',
          '@app/molecules': './src/components/molecules',
          '@app/organisms': './src/components/organisms',
          '@app/routes': './src/routes',
          '@app/pages': './src/pages',
          '@app/utils': './src/utils',
          '@app/themes': './src/global/themes',
          '@app/clients': './src/clients',
          '@app/services': './src/services',
          '@app/models': './src/models',
          '@app/contexts': './src/contexts',
        },
      },
    ],
    [
      require.resolve('react-native-reanimated/plugin'),
    ],
  ],
};
