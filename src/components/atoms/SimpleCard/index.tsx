import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';
import styled from 'styled-components';

export interface SimpleCardProps {
  id: string;
  image: string;
  title: string;
  path: string;
}

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-radius: 8px;
  min-width: 200px;
  width: 200px;
  @media (min-width: 1152px) {
    min-width: 244px;
    width: 244px;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 16/9;

`;
const TitleWrapper = styled.p`
  padding: 12px 8px;
  min-height: 48px;
`;

export const SimpleCard: VFC<SimpleCardProps> = (props) => {
  const { image, title, path } = props;
  return (
    <Wrapper>
      <Link href={path}>
        <>
          <ImageWrapper>
            <Image src={image} alt={title} fill />
          </ImageWrapper>
          <TitleWrapper>{title}</TitleWrapper>
        </>
      </Link>
    </Wrapper>
  );
};
