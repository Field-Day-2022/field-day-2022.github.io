import React from 'react';
import styles from './GlossaryEntry.module.css';

interface GlossaryEntryProps {
  term: string;
  definition: React.ReactNode;
  field: 'software' | 'biology';
}

const GlossaryEntry: React.FC<GlossaryEntryProps> = ({ term, definition, field }) => {
  const renderedDefinition = typeof definition === 'string' ? <p>{definition}</p> : definition;

  return (
    <div className={`${styles.glossaryCard} ${styles[field]}`}>
      <h3>{term}</h3>
      {renderedDefinition}
    </div>
  );
};

export default GlossaryEntry;
