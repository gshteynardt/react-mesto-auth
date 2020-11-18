import React from "react";

const Form = ({title, submitText, children, onSubmit}) => {

  return(
    <div className={'form__container'}>
    <form
      className="form"
      noValidate
      onSubmit={onSubmit}
    >
      <h2 className="form__title">{title}</h2>
      <div className="popup__fields">
        { children }
      </div>
      <button
        type="submit"
        className="button button_submit form__submit"
      >
        { submitText }
      </button>
    </form>
    </div>
  )
}

export default Form