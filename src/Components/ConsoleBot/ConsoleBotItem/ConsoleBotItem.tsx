import React from 'react';
import './ConsoleBotItem.scss';

interface IConsoleBotItem {
  number: number;
  title: string;
}

export default function ConsoleBotItem({ number, title }: IConsoleBotItem): JSX.Element {
  return (
    <div className="console-bot__item">
      <p className="console-bot__item-number console-bot__item-text">{number}</p>
      <p className="console-bot__item-title console-bot__item-text">{title}</p>
    </div>
  );
}
