const base = {
    get() {
        return {
            url : "http://localhost:8080/wenxuewang/",
            name: "wenxuewang",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wenxuewang/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "文学网"
        } 
    }
}
export default base
