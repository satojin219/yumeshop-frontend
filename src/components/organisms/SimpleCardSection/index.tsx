import { VFC } from 'react';
import { Headline } from 'src/components/atoms/Headline';
import { SimpleCard, SimpleCardProps } from 'src/components/atoms/SimpleCard';
import styled from 'styled-components';

export interface SimpleCardSectionProps {
  heading: string;
  simpleCardArray: SimpleCardProps[];
}

const SimpleCardWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 0px;
  align-items: stretch;
  overflow-x: scroll;
  width: 320px;
  @media (min-width: 375px) {
    width: 359px;
  }
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1152px) {
    width: 100%;
    flex-wrap: wrap;
  }

  ::-webkit-slider {
    display: none;
  }
`;

export const SimpleCardSection: VFC<SimpleCardSectionProps> = (props) => {
  const { heading, simpleCardArray } = props;
  return (
    <section>
      <Headline label={heading} headlineTypes="middle" />
      <SimpleCardWrapper>
        {simpleCardArray.map((simpleCardItem: SimpleCardProps) => (
          <SimpleCard
            id={simpleCardItem.id}
            image={simpleCardItem.image}
            title={simpleCardItem.title}
            path={simpleCardItem.path}
            key={simpleCardItem.id}
          />
        ))}
      </SimpleCardWrapper>
    </section>
  );
};
