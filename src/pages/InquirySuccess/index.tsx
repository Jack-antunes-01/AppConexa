import LottieView from 'lottie-react-native';
import React from 'react';

import SucccessAnimation from '@app/assets/lotties/success.json';
import { TEXT_VARIANTS, Text } from '@app/components/Text';
import { InquirySuccessLocales } from '@app/pages/InquirySuccess/locales';
import * as S from '@app/pages/InquirySuccess/styles';
import { useInquirySuccess } from '@app/pages/InquirySuccess/useInquirySuccess';
import moderateScale from '@app/utils/normalize';

function InquirySuccess() {
  const { onConfirmPressed } = useInquirySuccess();

  return (
    <S.Container>
      <S.LottieContainer>
        <LottieView
          style={{
            width: moderateScale(250),
            height: moderateScale(250),
          }}
          source={SucccessAnimation}
          loop={false}
          autoPlay
        />
      </S.LottieContainer>
      <S.ConfirmInquiryButton onPress={onConfirmPressed}>
        <Text title={InquirySuccessLocales.confirm} isBold variant={TEXT_VARIANTS.white} />
      </S.ConfirmInquiryButton>
    </S.Container>
  );
}

export { InquirySuccess };
