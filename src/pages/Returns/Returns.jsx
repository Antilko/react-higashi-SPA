import React from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'

import * as styles from './Returns.module.scss'

import arrow from './../../assets/elements/arrow.svg';

function ReturnsForm() {
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
            address: Yup.string().max(3, 'Номер заказа не может быть более 3ех символов').required('Необходимо указать номер заказа'),
            email: Yup.string().email('Укажите существующий адрес электронной почты'),
        }),
        onSubmit: () => {
            alert(`
                Спасибо, в ближайшее время Ваша заявка будет обработана. 

                Наш оператор свяжется с Вами`
            )
        }
  })

  return (
        <form className={styles.returnsForm} onSubmit={handleSubmit}>
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

            <label htmlFor="address">Номер заказа *</label>
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

            <p>Распакован?</p>
            <div className={styles.choice}>
                <label className={styles.radio}><input type="radio" name="picked" checked={values.picked === "S"} onChange={() => setFieldValue("picked", "S")} value="S" /><span>Да</span></label>
                <label className={styles.radio}><input type="radio" name="picked" checked={values.picked === "M"} onChange={() => setFieldValue("picked", "M")} value="M" /><span>Нет</span></label>
        
                {/* <div>Picked: {values.picked}</div> */}
            </div>
            </div>
    
            <button type="submit" className={styles.greenButton}>Оформить возврат<img src={arrow} alt="Arrow"/></button>
        </form>
  );
};

export default ReturnsForm;