import React from 'react';
import { useTranslation } from 'react-i18next';
import axios from "axios";
import './ConsoleBot.scss';
import ConsoleBotItem from './ConsoleBotItem/ConsoleBotItem';

interface HeadersItem {
  userdata: null | string
}
function ConsoleBot() {
   
   axios.get('https://send-to-telegram-back.herokuapp.com/api/channel/memberChannels', {
    headers: {"userdata": localStorage.getItem('user')}
  }).then(res => {console.log(res)});
  
  axios.post('https://send-to-telegram-back.herokuapp.com/api/channel/memberChannels/addmember', {
    body: [{
      'newMemberId': localStorage.getItem('user.id'),
      'channelId': localStorage.getItem('user'),
      'roleId': localStorage.getItem('user'),
    }]
  }).then(response => {console.log(response)});

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
