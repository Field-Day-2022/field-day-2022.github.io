import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import MobileDataCollector from '@site/static/img/mobile-data-collector.png';
import DesktopDataManager from '@site/static/img/desktop-data-manager.png';

type AppItem = {
  title: string;
  Img: string;
  description: ReactNode;
  guideLink: string;
  repoLink: string;
};

const AppList: AppItem[] = [
  {
    title: '📱 Mobile Data Collector',
    Img: MobileDataCollector,
    description: (
      <>
        The Field Day mobile app allows you to collect data in the field, even without an internet connection.
      </>
    ),
    guideLink: '/docs/mobile-data-collector',
    repoLink: 'https://github.com/Field-Day-2022/mobile-data-collector',
  },
  {
    title: '💻 Desktop Data Manager',
    Img: DesktopDataManager,
    description: (
      <>
        The Field Day web app allows you to manage and export your data.
      </>
    ),
    guideLink: '/docs/desktop-data-manager',
    repoLink: 'https://github.com/Field-Day-2022/desktop-data-manager',
  },
];

function AppItem({title, Img, description, guideLink, repoLink}: AppItem) {
  return (
    <div className={clsx('col col--6', styles.appItem)}>
      <div className="text--center">
        <img src={Img} className={styles.appImg} role="img" alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div className={styles.links}>
          <Link className={clsx('button button--primary button--md', styles.button)} to={guideLink}>
            📖 User Guide
          </Link>
          <Link className={clsx('button button--secondary button--md', styles.button)} to={repoLink}>
            💻 GitHub Repository
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageApps(): ReactNode {
  return (
    <section className={styles.apps}>
      <div className="container">
        <Heading as="h2" className="text--center" style={{ paddingBottom: '20px', fontSize: '2rem' }}>
          Field Day Apps
        </Heading>
        <div className="row">
          {AppList.map((props, idx) => (
            <AppItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}