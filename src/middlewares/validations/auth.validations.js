import { body } from "express-validator";
import { UserModel } from "../../models/mongoose/user.model";

export const registerValidation = [
  // TODO: completar las validaciones para el registro
  body("username")
    .notEmpty()
    .withMessage("Faltan campos obligatorios")
    .isLength({ min: 2, max: 50 })
    .withMessage("El campo solo puede tener entre 2 y 50 caracteres inclusive")
    .custom(async (value, { req }) => {
      const user = UserModel.findOne({ username: value });
      if (user) {
        throw new Error("Username registrado");
      }
    }),
  body("email")
    .notEmpty()
    .withMessage("Faltan campos obligatorios")
    .isEmail()
    .withMessage("El email debe ser un formato válido"),
  body("password")
    .notEmpty()
    .withMessage("Faltan campos obligatorios")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .matches(/[a-z]/)
    .withMessage("La contraseña debe contener al menos una minúscula")
    .matches(/[A-Z]/)
    .withMessage("La contraseña debe contener al menos una mayúscula")
    .matches(/\d/)
    .withMessage("La contraseña debe contener al menos un número"),
  body("role")
    .optional()
    .notEmpty("El campo no puede estar vacío")
    .contains("secretary", "administrator")
    .withMessage("El rol solo puede ser secretary o administrator"),
  body("profile.employee_number")
    .notEmpty()
    .withMessage("Faltan campos obligatorios"),
  body("profile.first_name")
    .notEmpty()
    .withMessage("Faltan campos obligatorios"),
  body("profile.last_name")
    .notEmpty()
    .withMessage("Faltan campos obligatorios"),
  body("profile.phone").optional().notEmpty("El campo no puede estar vacío"),
];

export const loginValidation = [
  // TODO: completar las validaciones para el login
  body("email")
    .notEmpty()
    .withMessage("Faltan campos obligatorios")
    .isEmail()
    .withMessage("El email debe ser un formato válido"),
  body("password")
    .notEmpty()
    .withMessage("Faltan campos obligatorios")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),
];
