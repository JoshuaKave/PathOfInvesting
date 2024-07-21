import React from 'react';
import styles from './Table.module.css';

export default function Table({ columns, data }) {
  return (
    <table className={styles.table}>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.accessor}>{
                row[column.accessor]
                }</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
