import React, { useState } from 'react';
import './StatisticsPage.scss';
import StatisticsButton from '../../Components/UI/StatisticsButton/StatisticsButton';

interface StatisticsButtonsItem {
  name: string;
  id: number;
  content: string;
}

export default function StatisticsPage(): JSX.Element {
  const statisticsButtons: StatisticsButtonsItem[] = [
    { name: 'подписчики', id: 1, content: 'График подписчики' },
    { name: 'посты', id: 2, content: 'График посты' },
    { name: 'просмотры', id: 3, content: 'График просмотры' },
  ];

  const [scheduleContent, setScheduleContent] = useState(statisticsButtons[0]);

  const changeSchedule = (value: StatisticsButtonsItem) => {
    console.log(value);
    setScheduleContent(value);
  };

  const { content, id } = scheduleContent;

  return (
    <div className="statistics">
      <h2 className="statistics__title">Статистика</h2>
      <ul className="statistics__links">
        {statisticsButtons.map((button) => (
          <StatisticsButton
            key={button.id}
            changeScheduleButton={changeSchedule}
            value={button}
            isActive={button.id === id}
          />
        ))}
      </ul>
      <div className="schedule-wrapper">
        <div className="schedule">{content}</div>
      </div>
    </div>
  );
}
