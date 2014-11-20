Deals = new Mongo.Collection("deals");

Deals.helpers({
	product: function(){
		return Products.findOne(this.productId);
	}
});

Deals.attachSchema(Schema.Deal);