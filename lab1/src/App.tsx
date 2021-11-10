import React from 'react';
import './App.css';
import {Table1} from "./antd/table1";
import {Table2} from "./antd/table2";

function App() {
  return (
    <div className="App">
        <div className={"antd-table"}>
            <h2 style={{textAlign: 'center'}}>Antd Table Example</h2>
            <Table1 />

            <h2 style={{textAlign: 'center'}}>Antd Table User Management</h2>
            <Table2 />
        </div>
    </div>
  );
}

export default App;
