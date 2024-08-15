export const Account = () => {
  return (
    <div className="account__tab">
      <div className="account__title">
        <h1>Личный кабинет</h1>
        <small>Личная информация</small>
      </div>
      <div className="account__personal">
        <div className="account__personal-item">
          <p>Контактные данные</p>
          <div className="account__personal-forms">
            <label className="form__input">
              <input type="text" placeholder="Фамилия" name="lastname" value="Привалов" />
              <span>Фамилия</span>
            </label>
            <label className="form__input">
              <input type="text" placeholder="Имя" name="firstname" value="Алексей" />
              <span>Имя</span>
            </label>
            <label className="form__input">
              <input type="text" placeholder="Отчество" name="middlename" value="Васильевич" />
              <span>Отчество</span>
            </label>
            <label className="form__input">
              <input type="email" placeholder="Почта" name="email" value="example@gmail.com" />
              <span>Почта</span>
            </label>
            <label className="form__input">
              <input type="tel" placeholder="Телефон" name="tel" value="+7 (900) 392-43-34" />
              <span>Телефон</span>
            </label>
            <label className="form__input">
              <input type="text" placeholder="Telegram" name="telegram" value="@privalov" />
              <span>Telegram</span>
            </label>
          </div>
        </div>
        <div className="account__personal-item">
          <p>Данные о компании</p>
          <div className="account__personal-forms">
            <label className="form__input">
              <input type="text" placeholder="ИНН" name="inn" value="1243567545" />
              <span>ИНН</span>
            </label>
            <label className="form__input">
              <input type="text" placeholder="БИК банка" name="bik" value="234564" />
              <span>БИК банка</span>
            </label>
            <label className="form__input">
              <input type="text" placeholder="Расчетный счет" name="payment" value="40702810680060657001" />
              <span>Расчетный счет</span>
            </label>
          </div>
        </div>
        <div className="account__personal-item">
          <p>Смена пароля</p>
          <div className="account__personal-forms">
            <label className="form__input">
              <input type="password" placeholder="Старый пароль" name="oldpass" value="1243567545" />
              <span>Старый пароль</span>
            </label>
            <label className="form__input">
              <input type="password" placeholder="Новый пароль" name="newpass" value="dkfjnJdk3" />
              <span>Новый пароль</span>
            </label>
            <label className="form__input">
              <input type="password" placeholder="Повторите  пароль" name="repeatpass" value="dkfjnJdk3" />
              <span>Повторите пароль</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
