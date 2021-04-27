module.exports = {
    publicPath: "./", // 构建好的文件输出到哪里
        lintOnSave: false, // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
        devServer: {
            proxy: { // 配置跨域
                '/': {
                    //要访问的跨域的api的域名
                    target: 'http://localhost:3000',
                    ws: false,
                    secure: false,  // 如果是https接口，需要配置这个参数
                    changOrigin: true,
                    pathRewrite: {
                        '^/': ''   //这里理解成用‘/’代替target里面的地址
                    }
                },
            }
        }
};
