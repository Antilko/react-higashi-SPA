import React from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'

import * as styles from './OrderForm.module.scss'

import arrow from './../../assets/elements/arrow.svg';

function OrderForm({ onClickOrder, isLoading }) {
  const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
  const {handleSubmit, handleChange, values, touched, errors, handleBlur, setFieldValue} = useFormik({
    initialValues: {
      name: '',
      phone: '',
      address: '',
      email: '',
      picked: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(25, 'Имя не должно быть более 25 символов').required('Необходимо указать имя'),
      phone: Yup.string().matches(phoneRegExp, 'Введенные данные не похожи на существующий телефонный номер:)').required('Необходимо указать телефонный номер'),
      address: Yup.string().min(10, 'Адрес доставки не может быть короче 10 символов').required('Укажите адрес доставки'),
      email: Yup.string().email('Укажите существующий адрес электронной почты'),
    }),
    onSubmit: () => {
      onClickOrder();
    }
  })

  return (
      <form className={styles.orderForm} onSubmit={handleSubmit}>
        <div className={styles.orderWrapper}>
          <label htmlFor="name">Ваше имя *</label>
          <input
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              id="name"
              name="name"
              type="text"
          />
          {touched.name && errors.name ? (
              <div className={styles.error}>{errors.name}</div>
          ): null}

          <label htmlFor="phone">Телефонный номер *</label>
          <input
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              id="phone"
              name="phone"
              type="text"
          />
          {touched.phone && errors.phone ? (
              <div className={styles.error}>{errors.phone}</div>
          ): null}

          <label htmlFor="address">Адрес доставки *</label>
          <input
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              id="address"
              name="address"
              type="text"
          />
          {touched.address && errors.address ? (
              <div className={styles.error}>{errors.address}</div>
          ): null}

          <label htmlFor="email">Ваш E-mail</label>
          <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              name="email"
              type="email"
          />
          {touched.email && errors.email ? (
              <div className={styles.error}>{errors.email}</div>
          ): null}

          <p>Выберите размер:</p>
          <div className={styles.choice}>
            <label className={styles.radio}><input type="radio" name="picked" checked={values.picked === "S"} onChange={() => setFieldValue("picked", "S")} value="S" /><span>S</span></label>
            <label className={styles.radio}><input type="radio" name="picked" checked={values.picked === "M"} onChange={() => setFieldValue("picked", "M")} value="M" /><span>M</span></label>
            <label className={styles.radio}><input type="radio" name="picked" checked={values.picked === "L"} onChange={() => setFieldValue("picked", "L")} value="L" /><span>L</span></label>
            <label className={styles.radio}><input type="radio" name="picked" checked={values.picked === "XL"} onChange={() => setFieldValue("picked", "XL")} value="XL" /><span>XL</span></label>
    
            {/* <div>Picked: {values.picked}</div> */}
          </div>
        </div>
  
        <button disabled={isLoading} type="submit" className={styles.greenButton}>Оформить заказ <img src={arrow} alt="Arrow"/></button>
      </form>
  );
};

export default OrderForm;