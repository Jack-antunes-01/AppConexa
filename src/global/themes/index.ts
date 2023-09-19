import moderateScale from '@app/utils/normalize';

export default {
  colors: {
    brand: {
      primary: '#1601A8',
    },
    gray: {
      light: '#CCCCCC',
      title: '#424242',
      text: '#757575',
    },
    neutral: {
      white: '#FFFFFF',
      black: '#000000',
    },
    others: {
      red: '#FF2800',
      ripple: 'rgba(220,220,220, 0.2)',
    },
  },
  font: {
    size: {
      xxxs: moderateScale(12),
      xxs: moderateScale(14),
      xs: moderateScale(16),
      sm: moderateScale(20),
      md: moderateScale(24),
    },
    lineHeight: {
      xxxs: moderateScale(20),
      xxs: moderateScale(22),
      xs: moderateScale(24),
      sm: moderateScale(28),
      md: moderateScale(32),
    },
    family: {
      regular: 'Nunito-Regular',
      bold: 'Nunito-Bold',
    },
  },
  border: {
    radius: {
      sm: moderateScale(4),
      md: moderateScale(8),
      pill: moderateScale(500),
    },
  },
  spacing: {
    xxxs: moderateScale(4),
    xxs: moderateScale(8),
    xs: moderateScale(12),
    sm: moderateScale(16),
    md: moderateScale(20),
    lg: moderateScale(24),
    xg: moderateScale(32),
    xxg: moderateScale(40),
    xxxg: moderateScale(48),
  },
  icon: {
    size: {
      xxs: moderateScale(16),
      xs: moderateScale(20),
      sm: moderateScale(24),
      md: moderateScale(32),
    },
  },
  size: {
    md: moderateScale(48) < 48 ? 48 : moderateScale(48),
  },
  activeOpacity: 0.7,
};
