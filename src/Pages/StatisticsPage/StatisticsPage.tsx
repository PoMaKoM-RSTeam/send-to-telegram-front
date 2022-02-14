import React from 'react';
import './StatisticsPage.scss';
import StatisticsButton from '../../Components/UI/StatisticsButton/StatisticsButton';

interface StatisticsButtonsItem {
  name: string;
  id: number;
}

export default function StatisticsPage(): JSX.Element {
  const statisticsButtons: StatisticsButtonsItem[] = [
    { name: 'подписчики', id: 1 },
    { name: 'посты', id: 2 },
    { name: 'просмотры', id: 3 },
  ];

  const changeSchedule = () => {
    console.log(Event);
    // const countForSchedule: Element | null = document.querySelector('.schedule-wrapper');
    const schedulesCollection: NodeListOf<Element> = document.querySelectorAll('.schedule');
    // console.log();
    console.log(schedulesCollection[0]);
  };

  return (
    <div className="statistics">
      <h2 className="statistics__title">Статистика</h2>
      <ul className="statistics__links">
        {statisticsButtons.map((button) => (
          <StatisticsButton key={Math.random()} name={button.name} changeSchedule={changeSchedule} />
        ))}
      </ul>
      <div className="schedule-wrapper">
        <div className="schedule schedule-subscriptions">График подписчики</div>
        <div className="schedule schedule-posts">График посты</div>
        <div className="schedule schedule-views">График просмотры</div>
      </div>
    </div>
  );
}
