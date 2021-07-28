import * as React from "react";
import * as ReactDOM from "react-dom";
import 'antd/dist/antd.css';

import { TopNavMenu } from '../components/TopNavMenu';
import { MENUS } from "../utils/menu";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <TopNavMenu menu={MENUS}></TopNavMenu>
        )
    }
}