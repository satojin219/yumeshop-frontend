import type { NextPage } from 'next';
import Head from 'next/head';
import { Calrousel } from 'src/components/organisms/carousel';
import { Footer } from 'src/components/organisms/Footer';
import { Header } from 'src/components/organisms/Header';
import { SimpleCardSection } from 'src/components/organisms/SimpleCardSection';
import { WideCardSection } from 'src/components/organisms/WideCardSection';
import {
  exampleCalrouselMock,
  exampleCampaignMock,
  exampleCategoryMock,
  exampleLinksMock,
  exampleNoticeMock,
} from 'src/mocks';

import { Container, Main } from 'src/styles/Home';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Yumeshop</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Calrousel images={exampleCalrouselMock} />
    <Main>
      <Container>
        <SimpleCardSection
          heading="キャンペーン"
          simpleCardArray={exampleCampaignMock}
        />
        <SimpleCardSection
          heading="カテゴリー"
          simpleCardArray={exampleCategoryMock}
        />
        <WideCardSection heading="お知らせ" wideCardArray={exampleNoticeMock} />
      </Container>
    </Main>
    <Footer links={exampleLinksMock} />
  </>
);

export default Home;
