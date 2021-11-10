import React, {useState} from "react";
import 'antd/dist/antd.css';
import {Button, Tag} from "antd";
import {Modal} from "../components/modal";

const data: any = [];
for (let i = 0; i < 20; i++) {
    data.push({
        key: i,
        name: `User ${i+1}`,
        age: i + 1,
        address: `Address ${i}`,
        email: `example${i+1}@gmail.com`,
        phone: `0123456789`
    });
}

const renderRole = () => {
    const rand = Math.round(Math.random() * 4)
    if (rand === 0) return <p>Admin</p>
    if (rand === 1) return <p>Free</p>
    if (rand === 2) return <p>Guest</p>
    if (rand === 3) return <p>Guest Plus</p>
    if (rand === 4) return <p>Premium</p>
}

export const Table1 = () => {
    const [show, setShow] = useState<boolean>(false)
    const handleClose = () => {
        setShow(false)
    }
    return (
        <div style={{textAlign: "left"}}>
            <Button
                type={"primary"}
                style={{marginBottom: 20}}
                onClick={() => setShow(true)}
            >
                Add New User
            </Button>
            <div style={{display: "flex"}}>
                <p style={{width: 50}}>Id</p>
                <p style={{width: 150}}>Name</p>
                <p style={{width: 50}}>Age</p>
                <p style={{width: 250}}>Address</p>
                <p style={{width: 250}}>Email</p>
                <p style={{width: 150}}>Phone</p>
                <p style={{width: 150}}>Role</p>
                <p style={{width: 150}}>Action</p>
            </div>
            {data.map((item: any) =>
             <>
                <div style={{display: "flex"}}>
                    <p style={{width: 50}}>{item.key + 1}</p>
                    <p style={{width: 150}}>{item.name}</p>
                    <p style={{width: 50}}>{item.age + 10}</p>
                    <p style={{width: 250}}>{item.address}</p>
                    <p style={{width: 250}}>{item.email}</p>
                    <p style={{width: 150}}>{item.phone}</p>
                    <p style={{width: 150}}>{renderRole()}</p>
                    <Button
                        type={"primary"}
                        style={{marginRight: 5}}
                        onClick={() => setShow(true)}
                    >
                        Edit
                    </Button>
                    <Button type={"primary"} danger>Delete</Button>
                </div>
             </>
            )}
            <div style={{
                display: 'flex',
            }}>
                <p style={{marginRight: 30}}>Page: 1, 2, 3,... 10</p>
                <p>Item Perpage: 20</p>
            </div>
            <Modal show={show} onClose={handleClose}/>
        </div>
    )
}
