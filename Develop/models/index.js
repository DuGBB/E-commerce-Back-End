// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  as: "productTag_id",
  foreignKey: "product_id",
  onDelete: "SET NULL",
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  as: "productTag_id",
  foreignKey: "tag_id",
  onDelete: "SET NULL",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
