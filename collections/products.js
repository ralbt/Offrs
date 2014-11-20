Products = new Mongo.Collection("products");

Products.helpers({
	deals: function(){
		return Deals.find({productId: this._id});
	}
});

Products.attachSchema(Schema.Product);

