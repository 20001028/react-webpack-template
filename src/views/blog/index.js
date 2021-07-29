import * as React from "react";
import * as ReactDOM from "react-dom";
import { LeftNavMenu } from '../../components/LeftNavMenu';
import { BLOG_MENU } from "../../utils/menu";

export class BlogIndex extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <LeftNavMenu menu={BLOG_MENU} style={{ width: '100px', }}></LeftNavMenu>
            </div>
        )
    }
}