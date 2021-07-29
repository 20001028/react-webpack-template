import * as React from "react";
import * as ReactDOM from "react-dom";
import 'antd/dist/antd.css';

import { TopNavMenu } from '../components/TopNavMenu';
import { MENUS } from "../utils/menu";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { HomeCarousel } from "../components/Carousel";
import { BlogIndex } from "./blog/index";
import { FileIndex } from "./file/index";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Router>
                <TopNavMenu menu={MENUS}></TopNavMenu>
                <Switch>
                    <Route exact path="/">
                        <HomeCarousel>
                        </HomeCarousel>
                    </Route>
                    <Route exact path="/blog">
                        <BlogIndex></BlogIndex>
                    </Route>
                    <Route path="/file">
                        <FileIndex>
                        </FileIndex>
                    </Route>
                </Switch>
            </Router>
        )
    }
}