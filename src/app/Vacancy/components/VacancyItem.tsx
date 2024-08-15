import { Link } from "react-router-dom";

export const VacancyItem = () => {
  return (
    <div className="vacancy-item">
      <div className="vacancy-item__head">
        <div className="vacancy-item__title">
          <span className="h1">Менеджер по продажам</span>
          <p>от 90 000 до 200 000 ₽ на руки</p>
        </div>
        <div className="vacancy-item__logo">
          <svg>
            <use xlinkHref="/__spritemap#sprite-logo" />
          </svg>
        </div>
      </div>
      <div className="vacancy-item__body">
        <div className="vacancy__info">
          <p>Требуемый опыт работы: не требуется</p>
          <p>Полная занятость, удаленная работа</p>
        </div>
        <div className="vacancy__buttons">
          <Link className="button button__outline" to="/vacancy/manager">
            Подробнее
          </Link>
          <button className="button button__primary">Откликнуться</button>
        </div>
      </div>
    </div>
  );
};
