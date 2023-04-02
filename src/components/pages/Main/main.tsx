import React from 'react';
import s from './Main.module.sass'
import photo from "../Main/doctor.jpg";
import {YMaps, Map} from "@pbe/react-yandex-maps";

const Main = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.warning}>
                <div>
                    <img  src={photo} alt="Logo" className={s.photo}/>
                </div>
                <div>
                    <h3 className={s.title}>УВАЖАЕМЫЕ ПАЦИЕНТЫ!</h3>
                    <p>В нашем медицинском центре Вам будет оказана высококвалифицированная помощь, основанная на современных методах диагностики, лечения и профилактики.

                        Наши специалисты регулярно участвуют в республиканских и зарубежных медицинских форумах, посвященным проблемам онкологии. Проходят стажировку в РНПЦ ОМР им. Н.Н. Александрова, клиниках Польши, Италии, Швейцарии.

                        Врачи подберут подходящие методики лечения. А диагностика на самих ранних стадиях повысит шансы на выздоровление.</p>
                </div>
            </div>
            <YMaps>
                <div className={s.map_content}>
                    <h1>Наше местоположение</h1>
                    <Map defaultState={{ center: [43.115542, 131.885494], zoom: 9 }} width={"100%"} height={"250px"}/>
                </div>
            </YMaps>
        </div>
    );
};

export default Main;