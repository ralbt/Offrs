Router.configure({
  layoutTemplate: "layout"
});

Router.route('/', function(){
  this.render('Home');
});

Router.route('/products/new', function(){
	this.render('insertProductForm')
});

Router.route('/deals/new', function(){
	this.render('insertDealForm')
});
