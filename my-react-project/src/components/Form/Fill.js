import React from "react";
import "../../stylesheets/layout/_form.scss";

class Fill extends React.Component {
  render() {
    return (
      <fieldset className="form__fill column txt-dark bold">
        <div className="form__box js-form__box__button--fill">
          <div className="form__box__item">
            <i className="far fa-keyboard icon-menu" aria-hidden="true"></i>
            <h2
              className="form__box__title txt-lg txt-light"
              aria-label="Rellena"
            >
              Rellena
            </h2>
          </div>
          <button className="form__box__button">
            <div className="form__box__button__left-bar"></div>
            <div className="form__box__button__right-bar"></div>
          </button>
        </div>

        <div className="form__data">
          <div className="form__data__name m-top" aria-label="Nombre completo">
            <label className="form__data__label" htmlFor="name">
              Nombre completo
            </label>
            <input
              required
              className="form__data__input js-input-name js-intro-name"
              type="text"
              maxLength="20"
              value=""
              name="name"
              id="name"
              placeholder="Ej: Catrina de Guadalupe"
            />
          </div>
          <div className="form__data__job" aria-label="Puesto">
            <label className="form__data__label js-input-job" htmlFor="job">
              Puesto
            </label>
            <input
              required
              className="form__data__input js-intro-job"
              type="text"
              maxLength="18"
              value=""
              name="job"
              id="job"
              placeholder="Ej: Calavera Garbancera"
            />
          </div>

          <div className="form__data__name" aria-label="Imagen de perfil">
            <label className="form__data__label" htmlFor="image">
              Imagen de perfil
            </label>
            <input
              className="form__data__image__input js__profile-upload-btn"
              type="file"
              name="image"
              id="image"
            />
            <div className="form__data__image__buttonsbox">
              <div className="form__data__btn">
                <button
                  type="button"
                  className="form__data__image__btn js__profile-trigger txt-sm txt-wh txt-fsec"
                  aria-label="Añadir imagen"
                >
                  Añadir imagen
                </button>
              </div>

              <div className="form__data__image__preview js__profile-preview"></div>
            </div>
          </div>
          <div className="form__data__name" aria-label="Contacto">
            <label className="form__data__label" htmlFor="email">
              Email
            </label>
            <input
              required
              className="form__data__input js-email js-intro-email"
              type="email"
              name="email"
              id="email"
              placeholder="Ej: catrina.guadalupe@gmail.com"
            />

            <label className="form__data__label" htmlFor="phone">
              Teléfono
            </label>
            <input
              className="form__data__input js-phone js-intro-phone"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Ej: 01-11-55-55"
            />
            <label className="form__data__label" htmlFor="linkedin">
              Linkedin
            </label>
            <input
              required
              className="form__data__input js-linkedin js-intro-linkedin"
              type="text"
              name="linkedin"
              id="linkedin"
              placeholder="Ej: linkedin.com/in/catrina-guadalupe"
            />
            <label className="form__data__label" htmlFor="github">
              Github
            </label>
            <input
              required
              className="form__data__input js-github js-intro-github"
              type="text"
              name="github"
              id="github"
              placeholder="Ej: @catrina-guadalupe"
            />
          </div>
        </div>
      </fieldset>
    );
  }
}
export default Fill;