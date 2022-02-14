import React, { useState } from 'react';
import './StatisticsButton.scss';

interface StatisticsButtonsItem {
  name: string;
  changeScheduleButton: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, content: string) => void;
  content: string;
}

export default function StatisticsButton({ name, changeScheduleButton, content }: StatisticsButtonsItem): JSX.Element {
  const [stateBackgroundButton, setStateBackgroundButton] = useState('statistics-buttons__button');

  return (
    <button
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        changeScheduleButton(e, content);
        setStateBackgroundButton('statistics-buttons__button active');
      }}
      className={stateBackgroundButton}
      type="button"
    >
      {console.log(stateBackgroundButton)}
      {name}
    </button>
  );
}
