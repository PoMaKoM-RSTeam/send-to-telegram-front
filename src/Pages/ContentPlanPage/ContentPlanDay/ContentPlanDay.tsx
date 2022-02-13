import React from 'react';
import './ContentPlanDay.scss';

interface ContentPlanDayItem {
  day: string;
  area: string | null;
  areaIcon: JSX.Element | null;
}
export default function ContentPlanDay({ day, area, areaIcon }: ContentPlanDayItem): JSX.Element {
  return (
    <div className="content-day">
      <div className="content-day__day">{day}</div>
      <div className="content-day__area">
        {area}
        {areaIcon}
      </div>
    </div>
  );
}
