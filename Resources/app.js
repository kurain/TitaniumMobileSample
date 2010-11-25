Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

var win = Titanium.UI.createWindow(
    {  
        title:'Tab 1',
        url:'table_view.js',
        backgroundColor:'#fff'
    }
);
var tab = Titanium.UI.createTab(
    {  
        window:win
    }
);

win.hideTabBar();
tabGroup.addTab(tab);  
tabGroup.open();

