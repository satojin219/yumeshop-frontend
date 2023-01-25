import { VFC } from 'react';
import styled from 'styled-components';
import { colors } from 'src/styles/Tokens';

const Wrapper = styled.footer`
  width: 100%;
  padding: 16px 0;
  font-size: 12px;
  background-color: ${colors.White};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
`;
const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 20px;
  margin-bottom: 64px;
`;
const Link = styled.a`
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #000000;
  text-decoration: underline
`;

interface LinkType {
  name: string;
  path: string;
}
interface FooterProps {
  links: LinkType[];
}

export const Footer: VFC<FooterProps> = (props) => {
  const { links } = props;
  return (
    <Wrapper>
      <LinkWrapper>
        {links.map((link: LinkType) => (
          <Link href={link.path} key={link.path}>{link.name}</Link>
          
        ))}
      </LinkWrapper>
      <p>Copyright {new Date().getFullYear()} YumemiShop</p>
    </Wrapper>
  );
};
