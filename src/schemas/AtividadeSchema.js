import * as Yup from 'yup';
const AtividadeSchema = Yup.object().shape({
  titulo: Yup.string().required('Título é obrigatório'),
  descricao: Yup.string().required('Descrição é obrigatória'),
});

export default AtividadeSchema;
