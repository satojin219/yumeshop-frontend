import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from 'src/components/organisms/Header';

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
        <Image
          src="/shopping-bag.jpg"
          alt="買い物袋"
          width={600}
          height={600}
        />

        <TokenTest>
          <Title>Welcome to Yumeshop</Title>
        </TokenTest>
      </Container>
    </Main>
    ß
  </>
);

export default Home;
