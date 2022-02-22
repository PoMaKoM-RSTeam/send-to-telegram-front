import React, { useState, useEffect } from 'react';

import './LoginPage.scss';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import DayNightToggle from 'react-day-and-night-toggle';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button';
import axios from 'axios';
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
import Kachan from '../../resources/img/EkaterinaKachan.png';
import Moroz from '../../resources/img/Vadzim-Maroz.png';
import Makarevich from '../../resources/img/Andrew-Makarevich.png';
import Komarov from '../../resources/img/Roman-Komarov.png';
import Github from '../../resources/img/github.svg';
import RsSchool from '../../resources/img/rs_school_js.svg';

function Login(): JSX.Element {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

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
  
    // fetch("https://send-to-telegram-back.herokuapp.com/api/channel/memberChannels/addmember")

      
        
  const navigate = useNavigate();
  const verificationUser = async (user: TelegramUser) => {
    localStorage.setItem('user', JSON.stringify(user));
    const userFromLocalStorage: string | null = localStorage.getItem('user');
    if (typeof userFromLocalStorage === 'string') {
      try {
        const response = await axios.post('https://send-to-telegram-back.herokuapp.com/api/user/auth', user);
        navigate('/');
        Store.addNotification({
          title: 'LOGIN SUCCESS',
          message: response.data.message,
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      } catch (error) {
        console.error(error);
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
      }
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
                <a href="#main">{t('navigationLanding.main')}</a>
              </li>
              <li className="loginNavigationItem">
                <a href="#service">{t('navigationLanding.service')}</a>
              </li>
              <li className="loginNavigationItem">
                <a href="#team">{t('navigationLanding.team')}</a>
              </li>
              <li>
                <DayNightToggle size={30} onChange={() => handleChangeTheme()} checked={isDarkMode} />
              </li>
              <li className="loginNavigationItem">
                <div className="loginNavigationLang">
                  <button className="btnLang" type="button" onClick={() => changeLanguage('en')}>
                    EN
                  </button>
                  <button className="btnLang" type="button" onClick={() => changeLanguage('ru')}>
                    RU
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <section className="loginMain">
          <div className="loginMainContent">
            <div className="loginMainContentText">
              <h2>{t('headerLanding.title')}</h2>
            </div>
            <div className="loginMainContentButton">
              <TelegramLoginButton
                botName="RSCloneDevBot"
                dataOnauth={(user: TelegramUser) => {
                  verificationUser(user);
                }}
              />
            </div>
          </div>
          <div className="loginMainImage">
            <img src={RobotImg} alt="robot" />
          </div>
        </section>
        <section className="scopeContent" id="service">
          <div className="scopeContentTitle">
            <h2>{t('bodyLanding.title')}</h2>
            <h4>{t('bodyLanding.subtitle')}</h4>
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
                    <p>{t('bodyLanding.contentItemPostTitle')}</p>
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
                  <p>{t('bodyLanding.contentItemPostSubtitleOne')}</p>
                </div>
              </div>
            </div>
            <div className="scopeFuncList">
              <div className="scopeFuncName">
                <img src={TimerIcon} alt="Timer Icon" />
                <p>{t('bodyLanding.contentItemPostSubtitleTwo')}</p>
              </div>
              <div className="scopeFuncName">
                <img src={WritingIcon} alt="Timer Icon" />
                <p>{t('bodyLanding.contentItemPostSubtitleThree')}</p>
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
                    <p>{t('bodyLanding.contentItemDialogTitle')}</p>
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
                  <p>{t('bodyLanding.contentItemDialogSubtitleOne')}</p>
                </div>
              </div>
            </div>
            <div className="scopeFuncList">
              <div className="scopeFuncName">
                <img src={RobotIcon} alt="Robot Icon" />
                <p>{t('bodyLanding.contentItemDialogSubtitleTwo')}</p>
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
                    <p>{t('bodyLanding.contentItemStatTitle')}</p>
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
                  <p>{t('bodyLanding.contentItemStatSubtitleOne')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="teamContent" id="team">
          <div className="teamContentTitle">
            <h2>{t('bodyLanding.contentItemTeamTitle')}</h2>
          </div>
          <div className="teamContentList">
            <div className="teamContentItem">
              <div className="teamContentImg">
                <img src={Komarov} alt="Bychkou" />
              </div>
              <div className="teamContentName">
                <p>{t('bodyLanding.contentItemTeamName.Roma')}</p>
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
                <p>{t('bodyLanding.contentItemTeamName.Alex')}</p>
              </div>
              <div className="teamContentGithub">
                <a href="https://github.com/alexxg0152">@alexxg0152</a>
              </div>
              <div className="teamContentPosition">BackEnd Developer</div>
            </div>
            <div className="teamContentItem">
              <div className="teamContentImg">
                <img src={Kachan} alt="Kachan" />
              </div>
              <div className="teamContentName">
                <p>{t('bodyLanding.contentItemTeamName.Kate')}</p>
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
                <p>{t('bodyLanding.contentItemTeamName.Vadim')}</p>
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
                <p>{t('bodyLanding.contentItemTeamName.Andrew')}</p>
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
