function isExists(val) {
    return (typeof val !== 'undefined' && val !== null);
};

function create_element(type, classname, parent) {
    ele = document.createElement(type);
    ele.setAttribute("class", classname);
    parent.appendChild(ele);
    return ele;
};

function find_sub_tag_elements(parent_id, tag) {
    return document.getElementById(parent_id).getElementsByTagName(tag);
};

function fill_ul_with_list(ul, list) {
    for (var i = 0; i < list.length; ++i)
    {
        ele = create_element('li', '', ul);
        ele.innerHTML = '<a href="#">' + list[i] + '</a>';
    };
};

function fill_ul_with_dic(ul, dic) {
    for (var i in dic)
    {
        ele = create_element('li', '', ul);
        ele.innerHTML = '<a href="#">' + i + '</a>';
    };
};

var _CURRENT_VER_ = "12.12";
var opt_old_vers = ['12.06', '11.12.1', '11.12'];
var download_url = {
    'offical_cn_12.12_i386'  : 'http://cdimage.linuxdeepin.com/releases/12.12/final/desktop/deepin_12.12_zh-hans_final_i386.iso',
    'offical_cn_12.12_amd64' : 'http://cdimage.linuxdeepin.com/releases/12.12/final/desktop/deepin_12.12_zh-hans_final_amd64.iso',
    'offical_tw_12.12_i386'  : 'http://cdimage.linuxdeepin.com/releases/12.12/final/desktop-zh-hant/deepin_12.12_zh-hant_i386.iso',
    'offical_tw_12.12_amd64' : 'http://cdimage.linuxdeepin.com/releases/12.12/final/desktop-zh-hant/deepin_12.12_zh-hant_amd64.iso',
    'offical_en_12.12_i386'  : 'http://cdimage.linuxdeepin.com/releases/12.12/final/desktop-en/deepin_12.12_en_final_i386.iso',
    'offical_en_12.12_amd64' : 'http://cdimage.linuxdeepin.com/releases/12.12/final/desktop-en/deepin_12.12_en_final_amd64.iso',
    'utsc_cn_12.12_i386'     : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/12.12/final/desktop/deepin_12.12_zh-hans_final_i386.iso',
    'utsc_cn_12.12_amd64'    : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/12.12/final/desktop/deepin_12.12_zh-hans_final_amd64.iso',
    'utsc_tw_12.12_i386'     : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/12.12/final/desktop-zh-hant/deepin_12.12_zh-hant_i386.iso',
    'utsc_tw_12.12_amd64'    : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/12.12/final/desktop-zh-hant/deepin_12.12_zh-hant_amd64.iso',
    'utsc_en_12.12_i386'     : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/12.12/final/desktop-en/deepin_12.12_en_final_i386.iso',
    'utsc_en_12.12_amd64'    : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/12.12/final/desktop-en/deepin_12.12_en_final_amd64.iso',
    
    'offical_cn_12.06_i386'  : 'http://cdimage.linuxdeepin.com/releases/12.06/final/desktop/deepin_12.06_zh-hans_final_i386.iso',
    'offical_cn_12.06_amd64' : 'http://cdimage.linuxdeepin.com/releases/12.06/final/desktop/deepin_12.06_zh-hans_final_amd64.iso',
    'offical_tw_12.06_i386'  : 'http://cdimage.linuxdeepin.com/releases/12.06/final/desktop-zh-hant/deepin_12.06_zh-hant_i386.iso',
    'offical_tw_12.06_amd64' : 'http://cdimage.linuxdeepin.com/releases/12.06/final/desktop-zh-hant/deepin_12.06_zh-hant_amd64.iso',
    'offical_en_12.06_i386'  : 'http://cdimage.linuxdeepin.com/releases/12.06/final/desktop-en/deepin_12.06_en_final_i386.iso',
    'offical_en_12.06_amd64' : 'http://cdimage.linuxdeepin.com/releases/12.06/final/desktop-en/deepin_12.06_en_final_amd64.iso',
    'utsc_cn_12.06_i386'     : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/12.06/final/desktop/deepin_12.06_zh-hans_final_i386.iso',
    'utsc_cn_12.06_amd64'    : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/12.06/final/desktop/deepin_12.06_zh-hans_final_amd64.iso',
    'utsc_tw_12.06_i386'     : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/12.06/final/desktop-zh-hant/deepin_12.06_zh-hant_i386.iso',
    'utsc_tw_12.06_amd64'    : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/12.06/final/desktop-zh-hant/deepin_12.06_zh-hant_amd64.iso',
    'utsc_en_12.06_i386'     : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/12.06/final/desktop-en/deepin_12.06_en_final_i386.iso',
    'utsc_en_12.06_amd64'    : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/12.06/final/desktop-en/deepin_12.06_en_final_amd64.iso',
    
    'offical_cn_11.12.1_i386'  : 'http://cdimage.linuxdeepin.com/releases/11.12.1/final/zh-hans/deepin_11.12.1_zh-hans_i386.iso',
    'offical_cn_11.12.1_amd64' : 'http://cdimage.linuxdeepin.com/releases/11.12.1/final/zh-hans/deepin_11.12.1_zh-hans_amd64.iso',
    'offical_tw_11.12.1_i386'  : 'http://cdimage.linuxdeepin.com/releases/11.12.1/final/zh-hant/deepin_11.12.1_zh-hant_i386.iso',
    'offical_tw_11.12.1_amd64' : 'http://cdimage.linuxdeepin.com/releases/11.12.1/final/zh-hant/deepin_11.12.1_zh-hant_amd64.iso',
    'offical_en_11.12.1_i386'  : 'http://cdimage.linuxdeepin.com/releases/11.12.1/final/en/deepin_11.12.1_en_i386.iso',
    'offical_en_11.12.1_amd64' : 'http://cdimage.linuxdeepin.com/releases/11.12.1/final/en/deepin_11.12.1_en_amd64.iso',
    'utsc_cn_11.12.1_i386'     : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/11.12.1/final/zh-hans/deepin_11.12.1_zh-hans_i386.iso',
    'utsc_cn_11.12.1_amd64'    : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/11.12.1/final/zh-hans/deepin_11.12.1_zh-hans_amd64.iso',
    'utsc_tw_11.12.1_i386'     : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/11.12.1/final/zh-hant/deepin_11.12.1_zh-hant_i386.iso',
    'utsc_tw_11.12.1_amd64'    : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/11.12.1/final/zh-hant/deepin_11.12.1_zh-hant_amd64.iso',
    'utsc_en_11.12.1_i386'     : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/11.12.1/final/en/deepin_11.12.1_en_i386.iso',
    'utsc_en_11.12.1_amd64'    : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/11.12.1/final/en/deepin_11.12.1_en_amd64.iso',
    
    'offical_cn_11.12_i386'  : 'http://cdimage.linuxdeepin.com/releases/11.12/deepin_11.12_zh-hans_i386.iso',
    'offical_cn_11.12_amd64' : 'http://cdimage.linuxdeepin.com/releases/11.12/deepin_11.12_zh-hans_amd64.iso',
    'offical_cn_11.12_i386'  : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/11.12/deepin_11.12_zh-hans_i386.iso',
    'offical_cn_11.12_amd64' : 'http://mirrors.ustc.edu.cn/deepin-cd/releases/11.12/deepin_11.12_zh-hans_amd64.iso',
};

function jump_to_download(key) {
    url = download_url[key];
    if (isExists(url))
    {
        window.location.href = url;
        return true;
    }
    else
        return false;
};