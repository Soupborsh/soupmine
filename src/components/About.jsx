import AboutImg from "../images/about.jpg";
import Emerald from "../images/emerald.png";
import Beef from "../images/beef_cooked.png";
import Sword from "../images/iron_sword.png";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function About() {
  return (
    <div className="about">
      <div className="about-main">
        <div className="about-text">
          <h1>Лучший сервер</h1>
          <p>
            Сбалансированая экономика и донат, ванильное выживание, сильнейшая
            защита от читеров и отзывчивая администрация
          </p>
        </div>
        <img src={AboutImg} alt="" />
      </div>
      <div className="about-list">
        <div className="about-item">
          <img className="about-item-icon" src={Sword} alt="" />
          <h2>Мини-игры</h2>
          <p>
            Для разбавления геймплея, вы можете проходить паркур или сражаться в
            PVP также еще разные интересные мини-игры
          </p>
        </div>
        <div className="about-item">
          <img className="about-item-icon" src={Beef} alt="" />
          <h2>Выживание</h2>
          <p>
            Приятное ванильное выживание, адекватное коммьюнити, нет
            дизбалансных привилегий как в школо серверах
          </p>
        </div>
        <div className="about-item">
          <img className="about-item-icon" src={Emerald} alt="" />
          <h2>Экономика</h2>
          <p>
            Зарабатывай, продавая ресурсы скупщику или в aукционе игрокам.
            Покупай в магазине или на аукционе что тебе надо
          </p>
        </div>
      </div>
      <Carousel className="carousel" infiniteLoop={true} showStatus={false} showThumbs={false} useKeyboardArrows={true} emulateTouch={true}>
        <div className="carousel-item">
          <img src={AboutImg} alt="" />
          <p className="legend">Обновление до версии 1.18.2</p>
        </div>
        <div className="carousel-item">
          <img src={AboutImg} alt="" />
          <p className="legend">Кастомные предметы, блоки и мебель!</p>
        </div>
      </Carousel>
    </div>
  );
}

export default About;
