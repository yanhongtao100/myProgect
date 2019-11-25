// 接口地址
var baseUrl = 'http://localhost:8000/'
// 所有的接口地址集中管理
var APIURLS = {
    category_show: baseUrl + 'admin/category_search',
    user_login: baseUrl + 'admin/login',
    user_logout: baseUrl + 'admin/logout',
    user_getInfo: baseUrl + 'admin/getuser',
    category_del: baseUrl + 'admin/category_delete',
    category_add: baseUrl + 'admin/category_add',
    category_edit: baseUrl + 'admin/category_edit',

    article_show:baseUrl + 'admin/search',
    article_del:baseUrl + 'admin/article_delete',
    article_lis:baseUrl+'admin/article_publish'




}