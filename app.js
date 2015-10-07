/*__dirname就本app.js所在位置*/

/*import requires*/
	var express = require('express'),
		app = express(),
		mongoose = require("mongoose"),
		Schema = mongoose.Schema,		//图式
		fs = require("fs"),
		path = require('path'),         
		bodyParser = require('body-parser'),
		favicon = require('serve-favicon'),
		ejs = require('ejs'),
		hbs = require('hbs'),
		jade = require('jade'),
		temp = {};

/*renderFile engine*/
	//jade
	app.set('view engine', 'jade');
	app.engine('jade', jade.__express);//?
	//ejs
	app.set('view engine', 'html');
	app.engine('html', ejs.renderFile);
	//hbs
	app.set('view engine', 'html');
	app.engine('html', hbs.__express);
	//综合引擎
	// var engines = require(‘consolidate’);
	// app.engine('jade’, engines.jade);
	// app.engine('ejs’, engines.ejs);

//paths
	//renderFile path
	app.set('views', path.join(__dirname, 'views'));

	//sendFile path
	var sendFileoption={maxAge:0,root:'evans/'};

	//static path
	app.use(express.static(__dirname+'/public', {maxAge:0,root:'evans'}));
	// app.use(express.static(path.join(__dirname, 'public')));

	//favicon path
	app.use(favicon(__dirname + '\\public\\resource\\icon\\favicon.ico'));

	//request path
	app.use(function(req, res, next) {
	  console.log("In comes a " + req.method + " to " + req.url);
	  next();
	});	
	//req.body转换器
	app.use(bodyParser.urlencoded({
		extended: true
	}));
/*----------------------------------------------------------------------------------*/

/*数据引擎*/
	var carsEngine = require('./db/cars');
	var testEngine = require('./db/test');
	// var blogEngine = require('./db/blog');
	// var evanEngine = require('./db/evan');	
	// var todoEngine = require('./db/todo');	

/*路由工厂*/
	var carsRouterFactory = require('./routers/cars');
	var testRouterFactory  = require('./routers/test');
	// var blogRouterFactory  = require('./routers/blog');
	// var evanRouterFactory  = require('./routers/evan');	
	var todoRouterFactory  = require('./routers/todo');
	 
/*路由实例*/
	var carsRouter = carsRouterFactory.init(express.Router());
	var testRouter = testRouterFactory.init(express.Router());
	// var blogRouter = blogRouterFactory.init(express.Router());
	// var evanRouter = evanRouterFactory.init(express.Router());
	var todoRouter = todoRouterFactory.init(express.Router());

/*应用路由*/
	app.use('/cars', carsRouter);
	app.use('/test', testRouter);
	// app.use('/blog', blogRouter);
	// app.use('/evan', evanRouter);
	app.use('/todo', todoRouter);

/*views片段*/
	app.get('/partials/:package/:filename',function(req,res){
		var filepath='views/'+req.params.package+'/partials/'+req.params.filename;
		res.sendFile(filepath,sendFileoption);
	})

/*views模板*/
	app.get('/templates/:package/:filename',function(req,res){
		var filepath='views/'+req.params.package+'/templates/'+req.params.filename;
		res.sendFile(filepath,sendFileoption);
	})

/*文件读取*/
	//同步
	// var data=fs.readFileSync("test","utf-8");
	//异步
	// fs.readFile("test",'utf-8',function(err,data){  
	//     if(err){  
	//         console.log("error");  
	//     }else{  
	//         console.log(data);  
	//     }  
	// });   
app.get('/up64',function(req,res){
	var body = '<html>'+
				'<head>'+
				'<meta http-equiv="Content-Type" '+
				'content="text/html; charset=UTF-8" />'+
				'</head>'+
				'<body>'+
					'<form action="/upload64" method="post" accept-charset="UTF-8">'+
					'<textarea name="text" rows="20" cols="60"></textarea>'+
					'<input type="submit" value="Submit text" />'+
					'</form>'+
				'</body>'+
				'</html>';
    res.send(body);
})

//保存base64图片POST方法
app.post('/upload64', function(req, res){
	/*
	var props=[];
	for(var n in req)
		props.push(n);
	var propsStr=props.sort().join('\n');
	console.log(propsStr)
	*/
    //接收前台POST过来的base64
    var imgData = req.body.text;
	var i=imgData.indexOf('base64,');
	console.log(i);

	//过滤data:URL
    //var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
	var base64Data= imgData.slice(i+6);

    var dataBuffer = new Buffer(base64Data, 'base64');

    fs.writeFile("out.png", dataBuffer, function(err) {
        if(err){
          res.send(err);
        }else{
          res.send("保存成功！");
        }
    });
});

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


//宝贝列表
var goodScheMa = new Schema({
	goods_id: Number,
	picPath: String,
	name:String,
	price:Number
});

var Good=mongoose.model('goods', goodScheMa);

var fn4goods=function(req,res){
	var params   = req.method=='GET' ? req.query:req.body;
	var pageSize = params.pageSize||20;
	var pageNum  = params.pageNum||1;
	var keyword  = params.keyword||'';
	console.log(JSON.stringify(params));

	var good=new Good()

	var obj,obj2={ $where: function(){return keyword=='' || (this.name.indexOf(keyword)>-1) } };
	if(keyword){
		obj ={name: new RegExp('.*'+keyword +'.*')};
	}else{
		obj ={};
	}

	Good.find(obj,function(err,doc){
		var startIndex = (pageNum-1)*pageSize;
		var endIndex   = (doc.length<pageNum*pageSize) ? doc.length: pageNum*pageSize;
		//console.log(doc.length+','+startIndex +' , '+ endIndex)

		res.json({
			result: 1,
			data: doc.slice( startIndex, endIndex ),
			page: {
				pageCount: parseInt(doc.length/+pageSize)+1,
				pageNum:   pageNum
			}
		});
	})	
};

app.route('/goods').get(fn4goods).post(fn4goods);


//店铺装修数据jsonstr
var shopScheMa = new Schema({
	shopId:   Number,
	shopName: String,
	data: String
});

var Shop = mongoose.model('shops', shopScheMa);


//保存
app.post('/shopDataSave',function(req,res){
	console.log('saving...')
	var shop = new Shop();

	shop.shopId   = req.body.shopId||1234567890,
	shop.shopName = req.body.shopName||'海淘小店',
	shop.data     = req.body.content||''

	Shop.remove({shopId:shop.shopId},function(err,doc){
		console.log('old deleted.');
		shop.save(function(err){
			if(err)
				res.send({"result":0}), console.log('save_err...........');
			else
				res.send({"result":1}), console.log('save_success.......');								
		});	
	})

})


//提取
app.get('/shopDataGet',function(req,res){
	console.log(JSON.stringify(req.query));
	Shop.find({shopId:parseInt(req.query.shopId)},function(err,doc){
		if(err){
			res.send({result:0});
		}else if(doc.length){
			console.log(doc.length)
			res.send({result:1,shopName:doc[0].shopName,data:JSON.parse(doc[0].data)});
		}else{
			res.send({result:-1,shopName:'海淘小店',data:doc});
		}
			
	})
})
/*----------------------------------------------------------------------------------*/

/*mongodb*/
	// var mongodb = require("mongodb"),  
 //    mongoserver = new mongodb.Server("127.0.0.1", 27017,{}), //连接Mongodb
 //    db_connector = new mongodb.Db('demo', mongoserver, {});  //这里如果test数据库不存在则创建它，如果存在则连上它
 //    db_connector.open(function(err, db){
	// 	//增
	// 	db.createCollection("testcollection", function(err, collection){
	// 		console.log(collection==null)
	// 		//collection.insert({"test":"value"});
	// 	});
	// 	//改
	// 	db.collection("testcollection", function(err, collection){
	// 		collection.update({a:4}, {$set: {author:"12312213"}},function(err, x){
	// 			collection.find().toArray(function(err, r){
	// 				console.log(r)
	// 			}) 
	// 		})
	// 	});
	// 	//查
	// 	db.collection("testcollection", function(err, collection){
	// 		var cursor = collection.find({});
	// 		cursor.count(function(err, count){
	// 		console.log("Total matches: "+count);
	// 		});
	// 		cursor.toArray(function(err, results){
	// 		console.log(typeof results)
	// 		//console.log(results.length)
	// 		//console.log(results[0]._id)
	// 		})
	// 	});
	// 	db.close(); //这只是关闭对“demo”的连接，不会切断对Mongodb的连接，所以用完就关闭他
	// });

/*mongoose*/
	var userScheMa = new Schema({
	    id: String,
	    pass: String
	}); //  定义了一个新的模型，但是此模式还未和users集合有关联

	//exports.user = mongoose.model('users', userScheMa); //  与users集合关联
	var User=mongoose.model('users', userScheMa);
	var Demo=mongoose.model('demo',{})


	//增
	app.get('/ose-put',function(req,res){
							var user=new User()
							user.id=req.query.id;
							user.pass=req.query.pass;
							user.save(function(err){
								if(err)
									console.log('err...........')
								else
									res.send('puted.')&&console.log('success.......')								
							})
						//只会增加schema中定义过的键		
							// var demo=new Demo()
							// demo.id2='102'
							// demo.save(function(err){
							// 	if(err)
							// 		console.log('err...........')
							// 	else
							// 		res.send('puted.')&&console.log('success.......')								
							// })			
	})
	//删
	app.get('/ose-del',function(req,res){
						var id=req.query.id;
						User.remove({id:id},function(err,doc){
							res.send('deleted.')
						})
	})
	//改
	app.get('/ose-up',function(req,res){
						/*
						var id=req.body.id,
						    pass=req.body.pass;
						*/
						var id=req.query.id,
							pass=req.query.pass;
						User.update({id:id},{$set:{pass:pass}},function(err,doc){
							res.send('uped.')
						})
	})
	//查
	app.get('/ose-get',function(req,res){
						var id=req.query.id;
						User.find({id:id},function(err,doc){
							res.send(doc)
						})
	})


//ajaxy
	var db_obj={id:'018',name:'admin',ip:'127.1.1',maxrow:50}
	var db_arr=[1,3,4,5,6,7,8,9,11,22,33,55,99,101]
	app.route('/ajaxy/params')
	    .get(function(req, res) {
	    	var kind =req.query.kind;
	    	console.log(JSON.stringify(query))
	       	res.send(db_obj[kind]);
	    })
	    .post(function(req, res) {
	    	var kind =req.body.kind;
	    	var cond =req.body.cond;
	        res.json({kind:kind,cond:cond})
	    });

//d:\MongoDB\bin\mongod -dbpath d:\mongodb\data\db
//net start mongodb
//d:\MongoDB\bin\mongo
mongoose.connect('mongodb://localhost:27017');
app.set('port', process.env.PORT || 3000).listen(app.get('port'));
console.log('Evans started! app listening at 3000......')


/*express4 标准方式*/
	// var router = express.Router();
	// router.get('/', function(req, res) {
	//     res.sendFile(__dirname+'/views/cars/index.html')
	//     //res.render('/cars/index',{title:"", entries:carsEngine.get('all')});   
	// });
	// router.get('/list/:id', function(req, res) {
	//     res.send(carsEngine.get(req.params.id)) 
	// });
	// app.use('/cars',router);



/*模拟数据
           var goods=[
                {goods_id:1001,picPath:'img/decorate/goods/good31.jpg',href:'',mktprice:110,price:10,name:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
                {goods_id:1002,picPath:'img/decorate/goods/good32.jpg',href:'',mktprice:110,price:20,name:'童装男童男孩小孩纯棉夏天好用'},
                {goods_id:1003,picPath:'img/decorate/goods/good33.jpg',href:'',mktprice:110,price:30,name:'韩版2015春秋款秋款秋装女宝宝'},
                {goods_id:1004,picPath:'img/decorate/goods/good34.jpg',href:'',mktprice:110,price:40,name:'夏季新款童裤女童棉麻短裤无烟'},
                {goods_id:1005,picPath:'img/decorate/goods/good35.jpg',href:'',mktprice:110,price:50,name:'巴布泡泡 松紧系带 毛圈 蓬松'},
                {goods_id:1006,picPath:'img/decorate/goods/good36.jpg',href:'',mktprice:110,price:60,name:'韩版2015春秋款秋款秋装女godd'},
                {goods_id:1007,picPath:'img/decorate/goods/good37.jpg',href:'',mktprice:110,price:10,name:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
                {goods_id:1008,picPath:'img/decorate/goods/good38.jpg',href:'',mktprice:110,price:20,name:'童装男童男孩小孩纯棉夏天好用'},
                {goods_id:1009,picPath:'img/decorate/goods/good39.jpg',href:'',mktprice:110,price:30,name:'韩版2015春秋款秋款秋装女宝宝'},
                {goods_id:1010,picPath:'img/decorate/goods/good10.jpg',href:'',mktprice:110,price:40,name:'夏季新款童裤女童棉麻短裤无烟'},
                {goods_id:1011,picPath:'img/decorate/goods/good11.jpg',href:'',mktprice:110,price:50,name:'巴布泡泡 松紧系带 毛圈 蓬松'},
                {goods_id:1012,picPath:'img/decorate/goods/good12.jpg',href:'',mktprice:110,price:60,name:'韩版2015春秋款秋款秋装女godd'},
                {goods_id:1013,picPath:'img/decorate/goods/good13.jpg',href:'',mktprice:110,price:10,name:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
                {goods_id:1014,picPath:'img/decorate/goods/good14.jpg',href:'',mktprice:110,price:20,name:'童装男童男孩小孩纯棉夏天好用'},
                {goods_id:1015,picPath:'img/decorate/goods/good15.jpg',href:'',mktprice:110,price:30,name:'韩版2015春秋款秋款秋装女宝宝'},
                {goods_id:1016,picPath:'img/decorate/goods/good16.jpg',href:'',mktprice:110,price:40,name:'夏季新款童裤女童棉麻短裤无烟'},
                {goods_id:1017,picPath:'img/decorate/goods/good17.jpg',href:'',mktprice:110,price:50,name:'巴布泡泡 松紧系带 毛圈 蓬松'},
                {goods_id:1018,picPath:'img/decorate/goods/good18.jpg',href:'',mktprice:110,price:60,name:'韩版2015春秋款秋款秋装女godd'},
                {goods_id:1019,picPath:'img/decorate/goods/good19.jpg',href:'',mktprice:110,price:10,name:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
                {goods_id:1020,picPath:'img/decorate/goods/good20.jpg',href:'',mktprice:110,price:20,name:'童装男童男孩小孩纯棉夏天好用'},
                {goods_id:1021,picPath:'img/decorate/goods/good21.jpg',href:'',mktprice:110,price:50,name:'巴布泡泡 松紧系带 毛圈 蓬松'},
                {goods_id:1022,picPath:'img/decorate/goods/good22.jpg',href:'',mktprice:110,price:60,name:'韩版2015春秋款秋款秋装女godd'},
                {goods_id:1023,picPath:'img/decorate/goods/good23.jpg',href:'',mktprice:110,price:10,name:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
                {goods_id:1024,picPath:'img/decorate/goods/good24.jpg',href:'',mktprice:110,price:20,name:'童装男童男孩小孩纯棉夏天好用'},
                {goods_id:1025,picPath:'img/decorate/goods/good25.jpg',href:'',mktprice:110,price:30,name:'韩版2015春秋款秋款秋装女宝宝'},
                {goods_id:1026,picPath:'img/decorate/goods/good26.jpg',href:'',mktprice:110,price:40,name:'夏季新款童裤女童棉麻短裤无烟'},
                {goods_id:1027,picPath:'img/decorate/goods/good27.jpg',href:'',mktprice:110,price:50,name:'巴布泡泡 松紧系带 毛圈 蓬松'},
                {goods_id:1028,picPath:'img/decorate/goods/good28.jpg',href:'',mktprice:110,price:60,name:'韩版2015春秋款秋款秋装女godd'},
                {goods_id:1029,picPath:'img/decorate/goods/good29.jpg',href:'',mktprice:110,price:10,name:'2015韩版春款纯色纯棉女童大童中童小童花纹打底裤花童裤时尚百搭'},
                {goods_id:1030,picPath:'img/decorate/goods/good30.jpg',href:'',mktprice:110,price:20,name:'童装男童男孩小孩纯棉夏天好用'},
            ];
*/

//cmd cd d:\MongoDB\bin\  mongod -dbpath d:\mongodb\data\db
//cmd cd d:\MongoDB\bin\  mongo
//db.goods.save(goods)
//搭建node express,安装依赖module, 最后node app