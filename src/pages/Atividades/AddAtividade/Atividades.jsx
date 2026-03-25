import ContainerInterno from '../../../components/ContainerInterno/ContainerInterno';
import { useState, useMemo, useCallback } from 'react';
import { ptBR } from '@mui/x-data-grid/locales';
import { DataGrid } from '@mui/x-data-grid';
import Loader from '../../../components/Loader/Loader';
import { Box, Typography } from '@mui/material';
import { People } from '@mui/icons-material';
import { headerContainer, headerIconBox, titleStyles } from '../../../styles';
import GridAcoes from '../../../components/GridAcoes/GridAcoes';
import ViewModalAtividade from '../../../components/ViewModalAtividade/ViewModalAtividade';
import InfoIcon from '@mui/icons-material/Info';
import useAtividades from '../../../hooks/useAtividades/useAtividades';

export default function Atividades() {
  const { atividades, isLoadingAtividades } = useAtividades({
    getEnabled: true,
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);

  const handleViewBtn = useCallback((atividade) => {
    setSelectedItem(atividade);
    setViewModalOpen(true);
  }, []);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'ID', width: 100 },
      {
        field: 'titulo',
        headerName: 'Título',
        width: 200,
      },
      {
        field: 'descricao',
        headerName: 'Descrição',
        width: 400,
      },
      {
        field: 'responsavel',
        headerName: 'Responsável',
        width: 180,
        renderCell: (params) => {
          return params.row.responsavel?.nomeCompleto || 'Não atribuído';
        },
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 180,
        renderCell: (params) => {
          return params.row.status === 'EM_ANDAMENTO' ? 'EM ANDAMENTO' : params.row.status;
        },
      },
      {
        field: 'acoes',
        headerName: 'Ações',
        flex: 1,
        sortable: false,
        headerAlign: 'center',
        minWidth: 250,
        renderCell: (params) => (
          <GridAcoes
            paramsRow={params.row}
            handleViewBtn={handleViewBtn}
            editPath={'/atividades/editar'}
          />
        ),
      },
    ];
  }, [handleViewBtn]);

  return (
    <ContainerInterno lg>
      {isLoadingAtividades ? (
        <Loader />
      ) : (
        <>
          {/* Header */}
          <Box sx={headerContainer}>
            <Box sx={headerIconBox}>
              <People sx={{ fontSize: 32, color: 'white' }} />
            </Box>

            <Typography variant="h4" sx={titleStyles}>
              Visualizar Atividades
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <InfoIcon
                sx={(theme) => ({
                  background: theme.custom.gradient,
                  color: '#fff',
                  verticalAlign: 'middle',
                  mr: 1,
                  borderRadius: '50%',
                })}
              />
              Para filtrar clique no cabeçalho de cada coluna. Para visualizar os detalhes de um
              colaborador, clique no botão "Visualizar" na coluna de ações.
            </Typography>
          </Box>
          <DataGrid
            rows={atividades}
            columns={columns}
            checkboxSelection={false}
            initialState={{
              pagination: { paginationModel: { page: 0, pageSize: 25 } },
            }}
            pageSizeOptions={[10, 25, 50, 100]}
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
            sx={{
              border: 0,
              marginTop: '20px',
              width: '100%',
            }}
          />
        </>
      )}
      <ViewModalAtividade
        open={viewModalOpen}
        onCancel={() => setViewModalOpen(false)}
        item={selectedItem}
      />
    </ContainerInterno>
  );
}
