import { auth } from "@/services/auth";

export default async function Account() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;

  return (
    <div className="account__tab">
      <div className="account__title">
        <h1>Личный кабинет</h1>
        <small>Личная информация</small>
      </div>
      <div className="account__personal">
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <div className="account__personal-item">
          <p>Контактные данные</p>
          <div className="account__personal-forms">
            <label className="form__input">
              <input
                type="text"
                placeholder="Фамилия"
                name="lastname"
                defaultValue="Привалов"
              />
              <span>Фамилия</span>
            </label>
            <label className="form__input">
              <input
                type="text"
                placeholder="Имя"
                name="firstname"
                defaultValue="Алексей"
              />
              <span>Имя</span>
            </label>
            <label className="form__input">
              <input
                type="text"
                placeholder="Отчество"
                name="middlename"
                defaultValue="Васильевич"
              />
              <span>Отчество</span>
            </label>
            <label className="form__input">
              <input
                type="email"
                placeholder="Почта"
                name="email"
                defaultValue="example@gmail.com"
              />
              <span>Почта</span>
            </label>
            <label className="form__input">
              <input
                type="tel"
                placeholder="Телефон"
                name="tel"
                defaultValue="+7 (900) 392-43-34"
              />
              <span>Телефон</span>
            </label>
            <label className="form__input">
              <input
                type="text"
                placeholder="Telegram"
                name="telegram"
                defaultValue="@privalov"
              />
              <span>Telegram</span>
            </label>
          </div>
        </div>
        <div className="account__personal-item">
          <p>Данные о компании</p>
          <div className="account__personal-forms">
            <label className="form__input">
              <input
                type="text"
                placeholder="ИНН"
                name="inn"
                defaultValue="1243567545"
              />
              <span>ИНН</span>
            </label>
            <label className="form__input">
              <input
                type="text"
                placeholder="БИК банка"
                name="bik"
                defaultValue="234564"
              />
              <span>БИК банка</span>
            </label>
            <label className="form__input">
              <input
                type="text"
                placeholder="Расчетный счет"
                name="payment"
                defaultValue="40702810680060657001"
              />
              <span>Расчетный счет</span>
            </label>
          </div>
        </div>
        <div className="account__personal-item">
          <p>Смена пароля</p>
          <div className="account__personal-forms">
            <label className="form__input">
              <input
                type="password"
                placeholder="Старый пароль"
                name="oldpass"
                defaultValue="1243567545"
              />
              <span>Старый пароль</span>
            </label>
            <label className="form__input">
              <input
                type="password"
                placeholder="Новый пароль"
                name="newpass"
                defaultValue="dkfjnJdk3"
              />
              <span>Новый пароль</span>
            </label>
            <label className="form__input">
              <input
                type="password"
                placeholder="Повторите  пароль"
                name="repeatpass"
                defaultValue="dkfjnJdk3"
              />
              <span>Повторите пароль</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
