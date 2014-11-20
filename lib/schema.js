Schema = {};

Schema.Product = new SimpleSchema({
	code: {
		type: String,
		label: "Product Code",
		max: 50
	},
	title: {
		type: String,
		label: "Product Title",
		max: 100
	},
	description: {
		type: String,
		label: "Description",
		max: 1000
	},
	createdBy:{
		type: Object,
		optional: true
	},
	createdAt: createdAtBlock(),
	updatedAt: updatedAtBlock() 
});

Schema.Deal = new SimpleSchema({
	code: {
		type: String,
		label: "Deal Code",
		max: 50
	},
	title: {
		type: String,
		label: "Deal Title",
		max: 100
	},
	description: {
		type: String,
		label: "Description",
		max: 1000
	},
	ofProduct:{
		type: Object
	}
});


function createdAtBlock(){
	return {
		type: Date,
		autoValue: function() {
			if (this.isInsert) {
				return new Date;
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date};
			} else {
				this.unset();
			}
		}
	}
}

function updatedAtBlock(){
	 return {
	    type: Date,
	    autoValue: function() {
	      if (this.isUpdate) {
	        return new Date();
	      }
	    },
	    denyInsert: true,
	    optional: true
  	}
}