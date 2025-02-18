import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import PublicationEntry from '../components/PublicationEntry';

const publications = [
  {
    title: 'Mobile app for wildlife capture-mark-recapture data collection and query',
    source: 'Wildlife Society Bulletin, Volume 37, Issue 4',
    authors: 'Heather L. Bateman, Timothy E. Lindquist, Richard Whitehouse, Maria M. Gonzalez',
    date: 'August 23, 2013',
    link: 'http://onlinelibrary.wiley.com/doi/10.1002/wsb.322/abstract',
  },
  {
    title: 'Biologists Ditch Traditional Methods in Favor of New Record-Keeping App',
    source: 'ASU News',
    authors: 'Sydney B. Donaldson',
    date: 'August 26, 2013',
    link: 'https://news.asu.edu/content/biologists-ditch-traditional-methods-favor-new-record-keeping-app',
  },
  {
    title: 'ASU Innovation Showcase 2023',
    source: 'ASU Innovation Showcase',
    authors: 'Isaiah Lathem, Ian Skelskey, Jack Norman, Zachary Jacobson, Dennis Grassl',
    date: 'Spring, 2023',
    link: '/img/innovation-showcase-2023.png',
  },
];

export default function Publications(): JSX.Element {
  return (
    <Layout title="Publications" description="Publications related to the Field Day project">
      <div className="container margin-vert--lg">
        <Heading as="h1">Publications</Heading>
        {publications.map((publication, idx) => (
          <PublicationEntry key={idx} {...publication} />
        ))}
      </div>
    </Layout>
  );
}