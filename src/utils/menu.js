import {
    AppstoreOutlined,
    GlobalOutlined,
    FileDoneOutlined,
    HomeOutlined,
    UserSwitchOutlined,
  } from "@ant-design/icons";

export const MENUS=[
    {
        name:'首页',
        icon: <HomeOutlined />,
    },
    {
        name:'技术博客',
        icon:<GlobalOutlined />,
    },
    {
        name:'文件传输',
        icon:<FileDoneOutlined />,
    },
    {
        name:'我的开源',
        icon:<AppstoreOutlined />,
    },
    {
        name:'个人中心',
        icon:<UserSwitchOutlined />,
    },
]