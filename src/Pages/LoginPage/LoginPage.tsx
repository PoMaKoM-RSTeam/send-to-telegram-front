import React, { useState, useEffect } from 'react';

import './LoginPage.scss';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import DayNightToggle from 'react-day-and-night-toggle';
import { useNavigate } from 'react-router-dom';
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button';
import RobotImg from '../../resources/img/robotLogin.png';
import Post from '../../resources/img/post.svg';
import RobotIcon from '../../resources/img/ai.png';
import MessageIcon from '../../resources/img/message.png';
import VoiceIcon from '../../resources/img/voice.png';
import TimerIcon from '../../resources/img/timer.png';
import WritingIcon from '../../resources/img/writing.png';
import CommentIcon from '../../resources/img/comment.png';
import StatisticIcon from '../../resources/img/pie-chart.png';
import Makei from '../../resources/img/MAKEI-ALIAKSANDR.png';
import Bychkou from '../../resources/img/Artsiom-Bychkou.png';
import Kachan from '../../resources/img/EkaterinaKachan.png';
import Moroz from '../../resources/img/Vadzim-Maroz.png';
import Makarevich from '../../resources/img/Andrew-Makarevich.png';
import Komarov from '../../resources/img/Roman-Komarov.png';
import Github from '../../resources/img/github.svg';
import RsSchool from '../../resources/img/rs_school_js.svg';

function Login(): JSX.Element {
  const [isDarkMode, setIsLightMode] = useState(localStorage.getItem('data-theme') === 'dark');
  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const newColorScheme = e.matches ? 'dark' : 'light';
      setIsLightMode(newColorScheme === 'light');
      localStorage.setItem('data-theme', newColorScheme);
      document.body.setAttribute('data-theme', localStorage.getItem('data-theme') || '{}');
    });

    if (!isDarkMode) {
      localStorage.setItem('data-theme', 'light');
      document.body.setAttribute('data-theme', 'light');
    } else {
      localStorage.setItem('data-theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    }
  }, [isDarkMode]);

  const handleChangeTheme = () => {
    setIsLightMode(!isDarkMode);
    if (!isDarkMode) {
      localStorage.setItem('data-theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    } else {
      localStorage.setItem('data-theme', 'light');
      document.body.setAttribute('data-theme', 'light');
    }
  };

  const navigate = useNavigate();

  const verificationUser = (user: TelegramUser) => {
    const validUser = true;
    console.log(user);
    if (validUser) {
      navigate('/');
    } else {
      Store.addNotification({
        title: 'LOGIN ERROR',
        message: 'An authorization error has occurred. Try again',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      console.log('err');
    }
  };
  return (
    <div className="wrapper">
      <header id="main">
        <div className="loginNavigation">
          <div className="loginNavigationLogo">
            <span>RS-Clone</span>
            <span>Bot</span>
          </div>
          <div className="loginNavigationMenu">
            <ul className="loginNavigationList">
              <li className="loginNavigationItem">
                <a href="#main">Главная</a>
              </li>
              <li className="loginNavigationItem">
                <a href="#service">Сервис</a>
              </li>
              <li className="loginNavigationItem">
                <a href="#team">Команда</a>
              </li>
              <li className="loginNavigationItem">
                <div className="loginNavigationLang">
                  <p className="loginNavigationLangText">EN</p>
                </div>
              </li>
              <li>
                <DayNightToggle size={30} onChange={() => handleChangeTheme()} checked={isDarkMode} />
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <section className="loginMain">
          <div className="loginMainContent">
            <div className="loginMainContentText">
              <h2>Отложенный постинг Telegram ваш верный друг и помощник</h2>
            </div>
            <div className="loginMainContentButton">
              <TelegramLoginButton
                botName="RSCloneDevBot"
                dataOnauth={(user: TelegramUser) => {
                  verificationUser(user);
                  console.log(user);
                }}
              />
              <button
                className="loginBtn effectBtn"
                type="submit"
                onClick={() => {
                  navigate('/');
                }}
              >
                Login
              </button>
            </div>
          </div>
          <div className="loginMainImage">
            <img src={RobotImg} alt="robot" />
          </div>
        </section>
        <section className="scopeContent" id="service">
          <div className="scopeContentTitle">
            <h2>Возможности сервиса</h2>
            <h4>Список функций с возможностями доступными исключительно в Telegram</h4>
          </div>
          <div className="scopeContentList">
            <div className="scopeContentItem">
              <div className="scopeContentItemInner">
                <div className="scopeContentItemImg">
                  <img src={Post} alt="post" />
                </div>
              </div>
              <div className="scopeContentItemText">
                <div className="itemTitle">
                  <div className="itemTitleText">
                    <p>Постинг</p>
                  </div>
                  <div className="itemGroup">
                    <div className="itemGroupImg">
                      <img src={RobotIcon} alt="Robot Icon" />
                    </div>
                    <div className="itemGroupImg">
                      <img src={MessageIcon} alt="Message Icon" />
                    </div>
                    <div className="itemGroupImg">
                      <img src={VoiceIcon} alt="Voice Icon" />
                    </div>
                  </div>
                </div>
                <div className="itemDes">
                  <p>Отправляй сообщения когда захочешь.</p>
                </div>
              </div>
            </div>
            <div className="scopeFuncList">
              <div className="scopeFuncName">
                <img src={TimerIcon} alt="Timer Icon" />
                <p>Отложенный постинг</p>
              </div>
              <div className="scopeFuncName">
                <img src={WritingIcon} alt="Timer Icon" />
                <p>Редактирование отправленных постов</p>
              </div>
            </div>

            <div className="scopeContentItem">
              <div className="scopeContentItemInner">
                <div className="scopeContentItemImg">
                  <img src={CommentIcon} alt="comment" />
                </div>
              </div>
              <div className="scopeContentItemText">
                <div className="itemTitle">
                  <div className="itemTitleText">
                    <p>Диалоги</p>
                  </div>
                  <div className="itemGroup">
                    <div className="itemGroupImg">
                      <img src={RobotIcon} alt="Robot Icon" />
                    </div>
                    <div className="itemGroupImg">
                      <img src={MessageIcon} alt="Message Icon" />
                    </div>
                    <div className="itemGroupImg">
                      <img src={VoiceIcon} alt="Voice Icon" />
                    </div>
                  </div>
                </div>
                <div className="itemDes">
                  <p>Общайся от имени бота и смотри что пишут ему.</p>
                </div>
              </div>
            </div>
            <div className="scopeFuncList">
              <div className="scopeFuncName">
                <img src={RobotIcon} alt="Robot Icon" />
                <p>Общение от имени бота</p>
              </div>
            </div>

            <div className="scopeContentItem">
              <div className="scopeContentItemInner">
                <div className="scopeContentItemImg">
                  <img src={StatisticIcon} alt="comment" />
                </div>
              </div>
              <div className="scopeContentItemText">
                <div className="itemTitle">
                  <div className="itemTitleText">
                    <p>Статистика</p>
                  </div>
                  <div className="itemGroup">
                    <div className="itemGroupImg">
                      <img src={RobotIcon} alt="Robot Icon" />
                    </div>
                    <div className="itemGroupImg">
                      <img src={MessageIcon} alt="Message Icon" />
                    </div>
                    <div className="itemGroupImg">
                      <img src={VoiceIcon} alt="Voice Icon" />
                    </div>
                  </div>
                </div>
                <div className="itemDes">
                  <p>Фиксируй новые победы каждый день.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="teamContent" id="team">
          <div className="teamContentTitle">
            <h2>Команда</h2>
          </div>
          <div className="teamContentList">
            <div className="teamContentItem">
              <div className="teamContentImg">
                <img src={Komarov} alt="Bychkou" />
              </div>
              <div className="teamContentName">
                <p>Roman Komarov</p>
              </div>
              <div className="teamContentGithub">
                <a href="https://github.com/pomakom">@pomakom</a>
              </div>
              <div className="teamContentPosition">
                <p>Team Lead</p>
              </div>
            </div>
            <div className="teamContentItem">
              <div className="teamContentImg">
                <img src={Makei} alt="Makei" />
              </div>
              <div className="teamContentName">
                <p>Makei Aliaksandr</p>
              </div>
              <div className="teamContentGithub">
                <a href="https://github.com/alexxg0152">@alexxg0152</a>
              </div>
              <div className="teamContentPosition">BackEnd Developer</div>
            </div>
            <div className="teamContentItem">
              <div className="teamContentImg">
                <img src={Bychkou} alt="Bychkou" />
              </div>
              <div className="teamContentName">
                <p>Artsiom Bychkou</p>
              </div>
              <div className="teamContentGithub">
                <a href="https://github.com/archi-minsk">@archi-minsk</a>
              </div>
              <div className="teamContentPosition">
                <p>FrontEnd Developer</p>
              </div>
            </div>
            <div className="teamContentItem">
              <div className="teamContentImg">
                <img src={Kachan} alt="Kachan" />
              </div>
              <div className="teamContentName">
                <p>Ekaterina Kachan</p>
              </div>
              <div className="teamContentGithub">
                <a href="https://github.com/KaterinaKachann">@KaterinaKachann</a>
              </div>
              <div className="teamContentPosition">
                <p>FrontEnd Developer</p>
              </div>
            </div>
            <div className="teamContentItem">
              <div className="teamContentImg">
                <img src={Moroz} alt="Moroz" />
              </div>
              <div className="teamContentName">
                <p>Vadzim Maroz</p>
              </div>
              <div className="teamContentGithub">
                <a href="https://github.com/gomunkool">@gomunkool</a>
              </div>
              <div className="teamContentPosition">
                <p>FrontEnd Developer</p>
              </div>
            </div>
            <div className="teamContentItem">
              <div className="teamContentImg">
                <img src={Makarevich} alt="Makarevich" />
              </div>
              <div className="teamContentName">
                <p>Andrew Makarevich</p>
              </div>
              <div className="teamContentGithub">
                <a href="https://github.com/andrewmakarevich">@andrewmakarevich</a>
              </div>
              <div className="teamContentPosition">
                <p>BackEnd Developer</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="source">
          <a href="https://github.com/PoMaKoM-RSTeam">
            <img src={Github} alt="Github" />
          </a>
        </div>
        <div className="source">
          <a href="https://rs.school/">
            <img src={RsSchool} alt="RsSchool" />
          </a>
        </div>
      </footer>
    </div>
  );
}
export default Login;
