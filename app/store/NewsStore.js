var proxy = new Ext.data.HttpProxy({
    url: '/news/list'
});

var reader = new Ext.data.JsonReader({
    totalProperty: 'total',
    successProperty: 'success',
    idProperty: 'id',
    root: 'data',
    messageProperty: 'message'
}, [
    {name: 'id'},
    {name: 'title', allowBlank: false},
    {name: 's_desc', allowBlank: false},
    {name: 'desc', allowBlank: false},
    {name: 'date_create', allowBlank: false, type: 'date', dateFormat: 'Y-m-d H:i:s.u'},
    {name: 'date_update', allowBlank: false},
    {name: 'published', allowBlank: false}
]);
var writer = new Ext.data.JsonWriter({
    encode: true
});
var store = new Ext.data.Store({
    id: 'news',
    restful: false,
    proxy: proxy,
    reader: reader,
    writer: writer
});
store.load();
var newsColumns =  [
    {header: "ID", width: 40, sortable: true, dataIndex: 'id'},
    {header: "Заголовок", width: 100, sortable: true, dataIndex: 'title'},
    {header: "Анонс", width: 50, sortable: true, dataIndex: 's_desc'},
    {header: "Дата создания", width: 50, sortable: true, dataIndex: 'date_create', xtype: 'datecolumn', format: 'd-m-Y'}
];