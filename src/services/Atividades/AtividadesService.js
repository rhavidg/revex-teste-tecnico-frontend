import axios from 'axios';
import BASE_URL from '../../config';
const AtividadesService = {
  async getAtividades() {
    try {
      const response = await axios.get(`${BASE_URL}/atividades`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar atividades:', error);
      throw error;
    }
  },
  async getAtividade(id) {
    try {
      const response = await axios.get(`${BASE_URL}/atividades/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar atividade:', error);
      throw error;
    }
  },
  async addAtividade(atividade) {
    try {
      const response = await axios.post(`${BASE_URL}/atividades`, atividade);
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar atividade:', error);
      throw error;
    }
  },

  async updateAtividade(id, atividade) {
    try {
      const response = await axios.patch(`${BASE_URL}/atividades/${id}`, atividade);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar atividade:', error);
      throw error;
    }
  },
};
export default AtividadesService;
