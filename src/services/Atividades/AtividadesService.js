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
  async addAtividade(atividade) {
    try {
      const response = await axios.post(`${BASE_URL}/atividades`, atividade);
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar atividade:', error);
      throw error;
    }
  },

  async updateStatus(id, status) {
    try {
      const response = await axios.patch(`${BASE_URL}/atividades/${id}/status`, { status });
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar status da atividade:', error);
      throw error;
    }
  },
  async updateResponsavel(id, responsavelId) {
    try {
      const response = await axios.patch(`${BASE_URL}/atividades/${id}/responsavel`, {
        responsavelId,
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar responsável da atividade:', error);
      throw error;
    }
  },
};
export default AtividadesService;
