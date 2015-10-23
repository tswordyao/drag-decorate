(function($){
    /*检测浏览器,不是chrome直接提示*/
        var isChrome = window.navigator.userAgent.indexOf("Chrome") > -1;
        if(!isChrome){
            document.body.innerHTML='<br><h2>&nbsp;您目前的浏览器不是chrome(谷歌)浏览器，不支持相关操作。 请更换浏览器后再进入本页面。<br><br>&nbsp;<a href="https://www.baidu.com/s?ie=UTF-8&wd=chrome">点击此处下载</a></h2>'
        }else {
            // 模块映射
            var get_mol = function (molid) {
                return document.getElementById('temp-' + molid).innerHTML;
            }
            // 编辑模块映射
            var get_mol_ctrl = function (molid) {
                return document.getElementById('temp-ctrl-' + molid).innerHTML;
            }
            // 模板说明映射
            var mol_tip_dic = {
                'tb-features': '品牌优势<hr>四个LOGO,醒目展现亲小店的优势',
                'hd-features': '品牌优势<hr>四个LOGO,醒目展现亲小店的优势',
                'bb-features': '品牌优势<hr>四个LOGO,醒目展现亲小店的优势',
                'hd-brands': '各大品牌LOGO陈列<hr>一个品牌一个贴图,琳琅满目,快拖进手机里看看吧~',
                'tb-category': '商品分类<hr>列出宝贝的几大类,供顾客挑选哦~',
                'bb-category': '商品分类<hr>列出宝贝的几大类,供顾客挑选哦~',
                'hd-category': '商品分类<hr>列出宝贝的几大类,供顾客挑选哦~',
                'singleGood': '这是单宝贝模块<hr>拖入手机 ,然后点击,可以在右侧自定义宝贝的信息',
                'doubleGood': '这是双宝贝模块<hr>两个宝贝并列, 拖入手机后点击,在右侧自定义宝贝的信息',
                'singlePic': '单图片模块<hr>一般选择一张宣传热图, 或者,可以一张装饰性的图片.<br>如果是纯装饰性的 ,可以不要文字和链接',
                'slideBox': '轮播图片模块<hr>也称幻灯片,可以选择多张图片(直接输入链接或上传),将在首页自动切换轮播',
                'doublePic': '并列图片<hr>一般用来做品牌区域,块状LOGO图',
                'tb-category': '4格图片<hr>一般用来做品牌或类别分类',
                'wordPic': '图文并茂<hr> 做图需要美工在左侧纯色或留白',
                'bannerPic': '横幅图片<hr>醒目的广告宣传横图,独占一行,可以放入多幅',
                'titleOnly': '纯文字的标题<hr>用于分段标注',
                'wordOnly': '纯粹的文字<hr>说一些你想跟卖家说的话吧',
                'contract': '您的联系方式<hr>写上电话卖家更容易联系到你',
                'singleGoodList': '宝贝列表模块<hr>多行, 每行展示一个宝贝,包括图片,文字介绍和价格.<br>具体设置请拖入手机后, 单击手机内该模块',
                'doubleGoodList': '宝贝列表模块<hr>多行, 每行展示两个宝贝,包括图片,文字介绍和价格.<br>具体设置请拖入手机后, 单击手机内该模块',
            }
            // 模块默认值映射
            var mol_val_dic = {
                "val-singleGood": {
                    href: '#',
                    picPath: 'img/decorate/re-good.jpg',//   真实目录为../../img/   CSS真实图片目录为../img
                    name: '宝乐滋3罐超值特价装!',
                    price: 92.00
                },
                "val-doubleGood": {
                    href: '#',
                    picPath: 'img/decorate/good17.jpg',
                    name: '漂亮的女童裤子 纯棉',
                    price: 56.00,
                    href2: '#',
                    picPath2: 'img/decorate/good13.jpg',
                    name2: '小脚裤子批发 颜色多',
                    price2: 52.00
                },
                "val-wordPic": {
                    href: '#',
                    imgsrc: 'img/decorate/word-pic.jpg',
                    desc: '图片描述文字,一些文字,怕怕拉拉,什么的<br>或者,图片可以做成100%<br>文字遮罩在图片左上角<br>这需要图片设计配合<br>左上角统一色调或留白',
                },
                "val-slideBox": [{href: '#', imgsrc: 'img/decorate/slide.jpg'}, {href: '#', imgsrc: 'img/decorate/slide2.jpg'}, {
                    href: '#',
                    imgsrc: 'img/decorate/slide3.jpg'
                }],
                "val-singlePic": {
                    href: '#',
                    imgsrc: 'img/decorate/baby-house.jpg',
                    desc: '婴童夏装换季清仓中! 点击进入专区!',
                },
                "val-doublePic": {
                    href: '#',
                    imgsrc: 'img/decorate/baby-joy01.jpg',
                    desc: '童车特价中! 点击进入专区!',
                    href2: '#',
                    imgsrc2: 'img/decorate/baby-joy02.jpg',
                    desc2: '玩具特价! 点击进入专区!',
                },
                "val-tb-category": {
                    href: '#',
                    imgsrc: 'img/decorate/area-logo-01.jpg',
                    desc: 'LOGO AREA<br>奶粉专区',
                    href2: '#',
                    imgsrc2: 'img/decorate/area-logo-02.jpg',
                    desc2: 'LOGO AREA<br>日用品专区',
                    href3: '#',
                    imgsrc3: 'img/decorate/area-logo-03.jpg',
                    desc3: 'LOGO AREA<br>尿不湿专区',
                    href4: '#',
                    imgsrc4: 'img/decorate/area-logo-04.jpg',
                    desc4: 'LOGO AREA<br>妈妈专区',
                },
                "val-bannerPic": {imgsrc: "img/decorate/banner.jpg", href: '#'},
                "val-bb-category": {imgsrc: "img/decorate/masonry.png"},
                "val-bb-features": {imgsrc: "img/decorate/bb-features.png"},
                "val-titleOnly": {title: '推荐宝贝'},
                "val-wordOnly": {desc: '欢迎光临小店!<br>本店的所有商品都是真宗境外海淘<br>海关保税仓发货, 优惠多多, 还有包邮,欢迎亲多多选购~~~ '},
                "val-contract": {tel: window.telphoneAccount||'1381396655', wechat: window.wechatAccount||'weixina2017006'},
                "val-hd-category": {
                    href: '1100',
                    imgsrc: 'img/decorate/area-logo-01.jpg',
                    desc: 'LOGO AREA<br>奶粉专区',
                    href2: '1200',
                    imgsrc2: 'img/decorate/area-logo-02.jpg',
                    desc2: 'LOGO AREA<br>日用品专区',
                    href3: '1300',
                    imgsrc3: 'img/decorate/area-logo-03.jpg',
                    desc3: 'LOGO AREA<br>尿不湿专区',
                    href4: '1700',
                    imgsrc4: 'img/decorate/area-logo-04.jpg',
                    desc4: 'LOGO AREA<br>妈妈专区',
                }
            };
            // 模块使用数限制状态机
            var mol_count_dic = {
                'tb-features': 2,
                'bb-features': 2,
                'hd-features': 2,
                'tb-category': 2,
                'bb-category': 2,
                'hd-category': 2,
                'hd-brands': 2,
                'singleGood': 16,
                'doubleGood': 12,
                'slideBox': 1,
                'singlePic': 16,
                'bannerPic': 16,
                'doublePic': 2,
                'wordPic': 3,
                'wordOnly': 3,
                'titleOnly': 12,
                'contract': 2,
                'singleGoodList': 1,
                'doubleGoodList': 1
            };
            // 模板组合映射
            var templates = {
                'tempDefault': ['singlePic', 'wordOnly', 'hd-brands', 'titleOnly', 'singleGoodList', 'contract'],
                tbstyle: [{name: 'singlePic'},
                    {name: 'wordOnly'},
                    {name: 'tb-features'},
                    {name: 'titleOnly', data: {title: '热门品类'}},
                    {name: 'tb-category'},
                    {name: 'titleOnly'},
                    {name: 'doubleGoodList'},
                    {name: 'contract'}],
                bbstyle: [{name: 'slideBox'},
                    {name: 'bb-features'},
                    {name: 'bb-category'},
                    {name: 'titleOnly', data: {title: '热门推荐'}},
                    {name: 'bannerPic'},
                    //{name: 'bannerPic', data: {imgsrc: "img/decorate/banner2.jpg", href: '#'}},
                    //{name: 'bannerPic', data: {imgsrc: "img/decorate/banner3.jpg", href: '#'}},
                    //{name: 'bannerPic', data: {imgsrc: "img/decorate/banner4.jpg", href: '#'}},
                    //{name: 'bannerPic', data: {imgsrc: "img/decorate/banner5.jpg", href: '#'}},
                    {name: 'titleOnly', data: {title: '热销宝贝'}},
                    //{name: 'singleGood'},
                    //{
                    //    name: 'singleGood', data: {
                    //    href: '#',
                    //    picPath: 'img/decorate/re-good2.jpg',
                    //    name: '秋装新款 童装毛衣 外贸出口!',
                    //    price: 52.00
                    //}
                    //},
                    //{
                    //    name: 'singleGood', data: {
                    //    href: '#',
                    //    picPath: 'img/decorate/re-good3.jpg',
                    //    name: '宝宝的小屁屁最好的呵护~~~ 金装尿不湿!',
                    //    price: 168.00
                    //}
                    //},
                    //http://120.26.112.178/statics/attachment/adv/201508251149578842.jpg
                    //http://120.26.112.178/statics/attachment/adv/201508251149362020.jpg
                    //http://120.26.112.178/statics/attachment/adv/201508251149126985.jpg

                    {
                        name: 'singleGood', data: {
                        href: '#',
                        picPath: 'http://120.26.112.178/statics/attachment/adv/201508251150129137.jpg',//'img/decorate/re-good2.jpg',
                        name: '德国 碧然德 滤水壶,给健康的限时特价!',
                        price: 168.00
                    }
                    },
                    {
                        name: 'singleGood', data: {
                        href: '#',
                        picPath: 'http://120.26.112.178/statics/attachment/adv/201508251150511809.jpg',//'img/decorate/re-good2.jpg',
                        name: '荷兰牛栏三段,市场优选!',
                        price: 252.00
                    }
                    },
                    {
                        name: 'singleGood', data: {
                        href: '#',
                        picPath: 'http://120.26.112.178/statics/attachment/adv/201508251150338462.jpg',//'img/decorate/re-good3.jpg',
                        name: '宝宝的小屁屁最好的呵护~~~ 金装尿不湿!',
                        price: 268.00
                    }
                    },
                    {name: 'titleOnly'},
                    {name: 'doubleGoodList'},
                    {name: 'contract'}],
                hdstyle: [{name: 'slideBox', data: [{href: '#', imgsrc: 'img/decorate/hot.jpg'}, {href: '#', imgsrc: 'img/decorate/hot2.jpg'}]},
                    {name: 'hd-features'},
                    {name: 'titleOnly', data: {title: '品牌馆'}},
                    {name: 'hd-brands'},
                    {name: 'titleOnly', data: {title: '热门分类'}},
                    {name: 'hd-category'},
                    {name: 'titleOnly'},
                    {name: 'singleGoodList'},
                    {name: 'contract'}]
            };
            // 后台接口,获取宝贝数据
            var actionSearch = 'http://localhost:3000/goods';
            var decorateSaveAction = 'http://localhost:3000/shopDataSave';
            var decorateUploadAction = 'http://localhost:8080/goods/appUploadShopPic';
            //var decorateUploadAction = '../../goods/appUploadShopPic';
            //var actionSearch='../../goods/appGoodsList';
            //var decorateSaveAction='../../goods/appSaveDecoration';
            //var actionSearch = getContextPath() + '/goods/appGoodsList';
            //var decorateSaveAction = getContextPath() + '/goods/appSaveDecoration';
            //var decorateUploadAction = getContextPath() + '/goods/appUploadShopPic';
            //var decorateContentAction = getContextPath() + '/goods/appShopDecoration';

            // 先打开宝贝选择页面, 然后选择想要赋值给宝贝列表的宝贝们, 假设这些是后台选取的宝贝数据
            var gotGoods = [];
            // 选中的宝贝
            var checkedGoods = [];

            /* 以下是交互方法 */
            // 写一个通用的alert提示,bootstrap样式
            var bootAlert=function(str, holdTime) {
                $('.alert-assertive').fadeIn(300, function () {
                    setTimeout((function () {
                        $(this).fadeOut(600);
                    }).bind(this), holdTime || 2400);
                }).html(function (i, old) {
                    return str;
                });
                return false;
            };

            $('.alert-assertive').click(function(){
                $(this).hide();
            });

            $('.main-help>.close').click(function(){
                $(this).parent().after('<hr>').hide();
            });

            // 自动装载模板组合中的各模块, 此函数为模板载入的关键依赖
            var autoAppendNodes=function(tempid) {
                //var indexOfGoodlist;
                if (typeof tempid == 'undefined' || !tempid) {
                    return false;
                }
                var html, defaultVals, div, i, k, name, data, mobile = $('#show-mobile')[0];
                var mols = templates[tempid] || [];

                // 获取模板HTML和默认数据, 并实例化
                for (i = 0; i < mols.length; i++) {
                    name = mols[i].name;
                    data = mols[i].data || mol_val_dic['val-' + name];
                    html = get_mol(name);
                    if (name == 'slideBox') {
                        html = html.replace('{imgsrc}', data[0]['imgsrc']).replace('{href}', data[0]['href']);
                    } else if(name.lastIndexOf('GoodList')>-1){
                        data=data||gotGoods.slice(0, 12);
                        html=html.replace('{content}',goods_list_instance(data, name.indexOf('single')==0?1:2));
                    } else {
                        for (k in data) {
                            html = html.replace('{' + k + '}', data[k]);
                        }
                    }
                    // 转为节点, 加上按钮, 插入
                    div = $(html)[0];
                    div.innerHTML += '<a class="go-recycle">删除</a><a class="go-up">移上</a><a class="go-down">移下</a>';
                    mobile.appendChild(div);
                    $(div).data('native', data);
                    mol_count_dic[div.getAttribute('molid')] -= 1;
                }

                /*自动装载宝贝列表,目前只支持一个页面存在一个宝贝列表
                    mols.forEach(function (v, i) {
                        if (v.name.indexOf('GoodList') != -1) {
                            indexOfGoodlist = i;
                        }
                    })

                $('#ctrl-wrap').data('index', indexOfGoodlist);
                var listType = $('#show-mobile').find('.mol-wrap').eq(indexOfGoodlist).attr('molid') == 'singleGoodList' ? 1 : 2;

                //默认给宝贝列表装载最前的16个宝贝,后端建议默认按热销排行
                goods_list_instance(gotGoods.slice(0, 16), listType);
                */

                // 默认隐藏上下调整小按钮
                $('.go-recycle,.go-up,.go-down').hide();
            }

            // 载入组合模板
            $('[tempid]').on('click', function () {
                var tempid=$(this).attr('tempid');
                var str;
                if(tempid==''){
                    str='\n确定清空? \n\n将清除页面当前的装修预览.\n ';
                }else{
                    str='\n确定应用此模版? \n\n替换页面当前的装修预览.\n '
                }
                if(!confirm(str)){
                    return false;
                }
                // 先清空
                $('#show-mobile').find('.mol-wrap').each(function () {
                    $(this).remove();
                    mol_count_dic[this.getAttribute('molid')]++;
                });
                $('#ctrl-wrap').empty();
                //再载入
                autoAppendNodes(tempid);
                $('.submit-reset-wrap').hide();
                $('#mols-modal').modal('hide');
                bootAlert('操作成功',600);
            });

            // 拖拽方法(拖入的容器上定义的部分)
            $('#show-mobile').on('drop', function (e) {
                // 拖放完成,先取消默认事件
                event.preventDefault();
                // 再提取传递的信息
                var tagName = event.dataTransfer.getData("Text");
                var molid = tagName.replace('tag-', '');
                // 找到蓝顶标记的参照元素
                var target = $('.mol-wrap').filter('.blue-top')[0];
                // 超限控制及提示
                if (!mol_count_dic[molid] && tagName.indexOf('tag') == 0) { //防止内部拖动出现提示
                    bootAlert('该组件的使用次数已达上限。');
                    return false;
                }
                // 获取模板HTML和默认数据, 将其实例化
                var html = get_mol(molid);
                var defaultVals = mol_val_dic['val-' + molid];
                if (molid == 'slideBox') {
                    html = html.replace('{imgsrc}', defaultVals[0]['imgsrc']).replace('{href}', defaultVals[0]['href']);
                } else if(molid.lastIndexOf('GoodList')>-1){
                    html=html.replace('{content}',goods_list_instance(gotGoods.slice(0, 8), molid.indexOf('single')==0?1:2));
                } else {
                    for (var k in defaultVals) {
                        html = html.replace('{' + k + '}', defaultVals[k]);
                    }
                }
                // 转为节点, 加上按钮, 插入
                var div = $(html)[0]; //因为是根据tag上传来的molid来取的html,因此并不支持内部拖动
                div.innerHTML += '<a class="go-recycle">删除</a><a class="go-up">移上</a><a class="go-down">移下</a>';
                // 判断参照元素是否存在,不存在就直接插入最后面
                target ? this.insertBefore(div, target) : this.appendChild(div);
                //更新计数器, 去除插入位置蓝顶标记, 重置右侧编辑区
                mol_count_dic[div.getAttribute('molid')]--;
                $('.mol-wrap').removeClass('blue-top');
                $('#ctrl-wrap')[0].innerHTML = '';
            })
                .on('dragenter', function (e) {
                    //console.info('dragenter!');
                })
                .on('dragover', function (e) {
                    // 拖入区域,准备放置...
                    event.preventDefault();
                    // 先清空上次的标记
                    $('.mol-wrap').removeClass('assertive');
                    $('.mol-wrap').removeClass('blue-top');
                    //鼠标所处的已有模块打上蓝顶标记,表示松手即放置其上
                    $(event.target).parents('.mol-wrap').eq(0).addClass('blue-top');
                });

            // 拖拽方法(被拖动控件上定义的部分)
            $('.mol-tag').on('selectstart', function (e) {
                return false;
            })
                .on('dragstart', function (e) {
                    // 绑定传入值
                    event.dataTransfer.setData("Text", this.id);
                })
                .on('dragend', function (e) {
                    // 取消默认事件
                    event.preventDefault();
                    // 隐藏提示框,清空内容
                    $('.mol-tip').fadeOut(300, function () {
                        $(this).html('<div class="arrow"></div>')
                    });
                    // 未点击不出现编辑按钮
                    $('.submit-reset-wrap').css('visibility','hidden');
                })
                .on('mouseover', function () {
                    $('.mol-tip').html('<div class="arrow"></div>');
                    // 显示提示框,设置内容
                    var the = this;
                    $('.mol-tip').show().css('opacity', 0).animate({
                        top: $(the).offset().top-80,
                        opacity: 0.9
                    },'fast', function () {
                        $(this).html(function (i, old) {
                            return '<div class="arrow"></div>' + mol_tip_dic[this.id.replace('tag-', '')]
                        }.bind(the));
                    });
                })
                .on('mouseleave', function () {
                    // 隐藏提示框,清空内容
                    $('.mol-tip').html('<div class="arrow"></div>').hide()
                })
                .on('mousedown', function () {
                    // 隐藏提示框,清空内容
                    $('.mol-tip').fadeOut(300, function () {
                        $(this).html('<div class="arrow"></div>')
                    });
                })

            // 上下移动,删除,和点击开始编辑模块数据( 模块交互操作的关键方法! )
            $('#show-mobile').on('selectstart', '.go-down,.go-up,.go-recycle', function (e) {
                return false;
            })
                .on('click', '.go-recycle', function (e) {
                    event.preventDefault();
                    $(this.parentNode).remove();
                    setTimeout(function(){
                        $('#ctrl-wrap').empty();
                        $('.submit-reset-wrap').hide();
                    },100)
                    mol_count_dic[this.parentNode.getAttribute('molid')] += 1;
                })
                .on('click', '.go-down', function (e) {
                    event.preventDefault();
                    var parent = this.parentNode;
                    var next = parent.nextSibling;
                    if (next == null) {
                        return false;
                    }
                    var grand = $('#show-mobile')[0];
                    var prev = parent.previousSibling;
                    var next2 = next.cloneNode(true);
                    grand.removeChild(next);
                    grand.insertBefore(next2, parent);
                })
                .on('click', '.go-up', function (e) {
                    event.preventDefault();
                    var parent = $(this).parent();
                    var prev = parent.prev();
                    if (prev.length < 1) {
                        return false;
                    }
                    var prev2 = prev.clone();
                    var next = parent.next();
                    prev.remove();
                    next.length ? next.before(prev2) : $('#show-mobile').append(prev2);
                })
                .on('mouseover', '.mol-wrap', function (e) {
                    $(this).find('.go-down,.go-up,.go-recycle').show();
                })
                .on('mouseleave', '.mol-wrap', function (e) {
                    $(this).find('.go-down,.go-up,.go-recycle').hide();
                })
                // 选中块开始编辑(自定义模块数据的关键依赖)
                .on('click', '.mol-wrap', function (e) {
                    $('.submit-reset-wrap').css('visibility','visible');
                    var molid = this.getAttribute('molid');
                    var obj = $(this).data('native') || mol_val_dic['val-' + molid];
                    var key;
                    //高亮当前选中块
                    $('.mol-wrap').removeClass('assertive');
                    $(this).addClass('assertive');
                    //记录下当前编辑节点的索引
                    $('#ctrl-wrap').data('index', $(this).index() - 3)
                        //载入节点对应的编辑模块
                        .html(get_mol_ctrl(molid));
                    //编辑模块再载入节点当前数据
                    if (molid == 'slideBox') {
                        var arr = obj;
                        $('.mol-ctrl-wrap').find('[mapid^=imgsrc]').each(function (i, val) {
                            arr[i] ? this.value = arr[i].imgsrc || '' : void(0);
                        })
                        $('.mol-ctrl-wrap').find('[mapid^=href]').each(function (i, val) {
                            arr[i] ? this.value = arr[i].href || '' : void(0);
                        })
                    } else {
                        $('.mol-ctrl-wrap').find('input,textarea').each(function () {
                            key = this.getAttribute('mapid') || 'none';
                            if (obj && obj[key])
                                this.innerText ? this.innerText = obj[key] : this.value = (obj[key] + '').replace(/\<br\>/gm, '\n');
                        });
                    }
                    $('.submit-reset-wrap').show();
                })
            // hide it when init
            $('.submit-reset-wrap').hide();

            // 右侧编辑确定后处理数据( 自定义数据的关键方法! )
            $('#ctrl-area')
                // 编辑完成
                .on('click', '.submit', function (e) {
                    var molid = $('.mol-ctrl-wrap').attr('ctrlid'),
                        html = get_mol(molid),
                        key,
                        obj = {},
                        molobj = $('#show-mobile').find('.mol-wrap').eq(+$('#ctrl-wrap').data('index'));
                    //获取并用键值对保存编辑区数据
                    if (molid.indexOf('GoodList')>-1){
                        return false;
                    } else if (molid == 'slideBox') {
                        obj = [];
                        $('.mol-ctrl-wrap').find('[mapid^=imgsrc]').each(function (i, val) {
                            if(this.value.length>4){
                                obj[i] = {imgsrc: this.value};
                            }else{
                                obj[i] ={};
                            }
                        })
                            .end().find('[mapid^=href]').each(function (i, val) {
                                (typeof(obj[i]) == 'object' && obj[i].imgsrc) ? (obj[i].href = this.value || '') : void(0);
                            });
                        //实例化HTML内容
                        html = html.replace('{imgsrc}', obj[0]['imgsrc']).replace('{href}', obj[0]['href']);
                    } else {
                        $(this.parentNode).prev().find('input,textarea').each(function () {
                            key = this.getAttribute('mapid') || 'none';
                            this.innerText ? obj[key] = this.innerText : obj[key] = this.value.replace(/\n/gm, '<br>');
                        });
                        //实例化HTML内容
                        for (var k in obj) {
                            html = html.replace('{' + k + '}', obj[k]);
                        }
                    }
                    //console.log(obj)
                    //更新模板默认数据和选中块数据
                    //mol_val_dic['val-'+molid]=obj;

                    //保存原始数据
                    molobj.data('native', obj);

                    //别忘了加上按钮
                    molobj.html($(html)[0].innerHTML + '<a class="go-recycle">删除</a><a class="go-up">移上</a><a class="go-down">移下</a>');
                })
                // 打开模态页时,载入goods数组
                .on('click', '.show-good-list', function () {
                    goods_list_cls();
                    fillGoods();
                }).on('click', '.reset', function (e) {
                    $('.mol-ctrl-wrap').find('[type=text],[type=number],textarea,[type=file],[type=color]').each(function () {
                        this.value = '';
                    })
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
            window.post_ctrl_id=function post_ctrl_id(the) {
                $('#checked_done').data('for-ctrlid',
                    $(the).parent().attr('ctrlid')
                );
            }

            // 载入到宝贝列表模块
            window.goods_list_instance=function goods_list_instance(datas, rowCount) {
                var html_wrap, html_good, div = $('<div>');
                if (rowCount == 1) {
                    html_wrap = '<div class="" molid="singleGood"></div>';
                    html_good = '<a class="singleGood-wrap-one"  molid="singleGood" > <img src="{picPath}" ><p>{name}</p><i>￥{price}</i></a>';
                } else {
                    html_wrap = '<div class="" molid="doubleGood"></div>';
                    html_good = '<a class="doubleGood-wrap-one"  > <img src="{picPath}" ><p>{name}</p><i>￥{price}</i></a>';
                }
                var html, node_good, node_wrap = $(html_wrap)[0];
                datas.forEach(function (obj, i) {
                    html = html_good.replace('{name}', obj['name'])
                        .replace('{picPath}', obj['thumbnail'] || obj['picPath'])
                        .replace('{href}', obj['href'])
                        .replace('{price}', obj['price']);
                    node_good = $(html)[0];
                    if (rowCount == 1) {
                        div[0].appendChild(node_good);
                    } else {
                        //每两个good重生成一个包裹
                        if (i % 2 == 0) {
                            node_wrap = $(html_wrap)[0];
                        }
                        node_wrap.appendChild(node_good);
                        //每装两个good,一个包裹饱和,插入到div
                        if (i % 2 != 0 || i == datas.length - 1) {
                            div[0].appendChild(node_wrap);
                        }
                    }
                });
                //// 找到要应用的元素
                //molobj = $('#show-mobile').find('.mol-wrap').eq(+$('#ctrl-wrap').data('index'));
                // 查看全部宝贝
                var allGoodsHref = '<a class="all-goods-href">查看所有宝贝&nbsp;&gt;&gt;</a>'
                //molobj.html(div.html() + allGoodsHref + '<a class="go-recycle">删除</a><a class="go-up">移上</a><a class="go-down">移下</a>');
                //// 同时保存原始数据
                //molobj.data('native', datas);
                return div.html() + allGoodsHref;
            }

            //宝贝搜索
            $('.btn-search').click(function () {
                fillGoods(1);
            });

            // 单个选中
            window.check_it=function check_it(good) {
                var goodCheckedList = $('#good-checked-list');
                var goodInfo = $(good).data('good-info');
                var good_tag = $('<div class="good-tag">');
                $(good).find('img').clone().appendTo(good_tag);
                good_tag.append('<i>&times;</i>');
                good_tag.data('good-info', goodInfo);
                checkedGoods.push(goodInfo);
                if (goodCheckedList.children().length < 20) {
                    goodCheckedList.append(good_tag);
                } else {
                    bootAlert('首页推荐宝贝列表最多装载20个, 其余的可点击[全部宝贝]查看');
                }
            }

            // 单个删除
            $('#good-checked-list').on('click', 'i', function () {
                var goodInfo = $(this).parent().data('good-info');
                checkedGoods.forEach(function (obj, i) {
                    if (obj.goods_id == goodInfo.goods_id) {
                        checkedGoods.splice(i, 1);
                    }
                });
                $(this).parent().remove();
            });

            // 选择宝贝完毕,实例化数据
            window.checked_done=function checked_done(the) {
                // 找到要应用的元素
                var molobj = $('#show-mobile').find('.mol-wrap').eq(+$('#ctrl-wrap').data('index'));
                var count;
                ($(the).data('for-ctrlid') == 'doubleGoodList') ? count=2 : count=1;
                // 更新宝贝列表内容
                molobj.html(goods_list_instance(checkedGoods, count) + '<a class="go-recycle">删除</a><a class="go-up">移上</a><a class="go-down">移下</a>');
                // 同时保存原始数据
                molobj.data('native', checkedGoods);
                goods_list_cls();
            }

            // 清空选择的宝贝
            window.goods_list_cls=function goods_list_cls() {
                $('#good-checked-list').html('');
                $('.good-list').html('');
                checkedGoods = [];
            }


            $.ajax(actionSearch).always(function (res) {
                if (res.result) {
                    gotGoods = res.data;
                }
            });


            //$.post(actionSearch,{pageSize:20,pageNum:1,keyword:''},function(resp){
            //    resp=JSON.parse(resp);
            //    if(resp.result==1){
            //       window.gotGoods=resp.data;
            //    }else{
            //       window.gotGoods=[];
            //    }
            //});

            // 装载宝贝到待选页面
            window.fillGoods=function fillGoods(pageNum) {
                var keyword = $('#keyword-for-search').val();
                //$.post(actionSearch,{pageSize:20,pageNum:pageNum||1,keyword:keyword},function(resp){
                //resp=JSON.parse(resp)
                $.ajax({
                    url: actionSearch,
                    data: {pageSize: 20, pageNum: pageNum || 1, keyword: keyword},
                    type: 'post'
                }).always(function (resp) {
                    //console.info(resp)
                    if (resp.result == 1) {
                        var html = $('#temp-good-cell').html();
                        var goodList = $('.good-list');
                        var good;
                        //先置空
                        goodList.html('');
                        //载入宝贝数组
                        resp.data.forEach(function (obj, i) {
                            good = $(html.replace(/\{name\}/gm, obj['name'])
                                .replace('{picPath}', obj['thumbnail'] || obj['picPath'])
                                .replace('{href}', '#/tab/goods/' + obj['goodsId'])
                                .replace('{price}', obj['price']));
                            good.data('good-info', obj);
                            goodList.append(good);
                        });
                        //更新页码显示
                        $('#now-pagenum').text(resp.page.pageNum);
                        $('#total-pagenum').text(resp.page.pageCount);
                    } else {
                        console.info(resp);
                        //$('#total-pagenum,#now-pagenum').text('0');
                    }
                })
            }

            //下一页
            $('.go-next').click(function () {
                var nowPageNum = +$('#now-pagenum').text();
                if (nowPageNum == $('#total-pagenum').text()) {
                    return false;
                }
                fillGoods(nowPageNum + 1);
            })

            //上一页
            $('.go-prev').click(function () {
                var nowPageNum = +$('#now-pagenum').text();
                if (nowPageNum < 2) {
                    return false;
                }
                fillGoods(nowPageNum - 1);
            })

            //第一页
            $('.go-first').click(function () {
                var nowPageNum = +$('#now-pagenum').text();
                if (nowPageNum == 1 || nowPageNum == 0) {
                    return false;
                }
                fillGoods(1);
            })

            //最后一页
            $('.go-last').click(function () {
                var nowPageNum = +$('#now-pagenum').text();
                var totalCount = +$('#total-pagenum').text();
                if (nowPageNum == totalCount) {
                    return false;
                }
                fillGoods(totalCount);
            })

            //图片上传
            $(document).on('submit', '.img-up-form', uploadimg);
            $(document).on('change', '[type=file]', uploadimg);

            function uploadimg() {
                // 图片检测
                var files = $('.img-up-file')[0].files;
                if (!files.length) {
                    return false;
                } else if (files.length > 5) {
                    bootAlert('最多上传5张图片');
                    return false;
                }
                for (var i = 0; i < files.length; i++) {
                    //alert(files[i].size)
                    if (files[i].size > 200 * 1024) {
                        bootAlert('单张图片大小不能超过200k,请压缩后重新上传');
                        return false;
                    }
                }
                // h5表单多文件上传
                var data = new FormData($('.img-up-form')[0]);

                $.ajax({
                    url: decorateUploadAction,
                    type: 'POST',
                    data: data,
                    dataType: 'JSON',
                    cache: false,
                    processData: false,
                    contentType: false,
                    success: function (res) {
                        if (res.result == 1) {
                            res.srcs = res.data;
                        } else {
                            console.info(res);
                            res.srcs = [];
                        }
                        //把回传过来的img-src地址,显示在下方,并保存到该模块对应的data中
                        if (res.srcs) {
                            var molobj = $('#show-mobile').find('.mol-wrap').eq(+$('#ctrl-wrap').data('index')),
                                m = document.getElementsByClassName('mol-ctrl-wrap')[0],
                                fg = document.createDocumentFragment(),
                                p, arr;
                            /*
                             res.srcs.forEach(function(v,i){
                             p=document.createElement('p');
                             p.className='uploaded-info';
                             p.innerHTML=v;
                             fg.appendChild(p);
                             })
                             p=document.createElement('p');
                             p.className='upload-ok-tip';
                             p.innerHTML='上传成功,图片地址如上,已经自动填入.';
                             fg.appendChild(p);
                             m.appendChild(fg);
                             */
                            molobj.data('native', res.srcs);
                            $('.mol-ctrl-wrap').find('[mapid^=imgsrc]').each(function (i, val) {
                                this.value = res.srcs[i] || this.value;
                                if (i < res.srcs.length) {
                                    $(this).css('background', '#fbb');
                                }
                                //setTimeout(function(){$(this).css('background','');}.bind(this),5600)
                            })
                            molobj.find('img')[0].src = res.srcs[0];
                            bootAlert('上传成功,图片地址已经自动填入文本框.', 2400);
                            $('.img-up-file')[0].value = null;
                        }
                    }
                });
                return false;
            }

            // 查看次数限制现状
            $('#btn-count').click(function () {
                console.info(mol_count_dic);
            });
			
            // 保存方法(统计当前模块排列组合的信息及其绑定的数据,此函数为操作后的最终步骤. 数据最后直接提供给api,保存成功即PC流程完成)
            function makeJson(){
		        // goodsid数组
		        var goodsIdArr=[];
		        var goodsIdObj={};
                var molid;
                var json = [];
                var mols = $('#show-mobile').find('.mol-wrap');
                mols.each(function (v, i) {
                    molid = this.getAttribute('molid');
                    if (molid == "tb-category") {
                        $(this).data('native', null);
                    }else if(molid.lastIndexOf('GoodList')>-1){
                        $(this).data('native',  $(this).data('native') || gotGoods.slice(0, 8));
	                    $(this).data('native').forEach(function(goods){
	                        goodsIdObj[goods.goods_id+'']='';
	                    });
                    }
                    json.push({
                        'name': molid,
                        'data': $(this).data('native') || mol_val_dic['val-' + molid] || null
                    })
                });
                for(var n in goodsIdObj){
                    goodsIdArr.push(n);
                }
                console.log(goodsIdArr);
                console.table(json);
                return {content:JSON.stringify(json),goods_id_arr:goodsIdArr};
            }

            $('.btn-save').click(function () {
                if(!confirm('\n确定发布? \n\n将把店铺首页更新为当前页面的布置\n')){
                    return false;
                }
				var wrap=makeJson();
                var jsonstr = wrap.content;
                var shopId = $('#shopId-inp').val();
                var shopName = $('#shopName-inp').val();
                $.post(decorateSaveAction, {shopId: shopId||'',shopName: shopName||'' , content: jsonstr , goodsIds:wrap.goods_id_arr.join(',')}).always(function (res) {
                    console.info(res);
                    if(res.result){
                        localStorage.hdDecorateTempSaveData='';
                        bootAlert('<b>发布成功!</b><a href="#" target="_blank">&nbsp;&nbsp;&nbsp;立刻前往我的店铺查看效果</a>'.replace('#',$('#goto-shop')[0].href),9999)
                        //if(confirm('发布成功! 立刻前往我的店铺查看效果?')){
                        //    $('.temp-save')[0].click();
                        //}
                    }else if(res.resul.msg='session过期'){
                        //暂存一下
                        localStorage.hdDecotateTempSaveData=jsonstr;
                        //提示刷新
                        bootAlert('登陆状态过期,请刷新重新登陆!')
                    }
                })
                /*
                 $.ajax({
                 url:decorateSaveAction,
                 data:{shopId:7888996,content:jsonstr},
                 dataType:'json',
                 success:function(res){
                 console.info(res)
                 }
                 })
                 */
            });

			window.init_current=function init_current(mols){   
                var html, defaultVals, div, i, k, name, data, mobile = $('#show-mobile')[0];
                var mols = mols || [];
        
                // 获取模板HTML和默认数据, 并实例化
                for (i = 0; i < mols.length; i++) {
                	if(mols[i].data=='null'){
                		mols[i].data=null;
                	}
                    name = mols[i].name;
                    data = mols[i].data || mol_val_dic['val-' + name];
                    html = get_mol(name);
                    if (name == 'slideBox') {
                        html = html.replace('{imgsrc}', data[0]['imgsrc']).replace('{href}', data[0]['href']);
                    } else if(name.lastIndexOf('GoodList')>-1){
                        data=data||gotGoods.slice(0, 12);
                        html=html.replace('{content}',goods_list_instance(data, name.indexOf('single')==0?1:2));
					}else {
                        for (k in data) {
                            html = html.replace('{' + k + '}', data[k]);
                        }
                    }
                    // 转为节点, 加上按钮, 插入
                    div = $(html)[0];
                    div.innerHTML += '<a class="go-recycle">删除</a><a class="go-up">移上</a><a class="go-down">移下</a>';
                    mobile.appendChild(div);
                    $(div).data('native', data);
                    mol_count_dic[div.getAttribute('molid')] -= 1;
                }
                $('.go-recycle,.go-up,.go-down').hide();
                return true;
		}

            // 暂存
            $('.temp-save').click(function(){
                var jsonstr = makeJson().content;
                localStorage.hdDecorateTempSaveData=jsonstr;
                bootAlert('暂存成功,下次本机打开可以继续编辑.',600)
            })

            // 关闭帮助 与 显示帮助
            var closeHelp=function(showAnimate){
                var flag=$('#never-again')[0].checked;
                flag && (localStorage.hdDecorateHelpKnew=1);
                $('.mask-main').hide();
                $('#main').removeClass('blur');
                if(showAnimate===true){
                    $('#helps p').animate({width:0,height:30},300,function(){
                        $(this).hide(200);
                    })
                }else{
                    $('#helps p').hide();
                }

            }
            var showHelp=function(showMask){
                $('#helps').show();
                $('#helps p').css({width:208,height:118}).show();
                (showMask===true) && $('.mask-main').show();
                $('#main').addClass('blur');
            }
            var toggle=function(){$('#btn-help').mouseenter(showHelp).mouseleave(closeHelp);};
            $('#helps .btn,.mask-main').on('click',function() {
                closeHelp(true);
                toggle();
            });
            $('document').ready(function(){
                (localStorage.hdDecorateHelpKnew==1) ? toggle(): showHelp(true);
            });

            $(function(){
                localStorage.hdDecorateTempSaveData && init_current(JSON.parse(localStorage.hdDecorateTempSaveData)) && bootAlert('载入成功!&nbsp;&nbsp;&nbsp;已经恢复上次暂存的布置,&nbsp;亲可以继续编辑.');
            });
        }
})(window.jQuery)

    
    
    
    
    
    
