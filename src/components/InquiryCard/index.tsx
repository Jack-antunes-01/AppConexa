import React from 'react';

import * as S from '@app/components/InquiryCard/styles';
import { TEXT_VARIANTS, Text } from '@app/components/Text';
import { parseCreatedAt } from '@app/utils/date';

type InquiryCardProps = {
  patientName: string;
  observation: string;
  createdAt: string;
  onPress: () => void;
};

function InquiryCard({
  onPress, createdAt, observation, patientName,
}: InquiryCardProps) {
  return (
    <S.CardContainer onPress={onPress}>
      <S.TitleContainer>
        <Text title={patientName} isBold variant={TEXT_VARIANTS.title} />
      </S.TitleContainer>
      <S.DescriptionText title={observation} variant={TEXT_VARIANTS.text} />
      <S.DateText title={parseCreatedAt(createdAt)} variant={TEXT_VARIANTS.title} />
    </S.CardContainer>
  );
}

export { InquiryCard };
