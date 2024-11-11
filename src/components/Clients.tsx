export const Clients = () => {
  return (
    <section className="clients">
      <div className="container">
        <div className="section-title">
          <span className="h1"> Среди наших клиентов:</span>
          <p>
            Мы с огромной благодарностью относимся к клиентам и партнерам за то,
            что они доверяют нам и выбирают нашу команду.
          </p>
        </div>
        <div className="row">
          <div className="clients__item">
            <picture>
              <source srcSet={`/images/clients/wb.png`} />
              <img src={`/images/clients/wb.png`} alt="wb" />
            </picture>
          </div>
          <div className="clients__item">
            <picture>
              <source srcSet={`/images/clients/egger.png`} />
              <img src={`/images/clients/egger.png`} alt="wb" />
            </picture>
          </div>
          <div className="clients__item">
            <picture>
              <source srcSet={`/images/clients/ozon.png`} />
              <img src={`/images/clients/ozon.png`} alt="wb" />
            </picture>
          </div>
          <div className="clients__item">
            <picture>
              <source srcSet={`/images/clients/marazzi.png`} />
              <img src={`/images/clients/marazzi.png`} alt="wb" />
            </picture>
          </div>
          <div className="clients__item">
            <picture>
              <source srcSet={`/images/clients/efko.png`} />
              <img src={`/images/clients/efko.png`} alt="wb" />
            </picture>
          </div>
          <div className="clients__item">
            <picture>
              <source srcSet={`/images/clients/maksidom.png`} />
              <img src={`/images/clients/maksidom.png`} alt="wb" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};
