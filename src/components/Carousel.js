import { Carousel } from 'antd';
import * as React from "react";
import * as ReactDOM from "react-dom";
import '../static/css/components/carousel.css';

const contentStyle = {
    height: 'calc(100vh - 4rem)',
    color: '#fff',
    lineHeight: 'calc(100vh - 4rem)',
    textAlign: 'center',
    background: '#364d79',
    maxWidth: '100%',
};

export class HomeCarousel extends React.Component {
    render() {
        return (
            <Carousel autoplay className="home-carousel">
                <div>
                    <img style={contentStyle} src={'https://desk-fd.zol-img.com.cn/g2/M00/0A/03/Cg-4WVWmCG-IVS_hAAnYxdqAQXMAAHMYQAzBdwACdjd007.jpg'} />
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        )
    }
}