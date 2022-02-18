import React from 'react';
import { useTranslation } from 'react-i18next';
import './ContentPlanPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faBan, faPlus } from '@fortawesome/free-solid-svg-icons';
import ButtonContentPlan from '../../Components/UI/ButtonContentPlan/ButtonContentPlan';
import ContentPlanDay from './ContentPlanDay/ContentPlanDay';

interface IconsSvgItem {
  elementIconDown: JSX.Element;
  elementIconUp: JSX.Element;
  elementIconBan: JSX.Element;
  elementIconPlus: JSX.Element;
}

interface ObjContentPlanDayItem {
  date: string;
  month: string;
  day: string;
  area: null;
  areaIcon: JSX.Element;
}

const iconsSvg: IconsSvgItem = {
  elementIconDown: <FontAwesomeIcon icon={faAngleDown} />,
  elementIconUp: <FontAwesomeIcon icon={faAngleUp} />,
  elementIconBan: <FontAwesomeIcon icon={faBan} />,
  elementIconPlus: <FontAwesomeIcon icon={faPlus} />,
};

export default function ContentPlanPage(): JSX.Element {
  const { t } = useTranslation();
  const objContentPlanDay: ObjContentPlanDayItem[] = [
    {
      date: '30',
      month: t('personalArea.contentConsoleDay.monthItem.dec'),
      day: t('personalArea.contentConsoleDay.dayItem.mon'),
      area: null,
      areaIcon: iconsSvg.elementIconBan,
    },
    {
      date: '31',
      month: t('personalArea.contentConsoleDay.monthItem.dec'),
      day: t('personalArea.contentConsoleDay.dayItem.tue'),
      area: null,
      areaIcon: iconsSvg.elementIconPlus,
    },
  ];

  return (
    <div className="content-plan">
      <h2 className="content-plan__title">{t('personalArea.navigationMenuItem.content')}</h2>
      <div className="content-plan__wrapper">
        <ButtonContentPlan
          classInfo="content-plan__button_before"
          title={t('personalArea.contentPlan.prev')}
          buttonIcon={iconsSvg.elementIconDown}
        />
        {objContentPlanDay.map(
          (day): JSX.Element => (
            <ContentPlanDay
              key={Math.random()}
              date={day.date}
              month={day.month}
              day={day.day}
              area={day.area}
              areaIcon={day.areaIcon}
            />
          )
        )}

        <ButtonContentPlan
          classInfo="content-plan__button_after"
          title={t('personalArea.contentPlan.next')}
          buttonIcon={iconsSvg.elementIconUp}
        />
      </div>
    </div>
  );
}
