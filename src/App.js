import './App.css';
import {categories} from "./inputCategories.js"
import {Cascader} from "antd";
import 'antd/dist/antd.css'
import {useEffect} from "react";

function App() {
    return (
        <div className="App">
            <Cascader multiple options={categories} />
        </div>
    );
}

export default App;
