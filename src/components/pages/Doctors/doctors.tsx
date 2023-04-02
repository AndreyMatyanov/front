import React, {useEffect, useState} from 'react';
import s from './Doctors.module.sass'
import SiteDataService from "../../../services/SiteDataService"
import IUser from "../../../interfaces/IUser";


const Doctors = () => {
    const [users, setUsers] = useState<Array<IUser>>([])
    useEffect(() => {
        SiteDataService.getAllUsers().then(response => {
            setUsers(response.data)
        })
    },[])

    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Специалисты</h1>
            <div className={s.doctorList}>
                {users.map(doctor => (
                    <div className={s.doctor}>
                        <img src={doctor.photo} alt={"Photo"} className={s.photoDoctor}/>
                        <div className={s.textInfo}>
                            <p>{doctor.surname} {doctor.firstName} {doctor.secondName}</p>
                            <p>{doctor.position}</p>
                            <p>{doctor.job_title}</p>
                            <p>{doctor.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Doctors;