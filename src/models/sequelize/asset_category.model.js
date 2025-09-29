import { DataTypes } from "sequelize";
import { AssetModel } from "./asset.model";
import { CategoryModel } from "./category.model";

export const AssetCategoryModel = sequelize.define("AssetCategory", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
});

// TODO: completar relaciones muchos a muchos entre Asset y Category mediante AssetCategory.
// * N:M Asset ↔ Category through AssetCategory
// * 'categories' (Asset) y 'assets' (Category)
// ! FALTA COMPLETAR ACA

AssetCategoryModel.belongsTo(CategoryModel, {
  foreignKey: "category_id",
  as: "category",
  onDelete: CASCADE,
});

AssetCategoryModel.belongsTo(AssetModel, {
  foreignKey: "asset_id",
  as: "asset",
  onDelete: CASCADE,
});

AssetModel.belongsToMany(CategoryModel, {
  foreignKey: "category_id",
  as: "category",
  onDelete: CASCADE,
});

CategoryModel.belongsToMany(AssetModel, {
  foreignKey: "asset_id",
  as: "asset",
  onDelete: CASCADE,
});
