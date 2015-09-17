
//模板映射
window.mol_dic={
    'tb-features':document.getElementById('temp-tb-features').innerHTML,
    'hd-features':document.getElementById('temp-hd-features').innerHTML,
    'brands':document.getElementById('temp-brands').innerHTML,
    'hd-category':document.getElementById('temp-hd-category').innerHTML,
    'single-good':document.getElementById('temp-single-good').innerHTML,
    'double-good':document.getElementById('temp-double-good').innerHTML,
    'slide-pic':document.getElementById('temp-slide-pic').innerHTML,
    'single-pic':document.getElementById('temp-single-pic').innerHTML,
    'double-pic':document.getElementById('temp-double-pic').innerHTML,
    'tb-category':document.getElementById('temp-tb-category').innerHTML,
    'word-pic':document.getElementById('temp-word-pic').innerHTML,
    'title-only':document.getElementById('temp-title-only').innerHTML,
    'word-only':document.getElementById('temp-word-only').innerHTML,
    'contract':document.getElementById('temp-contract').innerHTML,
    'single-good-list':document.getElementById('temp-single-good-list').innerHTML,
    'double-good-list':document.getElementById('temp-double-good-list').innerHTML
};

function get_mol(molid){
    return document.getElementById('temp-'+molid).innerHTML;
}

//编辑模板映射
window.mol_ctrl_dic={
    'tb-features':document.getElementById('temp-ctrl-tb-features').innerHTML,
    'hd-features':document.getElementById('temp-ctrl-hd-features').innerHTML,
    'tb-category':document.getElementById('temp-ctrl-tb-category').innerHTML,
    'hd-category':document.getElementById('temp-ctrl-hd-category').innerHTML,
    'brands':document.getElementById('temp-ctrl-brands').innerHTML,
    'single-good':document.getElementById('temp-ctrl-single-good').innerHTML,
    'double-good':document.getElementById('temp-ctrl-double-good').innerHTML,
    'slide-pic':document.getElementById('temp-ctrl-slide-pic').innerHTML,
    'single-pic':document.getElementById('temp-ctrl-single-pic').innerHTML,
    'double-pic':document.getElementById('temp-ctrl-double-pic').innerHTML,
    'word-pic':document.getElementById('temp-ctrl-word-pic').innerHTML,
    'title-only':document.getElementById('temp-ctrl-title-only').innerHTML,
    'word-only':document.getElementById('temp-ctrl-word-only').innerHTML,
    'contract':document.getElementById('temp-ctrl-contract').innerHTML,
    'single-good-list':document.getElementById('temp-ctrl-single-good-list').innerHTML,
    'double-good-list':document.getElementById('temp-ctrl-double-good-list').innerHTML
};

function get_mol_ctrl(molid){
    return document.getElementById('temp-ctrl'+molid).innerHTML;
}

//提示语映射
window.mol_tip_dic={
    'features':'品牌优势',
    'hd-features':'品牌优势',
    'single-good':'这是单宝贝模块, 拖入手机 ,然后点击,可以在右侧自定义宝贝的信息',
    'double-good':'这是双宝贝模块,两个宝贝并列, 拖入手机后点击,在右侧自定义宝贝的信息',
    'single-pic':'单图片模块,一般选择一张宣传热图, 或者,可以一张装饰性的图片, 如果是纯装饰性的 ,可以不要文字和链接',
    'double-pic':'并列图片,一般用来做品牌区域,块状LOGO图',
    'tb-category':'4格图片,一般用来做品牌或类别分类',
    'word-pic':'图文并茂, 做图需要美工在左侧纯色或留白',
    'title-only':'纯文字的标题,用于分段标注',
    'word-only':'纯粹的文字,说一些你想跟卖家说的话吧',
    'contract':'您的联系电话,写上电话卖家更容易联系到你',
    'single-good-list':'这是一个宝贝列表模块,有很多行, 每行一次展示一个宝贝,包括图片,文字介绍,和价格, 具体设置请拖入手机后, 单击手机内该模块',
    'double-good-list':'这是一个宝贝列表模块,有很多行, 每行展示两个宝贝,包括图片,文字介绍,和价格, 具体设置请拖入手机后, 单击手机内该模块',
}

/*
* 如果是写死在页面内的模板HTML,其实可以用function(id){return $(id).html();}来实现,更简洁
* 为什么写成映射形式?
* 因为模板数据可以方便地改为从后台配置传输,更大的灵活性
* eof yyf 2015.09
*/

//模板映射默认值
window.mol_val_dic={
    "val-single-good":{
        href:'www.163.com',
        imgsrc:'good03.jpg',
        goodname:'优质棉麻男童马夹 保暖透气',
        price:92.00
    },
    "val-double-good":{
        href:'www.163.com',
        imgsrc:'good17.jpg',
        goodname:'漂亮的女童裤子 纯棉',
        price:56.00,
        href2:'www.163.com',
        imgsrc2:'good13.jpg',
        goodname2:'小脚裤子批发 颜色多',
        price2:52.00
    },
    "val-word-pic":{
        href:'www.163.com',
        imgsrc:'good04.png',
        desc:'图片描述文字,一些文字,怕怕拉拉,什么的<br><br>或者,图片可以做成100%, 文字遮罩在图片左上角<br>这需要图片设计配合,左上角统一色调或留白',
    },
    "val-slide-pic":{
        href:'www.163.com',
        imgsrc:'hot3.png',
    },
    "val-single-pic":{
        href:'www.163.com',
        imgsrc:'hot3.jpg',
        desc:'婴童夏装换季清仓中! 点击进入专区!',
    },
    "val-double-pic":{
        href:'www.163.com',
        imgsrc:'baby-joy01.jpg',
        desc:'童车特价中! 点击进入专区!',
        href2:'www.163.com',
        imgsrc2:'baby-joy02.jpg',
        desc2:'玩具特价! 点击进入专区!',
    },
    "val-tb-category":{
        href:'www.163.com',
        imgsrc:'area-logo-01.jpg',
        desc:'LOGO AREA<br>奶粉专区',
        href2:'www.163.com',
        imgsrc2:'area-logo-02.jpg',
        desc2:'LOGO AREA<br>玩具专区',
        href3:'www.163.com',
        imgsrc3:'area-logo-03.jpg',
        desc3:'LOGO AREA<br>婴童服饰',
        href4:'www.163.com',
        imgsrc4:'area-logo-04.jpg',
        desc4:'LOGO AREA<br>亲子母婴',
    },
    "val-title-only":{
        title:'全场宝贝包邮热销中!'
    },
    "val-word-only":{
        desc:'一些文字,之类的,自定义的一段描述'
    },
    "val-contract":{
        tel:'1381396655',
        wechat:'weixina2017006'
    },

};

//模板使用数限制状态机
window.mol_count_dic={
    'tb-features':2,
    'hd-features':2,
    'brands':2,
    'hd-category':2,
    'single-good':3,
    'double-good':2,
    'slide-pic':2,
    'single-pic':3,
    'double-pic':2,
    'tb-category':2,
    'word-pic':3,
    'word-only':3,
    'title-only':2,
    'contract':2,
    'single-good-list':2,
    'double-good-list':2
};

//先打开宝贝选择页面, 然后选择想要赋值给宝贝列表的宝贝们, 假设这些是后台选取的宝贝数据
window.goods=[
    {goodid:1001,imgsrc:'good31.jpg',href:'',price:10,goodname:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
    {goodid:1002,imgsrc:'good32.jpg',href:'',price:20,goodname:'童装男童男孩小孩纯棉夏天好用'},
    {goodid:1003,imgsrc:'good33.jpg',href:'',price:30,goodname:'韩版2015春秋款秋款秋装女宝宝'},
    {goodid:1004,imgsrc:'good34.jpg',href:'',price:40,goodname:'夏季新款童裤女童棉麻短裤无烟'},
    {goodid:1005,imgsrc:'good35.jpg',href:'',price:50,goodname:'巴布泡泡 松紧系带 毛圈 蓬松'},
    {goodid:1006,imgsrc:'good36.jpg',href:'',price:60,goodname:'韩版2015春秋款秋款秋装女godd'},
    {goodid:1007,imgsrc:'good37.jpg',href:'',price:10,goodname:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
    {goodid:1008,imgsrc:'good38.jpg',href:'',price:20,goodname:'童装男童男孩小孩纯棉夏天好用'},
    {goodid:1009,imgsrc:'good39.jpg',href:'',price:30,goodname:'韩版2015春秋款秋款秋装女宝宝'},
    {goodid:1010,imgsrc:'good10.jpg',href:'',price:40,goodname:'夏季新款童裤女童棉麻短裤无烟'},
    {goodid:1011,imgsrc:'good11.jpg',href:'',price:50,goodname:'巴布泡泡 松紧系带 毛圈 蓬松'},
    {goodid:1012,imgsrc:'good12.jpg',href:'',price:60,goodname:'韩版2015春秋款秋款秋装女godd'},
    {goodid:1013,imgsrc:'good13.jpg',href:'',price:10,goodname:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
    {goodid:1014,imgsrc:'good14.jpg',href:'',price:20,goodname:'童装男童男孩小孩纯棉夏天好用'},
    {goodid:1015,imgsrc:'good15.jpg',href:'',price:30,goodname:'韩版2015春秋款秋款秋装女宝宝'},
    {goodid:1016,imgsrc:'good16.jpg',href:'',price:40,goodname:'夏季新款童裤女童棉麻短裤无烟'},
    {goodid:1017,imgsrc:'good17.jpg',href:'',price:50,goodname:'巴布泡泡 松紧系带 毛圈 蓬松'},
    {goodid:1018,imgsrc:'good18.jpg',href:'',price:60,goodname:'韩版2015春秋款秋款秋装女godd'},
    {goodid:1019,imgsrc:'good19.jpg',href:'',price:10,goodname:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
    {goodid:1020,imgsrc:'good20.jpg',href:'',price:20,goodname:'童装男童男孩小孩纯棉夏天好用'},
    {goodid:1021,imgsrc:'good21.jpg',href:'',price:50,goodname:'巴布泡泡 松紧系带 毛圈 蓬松'},
    {goodid:1022,imgsrc:'good22.jpg',href:'',price:60,goodname:'韩版2015春秋款秋款秋装女godd'},
    {goodid:1023,imgsrc:'good23.jpg',href:'',price:10,goodname:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
    {goodid:1024,imgsrc:'good24.jpg',href:'',price:20,goodname:'童装男童男孩小孩纯棉夏天好用'},
    {goodid:1025,imgsrc:'good25.jpg',href:'',price:30,goodname:'韩版2015春秋款秋款秋装女宝宝'},
    {goodid:1026,imgsrc:'good26.jpg',href:'',price:40,goodname:'夏季新款童裤女童棉麻短裤无烟'},
    {goodid:1027,imgsrc:'good27.jpg',href:'',price:50,goodname:'巴布泡泡 松紧系带 毛圈 蓬松'},
    {goodid:1028,imgsrc:'good28.jpg',href:'',price:60,goodname:'韩版2015春秋款秋款秋装女godd'},
    {goodid:1029,imgsrc:'good29.jpg',href:'',price:10,goodname:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
    {goodid:1030,imgsrc:'good30.jpg',href:'',price:20,goodname:'童装男童男孩小孩纯棉夏天好用'},
];
window.checkedGoods=[];

window.templates= {
    'temp01': ['single-pic', 'title-only', 'double-good', 'single-good-list', 'contract'],
    'temp02': ['single-pic', 'double-pic', 'single-good', 'double-good-list', 'contract'],
    'temp03': ['double-good', 'word-pic',  'single-pic',  'single-good-list','word-only'],
    tbstyle:['single-pic','tb-features','tb-category','double-good-list', 'contract'],
    hdstyle:['slide-pic','hd-features','brands','hd-category', 'single-good-list', 'contract']
};

function autoAppendNodes(tempid,indexOfGoodlist){
    var indexOfGoodlist;
    if(typeof tempid=='undefined' || !tempid){
        return false;
    }
    var molids=window.templates[tempid];
    var html,defaultVals, div,i, k,mobile=$('#show-mobile')[0];

    //获取模板HTML和默认数据, 并实例化
    for(i=0;i<molids.length;i++){
        html=window.mol_dic[molids[i]];
        defaultVals=window.mol_val_dic['val-'+molids[i]];
        for(k in defaultVals){
            html=html.replace('{'+k+'}',defaultVals[k]);
        }
        //转为节点, 加上按钮, 插入
        div=$(html)[0];
        div.innerHTML+= '<a class="go-recycle">删除</a><a class="go-up">移上</a><a class="go-down">移下</a>';
        mobile.appendChild(div);
        window.mol_count_dic[div.getAttribute('molid')]-=1;
    }
    //自动装载宝贝列表
    molids.forEach(function(v,i){
        if(v.indexOf('good-list')!=-1){
            indexOfGoodlist=i;
        }
    })
    $('#ctrl-wrap').data('index',indexOfGoodlist);
    var listType=$('#show-mobile').find('.mol-wrap').eq(indexOfGoodlist).attr('molid')=='single-good-list' ? 1:2;
    goods_list_instance(window.goods.slice(0,16), listType);
}

$('a[tempid]').on('click',function(){
    $('#show-mobile').find('.mol-wrap').each(function(){
        $(this).remove();
        window.mol_count_dic[this.getAttribute('molid')]++;
    });
    $('#ctrl-wrap').empty();
    autoAppendNodes($(this).attr('tempid'));
});

//拖入的容器
$('#show-mobile').on('drop',function(e){
        event.preventDefault();
        //console.log('drop');

        var transData=event.dataTransfer.getData("Text");
        var target= $('.mol-wrap').filter('.blue-top')[0];

        //超限控制及提示
        if(!window.mol_count_dic[transData.replace('tag-','')]){
            $('.alert').fadeIn(300,function(){
                setTimeout((function(){
                   $(this).fadeOut(500);
                }).bind(this),1500);
            });
            return false;
        }

        //获取模板HTML和默认数据, 并实例化
        var html=window.mol_dic[transData.replace('tag-','')];
        var defaultVals=window.mol_val_dic[transData.replace('tag-','val-')];
        for(var k in defaultVals){
            html=html.replace('{'+k+'}',defaultVals[k]);
        }
        //转为节点, 加上按钮, 插入
        var div=$(html)[0];
        div.innerHTML+= '<a class="go-recycle">删除</a><a class="go-up">移上</a><a class="go-down">移下</a>';
        target?this.insertBefore(div,target):this.appendChild(div);

        //更新计数器, 去除插入位置提示条, 重置右侧编辑区
        window.mol_count_dic[div.getAttribute('molid')]--;
        $('.mol-wrap').removeClass('blue-top');
        $('#ctrl-wrap')[0].innerHTML='';
    })
    .on('dragenter',function(e){
        //console.info('dragenter!');
    })
    .on('dragover',function(e){
        event.preventDefault();
        $('.mol-wrap').removeClass('assertive');
        $('.mol-wrap').removeClass('blue-top');
        $(event.target).parents('.mol-wrap').eq(0).addClass('blue-top');
    });


//被拖动控件
$('.mol-tag').on('selectstart',function(e){
        return false;
    })
    .on('dragstart',function(e){
        //console.log('\ndragstart-----');
        var the=this;
        $('.mol-tip').show().css('opacity',0).animate({top:$(this).parent().index()*65,opacity:0.9},function(){
            $(this).html(function(i,c) {
                return c + window.mol_tip_dic[this.id.replace('tag-', '')]
            }.bind(the));
        });
        //$('.mol-tip').fadeIn(800).html(function(i,c) {
        //    return c + window.mol_tip_dic[this.id.replace('tag-', '')]
        //}.bind(this));
        event.dataTransfer.setData("Text",this.id);
    })
    .on('dragend',function(e){
        //console.log('--------dragend\n');
        $('.mol-tip').fadeOut(300,function(){$(this).html('<div class="arrow"></div>')});
        event.preventDefault();
    })
    .on('mousedown',function(){

    });


//提取模板排列信息
$('#btn-info').click(function(){
    var json=[];
    var mols=$('#show-mobile').find('.mol-wrap');
    mols.each(function(v,i){
        json.push({
            'molid':this.getAttribute('molid'),
            'native':$(this).data('native')||window.mol_val_dic['val-'+this.getAttribute('molid')]
        })
    });
    console.table(json);
});
$('#btn-count').click(function(){
    console.info(window.mol_count_dic);
});


//上下移动和删除
$('#show-mobile').on('selectstart','.go-down,.go-up,.go-recycle',function(e){
    return false;
})
    .on('click','.go-recycle',function(e){
        event.preventDefault();
        $(this.parentNode).remove();
        window.mol_count_dic[this.parentNode.getAttribute('molid')]+=1;
    })
    .on('click','.go-down',function(e){
        event.preventDefault();
        var parent=this.parentNode;
        var next=parent.nextSibling;
        if(next==null){
            return false;
        }
        var grand=$('#show-mobile')[0];
        var prev=parent.previousSibling;
        var next2=next.cloneNode(true);
        grand.removeChild(next);
        grand.insertBefore(next2,parent);
    })
    .on('click','.go-up',function(e){
        event.preventDefault();
        var parent=$(this).parent();
        var prev=parent.prev();
        if(prev.length<1){
            return false;
        }
        var prev2=prev.clone();
        var next=parent.next();
        prev.remove();
        next.length?next.before(prev2):$('#show-mobile').append(prev2);
    })
    .on('mouseover','.mol-wrap',function(e){
        $(this).find('.go-down,.go-up,.go-recycle').show();
    })
    .on('mouseleave','.mol-wrap',function(e){
        $(this).find('.go-down,.go-up,.go-recycle').hide();
    })
    //选中块开始编辑
    .on('click','.mol-wrap',function(e){
        var molid=this.getAttribute('molid');
        var obj=$(this).data('native')||window.mol_val_dic['val-'+molid];
        var key;

        //高亮当前选中块
        $('.mol-wrap').removeClass('assertive');
        $(this).addClass('assertive');

        //记录下当前编辑节点的索引
        $('#ctrl-wrap').data( 'index', $(this).index()-3 )
        //载入节点对应的编辑模块
                         .html( window.mol_ctrl_dic[molid] )
        //编辑模块再载入节点当前数据
                        .find('[type=text],[type=number],textarea').each(function(){
                            key=this.getAttribute('mapid')||'none';
                            if(obj&&obj[key])
                                this.innerText?this.innerText=obj[key]:this.value=obj[key];
                        });
    })

//数组填充宝贝列表
function goods_list_instance(datas,rowCount){
    var html_wrap,html_good,div=$('<div>');
    if(rowCount==1){
        html_wrap='<div class="" molid="single-good"></div>';
        html_good='<a class="single-good-wrap-one"  molid="single-good" ng-href="{href}"> <img src="{imgsrc}" ng-src="{imgsrc}" alt=""><p>{goodname}</p><i>￥{price}</i></a>';
    }else{
        html_wrap='<div class="" molid="double-good"></div>';
        html_good='<a class="double-good-wrap-one"  ng-href="{href}"> <img src="{imgsrc}" ng-src="{imgsrc}" alt=""><p>{goodname}</p><i>￥{price}</i></a>';
    }
    var html,node_good,node_wrap=$(html_wrap)[0];
    datas.forEach(function(obj,i){
        html=html_good.replace('{goodname}',obj['goodname'])
                      .replace('{imgsrc}',obj['imgsrc'])
                      .replace('{href}',obj['href'])
                      .replace('{price}',obj['price']);
        node_good=$(html)[0];
        if(rowCount==1){
            div[0].appendChild(node_good);
        }else{
            //每两个good重生成一个包裹
            if(i%2==0){
                node_wrap=$(html_wrap)[0];
            }
            node_wrap.appendChild(node_good);
            //每装两个good,一个包裹饱和,插入到div
            if(i%2!=0||i==datas.length-1){
                div[0].appendChild(node_wrap);
            }
        }
    });
    // 找到要应用的元素
    molobj=$('#show-mobile').find('.mol-wrap').eq(+$('#ctrl-wrap').data('index'));
    molobj.html( div.html() +  '<a class="go-recycle">删除</a><a class="go-up">移上</a><a class="go-down">移下</a>' );
    // 同时保存原始数据
    molobj.data('native',datas);
}

//右侧编辑区
$('#ctrl-area')
    // 编辑完成
    .on('click','.btn-submit',function(e){
        var molid,html,key,obj={},molobj=$('#show-mobile').find('.mol-wrap').eq(+$('#ctrl-wrap').data('index'));
        //获取并用键值对保存编辑区数据
        $(this.parentNode).prev().find('input,textarea').each(function(){
            molid=molid||this.parentNode.getAttribute('ctrlid')||'none';
            html=html||window.mol_dic[molid];
            key=this.getAttribute('mapid')||'none';
            this.innerText?obj[key]=this.innerText:obj[key]=this.value;
        });
        //更新模板默认数据和选中块数据
        //window.mol_val_dic['val-'+molid]=obj;
        //保存原始数据
        molobj.data('native',obj);
        //实例化HTML内容
        for(var k in obj){
            html=html.replace('{'+k+'}',obj[k]);
        }
        //别忘了加上按钮
        molobj.html( $(html)[0].innerHTML+ '<a class="go-recycle">删除</a><a class="go-up">移上</a><a class="go-down">移下</a>' );
    })
    // 打开模态页时,载入goods数组
    .on('click','.show-good-list',function(){
        goods_list_cls();
        var html=$('#temp-good-cell')[0].innerHTML;
        var goodList=$('.good-list')[0];
        var good;
        var datas=window.goods.slice(0,20);
        datas.forEach(function(obj,i){
            good=$(html.replace('{goodname}',obj['goodname'])
                .replace('{imgsrc}',obj['imgsrc'])
                .replace('{href}',obj['href'])
                .replace('{price}',obj['price']));
            good.data('good-info',obj);
            goodList.appendChild(good[0]);
        });
    })
    //.on('click','.to-check-good2',function(){
    //    //goods_list_instance(window.goods,2);
    //})
    //.on('click','.to-check-good1',function(){alert()
    //    //goods_list_instance(window.goods,1);
    //})

/*
*  宝贝列表 选择宝贝
*  先打开模态页面,列出供选
*  然后点击一个选中一个,加入checkedGoods数组
*  最后点确定,直接应用到选中的宝贝列表上
 */

//选中一个
function check_it(good){
    var goodInfo=$(good).data('good-info');
    var good_tag=$('<div class="good-tag">');
    $(good).find('img').clone().appendTo(good_tag);
    good_tag.append('<i>&times;</i>');
    good_tag.data('good-info',goodInfo);
    window.checkedGoods.push(goodInfo);
    $('#good-checked-list').append(good_tag);
}

//重置
function goods_list_cls(){
    $('#good-checked-list').html('');
    $('.good-list').html('');
    window.checkedGoods=[];
}

//选择完毕,实例化数据
function checked_done(the){
    if($(the).data('for-ctrlid')=='double-good-list') {
        goods_list_instance(window.checkedGoods, 2);
    }else{
        goods_list_instance(window.checkedGoods, 1);
    }
    goods_list_cls();
}

//单个删除
$('#good-checked-list').on('click','i',function(){
    var goodInfo=$(this).parent().data('good-info');
    window.checkedGoods.forEach(function(obj,i){
        if(obj.goodid==goodInfo.goodid){
            window.checkedGoods.splice(i,1);
        }
    });
    $(this).parent().remove();
});

//传递给选择页面,告诉确定按钮, 选中的宝贝布置给什么类型的模块
function post_ctrl_id(the){
    $('#checked_done').data('for-ctrlid',
        $(the).parent().attr('ctrlid')
    );
}

$(document).on('submit','.img-up-form',function(){
    var files=$('.img-up-file')[0].files;
    for(var i=0;i<files.length;i++){
        if(files[i].size>200){
            alert('单张图片大小不能超过200k,请压缩后重新上传');
            break;
        }
    }
    //console.log($('#img-up-file').files[0].size)
    var data = new FormData($('#img-up-form')[0]);
    $.ajax({
        url: 'ajaxupfile2.php',
        type: 'POST',
        data: data,
        dataType: 'JSON',
        cache: false,
        processData: false,
        contentType: false,
        success:function(res){
            console.info(res);
            //把回传过来的img-src地址,显示在下方,或者直接填充到input
            //src=res.data[0];
            //$(this).find('[mapid=href]').val(src);
            alert("UploadFile Success");
        }
    });
    return false;
});