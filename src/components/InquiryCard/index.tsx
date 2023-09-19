import React from 'react';

import * as S from '@app/components/InquiryCard/styles';
import { TEXT_VARIANTS, Text } from '@app/components/Text';

type InquiryCardProps = {
  patientName: string;
  observation: string;
  createdAt: string;
};

function InquiryCard({ createdAt, observation, patientName }: InquiryCardProps) {
  const parseCreatedAt = (value: string) => {
    const dateSplit = value.split(' ');
    const date = dateSplit[0].split('-').reverse().join('/');
    const time = dateSplit[1];
    return `${date} ${time}`;
  };

  return (
    <S.CardContainer>
      <S.TitleContainer>
        <Text title={patientName} isBold variant={TEXT_VARIANTS.title} />
      </S.TitleContainer>
      <S.DescriptionText title={observation} variant={TEXT_VARIANTS.text} />
      <S.DateText title={parseCreatedAt(createdAt)} variant={TEXT_VARIANTS.title} />
    </S.CardContainer>
  );
}

export { InquiryCard };
