function NewsAddSingleton() {
    if ( arguments.callee._Instance )
        return arguments.callee._Instance;
    arguments.callee._Instance = new Ext.FormPanel({
        showid: function(){},
        renderTo:'conteiner',
        url:'/news/add',
        labelAlign: 'top',
        frame:true,
        title: 'Новость',
        style:'margin:0px auto',
        width: 600,
        items: [{
            layout:'column',
            items:[{
                columnWidth:1,
                layout: 'form',
                items: [{
                    xtype:'textfield',
                    fieldLabel: 'Заголовок',
                    name: 'title',
                    anchor:'95%'
                }]
            },{
                columnWidth:1,
                layout: 'form',
                items: [{
                    xtype:'textarea',
                    fieldLabel: 'Анонс',
                    name: 's_desc',
                    anchor:'95%'
                }]
            }]
        },{
            xtype:'htmleditor',
            id:'desc',
            fieldLabel:'Основной текст',
            height:400,
            anchor:'98%'
        }],

        buttons: [{
            text: 'Save',
            handler: function(){
                var fp = this.ownerCt.ownerCt,
                    form = fp.getForm();
                    form.submit();
                    //store.reload();
                    Ext.History.add("news/list");
            }
        },{
            text: 'Cancel',
            handler: function(){
                Ext.History.back();
            }
        }]
    });
    return arguments.callee._Instance;
}
