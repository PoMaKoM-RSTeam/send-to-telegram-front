import React from 'react';
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
  const objContentPlanDay: ObjContentPlanDayItem[] = [
    {
      day: '30 дек. четверг',
      area: null,
      areaIcon: iconsSvg.elementIconBan,
    },
    {
      day: '31 дек. пятница',
      area: null,
      areaIcon: iconsSvg.elementIconPlus,
    },
  ];

  return (
    <div className="content-plan">
      <h2 className="content-plan__title">Контент план</h2>
      <div className="content-plan__wrapper">
        <ButtonContentPlan
          classInfo="content-plan__button_before"
          title="Предыдущие"
          buttonIcon={iconsSvg.elementIconDown}
        />
        {objContentPlanDay.map(
          (day): JSX.Element => (
            <ContentPlanDay key={Math.random()} day={day.day} area={day.area} areaIcon={day.areaIcon} />
          )
        )}

        <ButtonContentPlan
          classInfo="content-plan__button_after"
          title="Следующие"
          buttonIcon={iconsSvg.elementIconUp}
        />
      </div>
    </div>
  );
}
