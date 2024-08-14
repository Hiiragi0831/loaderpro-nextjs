const Advantage = () => {
  return (
    <section className="advantage__section">
      <div className="container">
        <div className="row">
          <div className="advantage advantage--1">
            <div className="advantage__overlay" />
            <div className="advantage__bg">
              <picture>
                <source srcSet="/images/advantage1.jpg" />
                <img src="/images/advantage1.jpg" alt="" decoding="async" />
              </picture>
            </div>
            <div className="advantage__img">
              <picture>
                <source srcSet="/images/advantage11.png" />
                <img src="/images/advantage11.png" alt="" decoding="async" />
              </picture>
            </div>
            <div className="advantage__info">
              <p className="advantage__title">
                Регистрируйтесь в системе LOADERPRO и получите доступ к новым возможностям!
              </p>
              <p className="advantage__description">
                Размещение заказов, прогрессивная система скидок, свой гараж, база каталогов!
              </p>
              <div className="advantage__button">
                <a className="button button__primary" href="#">
                  Зарегистрироваться
                </a>
              </div>
            </div>
          </div>
          <div className="advantage advantage--2">
            <div className="advantage__overlay" />
            <div className="advantage__bg">
              <picture>
                <source srcSet="/images/advantage2.jpg" />
                <img src="/images/advantage2.jpg" alt="" decoding="async" />
              </picture>
            </div>
            <div className="advantage__img">
              <picture>
                <source srcSet="/images/advantage22.png" />
                <img src="/images/advantage22.png" alt="" decoding="async" />
              </picture>
            </div>
            <div className="advantage__info">
              <p className="advantage__title">Осуществляем подбор запчастей по каталогам с гарантией!</p>
              <p className="advantage__description">
                Наши специалисты подберут запчасти по данным вашей техники. Вы получите вырезку из каталога для
                согласования позиций.
              </p>
              <div className="advantage__button">
                <a className="button button__black" href="#">
                  Отправить запрос
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
