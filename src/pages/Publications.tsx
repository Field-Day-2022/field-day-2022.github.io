import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Publications(): JSX.Element {
  return (
    <Layout title="Publications" description="Publications related to the Field Day project">
      <div className="container margin-vert--lg">
        <Heading as="h1">Publications</Heading>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Source</th>
              <th>Authors</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="http://onlinelibrary.wiley.com/doi/10.1002/wsb.322/abstract" target="_blank" rel="noopener noreferrer">
                  Mobile app for wildlife capture-mark-recapture data collection and query
                </a>
              </td>
              <td>Wildlife Society Bulletin, Volume 37, Issue 4</td>
              <td>Heather L. Bateman, Timothy E. Lindquist, Richard Whitehouse, Maria M. Gonzalez</td>
              <td>August 23, 2013</td>
            </tr>
            <tr>
              <td>
                <a href="https://news.asu.edu/content/biologists-ditch-traditional-methods-favor-new-record-keeping-app" target="_blank" rel="noopener noreferrer">
                  Biologists Ditch Traditional Methods in Favor of New Record-Keeping App
                </a>
              </td>
              <td>ASU News</td>
              <td>Sydney B. Donaldson</td>
              <td>August 26, 2013</td>
            </tr>
            <tr>
			  <td>
				<a href="/img/innovation-showcase-2023.png" target="_blank" rel="noopener noreferrer">
				  ASU Innovation Showcase 2023
				</a>
			  </td>
              <td>ASU Innovation Showcase</td>
              <td>Isaiah Lathem, Ian Skelskey, Jack Norman, Zachary Jacobson, Dennis Grassl</td>
              <td>Spring, 2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}