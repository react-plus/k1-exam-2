import React from "react";
import {Button} from "antd";

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
                <input type="text" style={{width: '100%'}}/>
                <p>Age:</p>
                <input type="text" style={{width: '100%'}}/>
                <p>Address:</p>
                <input type="text" style={{width: '100%'}}/>
                <p>Email:</p>
                <input type="text" style={{width: '100%'}}/>
                <p>Phone:</p>
                <input type="text" style={{width: '100%'}}/>
                <p>Role:</p>
                <input type="text" style={{width: '100%'}}/>
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
