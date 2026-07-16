//Schema for validating users input in orderForm page
import * as Yup from "yup";

const orderValidationSchema = Yup.object().shape({
  material: Yup.string().required("Materiaali vaaditaan"),
  width: Yup.number()
    .required("Leveys vaaditaan")
    .typeError("Syötä leveys lukuna")
    .positive("Syötä positiivinen luku")
    .integer("Syötä kokonaisluku"),
  length: Yup.number()
    .required("Pituus vaaditaan")
    .typeError("Syötä pituus lukuna")
    .positive("Syötä positiivinen luku")
    .integer("Syötä kokonaisluku"),
  thickness: Yup.number()
    .required("Paksuus vaaditaan")
    .typeError("Syötä paksuus lukuna")
    .positive("Syötä positiivinen luku")
    .integer("Syötä kokonaisluku"),
  amount: Yup.number()
    .required("Määrä vaaditaan")
    .typeError("Syötä määrä lukuna")
    .positive("Syötä positiivinen luku")
    .integer("Syötä kokonaisluku"),
  additionalInfo: Yup.string().notRequired(),
});

export default orderValidationSchema;
