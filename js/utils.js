function change_to_chinese(evt) {
        evt.stopPropagation();                                                     
        if ((pos = document.cookie.indexOf('LD_LANG=')) > 0 && document.cookie.substr(pos + 8, 5) == '%23cn');
        else                                                                       
            document.cookie = 'LD_LANG=%23cn;path=/;domain=.linuxdeepin.com;';  
            window.location.href = "http://www.linuxdeepin.com/index.cn.html";  
        return;
}

$('#change_to_chinese').click( function(evt) {                                                              change_to_chinese(evt);
    }   
);

$('#change_to_chinese').contextmenu( function(evt) {                                                        change_to_chinese(evt);
    }                                                                              
);

function change_to_english(evt) {
        evt.stopPropagation();                                                     
        if ((pos = document.cookie.indexOf('LD_LANG=')) > 0 && document.cookie.substr(pos + 8, 5) == '%23en');
        else                                                                      
            document.cookie = 'LD_LANG=%23en;path=/;domain=.linuxdeepin.com;';  
            window.location.href = 'http://www.linuxdeepin.com/index.en.html';  
        return;
}

$('#change_to_english').click( function(evt) {
        change_to_english(evt);
    }
);

$('#change_to_english').contextmenu( function(evt) {
        document.cookie = 'LD_LANG=%23en;path=/;domain=.linuxdeepin.com;';  
        window.location.href = 'http://www.linuxdeepin.com/index.en.html';
        return;
    }   
);
