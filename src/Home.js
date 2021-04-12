import React,{useState, useEffect} from 'react'
import { getUser, deleteUser} from './axios'
import {useHistory} from 'react-router-dom'
import CreateUser from './CreateUser';

export default function Home() {
    const history = useHistory()
    const [dataUser, setDataUser] = useState(null)
    console.log(dataUser)

    useEffect(() => {
        getUser().then(res=>{
           
            setDataUser(res.data)
        })
    },[])

    const renderUser = (item, index) => {
        return <div className="boxPost">
            <div>Tên: {item.name}</div>
            <div>Địa chỉ: {item.address}</div>
            <button id="edit" onClick={editUsers}>Edit</button>
            <button onClick={()=>deleteUsers(item._id, index)}>Delete</button>
        </div>
    }

    const deleteUsers = (id,index) => {
        setDataUser([...dataUser.filter((item, inx) => inx != index)])
        deleteUser(id)
    }

    const editUsers= () => {
       history.push('/createUser')
    }

    const handleRoute = (url) => {
        history.push(url)
    }

    const changeAdd = () => {
        
        handleRoute('/createUser')
    }


    return (
        <div className="home">
            <div id="box">
            {dataUser ? dataUser.map(renderUser) : null}
            <button id="add" onClick={changeAdd}>+</button>
            </div>
        </div>
    )
}
