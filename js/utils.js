$('#change_to_chinese').click( function(evt) {                                                                                                                        
        evt.stopPropagation();
        if ((pos = document.cookie.indexOf('LD_LANG=')) > 0 && document.cookie.substr(pos + 8, 5) == '%23cn');
        else
            document.cookie = 'LD_LANG=%23cn;path=/;domain=.linuxdeepin.com;';
            window.location.href = "http://www.linuxdeepin.com/index.cn.html";
        return;
    }   
);

$('#change_to_english').click( function(evt) {
        evt.stopPropagation();
        if ((pos = document.cookie.indexOf('LD_LANG=')) > 0 && document.cookie.substr(pos + 8, 5) == '%23en');
        else
            document.cookie = 'LD_LANG=%23en;path=/;domain=.linuxdeepin.com;';
            window.location.href = 'http://www.linuxdeepin.com/index.en.html';
        return;
    }   
);
