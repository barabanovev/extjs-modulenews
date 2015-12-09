function NewsListSingleton() {
    if ( arguments.callee._Instance )
        return arguments.callee._Instance;
    arguments.callee._Instance = new NewsList();
    return arguments.callee._Instance;
}
NewsList = Ext.extend(Ext.grid.GridPanel, {
    showid: function(){
        store.reload();
    },
    initComponent: function() {
        Ext.apply(this, {
            renderTo:'conteiner',
            collapsible:true,
            iconCls: 'icon-grid',
            frame: true,
            title: 'Список новостей',
            height: 500,
            store: store,
            columns : newsColumns,
            viewConfig: {
                forceFit: true
            },
            listeners: {
                'rowdblclick': {
                    fn: function(Grid,Number) {
                        Ext.History.add("news/detail/" + Grid.getSelectionModel().getSelected().id);
                    }
                }
            },
            tbar: [{
                text: 'Add',
                iconCls: 'silk-add',
                handler: this.Add.createDelegate(this)
            }, '-', {
                text: 'Delete',
                iconCls: 'silk-delete',
                handler: this.Remove.createDelegate(this)
            }, '-']
        });

        NewsList.superclass.initComponent.apply(this, arguments);
    }
    , onDestroy: function(){
        this.somewindow.destroy();
        NewsList.superclass.onDestroy.call(this);
    }
    , Add: function(button, e){
        /*var n = new this.store.recordType({
            id:'',
            title:'',
            s_desc:'',
            desc:'',
            date_create:'',
            date_update:'',
            published:''
        });
        this.store.insert(0, n);*/
        Ext.History.add("news/add");
    }
    , Remove: function(button, e){
        var rec = this.getSelectionModel().getSelected();
        if (!rec) {
            return false;
        }
        Ext.MessageBox.show({
            title:'Удаление новости',
            msg: 'Вы уверены что хотите удалить новость?',
            buttons: Ext.MessageBox.YESNO,
            fn: function(btn) {
                switch (btn) {
                    case 'yes':
                        this.store.remove(rec);
                        break;
                    case 'no':
                    default:
                }
            }
        })
    }
    , somewindow: undefined
});