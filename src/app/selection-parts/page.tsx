export default function SelectionParts() {
  return (
    <main>
      <section className="query__section">
        <div className="container">
          <div className="row">
            <div className="query">
              <div className="query__title">Запрос цены</div>
              <div className="query__form">
                <label className="form__input">
                  <input type="text" name="brand" placeholder="Бренд" />
                  <span>Бренд</span>
                </label>
                <label className="form__input">
                  <input type="text" name="partnumber" placeholder="Номер запчасти" />
                  <span>Номер запчасти</span>
                </label>
                <label className="form__input">
                  <input type="text" name="brand" placeholder="Количество" />
                  <span>Количество</span>
                </label>
                <div className="query__buttons">
                  <button className="button button__primary">Добавить в запрос</button>
                </div>
              </div>
            </div>
            <div className="query">
              <div className="query__title">Ваш запрос</div>
              <div className="query__form">
                <label className="form__input">
                  <input type="text" name="brand" placeholder="Бренд" value="Loaderpro" />
                  <span>Бренд</span>
                </label>
                <label className="form__input">
                  <input type="text" name="partnumber" placeholder="Номер запчасти" value="13243422" />
                  <span>Номер запчасти</span>
                </label>
                <label className="form__input">
                  <input type="text" name="brand" placeholder="Количество" value="2" />
                  <span>Количество</span>
                </label>
                <div className="query__buttons">
                  <button className="button button__primary">X</button>
                </div>
              </div>
              <div className="query__form">
                <label className="form__input">
                  <input type="text" name="brand" placeholder="Бренд" value="Loaderpro" />
                  <span>Бренд</span>
                </label>
                <label className="form__input">
                  <input type="text" name="partnumber" placeholder="Номер запчасти" value="13243422" />
                  <span>Номер запчасти</span>
                </label>
                <label className="form__input">
                  <input type="text" name="brand" placeholder="Количество" value="2" />
                  <span>Количество</span>
                </label>
                <div className="query__buttons">
                  <button className="button button__primary">X</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
