import * as styles from './Location.module.scss'

function Location() {

    return (
        <div className={styles.location_page}>
            <h2 className="mb-10">Самовывоз в минске:</h2>
            <div className="mb-20">Самовывоз осуществляется по адресу ул. Притыцкого 105-9 по предварительному звонку и согласованию времени</div>
            <section>
                <iframe className={styles.geo} title={'uniqueTitle'} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3324.043931823934!2d27.434494440456223!3d53.905907840761394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbdb2936c784ed%3A0x17befc297dcc2f79!2z0YPQuy4g0J_RgNC40YLRi9GG0LrQvtCz0L4sINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1625227682538!5m2!1sru!2sby" loading={'lazy'}></iframe>
            </section>
        </div>
    )
}

export default Location;