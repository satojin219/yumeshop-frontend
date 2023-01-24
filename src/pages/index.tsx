import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import uuid from 'react-uuid';
import { Header } from 'src/components/organisms/Header';
import { SimpleCardSection } from 'src/components/organisms/SimpleCardSection';
import { exampleCampaignMock, exampleCategoryMock } from 'src/mocks';

import { Container, Main, Title, TokenTest } from 'src/styles/Home';



const Home: NextPage = () => (
  <>
    <Head>
      <title>Yumeshop</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Main>
      <Container>
        <SimpleCardSection heading="キャンペーン" simpleCardArray={exampleCampaignMock} />
        <SimpleCardSection heading="カテゴリー" simpleCardArray={exampleCategoryMock} />
      </Container>
    </Main>
    ß
  </>
);

export default Home;
