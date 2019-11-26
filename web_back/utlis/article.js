var article = {
    show: (obj, callback)=> {
        $.get(APIURLS.article_show, {
            page: obj.page,
            type: obj.type,
            state: obj.status

        }, res => callback(res)
        )
    },
    del: (id, callback) => {
        $.get(APIURLS.article_del, {
            'id': id
        }, res => callback(res)
        )
    },
    lis: (fd, callback) => {
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
            success: res => {
                callback(res)
            }
        });
    },
    getDetail: (id, callback) => {
        $.get(APIURLS.article_show, {
            id: id
        }, res => {
            callback(res)
        })
    },
    edit: (fd, callback) => {
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
            url: APIURLS.article_edit,
            data: fd,
            processData: false,
            contentType: false,
            success: res =>callback(res)
            
        });
    },

    // 获取每月新增的文章数量
    getMonthCount:callback=>{
        $.get(APIURLS.month_article_count,res=>callback(res))
        
    }

    
}
