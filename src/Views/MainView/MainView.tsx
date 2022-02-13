import React from 'react';
import './MainView.scss';
import { Route, Routes } from 'react-router-dom';
import ConsoleBot from '../../Components/ConsoleBot/ConsoleBot';
import SettingsPage from '../../Pages/SettingsPage/SettingsPage';
import Moderation from '../../Pages/ModerationPage/ModerationPage';
import Navigation from '../../Components/Navigation/Navigation';
import ContentPlanPage from '../../Pages/ContentPlanPage/ContentPlanPage';

function Main() {
  return (
    <div className="page-frame">
      <Navigation />
      <section className="info-area">
        <Routes>
          <Route index element={<ConsoleBot />} />
          <Route path="/console" element={<ConsoleBot />} />
          <Route path="/moderation" element={<Moderation />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/content-plan" element={<ContentPlanPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default Main;
