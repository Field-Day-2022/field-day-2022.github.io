import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Contact(): JSX.Element {
  return (
    <Layout title="Contact Us" description="Get in touch with the Field Day team">
      <div className="container margin-vert--lg">
        <Heading as="h1">Contact Us</Heading>
        <section>
          <p>Have questions or need assistance? We’re here to help!</p>
        </section>
        <section>
          <Heading as="h2">GitHub</Heading>
          <p>
            Check out our <a href="https://github.com/field-day-2022" target="_blank" rel="noopener noreferrer">GitHub organization</a> for the latest updates and resources.
          </p>
        </section>
        <section>
          <Heading as="h2">Social Media</Heading>
          <p>Connect with project sponsors and contributors on LinkedIn:</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/heather-bateman-68341013/" target="_blank" rel="noopener noreferrer">Dr. Heather Bateman</a> - Project Sponsor and Professor of Biology at Arizona State University.
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ianskelskey/" target="_blank" rel="noopener noreferrer">Ian Skelsey</a> - Member of the 2022 Capstone Team and continuing contributor.
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}