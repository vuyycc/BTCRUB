import React, { useState } from 'react'
import { createUser } from './axios'
import { useHistory } from 'react-router-dom'

export default function CreateUser() {
    const [check, setCheck] = useState(true);
    const history = useHistory();
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState('');

    const add = () => {
        let user = {
            'name': name,
            'age': age,
            'address': address
        }
        createUser(user)

        if (user) {
            history.push('/')
        }
    }

   

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeAge = (e) => {
        setAge(e.target.value)
    }

    const changeAddress = (e) => {
        setAddress(e.target.value)
    }

    return (
        <div id="createBox">
            <div>{check ? 'Thêm bài' : 'Sửa bài'}</div>
            <div id="inputBox">
                <input value={name} placeholder="Nhập tên" onChange={changeName}></input>
                <input value={age} placeholder="Nhập tuổi" onChange={changeAge}></input>
                <input value={address} placeholder="Nhập địa chỉ" onChange={changeAddress}></input>
            </div>
            <button onClick={add}>{check ? 'Thêm mới' : 'Sửa mới'}</button>
        </div>
    )
}
