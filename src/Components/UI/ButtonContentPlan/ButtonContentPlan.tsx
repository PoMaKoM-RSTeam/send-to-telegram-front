import React from 'react';
import './ButtonContentPlan.scss';

interface ButtonContentPlanItem {
  classInfo: string;
  title: string;
  buttonIcon: JSX.Element;
}

export default function ButtonContentPlan({ classInfo, title, buttonIcon }: ButtonContentPlanItem): JSX.Element {
  const cls = ['content-plan__button', classInfo];

  return (
    <button type="button" className={cls.join(' ')}>
      {title}
      {buttonIcon}
    </button>
  );
}
