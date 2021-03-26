export const required = (value) => {
    if(value) return undefined;
    return 'Это обязательное поле';
}

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Неверный номер, номер должен состоять из 10 цифр"
    : undefined

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? "Неверный e-mail"
      : undefined