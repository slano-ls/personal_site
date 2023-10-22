import React from 'react';
import { Title, Text, Container, Grid, Link, Card } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import {
  SiC,
  SiRust,
  SiArchlinux,
  SiCplusplus,
  SiJavascript,
  SiLatex,
  SiOrg,
  SiNextdotjs,
  SiPython,
  SiPostgresql,
  SiGnubash,
  SiQiskit,
} from 'react-icons/si';
import { getPosts, Post } from '@posts';
import { TransparentLink } from '@components';

interface AboutProps {
  experiences: Post[];
}

const stacks = [
  {
    Icon: SiC,
    url: 'https://en.wikipedia.org/wiki/C_(programming_language)',
  },
  {
    Icon: SiRust,
    url: 'https://www.rust-lang.org/',
  },
  {
    Icon: SiArchlinux,
    url: 'https://www.archlinux.org/',
  },
  {
    Icon: SiCplusplus,
    url: 'https://www.cplusplus.org/',
  },
  {
    Icon: SiJavascript,
    url: 'https://www.javascript.com/',
  },
  {
    Icon: SiLatex,
    url: 'https://www.latex-project.org/',
  },
  {
    Icon: SiNextdotjs,
    url: 'https://nextjs.org/',
  },
  {
    Icon: SiOrg,
    url: 'https://orgmode.org/',
  },
  {
    Icon: SiPostgresql,
    url: 'https://www.postgresql.org/',
  },
  {
    Icon: SiPython,
    url: 'https://www.python.org/',
  },
  {
    Icon: SiGnubash,
    url: 'https://ohmyz.sh/',
  },
  {
    Icon: SiQiskit,
    url: 'https://qiskit.org/',
  }

];

const About = ({ experiences }: AboutProps): JSX.Element => (
  <Container>
    <Head>
      <title>About</title>
    </Head>
    <Container alignContent="center" alignItems="center">
      <Title fontSize={['3rem', '4rem']} as="h2">
        Student & Developer
      </Title>
      <Container maxWidth={['100%', '720px']} marginY="2rem">
        <Text>I&apos;m a Full-Time student and developer with an interest in low-level programming.</Text>
        <Text>
          During my free time I like playing piano, ricing my&nbsp;
          <a href="https://www.github.com/slano-ls/DOOM-Emacs-Configuration">Emacs </a>
          and playing soccer.
        </Text>
        <Text> I also conduct research into various security technologies, as well as some of my own; for more information on this check out
          <a href="https://slano-ls.github.io"> slanosec </a>
        </Text>
      </Container>
    </Container>

    <Container
      paddingY="4rem"
      gridGap="2rem"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
    >
      <Title fontSize="40px" as="h2">
        Technologies I frequently use
      </Title>
      <Grid
        gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']}
        gridGap="1rem"
        justifyItems="center"
        maxWidth="40rem"
      >
        {stacks.map(({ Icon, url }, i) => (
          <Link href={url} key={url}>
            <Card key={i}>
              <Icon size="2rem" />
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>
    <Container
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
      paddingBottom="4rem"
      gridGap="3rem"
    >
      <Title fontSize="40px" as="h2">
        Work Experiences
      </Title>
      <Container width="100%">
        {experiences.map(({ data }, i) => (
          <TransparentLink href={`/about/${data.slug}`} key={data.slug}>
            <Grid
              key={i}
              gridTemplateColumns="1fr 4fr"
              justifyItems="flex-start"
              gridGap="1rem"
              paddingY="2rem"
              borderBottom="1px solid rgba(0,0,0,0.1)"
            >
              <Container width="100%">
                <Text>0{experiences.length - i}</Text>
              </Container>
              <Grid width="100%" gridTemplateColumns="4fr 1fr">
                <Container
                  width="100%"
                  alignItems="flex-start"
                  textAlign="start"
                >
                  <Grid
                    width="100%"
                    gridTemplateColumns="repeat(2, auto)"
                    justifyItems="flex-start"
                    justifyContent="flex-start"
                    gridGap="1rem"
                  >
                    <Title fontSize="1.5rem" margin={0} as="h3">
                      {data.title}
                    </Title>
                    <Text fontSize="smaller" margin={0}>
                      {data.date}
                    </Text>
                  </Grid>
                  <Text fontSize="1rem">{data.caption}</Text>
                </Container>
                <Text fontSize="1.5rem">&rarr;</Text>
              </Grid>
            </Grid>
          </TransparentLink>
        ))}
      </Container>
    </Container>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) =>
    b.data.date.toString().localeCompare(a.data.date.toString()),
  );

  return {
    props: {
      experiences,
    },
  };
};

export default About;
