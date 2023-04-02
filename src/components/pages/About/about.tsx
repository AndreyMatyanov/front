import React from 'react';
import s from './About.module.sass'
import {Table} from "@mantine/core";
import mailLogo from "./mail.png"
import {Map, YMaps} from "@pbe/react-yandex-maps";

const About = () => {
    const infocenter = [
        { name: 'Стол справок:', number: '8(0222)49-80-53' },
        { name: 'Приёмные покои', number: '8(0222)49-80-58' },
        { name: 'Регистратура', number: '8(0222)65-50-20' },
    ];

    const adminCenter = [
        { name: 'Приемная (тел./факс):', number: '8(0222)49-80-53' },
        { name: 'Бухгалтерия:', number: '8(0222)49-80-58' },
        { name: 'Отдел кадров:', number: '8(0222)65-50-20' },
        { name: 'Экономисты', number: '8(0222)49-80-56'},
    ];


    const rowsInfoCenter = infocenter.map((element) => (
        <tr>
            <td>{element.name}</td>
            <td>{element.number}</td>
        </tr>
    ));

    const rowsAdminCenter = adminCenter.map((element) => (
        <tr>
            <td>{element.name}</td>
            <td>{element.number}</td>
        </tr>
    ));

    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>О нас</h1>
            <Table className={s.table}>
                <thead>
                <tr>
                    <th>Справочные телефонные номера</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>{rowsInfoCenter}</tbody>
            </Table>

            <Table className={s.table}>
                <thead>
                <tr>
                    <th>Администрация</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>{rowsAdminCenter}</tbody>
            </Table>


            <div>
                <img src={mailLogo} alt="Mail" className={s.mailLogo}/>
                <div>
                    <p>Горячая телефонная линия: +375 (222) 65-50-44 с 8.00 до 13.00 и с 13.30 до 16.30. Выходные дни: суббота, воскресенье</p>
                    <p>ТЕЛЕФОН ДОВЕРИЯ ДЛЯ ОКАЗАНИЯ ЭКСТРЕННОЙ ПСИХОЛОГИЧЕСКОЙ ПОМОЩИ:</p>
                    <p>8(0222) 71-11-61 (круглосуточно)</p>
                    <p>ТЕЛЕФОН «ГОРЯЧАЯ ЛИНИЯ» ДЛЯ ОКАЗАНИЯ ПСИХОЛОГИЧЕСКОЙ ПОМОЩИ НЕСОВЕРШЕННОЛЕТНИМ: 8-801-100-16-11 (работает круглосуточно) С БЕСПЛАТНЫМ ДОСТУПОМ ДЛЯ АБОНЕНТОВ</p>
                    <p>По всем интересующим вас вопросам пишите на нашу электронную почту: info@mood.by</p>
                </div>
            </div>

            <div>
                <h2 className={s.title}>Наше местоположение</h2>
                <YMaps>
                    <div>
                        <Map defaultState={{ center: [43.115542, 131.885494], zoom: 9 }} width={"100%"} height={"250px"}/>
                    </div>
                </YMaps>
            </div>
        </div>
    );
};

export default About;