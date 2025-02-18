import React from 'react';
import styles from './PublicationEntry.module.css';

interface PublicationEntryProps {
  title: string;
  source: string;
  authors: string;
  date: string;
  link: string;
}

const PublicationEntry: React.FC<PublicationEntryProps> = ({ title, source, authors, date, link }) => {
  return (
    <div className={styles.publicationCard}>
      <h3 className={styles.title}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p className={styles.source}>{source}</p>
      <p className={styles.authors}>{authors}</p>
      <p className={styles.date}>{date}</p>
    </div>
  );
};

export default PublicationEntry;