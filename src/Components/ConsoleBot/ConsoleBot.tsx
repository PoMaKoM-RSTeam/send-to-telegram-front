import React from 'react';
import './ConsoleBot.scss';
import ConsoleBotItem from './ConsoleBotItem/ConsoleBotItem';

function ConsoleBot() {
  return (
    <div className="console-bot">
      <h2 className="console-bot__title">Консоль</h2>
      <div className="console-bot__wrapper">
        <ConsoleBotItem number={0} title="День" />
        <ConsoleBotItem number={0} title="Неделя" />
        <ConsoleBotItem number={0} title="Месяц" />
        <ConsoleBotItem number={2} title="Всего" />
      </div>
    </div>
  );
}

export default ConsoleBot;
