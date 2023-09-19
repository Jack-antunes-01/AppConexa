import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

const moderateScale = (baseSpacing: number) => {
  const viewportSize = (width + height) / 2;
  const normalizedSpacing = (baseSpacing * (viewportSize / 600)).toFixed(2);

  return parseFloat(normalizedSpacing);
};

export default moderateScale;
