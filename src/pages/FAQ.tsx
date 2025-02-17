import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function FAQ(): JSX.Element {
  return (
    <Layout title="Frequently Asked Questions (FAQ)" description="Frequently Asked Questions about Field Day">
      <div className="container margin-vert--lg">
        <Heading as="h1">Frequently Asked Questions (FAQ)</Heading>
        <section>
          <Heading as="h2">What is Field Day?</Heading>
          <p>
            Field Day is a wildlife data collection and management tool developed by undergraduate software engineering students at Arizona State University. It consists of a mobile data collector, a desktop data manager, and a Firestore database.
          </p>
        </section>
        <section>
          <Heading as="h2">How do I get started?</Heading>
          <p>
            Simply visit our website and explore our resources to get started!
          </p>
        </section>
        <section>
          <Heading as="h2">How can I contribute?</Heading>
          <p>
            Contributions are always welcome! Check out our repository and guidelines for more details.
          </p>
        </section>
      </div>
    </Layout>
  );
}