import React, {useState} from 'react';
import { Modal } from 'antd';

import {ListUser} from './components/ListUser'

import 'antd/dist/antd.css'
import './App.css';

function App() {

    const [isModalVisible, setIsModalVisible] = useState(false);


    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleAddNew = () => {

    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    return (
        <div className="App">
            <h2>List user</h2>
            <div className="header-add-user">
                <button className="ant-btn ant-btn-primary" onClick={handleOpenModal}>
                    Add New User
                </button>
            </div>
            <ListUser />
            <Modal title="Basic Modal" visible={isModalVisible} footer={null} onCancel={handleCancel}>
                <div className="field-input-group">
                    <input placeholder="Avatar" type="text" className="ant-input" />
                </div>
                <div className="field-input-group">
                    <input placeholder="Name" type="text" className="ant-input" />
                </div>
                <div className="field-input-group">
                    <input placeholder="Content" type="text" className="ant-input" />
                </div>
                <div className="modal-new-user-footer">
                    <button className="ant-btn ant-btn-primary" onClick={handleAddNew}>
                        Save
                    </button>
                    <button className="ant-btn" style={{marginLeft: 10}} onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default App;
