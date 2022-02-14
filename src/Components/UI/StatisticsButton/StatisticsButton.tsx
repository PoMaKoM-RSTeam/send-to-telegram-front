import React from 'react';
import './StatisticsButton.scss';

interface StatisticsButtonsItem {
  name: string;
  changeSchedule: () => void;
}

export default function StatisticsButton({ name, changeSchedule }: StatisticsButtonsItem): JSX.Element {
  const cls = ['statistics-buttons__button'];
  return (
    <button className={cls.join(' ')} onClick={changeSchedule} type="button">
      {name}
    </button>
  );
}
