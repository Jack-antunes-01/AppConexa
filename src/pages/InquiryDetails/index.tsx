import React from 'react';

import { Header } from '@app/components/Header';
import { TEXT_VARIANTS, Text } from '@app/components/Text';
import { InquiryDetailsLocales } from '@app/pages/InquiryDetails/locales';
import * as S from '@app/pages/InquiryDetails/styles';
import { useInquiryDetails } from '@app/pages/InquiryDetails/useInquiryDetails';
import { parseCreatedAt } from '@app/utils/date';

function InquiryDetails() {
  const {
    inquiry, patientImage, isLoading, onConfirmInquiryPressed, isLoadingButton,
  } = useInquiryDetails();

  const renderPatientImage = () => {
    if (patientImage) {
      return <S.PatientImage source={{ uri: patientImage }} resizeMode="cover" />;
    }

    return <Text title={InquiryDetailsLocales.emptyImage} />;
  };

  return (
    <S.Container>
      <Header />
      <S.ContentContainer>
        {isLoading ? <S.Loading /> : renderPatientImage()}
        <S.TitleContainer>
          <Text
            title={inquiry?.paciente || InquiryDetailsLocales.defaultPatientMessage}
            isBold
            variant={TEXT_VARIANTS.title}
          />
          <Text
            title={parseCreatedAt(inquiry?.dataConsulta)
              || InquiryDetailsLocales.defaultInquiryDateMessage}
            isBold
            variant={TEXT_VARIANTS.title}
          />
        </S.TitleContainer>
        <S.DescriptionContainer>
          <Text title={inquiry?.observacao || InquiryDetailsLocales.defaultDescriptionMessage} />
        </S.DescriptionContainer>
      </S.ContentContainer>
      <S.ConfirmInquiryButton onPress={onConfirmInquiryPressed}>
        {isLoadingButton ? <S.ButtonLoading /> : (
          <Text
            title={InquiryDetailsLocales.confirmInquiry}
            isBold
            variant={TEXT_VARIANTS.white}
          />
        )}
      </S.ConfirmInquiryButton>
    </S.Container>
  );
}

export { InquiryDetails };
