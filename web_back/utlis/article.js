var article = {
    show: function (obj, callback) {
        $.get(APIURLS.article_show, {
            page: obj.page,
            type: obj.type,
            state: obj.status

        }, function (res) {
            callback(res)
        })
    },
    del: function (id, callback) {
        $.get(APIURLS.article_del, {
            'id': id
        }, function (res) {
            callback(res)
        })
    },
    lis: function (fd, callback) {
        // $.post(APIURLS.article_lis,
        //     processData = false,
        //     contentType = false,
        //     {
        //         'fd': fd
        //     }
        //     , function (res) {
        //         callback(AuthenticatorAssertionResponse)
        //     })

        $.ajax({
            type: "post",
            url: APIURLS.article_lis,
            data: fd,
            processData: false,
            contentType: false,
            success:res=> {
                callback(res)
            }
        });
    }
}
