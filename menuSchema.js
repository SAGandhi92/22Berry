var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/22berry');
var db = mongoose.connection;
db.on('open', function(){
  console.log('DB Connected');
});

var menuSchema = mongoose.Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true, min: 1},
  availible: {type: String, default: true},
  addedOn: {type: Date, default: Date.now}
});

var MenuItem = mongoose.model('menuItem', menuSchema);

MenuItem.create({
  name: 'Pasta',
  price: 12
});

MenuItem.create({
  name: 'Pizza',
  price: 15
});

MenuItem.create({
  name: 'Soup',
  price: 7
});

MenuItem.create({
  name: 'Salad',
  price: 5
});
