import React from 'react';

import { Header } from '@app/components/Header';
import { InquiryCard } from '@app/components/InquiryCard';
import { TEXT_VARIANTS, Text } from '@app/components/Text';
import { InquiryModel } from '@app/models/inquiry';
import { HomeLocales } from '@app/pages/Home/locales';
import * as S from '@app/pages/Home/styles';
import { useHome } from '@app/pages/Home/useHome';

function ItemSeparatorComponent() {
  return <S.Separator />;
}

function ListEmptyComponent() {
  return <Text title={HomeLocales.empty} variant={TEXT_VARIANTS.title} />;
}

export function Home() {
  const { user, inquiryList } = useHome();

  const renderItem = ({ item }: { item: InquiryModel }) => (
    <InquiryCard
      patientName={item.paciente}
      observation={item.observacao}
      createdAt={item.dataConsulta}
    />
  );

  return (
    <S.Container>
      <Header />
      <S.WelcomeContainer>
        <Text title={HomeLocales.welcomeTitle} variant={TEXT_VARIANTS.white} />
        <Text title={user.nome} isBold variant={TEXT_VARIANTS.white} />
      </S.WelcomeContainer>
      <S.ContentContainer>
        <Text title={HomeLocales.title} isBold variant={TEXT_VARIANTS.title} />
        <S.InquiryList
          data={inquiryList}
          // Em um cenário real, não é recomendável usar index como key
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={({ item }) => renderItem({ item: item as InquiryModel })}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListEmptyComponent={ListEmptyComponent}
        />

      </S.ContentContainer>
    </S.Container>
  );
}
