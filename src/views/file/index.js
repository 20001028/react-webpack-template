import * as React from "react";
import * as ReactDOM from "react-dom";
import { LeftNavMenu } from '../../components/LeftNavMenu';
import { FILE_MENU } from "../../utils/menu";
import { Switch, Route, useRouteMatch, } from "react-router-dom";
import { FileUpload } from "../file/upload";

let containerStyle = {
    display: 'flex',
}

let routeStyle = {
    flexGrow: '1',
    paddingTop:'1rem',
    paddingLeft:'1rem',
}

export function FileIndex(props) {
    let { path, url } = useRouteMatch();

    return (
        <div style={containerStyle}>
            <LeftNavMenu menu={FILE_MENU}></LeftNavMenu>
            <div style={routeStyle}>
                <Switch>
                    <Route exact path="/file/upload">
                        <FileUpload></FileUpload>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}