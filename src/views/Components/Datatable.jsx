import React, { useState, useRef } from "react"

import { Button, Input, Space, Table, Popconfirm } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Highlighter from 'react-highlight-words';
import { Link } from "react-router-dom";

export default function Datatable(props) {

    // data table code
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });


    // pagination purpose
    const [currentPage, setcurrentPage] = useState(1)

    let pageSize = 10

    const columns = [
        {
            title: "ID",
            key: "index",
            render: (text, record, index) => (currentPage - 1) * pageSize + index + 1,
            width: '0.3%',
            align: "center",

        },
        {
            title: "Name",
            key: "name",
            dataIndex: "name",
            ...getColumnSearchProps('name'),
            width: '0.5%',
            align: "center",

        },
        {
            title: "Image",
            key: "coverImage",
            dataIndex: "coverImage",
            ...getColumnSearchProps('coverImage'),
            render: (_, record) => (<img src={`http://localhost:8081/uploads/${record.coverImage}`} alt="Image doesn't exist" height="70px" />),
            width: '0.8%',
            align: "center",

        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            ...getColumnSearchProps('email'),
            width: '1.2%',
            align: "center",

        },
        {
            title: "Contact",
            dataIndex: "contact",
            key: "contact",
            ...getColumnSearchProps('contact'),
            width: '0.7%',
            align: "center",
        },
        {
            title: "Designation",
            key: "designation",
            dataIndex: "designation",
            ...getColumnSearchProps('designation'),
            width: '0.8%',
            align: "center",

        },
        {
            title: "Gender",
            key: "gender",
            dataIndex: "gender",
            ...getColumnSearchProps('gender'),
            width: '0.8%',
            align: "center",

        },
        {
            title: "Course",
            key: "course",
            dataIndex: "course",
            ...getColumnSearchProps('course'),
            width: '0.8%',
            align: "center",

        },
        {
            title: "Date",
            key: "createdAt",
            dataIndex: "createdAt",
            ...getColumnSearchProps('createdAt'),
            width: '0.8%',
            align: "center",

        },
        {
            title: "Delete",
            dataIndex: "action",
            key: "action",
            render: (_, record) => <button className="btn btn-danger" onClick={() => { props.deleteEmployee(record._id) }}>Delete</button>,
            width: '0.5%',
            align: "center"
        },
        {
            title: "Update",
            dataIndex: "action",
            key: "action",
            render: (_, record) => <Link to={`/updateEmployee/${record._id}`} className="btn btn-success">Update</Link>,
            width: '0.5%',
            align: "center"
        }
    ]

    return (
        <>
            <div>
                <Link to="/createEmployee" className="btn btn-success btn-allData">Create Employee</Link>
            </div>

            <div className="dataTable">
                <Table
                    columns={columns}
                    dataSource={props.emp}
                    rowKey={"_id"}
                    bordered
                    pagination={
                        {
                            // pageSize : pageSize,
                            current: currentPage,
                            onChange: (page) => setcurrentPage(page)
                        }
                    }
                    scroll={{ y: 500 }}
                />
            </div>
        </>
    )
}