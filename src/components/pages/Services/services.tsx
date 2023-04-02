import React, {useEffect, useState} from 'react';
import s from "./Services.module.sass"
import {Table} from "@mantine/core";
import IService from "../../../interfaces/IService";
import SiteDataService from "../../../services/SiteDataService";

const Services = () => {
    const [service, setService] = useState<Array<IService>>([])
    useEffect(() => {
        SiteDataService.getAllServices().then(response => setService(response.data))
    },[])


    return (
        <div className={s.wrapper}>
            <Table>
                <thead>
                <tr>
                    <th>Наименование услуги</th>
                    <th>Стоимость тарифа, руб</th>
                    <th>Стоимость расходного материала, руб</th>
                    <th>ВСЕГО, руб</th>
                </tr>
                </thead>
                <tbody>{service.map((element) => (
                    <tr key={element.name}>
                        <td>{element.name}</td>
                        <td>{element.costService}</td>
                        <td>{element.costCosumable}</td>
                        <td>{element.costService + element.costCosumable}</td>
                    </tr>
                ))}</tbody>
            </Table>
        </div>
    );
};

export default Services;