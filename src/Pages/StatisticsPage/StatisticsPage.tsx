import React, { useState } from 'react';
import './StatisticsPage.scss';
import { VictoryChart, VictoryLine, VictoryVoronoiContainer, VictoryGroup, VictoryScatter } from 'victory';
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

  const dataStatistcs: {
    x: number;
    y: number;
  }[][] = [
    [
      { x: 1, y: -3 },
      { x: 2, y: 10 },
      { x: 3, y: 3 },
      { x: 4, y: 0 },
      { x: 5, y: -2 },
      { x: 6, y: -2 },
      { x: 7, y: 5 },
    ],
    [
      { x: 1, y: 3 },
      { x: 2, y: 0 },
      { x: 3, y: 4 },
      { x: 4, y: 10 },
      { x: 5, y: -4 },
      { x: 6, y: -2 },
      { x: 7, y: 1 },
    ],
    [
      { x: 1, y: 0 },
      { x: 2, y: 2 },
      { x: 3, y: 5 },
      { x: 4, y: 7 },
      { x: 5, y: 4 },
      { x: 6, y: 1 },
      { x: 7, y: -6 },
    ],
  ];

  const [dataStatistcsToRender, setDataStatistcsToRender] = useState(dataStatistcs[0]);
  const [scheduleContent, setScheduleContent] = useState(statisticsButtons[0]);

  const changeSchedule = (value: StatisticsButtonsItem) => {
    setDataStatistcsToRender(dataStatistcs[value.id - 1]);
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
        <h2 className="schedule-title"> {content}</h2>
        <div className="schedule">
          <VictoryChart height={500} width={800} containerComponent={<VictoryVoronoiContainer />}>
            <VictoryGroup color="#c43a31" labels={({ datum }) => `y: ${datum.y}`} data={dataStatistcsToRender}>
              <VictoryLine />
              <VictoryScatter size={({ active }) => (active ? 8 : 3)} />
            </VictoryGroup>
          </VictoryChart>
        </div>
      </div>
    </div>
  );
}
