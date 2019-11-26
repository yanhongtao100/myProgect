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
    // 文章搜索地址
    article_show:baseUrl + 'admin/search',
    article_del:baseUrl + 'admin/article_delete',
    article_lis:baseUrl+'admin/article_publish',
    article_edit:baseUrl+'admin/article_edit',
    month_article_count:baseUrl+'admin/month_article_count',





}