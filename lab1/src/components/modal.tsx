import React from "react";
import {Button, Input} from "antd";

type ModalProps = {
    show: boolean
    onClose: () => void
}

export const Modal = ({show, onClose}: ModalProps) => {
    if (!show) return null
    return (
        <div style={{
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.25)'
        }}>
            <div style={{
                padding: 20,
                width: 400,
                background: 'white',
            }}>
                <p>Name:</p>
                <Input placeholder={'Name'}/>
                <p>Age:</p>
                <Input placeholder={'Age'}/>
                <p>Address:</p>
                <Input placeholder={'Address'}/>
                <p>Email:</p>
                <Input placeholder={'Email'}/>
                <p>Phone Number:</p>
                <Input placeholder={'Phone number'}/>
                <p>Role:</p>
                <Input placeholder={'Role'}/>
                <div style={{
                    display: 'flex',
                    marginTop: 20
                }}>
                    <Button
                        type={"primary"}
                        style={{marginRight: 15}}
                        onClick={onClose}
                    >
                        Submit
                    </Button>
                    <Button
                        type={"primary"}
                        danger
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}
