<#assign contextPath = request.contextPath>
<#if (appSettings.assetsPath)?has_content>
<#assign contextPath = appSettings.assetsPath>
</#if>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="Generator" content="EditPlus®">
<meta name="Author" content="">
<meta name="Keywords" content="">
<meta name="Description" content="">
<title>海带分销-店铺装修</title>
<script>function getContextPath() {return '${contextPath}';}</script>
<script src="${contextPath}/assets/lib/js/jquery.min.js"></script>
<link rel="stylesheet"  href="${contextPath}/assets/css/decorate.css"/>
</head>
<body ng-app="dsale" ng-controller="dsaleCtrl">

    <!-- nav bar-->
    <nav class="navbar navbar-inverse navbar-abstract-top decorate-navbar" role="navigation"><!---navbar-fixed-top就是固定上方,注意下面元素留出上边距-->
      <div class="navbar-header">
         <@hd.a class="navbar-brand" text="店铺首页装修&nbsp;|" href="/decorate/index" />
         <a class="navbar-brand btn-save"                href="#">保存</a>
         <!--<a class="navbar-brand"  id="btn-count"         href="#">状态</a>-->
         <!--<a class="navbar-brand"  tempid="tempDefault"  href="#">默认模板</a>-->
         <@hd.a class="navbar-brand" id="btn-preview" target="_blank" text="预览"
                href="http://${shop.domain}.${appSettings.shopDomainPost!}" />
         <a class="navbar-brand"  tempid=""              href="#">清空</a>
         <a class="navbar-brand"  tempid="tbstyle"      href="#">温馨风</a>
         <a class="navbar-brand"  tempid="bbstyle"      href="#">缤纷风</a>
         <a class="navbar-brand"  tempid="hdstyle"      href="#">海带风</a>
         <a class="navbar-brand"  id="btn-help"    target="_blank"     href="#">?&nbsp;教程</a>
      </div>
     
      <#--
      <form class="navbar-form navbar-right" role="form">
        <input type="text" placeholder="测试输入店铺名称" class="form-control" id="shopName-inp">
        <input type="text" placeholder="测试输入店铺ID" class="form-control" id="shopId-inp">
        <button type="submit" class="btn btn-success btn-save">保存</button>
      </form>
      -->
    </nav>

    <P class="main-help">点住左侧模块按钮, 将其拖动到中间的手机视图中, 将看到对应的效果。  或者亲可以试试点击上面的已有模板组合哦~   ==> 在手机中点击某模块,可在右侧编辑该模块的数据。<b class="close">我知道了 &times;</b></P>

    <div id="main" class="container">
        <div class="rows">
            <ul id="model-list" class="col-lg-4-">
                <li><div class="mol-tag" id="tag-slideBox"  draggable="true"  >轮播图模块</div></li>
                <li><div class="mol-tag" id="tag-singlePic" draggable="true"  >焦点图模块</div></li>
                <li><div class="mol-tag" id="tag-bannerPic" draggable="true"  >banner图模块</div></li>
                <li><div class="mol-tag" id="tag-wordPic"   draggable="true"  >左文右图模块</div></li>

                <li><div class="mol-tag mol-tag-positive" id="tag-tb-features" draggable="true" >优势宣传</div></li>
                <li><div class="mol-tag mol-tag-positive" id="tag-hd-features" draggable="true" >优势宣传2</div></li>
                <li><div class="mol-tag mol-tag-positive" id="tag-bb-features" draggable="true" >优势宣传3</div></li>
                <li><div class="mol-tag mol-tag-positive" id="tag-tb-category" draggable="true" >类别组合</div></li>
                <li><div class="mol-tag mol-tag-positive" id="tag-hd-category"  draggable="true" >类别组合2</div></li>
                <li><div class="mol-tag mol-tag-positive" id="tag-bb-category"  draggable="true" >类别组合3</div></li>

                <li><div class="mol-tag mol-tag-assertive" id="tag-hd-brands"      draggable="true" >品牌陈列</div></li>
                <li><div class="mol-tag mol-tag-assertive" id="tag-singleGoodList" draggable="true" >宝贝列表1</div></li>
                <li><div class="mol-tag mol-tag-assertive" id="tag-doubleGoodList" draggable="true" >宝贝列表2</div></li>
                <li><div class="mol-tag mol-tag-assertive" id="tag-singleGood"      draggable="true" >单宝贝模块</div></li>

                <!--<li id="li-04"><div class="mol-tag" id="tag-doubleGood" draggable="true" >双宝贝模块</div></li>-->
                <!--<li><div class="mol-tag" id="tag-doublePic" draggable="true"  >双图片模块</div></li>-->

                <li><div class="mol-tag mol-tag-energized"   id="tag-wordOnly"   draggable="true"  >黑板报模块</div></li>
                <li><div class="mol-tag mol-tag-energized"   id="tag-titleOnly"  draggable="true"  >标题模块</div></li>
                <li><div class="mol-tag mol-tag-energized"   id="tag-contract"   draggable="true"  >联系模块</div></li>


            </ul>

            <div class="mol-tip"><div class="arrow"></div></div>

            <div id="mobile-wrap">
                <div id="show-mobile"  class="col-lg-4-" data-mcs-theme="dark">
                <div class="iphone-head"><i></i></div>
                <!--div-- id="store-head"-->
                    <!--<img src="store-logo.jpg" alt="" id="store-log"/>-->
                    <!--<div id="store-info">-->
                        <!--<h3 id="store-name">小于梦的店</h3>-->
                        <!--<i>粉丝116</i>-->
                    <!--</div>-->
                    <!--<ul id="store-barge">-->
                        <!--<li><p>12</p><h5>全部宝贝</h5></li>-->
                        <!--<li><p>3</p><h5>上新</h5></li>-->
                        <!--<li><p>5</p><h5>优惠</h5></li>-->
                        <!--<li><p>0</p><h5>微店广播</h5></li>-->
                    <!--</ul>-->
                <!--/div-->
                <div class="store-name">${(shop.title)!}的小店.*^_^*.</div>
                <!--<div id="store-bottom"><a href="">查看所有宝贝</a></div>-->
                <div class="iphone-foot"><i></i></div>
            </div>
            </div>

            <div id="ctrl-area"  class="col-lg-4-">
                <div id="ctrl-wrap"></div>
                <div class="submit-reset-wrap">
                <input type="reset" class="btn btn-info btn-reset">
                <input type="submit"  class="btn btn-success btn-submit">
                </div>
            </div>

            <div class="clear"></div>
        </div>
    </div>
    <hr/>
    <div id="goodlist-forcheck " class="modal fade  my-modal modle-content"></div>


    <!-- 宝贝列表模态框（Modal） -->
    <div class="modal fade" id="goods-modal" tabindex="-1" role="dialog">
       <div class="modal-dialog">
           <div class="modal-content">
               <div class="modal-header">
                   <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                   <h4 class="modal-title" id="myModalLabel">宝贝选择</h4>
               </div>
               <div class="modal-body" id="goodlist-forcheck2" >
                   <div class="toolbar">
                       <input type="text" id="keyword-for-search" placeholder="输入宝贝关键字"/>
                       <button href="" class="btn btn-search">搜索</button>
                   </div>
                   <!--<ul class="good-type">-->
                       <!--<li class="good-type" id=""></li>-->
                       <!--<li class="good-type" id=""></li>-->
                       <!--<li class="good-type" id=""></li>-->
                       <!--<li class="good-type" id=""></li>-->
                       <!--<li class="good-type" id=""></li>-->
                       <!--<li class="good-type" id=""></li>-->
                   <!--</ul>-->
                   <div class="good-list"></div>
                   <div class="good-list-pager">
                       <a href="javascript:void(0)" class="go-first">|«</a>
                       <a href="javascript:void(0)" class="go-prev">«</a>
                       <!--<a href="" class="page-clicker">1</a>-->
                       <!--<a href="" class="page-clicker">2</a>-->
                       <!--<a href="" class="page-clicker">3</a>-->
                       <!--<input type="text" id="go-pagenum"/>-->
                       <!--<button id="go-the-page">到</button>-->
                       <a href="javascript:void(0)" class="go-next">»</a>
                       <a href="javascript:void(0)" class="go-last">»|</a>
                       &nbsp;第<i id="now-pagenum">1</i>页/共<i id="total-pagenum">8</i>&nbsp;页
                   </div>
                   <div id="good-checked-list"></div>
               </div>
               <div class="modal-footer">
                   <button type="button" class="btn btn-default" data-dismiss="modal" onclick="goods_list_cls()">取消</button>
                   <button type="button" class="btn btn-success" data-dismiss="modal" onclick="checked_done(this)" id="checked_done">提交</button>
               </div>
           </div><!-- /.modal-content -->
       </div><!-- /.modal -->
    </div>

    <!-- 提示组件-->
    <div class="alert alert-assertive"></div>

    <!-- 模板 -->
    <div>
        <script type="text/template" id="temp-tb-features">
            <div class="mol-wrap features-wrap" molid="tb-features">
                <img src="../img/decorate/feature/feature01.jpg"  alt=""/>
                <img src="../img/decorate/feature/feature02.jpg"  alt=""/>
                <img src="../img/decorate/feature/feature03.jpg"  alt=""/>
                <img src="../img/decorate/feature/feature04.jpg"  alt=""/>
            </div>
        </script>

        <script type="text/template" id="temp-hd-features">
            <div class="mol-wrap features-wrap hd" molid="hd-features">
                <img src="../img/decorate/feature/hd-feature01.png"  alt=""/>
                <img src="../img/decorate/feature/hd-feature02.png"  alt=""/>
                <img src="../img/decorate/feature/hd-feature03.png"  alt=""/>
                <img src="../img/decorate/feature/hd-feature04.png"  alt=""/>
                <p class="feature-text"><b>全球货源</b><b>品质保障</b><b>超值价格</b><b>闪电发货</b></p>
            </div>
        </script>

        <script type="text/template" id="temp-hd-brands">
            <div class="mol-wrap hd-brands" molid="hd-brands">
                <img src="../img/decorate/brand/g1.jpg" alt=""/>
                <img src="../img/decorate/brand/g2.jpg" alt=""/>
                <img src="../img/decorate/brand/g3.jpg" alt=""/>
                <img src="../img/decorate/brand/g4.jpg" alt=""/>
                <img src="../img/decorate/brand/g5.jpg" alt=""/>
                <img src="../img/decorate/brand/g6.jpg" alt=""/>
                <img src="../img/decorate/brand/g7.jpg" alt=""/>
                <img src="../img/decorate/brand/g8.jpg" alt=""/>
                <img src="../img/decorate/brand/g9.jpg" alt=""/>
                <img src="../img/decorate/brand/g10.jpg" alt=""/>
                <img src="../img/decorate/brand/g11.jpg" alt=""/>
                <img src="../img/decorate/brand/g12.jpg" alt=""/>
                <img src="../img/decorate/brand/g13.jpg" alt=""/>
                <img src="../img/decorate/brand/g14.jpg" alt=""/>
                <img src="../img/decorate/brand/g15.jpg" alt=""/>
                <img src="../img/decorate/brand/g16.jpg" alt=""/>
            </div>
        </script>

        <script type="text/template" id="temp-hd-category">
            <div class="mol-wrap hd-category" molid="hd-category">
                <div class="hd-category-one">
                    <img src="../img/decorate/category/hd-category01.jpg" alt=""/>
                    <div class="wrap-r">
                        <h3>奶粉</h3><P>全球奶粉跨境购</P>
                    </div>
                </div>
                <div class="hd-category-one">
                    <img src="../img/decorate/category/hd-category02.jpg" alt=""/>
                    <div class="wrap-r">
                        <h3>尿不湿</h3><P>轻松透气一整天</P>
                    </div>
                </div>
                <div class="hd-category-one">
                    <img src="../img/decorate/category/hd-category03.jpg" alt=""/>
                    <div class="wrap-r">
                        <h3>辅食</h3><P>肠胃健康妈妈放心</P>
                    </div>
                </div>
                <div class="hd-category-one">
                    <img src="../img/decorate/category/hd-category04.jpg" alt=""/>
                    <div class="wrap-r">
                        <h3>保健品</h3><P>全球保健品一站采购</P>
                    </div>
                </div>
            </div>
        </script>

        <script type="text/template" id="temp-good-cell">
            <a class="good-cell" href="javascript:void(0);" onclick="check_it(this)">
               <img src="{picPath}" alt="" class=""/>
               <p class="good-name">{name}</p>
               <p class="good-price">￥{price}</p>
            </a>
        </script>

        <script type="text/template" id="temp-singleGood">
        <a class="mol-wrap" molid="singleGood" href="{href}">
          <img src="{picPath}"  alt="">
          <p><u>{name}</u><i>￥{price}</i></p>
        </a>
        </script>

        <script type="text/template" id="temp-doubleGood">
        <div class="mol-wrap" molid="doubleGood">
            <a class="doubleGood-wrap-one"  href="{href}">
              <img src="{picPath}"  alt="">
              <p><u>{goodname}</u></p>
              <i>￥{price}</i>
           </a>
            <a class="doubleGood-wrap-one"  href="{href2}">
              <img src="{picPath2}"  alt="">
              <p><u>{goodname2}</u></p>
              <i>￥{price2}</i>
           </a>
        </div>
        </script>

        <script type="text/template" id="temp-slideBox">
            <a class="mol-wrap" molid="slideBox" href="{href}">
                <img src="{imgsrc}" >
            </a>
        </script>

        <script type="text/template" id="temp-singlePic">
        <a class="mol-wrap" molid="singlePic" href="{href}">
          <img src="{imgsrc}" alt="">
          <p>{desc}</p>
        </a>
        </script>

        <script type="text/template" id="temp-bannerPic">
            <a class="mol-wrap" molid="bannerPic" href="{href}">
                <img src="{imgsrc}" alt="">
            </a>
        </script>

        <script type="text/template" id="temp-bb-category">
            <a class="mol-wrap" molid="bb-category">
                <img src="{imgsrc}" alt="">
            </a>
        </script>

        <script type="text/template" id="temp-bb-features">
            <a class="mol-wrap" molid="bb-features">
                <img src="{imgsrc}" alt="">
            </a>
        </script>

        <script type="text/template" id="temp-doublePic">
        <div class="mol-wrap" molid="doublePic">
          <div class="doublePic-wrap-one">
            <img src="{imgsrc}" alt="">
            <p>{desc}</p>
          </div>
          <div class="doublePic-wrap-one">
            <img src="{imgsrc2}" alt="">
            <p>{desc2}</p>
          </div>
        </div>
        </script>

        <script type="text/template" id="temp-tb-category">
            <div class="mol-wrap" molid="tb-category">
                <div class="tb-category-wrap-one">
                    <img src="{imgsrc}" alt="">
                    <p>{desc}</p>
                </div>
                <div class="tb-category-wrap-one">
                    <img src="{imgsrc2}" alt="">
                    <p>{desc2}</p>
                </div>
                <div class="tb-category-wrap-one">
                    <img src="{imgsrc3}" alt="">
                    <p>{desc3}</p>
                </div>
                <div class="tb-category-wrap-one">
                    <img src="{imgsrc4}" alt="">
                    <p>{desc4}</p>
                </div>
            </div>
        </script>

        <script type="text/template" id="temp-wordPic">
        <div class="mol-wrap" molid="wordPic">
          <p>{desc}</p>
          <img src="{imgsrc}" alt="">
        </div>
        </script>

        <script type="text/template" id="temp-titleOnly">
           <div class="mol-wrap" molid="titleOnly" ng-href="{href}">
               <div class="brand-title"><div></div><h3>{title}</h3></div>
           </div>
        </script>

        <script type="text/template" id="temp-wordOnly">
           <a class="mol-wrap" molid="wordOnly" ng-href="{href}">
               <p class="wordOnly">{desc}</p>
           </a>
        </script>

        <script type="text/template" id="temp-contract">
           <a class="mol-wrap" molid="contract" ng-href="{href}">
               <img src="../img/decorate/tel.png"  alt=""/><b>{tel}</b>
               <img src="../img/decorate/wechat.png"  alt=""/><b>{wechat}</b>
           </a>
        </script>

        <script type="text/template" id="temp-singleGoodList">
           <div class="mol-wrap" molid="singleGoodList">
                <h4>宝贝列表</h4>
                <p>每行一个,依次排列,请点击为其选择宝贝.</p>
           </div>
        </script>

        <script type="text/template" id="temp-doubleGoodList">
           <div class="mol-wrap" molid="doubleGoodList">
               <h4>宝贝列表</h4>
               <p>每行两个,依次排列,请点击为其选择宝贝.</p>
           </div>
        </script>
    </div>

    <!-- 设置模板的模板 -->
    <div>
        <script type="text/template" id="temp-ctrl-tb-features">
            <div class="mol-ctrl-wrap" ctrlid="tb-features">
                <h2>优势宣传</h2>
                <hr><b>此模块不可编辑</b>
            </div>
        </script>

        <script type="text/template" id="temp-ctrl-bb-features">
            <div class="mol-ctrl-wrap" ctrlid="bb-features">
                <h2>优势宣传</h2>
                <hr><b>此模块不可编辑</b>
            </div>
        </script>

        <script type="text/template" id="temp-ctrl-hd-features">
            <div class="mol-ctrl-wrap" ctrlid="hd-features">
                <h2>优势宣传</h2>
                <hr><b>此模块不可编辑</b>
            </div>
        </script>

        <script type="text/template" id="temp-ctrl-hd-brands">
            <div class="mol-ctrl-wrap" ctrlid="hd-brands">
                <h2>热门品牌</h2>
                <hr><b>此模块不可编辑</b>
            </div>
        </script>

        <script type="text/template" id="temp-ctrl-hd-category">
            <div class="mol-ctrl-wrap" ctrlid="hd-category">
                <h2>热门分类</h2>
                <hr><b>此模块不可编辑</b>
            </div>
        </script>

        <script type="text/template" id="temp-ctrl-bb-category">
            <div class="mol-ctrl-wrap" ctrlid="bb-category">
                <h2>栏目分类</h2>
                <hr><b>此模块不可编辑</b>
            </div>
        </script>

        <script type="text/template" id="temp-ctrl-singleGood">
            <div class="mol-ctrl-wrap" ctrlid="singleGood">
                <h2>单个宝贝(自定义)</h2>
                <hr><label>图片地址：</label><input type="text"   mapid="picPath"     placeholder="输入宝贝图片地址">
                <br><label>宝贝链接：</label><input type="text"   mapid="href"       placeholder="输入宝贝链接地址">
                <br><label>宝贝名称：</label><input type="text"   mapid="name"   placeholder="输入宝贝名称">
                <br><label>宝贝价格：</label><input type="number" mapid="price"      placeholder="输入宝贝价格(纯数字,可精确到2位小数)">
            </div>
        </script>

        <script type="text/template" id="temp-ctrl-doubleGood">
            <div class="mol-ctrl-wrap" ctrlid="doubleGood">
                <h2>一行双宝贝(自定义)</h2>
                <hr><label>图片地址1：</label><input type="text"   mapid="picPath"     placeholder="输入宝贝1图片地址">
                <br><label>宝贝链接1：</label><input type="text"   mapid="href"       placeholder="输入宝贝1链接地址">
                <br><label>宝贝名称1：</label><input type="text"   mapid="goodname"   placeholder="输入宝贝1名称">
                <br><label>宝贝价格1：</label><input type="number" mapid="price"      placeholder="输入宝贝1价格(纯数字,可精确到2位小数)">
                <br><hr>
                <br><label>图片地址2：</label><input type="text"   mapid="picPath2"    placeholder="输入宝贝2图片地址">
                <br><label>宝贝链接2：</label><input type="text"   mapid="href2"      placeholder="输入宝贝2链接地址">
                <br><label>宝贝名称2：</label><input type="text"   mapid="goodname2"  placeholder="输入宝贝2名称">
                <br><label>宝贝价格2：</label><input type="number" mapid="price2"     placeholder="输入宝贝2价格(纯数字,可精确到2位小数)">
            </div>
        </script>

        <script type="text/template" id="temp-ctrl-wordPic">
           <div class="mol-ctrl-wrap" ctrlid="wordPic">
               <h2>图文模块(自定义)</h2>
               <hr><label>跳转链接：</label><input type="text"   mapid="href"       placeholder="输入链接转向地址">
               <!--<br><label>文字描述：</label><input type="text"   mapid="desc"       placeholder="输入图片文字描述">-->
               <br><label>文字描述：</label><textarea   mapid="desc"    placeholder="输入文字描述"></textarea>
               <br><label>图片链接：</label><input type="text"   mapid="imgsrc"     placeholder="输入图片地址">
               <form class="img-up-form">
                   <label>图片上传：</label>
                   <input type="file"   mapid="img-up"   name='files' class="img-up-file"   accept="image/*" maxLength="1"/>
                   <input type="submit" value=" 开始上传 ">
                   <p>选择图片不超过200k,左侧色调尽量统一,作为文字背景</p>
               </form>
           </div>
        </script>

        <script type="text/template" id="temp-ctrl-slideBox">
            <div class="mol-ctrl-wrap" ctrlid="slideBox">
                <h2>轮播图(自定义)</h2>
                <hr><label>图片链接1：</label><input type="text"   mapid="imgsrc"     placeholder="输入图片地址">
                <br><label>跳转链接1：</label><input type="text"   mapid="href"       placeholder="输入链接转向地址">
                <br><label>图片链接2：</label><input type="text"   mapid="imgsrc2"     placeholder="输入图片2地址">
                <br><label>跳转链接2：</label><input type="text"   mapid="href2"       placeholder="输入链接2转向地址">
                <br><label>图片链接3：</label><input type="text"   mapid="imgsrc3"     placeholder="输入图片3地址">
                <br><label>跳转链接3：</label><input type="text"   mapid="href3"       placeholder="输入链接3转向地址">
                <br><label>图片链接4：</label><input type="text"   mapid="imgsrc4"     placeholder="输入图片4地址">
                <br><label>跳转链接4：</label><input type="text"   mapid="href4"       placeholder="输入链接4转向地址">
                <br><label>图片链接5：</label><input type="text"   mapid="imgsrc5"     placeholder="输入图片5地址">
                <br><label>跳转链接5：</label><input type="text"   mapid="href5"       placeholder="输入链接5转向地址">
                <form class="img-up-form">
                    <label>图片上传&nbsp;&nbsp;：</label>
                    <input type="file"   mapid="img-up"   name='files' class="img-up-file" multiple="true"  accept="image/*" />
                    <input type="submit" value=" 开始上传 ">
                    <p>最多可以选择5张图片(比例一致),单张不超过200k。</p>
                </form>
            </div>
        </script>

        <script type="text/template" id="temp-ctrl-singlePic">
            <div class="mol-ctrl-wrap" ctrlid="singlePic">
                <h2>焦点图(自定义)</h2>
                <hr><label>跳转链接：</label><input type="text"   mapid="href"       placeholder="输入链接转向地址">
                <br><label>文字描述：</label><input type="text"   mapid="desc"       placeholder="输入图片文字描述">
                <br><label>图片链接：</label><input type="text"   mapid="imgsrc"     placeholder="输入图片地址">
                <form class="img-up-form" enctype="multipart/form-data">
                    <label>图片上传：</label>
                    <input type="file"   mapid="img-up"   name='files' class="img-up-file"  accept="image/*" maxLength="1"/>
                    <input type="submit" value=" 开始上传 ">
                    <p>图片大小不超过200k</p>
                </form>
            </div>
        </script>

        <script type="text/template" id="temp-ctrl-bannerPic">
            <div class="mol-ctrl-wrap" ctrlid="bannerPic">
                <h2>banner图(自定义)</h2>
                <hr><label>跳转链接：</label><input type="text"   mapid="href"       placeholder="输入链接转向地址">
                <br><label>图片链接：</label><input type="text"   mapid="imgsrc"     placeholder="输入图片地址">
                <form class="img-up-form" enctype="multipart/form-data">
                    <label>图片上传：</label>
                    <input type="file"   mapid="img-up"   name='files' class="img-up-file"  accept="image/*" maxLength="1"/>
                    <input type="submit" value=" 开始上传 ">
                    <p>图片大小不超过200k</p>
                </form>
            </div>
        </script>

        <script type="text/template" id="temp-ctrl-doublePic">
           <div class="mol-ctrl-wrap" ctrlid="doublePic">
               <h2>一行双图(自定义)</h2>
               <hr><label>图片地址：</label><input type="text"   mapid="imgsrc"     placeholder="输入图片地址">
               <br><label>跳转链接：</label><input type="text"   mapid="href"       placeholder="输入链接转向地址">
               <br><label>文字描述：</label><input type="text"   mapid="desc"       placeholder="输入图片文字描述">
               <br><hr>
               <br><label>图片地址2：</label><input type="text"   mapid="imgsrc2"    placeholder="输入图片地址">
               <br><label>跳转链接2：</label><input type="text"   mapid="href2"      placeholder="输入链接转向地址">
               <br><label>文字描述2：</label><input type="text"   mapid="desc2"      placeholder="输入图片文字描述">
               <form class="img-up-form">
                   <label>图片上传：</label>
                   <input type="file"   mapid="img-up"   name='files' class="img-up-file" multiple="true"  accept="image/*" maxLength="1"/>
                   <input type="submit" value=" 开始上传 ">
                   <p>可以一次选择多张图片,单张不超过200k,比例一致</p>
               </form>
           </div>
        </script>


        <script type="text/template" id="temp-ctrl-tb-category">
            <div class="mol-ctrl-wrap" ctrlid="tb-category">
                <h2>宝贝类别(默认四大类)</h2>
                <hr><b>此模块不可编辑</b>
                <!--
                <hr><label>图片地址：</label><input type="text"   mapid="imgsrc"     placeholder="输入图片地址">
                <br><label>跳转链接：</label><input type="text"   mapid="href"       placeholder="输入链接转向地址">
                <br><label>文字描述：</label><input type="text"   mapid="desc"       placeholder="输入图片文字描述">

                <hr><label>图片地址2：</label><input type="text"   mapid="imgsrc2"    placeholder="输入图片地址">
                <br><label>跳转链接2：</label><input type="text"   mapid="href2"      placeholder="输入链接转向地址">
                <br><label>文字描述2：</label><input type="text"   mapid="desc2"      placeholder="输入图片文字描述">

                <hr><label>图片地址3：</label><input type="text"   mapid="imgsrc3"    placeholder="输入图片地址">
                <br><label>跳转链接3：</label><input type="text"   mapid="href3"      placeholder="输入链接转向地址">
                <br><label>文字描述3：</label><input type="text"   mapid="desc3"      placeholder="输入图片文字描述">

                <hr><label>图片地址4：</label><input type="text"   mapid="imgsrc4"    placeholder="输入图片地址">
                <br><label>跳转链接4：</label><input type="text"   mapid="href4"      placeholder="输入链接转向地址">
                <br><label>文字描述4：</label><input type="text"   mapid="desc4"      placeholder="输入图片文字描述">
                -->
            </div>
        </script>

        <script type="text/template" id="temp-ctrl-wordOnly">
           <div class="mol-ctrl-wrap" ctrlid="wordOnly">
               <h2>纯宣传文字(自定义)</h2>
               <hr><label>文字描述：</label>
               <textarea   mapid="desc"    placeholder="输入文字描述"></textarea>
           </div>
        </script>

        <script type="text/template" id="temp-ctrl-titleOnly">
           <div class="mol-ctrl-wrap" ctrlid="titleOnly">
               <h2>标题模块(自定义)</h2>
               <hr><label>标题文字：</label><input type="text"   mapid="title"       placeholder="输入标题文字">
           </div>
        </script>

        <script type="text/template" id="temp-ctrl-contract">
           <div class="mol-ctrl-wrap" ctrlid="contract">
               <h2>联系模块</h2>
               <hr><label>输入微信账号：</label><input type="text"   mapid="wechat"   placeholder="输入微信账号">
               <hr><label>输入电话号码：</label><input type="text"   mapid="tel"       placeholder="输入电话账号">
           </div>
        </script>

        <script type="text/template" id="temp-ctrl-singleGoodList">
           <div class="mol-ctrl-wrap" ctrlid="singleGoodList">
               <h2>宝贝列表(每行一个)</h2><hr>
               <div class="show-checked-good"></div>
               <button class="btn btn-danger show-good-list" data-toggle="modal" data-target="#goods-modal" onclick="post_ctrl_id(this)">选择宝贝</button>
               <!--<button class="btn btn-success to-check-good">确定</button>-->
           </div>
        </script>

        <script type="text/template" id="temp-ctrl-doubleGoodList">
           <div class="mol-ctrl-wrap" ctrlid="doubleGoodList">
               <h2>宝贝列表(每行两个)</h2><hr>
               <div class="show-checked-good"></div>
               <button class="btn btn-danger show-good-list" data-toggle="modal" data-target="#goods-modal" onclick="post_ctrl_id(this)">选择宝贝</button>
               <!--<button class="btn btn-success to-check-good2">确定</button>-->
           </div>
        </script>
    </div>

    <link rel="stylesheet" href="${contextPath}/assets/lib/css/bootstrap.min.css">
    <script src="${contextPath}/assets/lib/js/bootstrap.min.js"></script>
    <script src="${contextPath}/assets/js/decorate.js"></script>
    <script>
      $(document).ready(function() {
        var data = JSON.parse('${(decoration.content)!}');
        init_current(data);
      });
    </script>
</body>
</html>
