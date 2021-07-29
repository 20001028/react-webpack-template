import {
    AppstoreOutlined,
    GlobalOutlined,
    FileDoneOutlined,
    HomeOutlined,
    UserSwitchOutlined,
    ChromeFilled,
    CodeSandboxCircleFilled,
} from "@ant-design/icons";

export const MENUS = [
    {
        name: '首页',
        icon: <HomeOutlined />,
        path: '/',
    },
    {
        name: '技术博客',
        icon: <GlobalOutlined />,
        path: '/blog',
    },
    {
        name: '文件传输',
        icon: <FileDoneOutlined />,
        path: '/file'
    },
    {
        name: '我的开源',
        icon: <AppstoreOutlined />,
        path: '/mine'
    },
    {
        name: '个人中心',
        icon: <UserSwitchOutlined />,
        path: '/center'
    },
];

export const BLOG_MENU = [
    {
        name: '前端技术客',
        // icon: <UserSwitchOutlined />,
        path: '/blog',
        disabled: true,
    },
    {
        name: '浏览器基础',
        icon: <ChromeFilled />,
        path: '/blog/browser',
    },
    {
        name: '前端基础',
        icon: <UserSwitchOutlined />,
        path: '/blog/base',
        subMenu: [
            {
                name: 'HTML',
                icon: <UserSwitchOutlined />,
                path: '/blog/base/html',
            },
            {
                name: 'CSS',
                icon: <UserSwitchOutlined />,
                path: '/blog/base/css',
            },
            {
                name: 'JavaScript',
                icon: <UserSwitchOutlined />,
                path: '/blog/base/javascript',
            },
        ]
    },
    {
        name: '前端进阶',
        icon: <UserSwitchOutlined />,
        path: '/blog/upgrade',
        subMenu: [
            {
                name: 'HTML5',
                icon: <UserSwitchOutlined />,
                path: '/blog/upgrade/html5',
            },
            {
                name: 'CSS3',
                icon: <UserSwitchOutlined />,
                path: '/blog/upgrade/vss3',
            },
            {
                name: 'jQuery',
                icon: <UserSwitchOutlined />,
                path: '/blog/upgrade/jquery',
            },
            {
                name: 'AJAX',
                icon: <UserSwitchOutlined />,
                path: '/blog/upgrade/ajax',
            },
            {
                name: 'Axios',
                icon: <UserSwitchOutlined />,
                path: '/blog/upgrade/axios',
            },
        ]
    },
    {
        name: '热门框架',
        icon: <UserSwitchOutlined />,
        path: '/blog/hot',
        subMenu: [
            {
                name: 'Vue',
                icon: <UserSwitchOutlined />,
                path: '/blog/hot/vue',
            },
            {
                name: 'React',
                icon: <UserSwitchOutlined />,
                path: '/blog/hot/react',
            },
            {
                name: 'Angular',
                icon: <UserSwitchOutlined />,
                path: '/blog/hot/angular',
            }
        ]
    },
    {
        name: '前端工程化',
        icon: <CodeSandboxCircleFilled />,
        path: '/blog/build',
        subMenu: [
            {
                name: 'Webpack',
                icon: <UserSwitchOutlined />,
                path: '/blog/build/webpack',
            },
            {
                name: 'Vite',
                icon: <UserSwitchOutlined />,
                path: '/blog/base/vite',
            },
        ]
    },
    {
        name: '新兴技术',
        icon: <UserSwitchOutlined />,
        path: '/blog/new',
        subMenu: [
            {
                name: 'Svelte',
                icon: <UserSwitchOutlined />,
                path: '/blog/svelte',
            },
            {
                name: 'WebAsseambly',
                icon: <UserSwitchOutlined />,
                path: '/blog/webasseambly',
            }
        ]
    },
]

export const FILE_MENU = [
    {

        name: '上传文件',
        icon: <UserSwitchOutlined />,
        path: '/file/upload',
    },
    {
        name: '文件列表',
        icon: <UserSwitchOutlined />,
        path: '/file/fileList',
    },
    {

        name: '正在上传',
        icon: <UserSwitchOutlined />,
        path: '/file/uploading',
    },
    {

        name: '正在下载',
        icon: <UserSwitchOutlined />,
        path: '/file/downloading',
    },
    {

        name: '回收站',
        icon: <UserSwitchOutlined />,
        path: '/file/bucket',
    }
]