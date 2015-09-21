/*检测浏览器,不是chrome直接提示*/
    var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
    if(!isChrome){
        document.body.innerHTML='<br><h2>&nbsp;您目前的浏览器不是chrome(谷歌)浏览器，不支持相关操作。 请更换浏览器后再进入本页面。<br>&nbsp;<a href="https://www.baidu.com/s?ie=UTF-8&wd=chrome">点击此处下载</a></h2>'
    }else{
    /*页面固定数据*/
        // 模块映射
        window.mol_dic={
            'tb-features':document.getElementById('temp-tb-features').innerHTML,
            'hd-features':document.getElementById('temp-hd-features').innerHTML,
            'brands':document.getElementById('temp-brands').innerHTML,
            'hd-category':document.getElementById('temp-hd-category').innerHTML,
            'singleGood':document.getElementById('temp-singleGood').innerHTML,
            'doubleGood':document.getElementById('temp-doubleGood').innerHTML,
            'slidePic':document.getElementById('temp-slidePic').innerHTML,
            'singlePic':document.getElementById('temp-singlePic').innerHTML,
            'doublePic':document.getElementById('temp-doublePic').innerHTML,
            'tb-category':document.getElementById('temp-tb-category').innerHTML,
            'wordPic':document.getElementById('temp-wordPic').innerHTML,
            'titleOnly':document.getElementById('temp-titleOnly').innerHTML,
            'wordOnly':document.getElementById('temp-wordOnly').innerHTML,
            'contract':document.getElementById('temp-contract').innerHTML,
            'singleGoodList':document.getElementById('temp-singleGoodList').innerHTML,
            'doubleGoodList':document.getElementById('temp-doubleGoodList').innerHTML
        };

        function get_mol(molid){
            return document.getElementById('temp-'+molid).innerHTML;
        }

        // 编辑模块映射
        window.mol_ctrl_dic={
            'tb-features':document.getElementById('temp-ctrl-tb-features').innerHTML,
            'hd-features':document.getElementById('temp-ctrl-hd-features').innerHTML,
            'tb-category':document.getElementById('temp-ctrl-tb-category').innerHTML,
            'hd-category':document.getElementById('temp-ctrl-hd-category').innerHTML,
            'brands':document.getElementById('temp-ctrl-brands').innerHTML,
            'singleGood':document.getElementById('temp-ctrl-singleGood').innerHTML,
            'doubleGood':document.getElementById('temp-ctrl-doubleGood').innerHTML,
            'slidePic':document.getElementById('temp-ctrl-slidePic').innerHTML,
            'singlePic':document.getElementById('temp-ctrl-singlePic').innerHTML,
            'doublePic':document.getElementById('temp-ctrl-doublePic').innerHTML,
            'wordPic':document.getElementById('temp-ctrl-wordPic').innerHTML,
            'titleOnly':document.getElementById('temp-ctrl-titleOnly').innerHTML,
            'wordOnly':document.getElementById('temp-ctrl-wordOnly').innerHTML,
            'contract':document.getElementById('temp-ctrl-contract').innerHTML,
            'singleGoodList':document.getElementById('temp-ctrl-singleGoodList').innerHTML,
            'doubleGoodList':document.getElementById('temp-ctrl-doubleGoodList').innerHTML
        };

        function get_mol_ctrl(molid){
            return document.getElementById('temp-ctrl'+molid).innerHTML;
        }

        // 提示语映射
        window.mol_tip_dic={
            'features':'品牌优势',
            'hd-features':'品牌优势',
            'singleGood':'这是单宝贝模块, 拖入手机 ,然后点击,可以在右侧自定义宝贝的信息',
            'doubleGood':'这是双宝贝模块,两个宝贝并列, 拖入手机后点击,在右侧自定义宝贝的信息',
            'singlePic':'单图片模块,一般选择一张宣传热图, 或者,可以一张装饰性的图片, 如果是纯装饰性的 ,可以不要文字和链接',
            'doublePic':'并列图片,一般用来做品牌区域,块状LOGO图',
            'tb-category':'4格图片,一般用来做品牌或类别分类',
            'wordPic':'图文并茂, 做图需要美工在左侧纯色或留白',
            'titleOnly':'纯文字的标题,用于分段标注',
            'wordOnly':'纯粹的文字,说一些你想跟卖家说的话吧',
            'contract':'您的联系电话,写上电话卖家更容易联系到你',
            'singleGoodList':'这是一个宝贝列表模块,有很多行, 每行一次展示一个宝贝,包括图片,文字介绍,和价格, 具体设置请拖入手机后, 单击手机内该模块',
            'doubleGoodList':'这是一个宝贝列表模块,有很多行, 每行展示两个宝贝,包括图片,文字介绍,和价格, 具体设置请拖入手机后, 单击手机内该模块',
        }

        // 模块映射默认值
        window.mol_val_dic={
            "val-singleGood":{
                href:'#',
                imgsrc:'good03.jpg',
                name:'优质棉麻男童马夹 保暖透气',
                price:92.00
            },
            "val-doubleGood":{
                href:'#',
                imgsrc:'good17.jpg',
                name:'漂亮的女童裤子 纯棉',
                price:56.00,
                href2:'#',
                imgsrc2:'good13.jpg',
                name2:'小脚裤子批发 颜色多',
                price2:52.00
            },
            "val-wordPic":{
                href:'#',
                imgsrc:'word-pic.jpg',
                desc:'图片描述文字,一些文字,怕怕拉拉,什么的<br>或者,图片可以做成100%<br>文字遮罩在图片左上角<br>这需要图片设计配合<br>左上角统一色调或留白',
            },
            "val-slidePic":[{href:'#', imgsrc:'hot.jpg'},{href:'#', imgsrc:'hot2.jpg'}],
            "val-singlePic":{
                href:'#',
                imgsrc:'hot3.jpg',
                desc:'婴童夏装换季清仓中! 点击进入专区!',
            },
            "val-doublePic":{
                href:'#',
                imgsrc:'baby-joy01.jpg',
                desc:'童车特价中! 点击进入专区!',
                href2:'#',
                imgsrc2:'baby-joy02.jpg',
                desc2:'玩具特价! 点击进入专区!',
            },
            "val-tb-category":{
                href:'#',
                imgsrc:'area-logo-01.jpg',
                desc:'LOGO AREA<br>奶粉专区',
                href2:'#',
                imgsrc2:'area-logo-02.jpg',
                desc2:'LOGO AREA<br>玩具专区',
                href3:'#',
                imgsrc3:'area-logo-03.jpg',
                desc3:'LOGO AREA<br>婴童服饰',
                href4:'#',
                imgsrc4:'area-logo-04.jpg',
                desc4:'LOGO AREA<br>亲子母婴',
            },
            "val-titleOnly":{title:'全场宝贝包邮热销中!'},
            "val-wordOnly":{desc:'欢迎光临小店!<br>本店的所有商品都是真宗境外直邮, 海关保税仓发货, 优惠多多, 还有包邮,欢迎亲多多选购~~~ '},
            "val-contract":{tel:'1381396655', wechat:'weixina2017006'}
        };

        // 模块使用数限制状态机
        window.mol_count_dic={
            'tb-features':2,
            'hd-features':2,
            'brands':2,
            'hd-category':2,
            'singleGood':1,
            'doubleGood':1,
            'slidePic':1,
            'singlePic':3,
            'doublePic':2,
            'tb-category':2,
            'wordPic':3,
            'wordOnly':3,
            'titleOnly':2,
            'contract':2,
            'singleGoodList':1,
            'doubleGoodList':1
        };

        // 几套默认的模板组合
        window.templates= {
            'tempDefault': ['singlePic', 'titleOnly', 'wordOnly', 'singleGoodList', 'contract'],
            tbstyle:['singlePic','wordOnly','tb-features','tb-category','doubleGoodList', 'contract'],
            hdstyle:['slidePic','hd-features','brands','hd-category', 'singleGoodList', 'contract']
        };
    }


/*后台接口,获取宝贝数据*/
    var actionMolData='http://seatent.com/decorate/getmoldata';
    var actionSearch='http://seatent.com/api/mobile/goods!hdSearch.do';
    $.post(actionSearch,function(resp){
        if(resp.result==1){
            window.goods=resp.data.result;
        }
    })

    // 先打开宝贝选择页面, 然后选择想要赋值给宝贝列表的宝贝们, 假设这些是后台选取的宝贝数据
    window.goods=[
        {goods_id:1001,imgsrc:'good31.jpg',href:'',price:10,name:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
        {goods_id:1002,imgsrc:'good32.jpg',href:'',price:20,name:'童装男童男孩小孩纯棉夏天好用'},
        {goods_id:1003,imgsrc:'good33.jpg',href:'',price:30,name:'韩版2015春秋款秋款秋装女宝宝'},
        {goods_id:1004,imgsrc:'good34.jpg',href:'',price:40,name:'夏季新款童裤女童棉麻短裤无烟'},
        {goods_id:1005,imgsrc:'good35.jpg',href:'',price:50,name:'巴布泡泡 松紧系带 毛圈 蓬松'},
        {goods_id:1006,imgsrc:'good36.jpg',href:'',price:60,name:'韩版2015春秋款秋款秋装女godd'},
        {goods_id:1007,imgsrc:'good37.jpg',href:'',price:10,name:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
        {goods_id:1008,imgsrc:'good38.jpg',href:'',price:20,name:'童装男童男孩小孩纯棉夏天好用'},
        {goods_id:1009,imgsrc:'good39.jpg',href:'',price:30,name:'韩版2015春秋款秋款秋装女宝宝'},
        {goods_id:1010,imgsrc:'good10.jpg',href:'',price:40,name:'夏季新款童裤女童棉麻短裤无烟'},
        {goods_id:1011,imgsrc:'good11.jpg',href:'',price:50,name:'巴布泡泡 松紧系带 毛圈 蓬松'},
        {goods_id:1012,imgsrc:'good12.jpg',href:'',price:60,name:'韩版2015春秋款秋款秋装女godd'},
        {goods_id:1013,imgsrc:'good13.jpg',href:'',price:10,name:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
        {goods_id:1014,imgsrc:'good14.jpg',href:'',price:20,name:'童装男童男孩小孩纯棉夏天好用'},
        {goods_id:1015,imgsrc:'good15.jpg',href:'',price:30,name:'韩版2015春秋款秋款秋装女宝宝'},
        {goods_id:1016,imgsrc:'good16.jpg',href:'',price:40,name:'夏季新款童裤女童棉麻短裤无烟'},
        {goods_id:1017,imgsrc:'good17.jpg',href:'',price:50,name:'巴布泡泡 松紧系带 毛圈 蓬松'},
        {goods_id:1018,imgsrc:'good18.jpg',href:'',price:60,name:'韩版2015春秋款秋款秋装女godd'},
        {goods_id:1019,imgsrc:'good19.jpg',href:'',price:10,name:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
        {goods_id:1020,imgsrc:'good20.jpg',href:'',price:20,name:'童装男童男孩小孩纯棉夏天好用'},
        {goods_id:1021,imgsrc:'good21.jpg',href:'',price:50,name:'巴布泡泡 松紧系带 毛圈 蓬松'},
        {goods_id:1022,imgsrc:'good22.jpg',href:'',price:60,name:'韩版2015春秋款秋款秋装女godd'},
        {goods_id:1023,imgsrc:'good23.jpg',href:'',price:10,name:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
        {goods_id:1024,imgsrc:'good24.jpg',href:'',price:20,name:'童装男童男孩小孩纯棉夏天好用'},
        {goods_id:1025,imgsrc:'good25.jpg',href:'',price:30,name:'韩版2015春秋款秋款秋装女宝宝'},
        {goods_id:1026,imgsrc:'good26.jpg',href:'',price:40,name:'夏季新款童裤女童棉麻短裤无烟'},
        {goods_id:1027,imgsrc:'good27.jpg',href:'',price:50,name:'巴布泡泡 松紧系带 毛圈 蓬松'},
        {goods_id:1028,imgsrc:'good28.jpg',href:'',price:60,name:'韩版2015春秋款秋款秋装女godd'},
        {goods_id:1029,imgsrc:'good29.jpg',href:'',price:10,name:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
        {goods_id:1030,imgsrc:'good30.jpg',href:'',price:20,name:'童装男童男孩小孩纯棉夏天好用'},
    ];
    // 选中的宝贝
    window.checkedGoods=[];


/*交互方法*/
    // 写一个通用的alert提示,bootstrap样式
    function bootAlert(str){
        $('.alert').fadeIn(300,function(){
            setTimeout((function(){
                $(this).fadeOut(500);
            }).bind(this),1500);
        }).html(function(i,old){return old.replace('{content}',str)});
        return false;
    }

    // 自动装载模板组合中的各模块, 此函数为模板载入的关键依赖
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
            if(molids[i]=='slidePic'){
                html=html.replace('{imgsrc}',defaultVals[0]['imgsrc']).replace('{href}',defaultVals[0]['href']);
            }else{
                for(k in defaultVals){
                    html=html.replace('{'+k+'}',defaultVals[k]);
                }
            }
            //转为节点, 加上按钮, 插入
            div=$(html)[0];
            div.innerHTML+= '<a class="go-recycle">删除</a><a class="go-up">移上</a><a class="go-down">移下</a>';
            mobile.appendChild(div);
            window.mol_count_dic[div.getAttribute('molid')]-=1;
        }
        //自动装载宝贝列表,目前只支持一个页面存在一个宝贝列表
        molids.forEach(function(v,i){
            if(v.indexOf('GoodList')!=-1){
                indexOfGoodlist=i;
            }
        })
        $('#ctrl-wrap').data('index',indexOfGoodlist);
        var listType=$('#show-mobile').find('.mol-wrap').eq(indexOfGoodlist).attr('molid')=='singleGoodList' ? 1:2;
        goods_list_instance(window.goods.slice(0,16), listType);
    }

    // 载入组合模板
    $('a[tempid]').on('click',function(){
        // 先清空
        $('#show-mobile').find('.mol-wrap').each(function(){
            $(this).remove();
            window.mol_count_dic[this.getAttribute('molid')]++;
        });
        $('#ctrl-wrap').empty();
        //再载入
        autoAppendNodes($(this).attr('tempid'));
    });



    // 拖拽方法(拖入的容器上定义的部分)
    $('#show-mobile').on('drop',function(e){
            // 拖放完成,先取消默认事件
            event.preventDefault();
            // 再提取传递的信息
            var transData=event.dataTransfer.getData("Text");
            // 找到蓝顶标记的参照元素
            var target= $('.mol-wrap').filter('.blue-top')[0];
            // 超限控制及提示
            if(!window.mol_count_dic[transData.replace('tag-','')]){
                bootAlert('该组件的使用次数已达上限。');
            }
            // 获取模板HTML和默认数据, 将其实例化
            var html=window.mol_dic[transData.replace('tag-','')];
            var defaultVals=window.mol_val_dic[transData.replace('tag-','val-')];
            for(var k in defaultVals){
                html=html.replace('{'+k+'}',defaultVals[k]);
            }
            // 转为节点, 加上按钮, 插入
            var div=$(html)[0];
            div.innerHTML+= '<a class="go-recycle">删除</a><a class="go-up">移上</a><a class="go-down">移下</a>';
            // 判断参照元素是否存在,不存在就直接插入最后面
            target?this.insertBefore(div,target):this.appendChild(div);
            //更新计数器, 去除插入位置蓝顶标记, 重置右侧编辑区
            window.mol_count_dic[div.getAttribute('molid')]--;
            $('.mol-wrap').removeClass('blue-top');
            $('#ctrl-wrap')[0].innerHTML='';
        })
        .on('dragenter',function(e){
            //console.info('dragenter!');
        })
        .on('dragover',function(e){
            // 拖入区域,准备放置...
            event.preventDefault();
            // 先清空上次的标记
            $('.mol-wrap').removeClass('assertive');
            $('.mol-wrap').removeClass('blue-top');
            //鼠标所处的已有模块打上蓝顶标记,表示松手即放置其上
            $(event.target).parents('.mol-wrap').eq(0).addClass('blue-top');
        });


    // 拖拽方法(被拖动控件上定义的部分)
    $('.mol-tag').on('selectstart',function(e){
            return false;
        })
        .on('dragstart',function(e){
            // 绑定传入值
            event.dataTransfer.setData("Text",this.id);
        })
        .on('dragend',function(e){
            // 取消默认事件
            event.preventDefault();
            // 隐藏提示框,清空内容
            $('.mol-tip').fadeOut(300,function(){$(this).html('<div class="arrow"></div>')});
        })
        .on('mousedown',function(){
            // 显示提示框,设置内容
            var the=this;
            $('.mol-tip').show().css('opacity',0).animate({top:$(this).parent().index()*57,opacity:0.9},function(){
                $(this).html(function(i,old) {
                    return old + window.mol_tip_dic[this.id.replace('tag-', '')]
                }.bind(the));
            });
        })
        .on('mouseup',function(){
            // 隐藏提示框,清空内容
            $('.mol-tip').fadeOut(300,function(){$(this).html('<div class="arrow"></div>')});
        })


    // 上下移动,删除,和点击开始编辑模块数据( 模块交互操作的关键方法! )
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
        // 选中块开始编辑(自定义模块数据的关键依赖)
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
                             .html( window.mol_ctrl_dic[molid] );
            //编辑模块再载入节点当前数据
            if(molid='slidePic'){
                var arr=obj;
                console.log(arr)
                $('.mol-ctrl-wrap').find('[mapid^=imgsrc]').each(function(i,val){
                    arr[i]? this.value=arr[i].imgsrc||'' : void(0);
                })
                $('.mol-ctrl-wrap').find('[mapid^=href]').each(function(i,val){
                    arr[i]? this.value=arr[i].href||'' : void(0);
                })
            }else{
                $('.mol-ctrl-wrap').find('[type=text],[type=number],textarea').each(function(){
                    key=this.getAttribute('mapid')||'none';
                    if(obj&&obj[key])
                        this.innerText?this.innerText=obj[key]:this.value=obj[key].replace(/\<br\>/gm,'\n');
                });
            }
        })

    // 右侧编辑确定后处理数据( 自定义数据的关键方法! )
    $('#ctrl-area')
        // 编辑完成
        .on('click','.btn-submit',function(e){
            var molid=$('.mol-ctrl-wrap').attr('ctrlid'),
                html=window.mol_dic[molid],
                key,
                obj={},
                molobj=$('#show-mobile').find('.mol-wrap').eq(+$('#ctrl-wrap').data('index'));
            //获取并用键值对保存编辑区数据
            if(molid=='slidePic'){
                obj=[];
                $('.mol-ctrl-wrap').find('[mapid^=imgsrc]').each(function(i,val){
                    obj[i]={imgsrc:this.value||''};
                })
                .end().find('[mapid^=href]').each(function(i,val){
                    (typeof(obj[i])=='object'&&obj[i].imgsrc) ? (obj[i].href=this.value||'') : void(0);
                });
                //实例化HTML内容
                    html=html.replace('{imgsrc}',obj[0]['imgsrc']).replace('{href}',obj[0]['href']);
            }else{
                $(this.parentNode).prev().find('input,textarea').each(function(){
                    key=this.getAttribute('mapid')||'none';
                    this.innerText?obj[key]=this.innerText:obj[key]=this.value.replace(/\n/gm,'<br>');
                });
                //实例化HTML内容
                for(var k in obj){
                    html=html.replace('{'+k+'}',obj[k]);
                }
            }
            console.log(obj)
            //更新模板默认数据和选中块数据
            //window.mol_val_dic['val-'+molid]=obj;

            //保存原始数据
            molobj.data('native',obj);

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
                good=$(html.replace('{name}',obj['name'])
                            .replace('{imgsrc}',obj['imgsrc'])
                            .replace('{href}',obj['href'])
                            .replace('{price}',obj['price']));
                good.data('good-info',obj);
                goodList.appendChild(good[0]);
            });
        }).on('click','.btn-reset',function(e){
            $('.mol-ctrl-wrap').find('[type=text],[type=number],textarea,[type=upload]').each(function(){this.value='';})
            $('.mol-ctrl-wrap').find('p.uploaded-info,p.upload-ok-tip').remove();
            //$('#show-mobile').find('.mol-wrap').eq(+$('#ctrl-wrap').data('index')).data('native',null)
        })

/*
 *  宝贝列表 选择宝贝
 *  先打开模态页面,列出供选
 *  然后点击一个选中一个,加入checkedGoods数组
 *  最后点确定,直接应用到选中的宝贝列表上
 */

    // 传递给宝贝选择页面,告诉确定按钮, 选中的宝贝应用于singleList还是doubleList模块
    function post_ctrl_id(the){
        $('#checked_done').data('for-ctrlid',
            $(the).parent().attr('ctrlid')
        );
    }

    // 载入宝贝列表
    function goods_list_instance(datas,rowCount){
        var html_wrap,html_good,div=$('<div>');
        if(rowCount==1){
            html_wrap='<div class="" molid="singleGood"></div>';
            html_good='<a class="singleGood-wrap-one"  molid="singleGood" ng-href="{href}"> <img src="{imgsrc}" ng-src="{imgsrc}" alt=""><p>{name}</p><i>￥{price}</i></a>';
        }else{
            html_wrap='<div class="" molid="doubleGood"></div>';
            html_good='<a class="doubleGood-wrap-one"  ng-href="{href}"> <img src="{imgsrc}" ng-src="{imgsrc}" alt=""><p>{name}</p><i>￥{price}</i></a>';
        }
        var html,node_good,node_wrap=$(html_wrap)[0];
        datas.forEach(function(obj,i){
            html=html_good.replace('{name}',obj['name'])
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

    // 单个选中
    function check_it(good){
        var goodInfo=$(good).data('good-info');
        var good_tag=$('<div class="good-tag">');
        $(good).find('img').clone().appendTo(good_tag);
        good_tag.append('<i>&times;</i>');
        good_tag.data('good-info',goodInfo);
        window.checkedGoods.push(goodInfo);
        $('#good-checked-list').append(good_tag);
    }

    // 单个删除
    $('#good-checked-list').on('click','i',function(){
        var goodInfo=$(this).parent().data('good-info');
        window.checkedGoods.forEach(function(obj,i){
            if(obj.goods_id==goodInfo.goods_id){
                window.checkedGoods.splice(i,1);
            }
        });
        $(this).parent().remove();
    });

    // 选择宝贝完毕,实例化数据
    function checked_done(the){
        if($(the).data('for-ctrlid')=='doubleGoodList') {
            goods_list_instance(window.checkedGoods, 2);
        }else{
            goods_list_instance(window.checkedGoods, 1);
        }
        goods_list_cls();
    }

    // 重置 清空
    function goods_list_cls(){
        $('#good-checked-list').html('');
        $('.GoodList').html('');
        window.checkedGoods=[];
    }


    //图片上传
    var decorateUploadAction='http://seatent.com/decorate/upload';
    $(document).on('submit','.img-up-form',function(){
        // 图片检测
        var files=$('.img-up-file')[0].files;
        if(!files.length){
            return false;
        }
        for(var i=0;i<files.length;i++){
            //alert(files[i].size)
            if(files[i].size>200*1024){
                bootAlert('单张图片大小不能超过200k,请压缩后重新上传');
                return false;
            }
        }
        // h5表单多文件上传
        var data = new FormData($('#img-up-form')[0]);
        //$.ajax({
        //    url: decorateUploadAction,
        //    type: 'POST',
        //    data: data,
        //    dataType: 'JSON',
        //    cache: false,
        //    processData: false,
        //    contentType: false,
        //    success:function(res){
        //        console.log("UploadFile Success");
        //        //把回传过来的img-src地址,显示在下方,并保存到该模块对应的data中
        //        if(res.srcs){
                    var res={};
                    res.srcs=[
                        'hot2.jpg',
                        'dgtbpoopi22.jpg',
                        'sdfjifuiifug33.png',
                    ];
                    var molobj=$('#show-mobile').find('.mol-wrap').eq(+$('#ctrl-wrap').data('index')),
                        m=document.getElementsByClassName('mol-ctrl-wrap')[0],
                        fg=document.createDocumentFragment(),
                        p,arr;
                    res.srcs.forEach(function(v,i){
                        p=document.createElement('p');
                        p.className='uploaded-info';
                        p.innerHTML=v;
                        fg.appendChild(p);
                    })
                    p=document.createElement('p');
                    p.className='upload-ok-tip';
                    p.innerHTML='上传成功,地址如上.';
                    fg.appendChild(p);
                    m.appendChild(fg);
                    molobj.data('native',res.srcs);
                    $('.mol-ctrl-wrap').find('[mapid^=imgsrc]').each(function(i,val){
                        this.value=res.srcs[i]||this.value;
                    })
                    molobj.find('img')[0].src=res.srcs[0];
            //    }
            //}
        //});
        return false;
    });

    // 查看次数限制现状
    $('#btn-count').click(function(){
        console.info(window.mol_count_dic);
    });

    // 保存方法(统计当前模块排列组合的信息及其绑定的数据,此函数为操作后的最终步骤. 数据最后直接提供给api,保存成功即PC流程完成)
    $('#btn-info').click(function(){
        var json=[];
        var mols=$('#show-mobile').find('.mol-wrap');
        mols.each(function(v,i){
            json.push({
                'name':this.getAttribute('molid'),
                'data':$(this).data('native')||window.mol_val_dic['val-'+this.getAttribute('molid')]||null
            })
        });
        console.table(json);
    });




