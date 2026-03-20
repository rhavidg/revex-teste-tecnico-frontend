import * as Yup from "yup";
const ColaboradorSchema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório").min(10, "Nome muito curto"),
  cargo: Yup.string().required("Cargo é obrigatório"),
  dataAdmissao: Yup.string().required("Data de Admissão é obrigatória"),
  setor: Yup.string().required("Setor é obrigatório"),
  salario: Yup.number()
    .typeError("Salário deve ser um número")
    .required("Salário é obrigatório")
    .positive("Salário deve ser positivo"),
});

export default ColaboradorSchema;
