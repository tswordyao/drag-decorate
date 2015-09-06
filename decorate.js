
//模板映射
window.mol_dic={
    'single-good':document.getElementById('temp-single-good').innerHTML,
    'double-good':document.getElementById('temp-double-good').innerHTML,
    'single-pic':document.getElementById('temp-single-pic').innerHTML,
    'double-pic':document.getElementById('temp-double-pic').innerHTML,
    'word-pic':document.getElementById('temp-word-pic').innerHTML,
    'single-good-list':document.getElementById('temp-single-good-list').innerHTML,
    'double-good-list':document.getElementById('temp-double-good-list').innerHTML
};
//模板使用状态机
window.mol_count_dic={
    'single-good':0,
    'double-good':0,
    'single-pic':0,
    'double-pic':0,
    'word-pic':0
};
//编辑模板映射
window.mol_ctrl_dic={
    'single-good':document.getElementById('temp-ctrl-single-good').innerHTML,
    'double-good':document.getElementById('temp-ctrl-double-good').innerHTML,
    'single-pic':document.getElementById('temp-ctrl-single-pic').innerHTML,
    //'double-pic':document.getElementById('temp-ctrl-double-pic').innerHTML,
    //'word-pic':document.getElementById('temp-ctrl-word-pic').innerHTML
    'single-good-list':document.getElementById('temp-ctrl-single-good-list').innerHTML,
    'double-good-list':document.getElementById('temp-ctrl-double-good-list').innerHTML

};
//模板映射默认值
window.mol_val_dic={
    "val-single-good":{
        href:'www.163.com',
        imgsrc:'good01.jpg',
        goodname:'优质棉麻男童马夹 保暖透气',
        price:92.00
    },
    "val-double-good":{
        href:'www.163.com',
        imgsrc:'good03.jpg',
        goodname:'漂亮的女童裤子 纯棉',
        price:56.00,
        href2:'www.163.com',
        imgsrc2:'good02.jpg',
        goodname2:'小脚裤子批发 颜色多',
        price2:52.00
    },
    "val-single-pic":{
        href:'www.163.com',
        imgsrc:'hot.png',
        desc:'婴童夏装换季清仓中! 点击进入专区!',
    },
    "val-double-pic":{
        href:'www.163.com',
        imgsrc:'hot.png',
        goodname:'漂亮的女童裤子 纯棉',
        price:56.00,
        href2:'www.163.com',
        imgsrc2:'good02.jpg',
        goodname2:'小脚裤子批发 颜色多',
        price2:52.00
    }
};

//拖入的容器
$('#show-mobile').on('drop',function(e){
    event.preventDefault();
    //console.log('drop');
    var transData=event.dataTransfer.getData("Text");
    var target= $('.mol-wrap').filter('.blue-top')[0];//console.info(target);

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
    window.mol_count_dic[div.getAttribute('molid')]+=1;
    $('.mol-wrap').removeClass('blue-top');
    $('#ctrl-wrap')[0].innerHTML='';
})
    .on('dragenter',function(e){
        //event.preventDefault();
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
        event.dataTransfer.setData("Text",this.id);
    })
    .on('dragend',function(e){
        //console.log('--------dragend\n');
        event.preventDefault();
    });


//模板排列信息
$('#btn-info').click(function(){
    var json=[];
    var mols=$('#show-mobile').find('.mol-wrap');
    mols.each(function(v,i){
        json.push({
            'molid':this.getAttribute('molid'),
            'imgsrc':$(this).find('img')[0].getAttribute('src'),
            'goodname':$(this).find('p')[0].innerHTML
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
        window.mol_count_dic[this.parentNode.getAttribute('molid')]-=1
        $(this.parentNode).remove();
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
        //高亮当前选中块
        $('.mol-wrap').removeClass('assertive');
        $(this).addClass('assertive');

        //载入模块对应的编辑模块,并记录下当前编辑块的索引
        $('#ctrl-wrap').html( window.mol_ctrl_dic[this.getAttribute('molid')] );
        $('#ctrl-wrap').data( 'index', $(this).index()-3 );

        //载入选中块数据
        var molid,html,obj;
        $('#ctrl-wrap').find('input').each(function(){
            molid=molid||this.parentNode.getAttribute('ctrlid')||'none';
            html=html||window.mol_dic[molid];
            key=this.getAttribute('mapid')||'none';
            this.value=window.mol_val_dic['val-'+molid][key];
        });
    })

//选中块编辑完成
$('#ctrl-area [type=submit]').on('click',function(e){
    var molid,html,key,obj={},
        molobj=$('#show-mobile').find('.mol-wrap').eq(+$('#ctrl-wrap').data('index'));

    //if(molobj[0].getAttribute('molid')=='double-good-list'){
    //
    //}
    //获取并用键值对保存编辑区数据
    $(this.parentNode).prev().find('input').each(function(){
        molid=molid||this.parentNode.getAttribute('ctrlid')||'none';
        html=html||window.mol_dic[molid];
        key=this.getAttribute('mapid')||'none';
        obj[key]=this.value;
    });
    //更新模板默认数据和选中块数据
    window.mol_val_dic['val-'+molid]=obj;
    for(var k in obj){
        html=html.replace('{'+k+'}',obj[k]);
    }
    //别忘了加上按钮
    molobj.html( $(html)[0].innerHTML+ '<a class="go-recycle">删除</a><a class="go-up">移上</a><a class="go-down">移下</a>' );
});

//先打开宝贝选择页面, 然后选择想要赋值给宝贝列表的宝贝们, 假设这些是选取的宝贝数据
var datas=[
    {imgsrc:'good01.jpg',href:'',price:10,goodname:'good01'},
    {imgsrc:'good02.jpg',href:'',price:20,goodname:'good02'},
    {imgsrc:'good03.jpg',href:'',price:30,goodname:'good03'},
    {imgsrc:'good04.jpg',href:'',price:40,goodname:'good04'},
    {imgsrc:'good05.jpg',href:'',price:50,goodname:'good05'},
    {imgsrc:'good06.jpg',href:'',price:60,goodname:'good06'}
];

//数组填充宝贝列表
function goods_list_instance(datas,rowCount){
    var div=$('<div>'),html_wrap,html_good;
    if(rowCount==1){
        html_wrap='<div class="" molid="single-good"></div>';
        html_good='<a class="single-good-wrap-one"  molid="single-good" ng-href="{href}"> <img src="{imgsrc}" ng-src="{imgsrc}" alt=""><p><u>{goodname}</u><b>价格</b>￥<i>{price}</i></p></a>';
    }else{
        html_wrap='<div class="" molid="single-good"></div>';
        html_good='<a class="double-good-wrap-one"  ng-href="{href}"> <img src="{imgsrc}" ng-src="{imgsrc}" alt=""><p><u>{goodname}</u><b>价格</b>￥<i>{price}</i></p></a>';
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
            if(i%2!=0){
                div[0].appendChild(node_wrap);
            }
        }
    });
    //console.log(div.html());
    molobj=$('#show-mobile').find('.mol-wrap').eq(+$('#ctrl-wrap').data('index'));
    molobj.html( div.html() +  '<a class="go-recycle">删除</a><a class="go-up">移上</a><a class="go-down">移下</a>' );
}

$('#ctrl-area').on('click','.to-check-good2',function(){
                    goods_list_instance(datas,2);
                })
                .on('click','.to-check-good1',function(){
                    goods_list_instance(datas,1);
                })