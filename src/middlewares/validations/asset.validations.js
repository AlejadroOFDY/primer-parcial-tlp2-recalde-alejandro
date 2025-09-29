import { body } from "express-validator";
import { AssetModel } from "../../models/mongoose/asset.model.js";

export const createAssetValidation = [
  // TODO: completar las validaciones para crear un recurso
  body("inventory_number")
    .notEmpty()
    .withMessage("Faltan campos obligatorios")
    .custom(async (value) => {
      const asset = AssetModel.findOne({ inventoryNumber: value });
      if (asset) {
        throw new Error("Inventory_number registrado");
      }
    }),
  body("description")
    .notEmpty()
    .withMessage("Faltan campos obligatorios")
    .isLength({ min: 10, max: 500 })
    .withMessage(
      "El campobo debe contener entre 10 y 500 caracteres inclusive"
    ),
  body("brand")
    .notEmpty()
    .withMessage("Faltan campos obligatorios")
    .isLength({ min: 2, max: 100 })
    .withMessage("El campobo debe contener entre 2 y 100 caracteres inclusive"),
  ,
  body("model")
    .notEmpty()
    .withMessage("Faltan campos obligatorios")
    .isLength({ min: 2, max: 100 })
    .withMessage("El campobo debe contener entre 2 y 100 caracteres inclusive"),
  ,
  body("status")
    .optional()
    .notEmpty()
    .withMessage("El campo no puede estar vacío")
    .contains("good", "regular", "bad", "out_of_service")
    .withMessage(
      " el estatus solo puede ser, good, regular, bad o out_of_service"
    ),
  body("acquisitionDate")
    .notEmpty()
    .withMessage("Faltan campos obligatorios")
    .isDate()
    .withMessage("El campo solo acepta fecha como formato"),
  body("acquisitionValue")
    .notEmpty()
    .withMessage("Faltan campos obligatorios")
    .isNumeric()
    .withMessage("El campo debe ser un número"),
];
