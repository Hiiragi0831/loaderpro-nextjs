export const MobileBar = () => {
  return (
    <div className="mobilebar">
      <a href="#" className="mobilebar__item">
        <svg>
          <use xlinkHref="/__spritemap#sprite-home-line" />
        </svg>
        <span>Домой</span>
      </a>
      <a href="#" className="mobilebar__item">
        <svg>
          <use xlinkHref="/__spritemap#sprite-checkbox-list-line" />
        </svg>
        <span>Каталог</span>
      </a>
      <a href="#" className="mobilebar__search">
        <svg>
          <use xlinkHref="/__spritemap#sprite-shield" />
        </svg>
      </a>
      <a href="#" className="mobilebar__item">
        <svg>
          <use xlinkHref="/__spritemap#sprite-question" />
        </svg>
        <span>Запросы</span>
      </a>
      <a href="#" className="mobilebar__item">
        <svg>
          <use xlinkHref="/__spritemap#sprite-parking-garage" />
        </svg>
        <span>Гараж</span>
      </a>
    </div>
  );
};
