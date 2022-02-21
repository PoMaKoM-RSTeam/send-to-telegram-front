import React from 'react';
import './ContentPlanDay.scss';

interface ContentPlanDayItem {
  date: string;
  month: string;
  day: string;
  area: string | null;
  areaIcon: JSX.Element | null;
}
export default function ContentPlanDay({ date, month, day, area, areaIcon }: ContentPlanDayItem): JSX.Element {
  return (
    <div className="content-day">
      <div className="content-day__day">
        <span>
          {date}-{month}-{day}
        </span>
      </div>
      <div className="content-day__area">
        {area}
        {areaIcon}
      </div>
    </div>
  );
}
