import React from 'react';


import Countdown from 'react-countdown';

import appStyles from './app.module.scss';
import flowerBottom from './assets/flower-bottom.png';
import infoImage from './assets/info.jpg';
import infoMobileImage from './assets/2019-11-24 08.jpg';
import quotesImage from './assets/quotes.png';
import flowerTop from './assets/flower-top.png';
import ReactPlayer from "react-player";

import './reset.scss';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = (props) => {
  console.log(props);
  if (props.completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    return (
      <div className={appStyles.countdown}>
        <div className={appStyles.countdownSection}>
          {props.days}
          <span>дни</span>
        </div>
        <div className={appStyles.countdownSection}>
          {props.hours}
          <span>часове</span>
        </div>
        <div className={appStyles.countdownSection}>
          {props.minutes}
          <span>минути</span>
        </div>
        <div className={appStyles.countdownSection}>
          {props.seconds}
          <span>секунди</span>
        </div>
      </div>
    );
  }
};

const App = () => {
  return (
    <main className={appStyles.mainSection}>
      <section className={appStyles.landingSection}>
        <div className={appStyles.leftSection}>
          <img src={flowerTop} className={appStyles.flowerTop} />
          <img src={flowerBottom} className={appStyles.flowerBottom} />
          <div className={appStyles.info}>
            <div className={appStyles.mobileLandingImage}></div>
            <h1 className={appStyles.title1}>Семейство Георгиеви</h1>
            <span>Since 27.07.2022</span>
            <h1 className={appStyles.title}>Wedding photos coming soon</h1>
            <button disabled={true} onClick={(e) => {window.open("https://docs.google.com/forms/d/1j1kHqKrragaHzDPlWtb-ceGW1l6_z4vRDilCk4UwW0Q/edit?usp=sharing_eil_se_dm&ts=62866bf1");}}
             className={appStyles.button}>Сватбени Снимки</button>
            <ReactPlayer url={"https://www.youtube.com/watch?v=omfz62qu_Bc&ab_channel=UPROXXVideo"} controls={true} />
          </div>
        </div>
        <div className={appStyles.rightSection}>
        </div>
      </section>

      <section className={appStyles.infoSection}>
        <div className={appStyles.infoWrapper}>
          <div className={appStyles.infoImageWrapper}>
            <img className={appStyles.infoImage} src={infoImage}/>
          </div>
          <div className={appStyles.infoImageMobileWrapper}>
            <img className={appStyles.infoMobileImage} src={infoMobileImage}/>
          </div>
          <div className={appStyles.infoText}>
            <img src={quotesImage} />
            <p>
              <b><u>27.08.2022</u></b> ще бъде един много специален ден за нас.
            </p>
            <p>
              След 9 години любов, щастие, смях и емоции,  израснахме заедно и вече сме готови за една от най-важните стъпки в живота ни - да си кажем "Да" един на друг и да си обещаем да запазим тази обич и подкрепа вечно.
            </p>
            <p>
              Ако си получил линк към този сайт, това означава, че си важен за нас и ще се радваме да споделим този ден с теб, затова официално те каним на нашата сватба.
            </p>
            <p>
              <i>- Мария и Камен</i>
            </p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default App;