import React from "react";
import {Button, Table, Input, Space, Tag, Popconfirm, message} from "antd";
import { AudioOutlined } from '@ant-design/icons';


const renderTag = () => {
    const rand = Math.round(Math.random() * 4)
    if (rand === 0) return <Tag color="#f50">Admin</Tag>
    if (rand === 1) return <Tag color="#2db7f5">Free</Tag>
    if (rand === 2) return <Tag color="#87d068">Guest</Tag>
    if (rand === 3) return <Tag color="#108ee9">Guest Plus</Tag>
    if (rand === 4) return <Tag color="gold">Premium</Tag>
}

function confirm() {
    message.info('Deleted!!');
}

const columns: any = [
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a: { name: string | any[]; }, b: { name: string | any[]; }) => a.name.length - b.name.length,
        sortDirections: ['descend'],
        fixed: 'left',
        width: 200,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        defaultSortOrder: 'ascend',
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
        width: 100
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'Email',
        dataIndex: 'email'
    },
    {
        title: 'Phone Number',
        dataIndex: 'phone'
    },
    {
        title: 'Role',
        key: 'role',
        render: () => renderTag()
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <>
                <Button type="primary" style={{marginRight: 5}}>
                    Edit
                </Button>
                <Popconfirm placement="topLeft" title={'Are you sure to delete this record'} onConfirm={confirm} okText="Yes" cancelText="No">
                    <Button type="primary" danger>Delete</Button>
                </Popconfirm>
            </>
        )
    }
];

const data: any = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `User ${i+1}`,
        age: i + 1,
        address: `Address ${i}`,
        email: `example${i+1}@gmail.com`,
        phone: `0123456789`
    });
}

const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

export const Table2 = () => {
    return (
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 10
            }}>
                <div style={{marginRight: 10}}>
                    <Button type="primary">Add New User</Button>
                </div>
                <Space direction="vertical">
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        suffix={suffix}
                    />
                </Space>
            </div>
            <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 500 }}/>
        </div>
    )
}
