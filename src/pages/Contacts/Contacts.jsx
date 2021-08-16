import * as styles from './Contacts.module.scss'

import oldPhone from '../../assets/elements/old-phone.png'
import clock from '../../assets/elements/clock.png'
import exclamation from '../../assets/elements/exclamation.png'
import question from '../../assets/elements/question.png'

function Contacts() {

    return (
        <div className={styles.contacts_page}>
            <div className={styles.contactsMessage}>Интернет-магазин <span className={styles.bold}>HIGASHI</span> работает в режиме 24/7, т.е. 24 часа в сутки, 7 дней в неделю!!!</div>
            <div className={styles.contactsItem}>
                <span className={styles.contactsImages}><img src={oldPhone} alt="phone" /></span>
                <p><span className={styles.bold}>Прием заказов по телефонам</span> +375 (17) 510-90-88, +375 (29) 306-01-72, +375 (29) 813-01-72: с понедельника по пятницу с 9:00 до 17:00;
                в выходные и праздничные дни с 10:00 до 17:00 по мере доступности дежурных операторов :-)
                Все мы люди и у нас тоже бывают личные дела ...</p>
            </div>     
            <div className={styles.contactsItem}>
                <span className={styles.contactsImages}><img src={clock} alt="clock" /></span>
                <p><span className={styles.bold}>Администрация работает</span> с понедельника по пятницу с 9:00 до 17:00
                А1: +375 (29) 687-02-27</p>
            </div>     
            <div className={styles.contactsItem}>
                <span className={styles.contactsImages}><img src={exclamation} alt="exclamation" /></span>
                <p>Полное наименование организации: ООО "ГОЛДЕНПРО", УНП 692176049 Юридический адрес: Республика Беларусь, 223053, Минская обл, Минский р-н, д.Боровая, д.3, АБК, к.7 Физический адрес: 223053, Минская обл, Минский р-н, д.Боровая, д.3, АБК, к.5 Банк: р/c IBAN: BY25PJCB3012065 3841000000933, ОАО «Приорбанк» ЦБУ 117, РБ, г. Минск, пр-т Независимости, 172 Код банка BIC: PJCBBY2X Директор Алексеев Д.И., действующий на основании УставаДата регистрации сайта www.golden.by в торговом реестре Республики Беларусь 03 августа 2010 года</p>
            </div>  
            <div className={styles.contactsItem}>
                <span className={styles.contactsImages}><img src={question} alt="question" /></span>
                <p>
                    <span className={styles.bold}>Если у вас есть вопросы,</span>можете задать их с понедельника по пятницу с 9:00 до 17:00 нашим сотрудникам по телефонам:
                </p>
            </div>   
            <div className={styles.contactsPhone}> 
                <div>+375 (17) 510-90-88</div>
                <div>+375 (29) 306-01-72</div>
                <div>+375 (29) 813-01-72</div>
            </div>
        </div>
    )
}

export default Contacts;