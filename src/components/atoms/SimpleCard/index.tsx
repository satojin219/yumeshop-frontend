import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';
import styled from 'styled-components';

interface SimpleCardProps {
  image: string;
  title: string;
  path: string;
}

const Wrapper = styled.div`
  margin: 16px 4px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  max-width: 244px;
  min-width: 200px;
  overflow: hidden;
  border-radius: 8px;
`;
const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 16/9;
`;
const TitleWrapper = styled.p`
  padding: 12px 8px;
`;

export const SimpleCard: VFC<SimpleCardProps> = (props) => {
  const { image, title, path } = props;
  return (
    <Link href={path}>
      <Wrapper>
        <ImageWrapper>
          <Image src={image} alt={title} fill />
        </ImageWrapper>
        <TitleWrapper>{title}</TitleWrapper>
      </Wrapper>
    </Link>
  );
};
