import React from 'react';
import { useTranslation } from 'react-i18next';
import './ConsoleBot.scss';
import ConsoleBotItem from './ConsoleBotItem/ConsoleBotItem';

function ConsoleBot() {
  const { t } = useTranslation();
  return (
    <div className="console-bot">
      <h2 className="console-bot__title">{t('personalArea.navigationMenuItem.console')}</h2>
      <div className="console-bot__wrapper">
        <ConsoleBotItem number={0} title={t('personalArea.contentConsoleDay.day')} />
        <ConsoleBotItem number={0} title={t('personalArea.contentConsoleDay.week')} />
        <ConsoleBotItem number={0} title={t('personalArea.contentConsoleDay.month')} />
        <ConsoleBotItem number={2} title={t('personalArea.contentConsoleDay.total')} />
      </div>
    </div>
  );
}

export default ConsoleBot;
