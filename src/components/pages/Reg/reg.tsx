import React, {useEffect, useRef, useState} from 'react';
import s from './Reg.module.sass'
import SiteDataService from "../../../services/SiteDataService"
import {useForm} from "@mantine/form";
import {TextInput, Button, Input, Select, Code} from "@mantine/core";
import {DateInput, TimeInput} from "@mantine/dates";
import IRegData from "../../../interfaces/IRegData";

interface Data {
    value: string;
    label: string;
}

const Reg = () => {
    const [submittedValues, setSubmittedValues] = useState('');
    const [dataDoctors, setDataDoctors] = useState<Array<Data>>([])

    useEffect(() => {
        SiteDataService.getAllUsers().then(response => {
            const reformateData = response.data.map(obj => {
                return {
                    value: `${obj.id}`,
                    label: `${obj.job_title} ${obj.surname} ${obj.firstName} ${obj.secondName}`
                }
            })
            setDataDoctors(reformateData)
        })

    },[])

    const form = useForm({
        initialValues: {
            passportNumber: '',
            email: '',
            user_id: '',
            date: '',
            time: ''
        },
    });

    const handleSendReg = (values: any) => {
        const regData: IRegData = {
            passportNumber: values.passportNumber,
            user_id: parseInt(values.user_id),
            date: values.date,
            time: values.time,
            email: values.email
        }

        SiteDataService.createReg(regData).then(response => console.log(response))
    }

    return (
        <div className={s.wrapper}>
            <form onSubmit={form.onSubmit((values) => handleSendReg(values))}>
                <TextInput label={"Номер паспорта"} placeholder={"Номер паспорта"} {...form.getInputProps('passportNumber')}/>
                <TextInput label={"Email"} placeholder={"Email"} {...form.getInputProps('email')}/>
                <Select
                    label="Врач"
                    placeholder="Врач"
                    data={dataDoctors}
                    {...form.getInputProps('user_id')}
                />
                <DateInput
                    label="День приёма"
                    placeholder="Date input"
                    {...form.getInputProps('date')}
                />
                <TimeInput
                    label="Выберите время приёма"
                    {...form.getInputProps('time')}
                />
                <Button type={"submit"} mt="md">Зарегистрироваться</Button>
            </form>
            {submittedValues && <Code block>{submittedValues}</Code>}
        </div>
    );
};

export default Reg;