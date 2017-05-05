var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product', {
  map: {name: 'title'},
  singular: 'Product',
  plural: 'Products',
  autokey: {path: 'slug', from: 'title', unique: true}
});

Product.add({
  title: {type: String, required: true},
  price: {type: Number},
  description: {type: Types.Html, wysiwyg: true, height: 300},
  images: { type: Types.CloudinaryImages },
  publishedDate: {type: Date, default: Date.now},
  categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
  tag: { type: String }

});

Product.register();
