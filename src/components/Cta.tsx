import { FC } from "react";

type CtaType = {
  title?: any;
  text?: string;
  class?: string;
};

export const Cta: FC<CtaType> = (data) => {
  const title = data.title ? data.title : "Оставьте заявку и наш менеджер свяжется с вами в течении 15 минут!";
  const text = data.text ? data.text : "Получите полную консультацию по всем видам аккумуляторов!";

  return (
    <section className={`cta ${data.class ? data.class : ""}`}>
      <div className="container">
        <div className="row">
          <div class="cta__info">
            {data.title === null ? "" : <span className="h1">{title}</span>}
            {data.text === null ? "" : <p>{text}</p>}
          </div>
          <div class="cta__form">
            <input type="text" placeholder="Имя" name="name" />
            <input type="tel" placeholder="Телефон" name="telephone" />
            <button className="button button__outline">Оставить заявку</button>
          </div>
        </div>
      </div>
    </section>
  );
};
