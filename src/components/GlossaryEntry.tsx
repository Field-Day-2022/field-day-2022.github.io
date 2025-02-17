import React from 'react';
import styles from './GlossaryEntry.module.css';

interface GlossaryEntryProps {
  term: string;
  definition: string;
  field: 'software' | 'biology';
}

const GlossaryEntry: React.FC<GlossaryEntryProps> = ({ term, definition, field }) => {
  return (
    <div className={`${styles.glossaryCard} ${styles[field]}`}>
      <h3>{term}</h3>
      <p>{definition}</p>
    </div>
  );
};

export default GlossaryEntry;