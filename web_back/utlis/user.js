var baseUrl = 'http://localhost:8000/'
var user = {
    // 登出接口
    logout: function(callback) {
        $.post(APIURLS.user_logout, function(res) {
            callback(res)

        })
    },
    // 登录接口
    login: function(user_name, password, callback) {
        $.post(APIURLS.user_login, {
            user_name: user_name,
            password: password
        }, function(res) {
            callback(res)
        })
    },
    // 获取用户信息接口
    getInfo: function(callback) {
        $.get(APIURLS.user_getInfo,
            function(res) {
                callback(res)
            })
    }
}