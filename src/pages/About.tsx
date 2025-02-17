import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function About(): JSX.Element {
  return (
    <Layout title="About Field Day" description="Learn more about the Field Day project">
      <div className="container margin-vert--lg">
        <Heading as="h1">About Field Day</Heading>
        <section>
          <Heading as="h2">Overview</Heading>
          <p>
            Field Day is a groundbreaking project designed to enhance the way wildlife researchers collect, manage, and analyze data in the field. Developed by software engineering students in collaboration with field biologists at Arizona State University, the project provides innovative tools to simplify data collection and reduce errors. The system empowers researchers to work more efficiently, even in remote locations, and supports critical conservation and ecological studies.
          </p>
        </section>
        <section>
          <Heading as="h2">History</Heading>
          <p>
            The Field Day project was born from a desire to address challenges faced by wildlife researchers, such as incomplete or inaccurate data and the time-consuming nature of traditional, paper-based methods. The project began as a collaboration with Dr. Heather Bateman and her team, who sought a solution that could improve the accuracy and efficiency of wildlife studies.
          </p>
          <p>
            Through field testing and continuous refinement, the tools have evolved into a robust platform. Originally designed for studying reptiles and amphibians, the system aims to support a wide range of research projects and remains adaptable to new needs and contexts.
          </p>
        </section>
        <section>
          <Heading as="h2">Mission</Heading>
          <p>
            Field Day's mission is to provide researchers with user-friendly tools that streamline wildlife data collection and management. By minimizing errors and reducing the time spent on administrative tasks, the project aims to free up researchers to focus on what truly matters: advancing scientific understanding and contributing to conservation efforts.
          </p>
        </section>
        <section>
          <Heading as="h2">Features</Heading>
          <ul>
            <li>A mobile application that allows researchers to easily record observations and ensure data accuracy in the field.</li>
            <li>A desktop application designed to organize, view, and analyze collected data efficiently.</li>
          </ul>
          <p>
            These tools are built to meet the unique needs of wildlife researchers, making data collection and analysis faster, easier, and more reliable.
          </p>
        </section>
        <section>
          <Heading as="h2">Impact</Heading>
          <p>
            Field Day has transformed the way researchers work by replacing outdated methods with streamlined digital solutions. It has not only saved time and reduced errors but has also helped students and researchers work collaboratively on interdisciplinary projects. By bridging the gap between technology and biology, Field Day continues to support important ecological research and conservation efforts.
          </p>
        </section>
        <section>
          <Heading as="h2">Acknowledgments</Heading>
          <p>
            Field Day is a product of dedication and collaboration between software engineering students, biologists, and educators. We extend our deepest gratitude to:
          </p>
          <ul>
            <li><strong>Dr. Heather Bateman:</strong> For her guidance and support in shaping the project.</li>
            <li>The student teams who brought this vision to life.</li>
            <li>The broader research community for their feedback and encouragement.</li>
          </ul>
        </section>
        <section>
          <Heading as="h2">Looking Ahead</Heading>
          <p>
            Field Day remains committed to growing and adapting to new challenges in wildlife research. By continuing to develop flexible and powerful tools, the project hopes to inspire and support future generations of researchers and conservationists.
          </p>
        </section>
      </div>
    </Layout>
  );
}