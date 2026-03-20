import axios from 'axios';
import BASE_URL from '../../config';
const ColaboradoresService = {
  async getColaboradores() {
    try {
      const response = await axios.get(`${BASE_URL}/colaboradores`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar colaboradores:', error);
      throw error;
    }
  },
  async addColaborador(colaborador) {
    try {
      const response = await axios.post(`${BASE_URL}/colaboradores`, colaborador);
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar colaborador:', error);
      throw error;
    }
  },
};
export default ColaboradoresService;
