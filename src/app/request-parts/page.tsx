export default function RequestParts() {
  return (
    <main>
      <section className="forms__section">
        <div className="container">
          <div className="row">
            <div className="forms">
              <div className="forms__head">
                <p>Информация о транспортном средстве</p>
              </div>
              <div className="forms__row row-3">
                <label className="form__input">
                  <input type="text" name="brand" placeholder="Бренд" />
                  <span>Бренд</span>
                </label>
                <label className="form__input">
                  <input type="text" name="model" placeholder="Модель" />
                  <span>Модель</span>
                </label>
                <label className="form__input">
                  <input type="text" name="yearproduction" placeholder="Год производства" />
                  <span>Год производства</span>
                </label>
                <label className="form__input">
                  <input type="text" name="prefix" placeholder="Префикс" />
                  <span>Префикс</span>
                </label>
                <label className="form__input">
                  <input type="text" name="serialnumber" placeholder="Серийный номер" />
                  <span>Серийный номер</span>
                </label>
              </div>
            </div>
            <div className="forms">
              <div className="forms__head">
                <p>Добавить запчасти для ТС</p>
              </div>
              <div className="forms__row row-3">
                <label className="form__input">
                  <input type="text" name="sparepart" placeholder="Наименование запчасти" />
                  <span>Наименование запчасти</span>
                </label>
                <label className="form__input">
                  <input type="text" name="catalognumber" placeholder="Каталожный номер запчасти" />
                  <span>Каталожный номер запчасти</span>
                </label>
                <label className="form__input">
                  <input type="text" name="quantity" placeholder="Количество" />
                  <span>Количество</span>
                </label>
              </div>
              <div className="forms__row">
                <label className="form__textarea">
                  <textarea name="comment" rows={4} placeholder="Комментарий" />
                  <span>Комментарий</span>
                </label>
              </div>
              <div className="forms__buttons">
                <button className="button button__outline">Добавить в список</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
