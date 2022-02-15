import React from 'react';
import './StatisticsButton.scss';

interface StatisticsButtonsItem {
  name: string;
  id: number;
  content: string;
}

interface StatisticsButtonItem {
  value: StatisticsButtonsItem;
  changeScheduleButton: (value: StatisticsButtonsItem) => void;
  isActive: boolean;
}

export default function StatisticsButton({ value, changeScheduleButton, isActive }: StatisticsButtonItem): JSX.Element {
  const { name } = value;

  return (
    <button
      onClick={() => {
        changeScheduleButton(value);
      }}
      className={`statistics-buttons__button ${isActive && 'active'}`}
      type="button"
    >
      {name}
    </button>
  );
}
