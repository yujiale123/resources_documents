module.exports = [
    {text: '首页', link: '/'},
    {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
            {
                text: '前端文章',
                items: [{text: 'JavaScript', link: '/pages/8143cc480faf9a11/'}],
            },
        ],
    },
];
