var express = require("express");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

var Storage = {
	add: function(name) {
		var item = {name: name, id: this.setId};
		this.items.push(item);
		this.setId += 1;
		return item;
	},

	delete: function(id) {
		var index = this.items.findIndex((e)=>{
			return e.id === +id;
		});
		console.log(index);

		if (index == -1) {
			return false;
		} else {
			this.items.splice(index, 1);
			return true;
		}
		
	},

	edit: function(id){
		var index= this.items.findIndex((e)=>{
			return e.id === +id;
		var item = {name: name, id: this.setId};
		});
		console.log(index);
		
		if (index === -1) {
			return false;
		} else {
			this.items.put[item] = name
		}
	}
};

var createStorage = function() {
	var storage = Object.create(Storage);
	storage.items = [];
	storage.setId = 1;
	return storage;
};

var storage = createStorage();

storage.add("Broad beans");
storage.add("Tomatoes");
storage.add("Peppers");

var app = express();
app.use(express.static("public"));

app.get("/items", function(request, response) {
	response.json(storage.items);
});

app.post("/items", jsonParser, function(request, response) {
	if (!("name" in request.body)) {
		return response.sendStatus(400);
	}

	var item = storage.add(request.body.name);
	response.status(201).json(item);
}),

app.delete("/items/:id", jsonParser, function(request, response) {

	var success = storage.delete(request.params.id);
	if (success)
		response.status(200).json({messsage:"success"});
	else {
		response.status(400).json({messsage:"fail"});
	}
}),

app.put("items/:id", jsonParser, function(request,response){
	var success = storage.edit(request.params.id);
	if (success) 
		response.status(200).json({message:"success"});
	else {
		response.status(400).json({message:"fail"});
	}
}),

app.listen(process.env.PORT || 8080, process.env.IP);
