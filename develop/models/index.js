// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo();

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: ProductTag,
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products, {
  foreignKey: ProductTag
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
