import { body } from "express-validator";
import { CategoryModel } from "../../models/mongoose/category.model.js";

export const createCategoryValidation = [
  // TODO: completar las validaciones para crear una categoria
  body("name")
    .notEmpty()
    .withMessage("Faltan campos obligatorios")
    .isLength({ min: 3, max: 100 })
    .withMessage("El campo debe contener entre 3 y 100 caracteres inclusive")
    .custom(async (value) => {
      const catagory = await CategoryModel.findOne({ name: value });
      if (catagory) {
        throw new Error("Name registrado");
      }
    }),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("El campo no puede estar vacío")
    .isLength({ max: 500 })
    .withMessage("El campo solo puede contener hasta 500 caracteres inclusive"),
];
