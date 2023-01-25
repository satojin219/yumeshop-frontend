import { VFC } from 'react';
import { Headline } from 'src/components/atoms/Headline';
import { WideCard, WideCardProps } from 'src/components/atoms/WideCard';
import styled from 'styled-components';

export interface WideCardSectionProps {
  heading: string;
  wideCardArray: WideCardProps[];
}

const WideCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

export const WideCardSection: VFC<WideCardSectionProps> = (props) => {
  const { heading, wideCardArray } = props;
  return (
    <section >
      <Headline label={heading} headlineTypes="middle" />
      <WideCardWrapper>
        {wideCardArray.map((simpleCardItem: WideCardProps) => (
          <WideCard
            time={simpleCardItem.time}
            labels={simpleCardItem.labels}
            text={simpleCardItem.text}
            key={simpleCardItem.text}
          />
        ))}
      </WideCardWrapper>
    </section>
  );
};
