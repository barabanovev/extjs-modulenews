function indexPageSingleton() {
    if ( arguments.callee._Instance )
        return arguments.callee._Instance;
    arguments.callee._Instance = new ButtonPanel(
        'Главное меню',
        [{
            text: 'Список новостей',
            scale: 'large',
            handler: function(){
                //store.reload();
                Ext.History.add("news/list");
            }
        },{
            text: 'Добавить новость',
            scale: 'large',
            handler: function(){
                Ext.History.add("news/add");
            }
        }]
    );
    return arguments.callee._Instance;
}
ButtonPanel = Ext.extend(Ext.Panel, {
    showid: function(){},
    layout: 'fit',
    style:'margin:0px auto;text-align:center',
    width: 600,
    defaultType: 'button',
    renderTo : 'conteiner',
    menu: undefined,
    split: false,

    layoutConfig: {
        columns:1
    },

    constructor: function(desc, buttons){
        // apply test configs
        for(var i = 0, b; b = buttons[i]; i++){
            b.menu = this.menu;
            b.enableToggle = this.enableToggle;
            b.split = this.split;
            b.arrowAlign = this.arrowAlign;
        }
        var items = [{
            xtype: 'box',
            autoEl: {tag: 'h3', html: desc, style:"padding:15px 0 3px;"},
            colspan: 3
        }].concat(buttons);

        ButtonPanel.superclass.constructor.call(this, {
            items: items
        });
    }
});