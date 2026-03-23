import ContainerInterno from "../../components/ContainerInterno/ContainerInterno";
import useColaboradores from "../../hooks/useColaboradores/useColaboradores";
import { useState, useMemo, useCallback } from "react";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../../components/Loader/Loader";
import { Box, Typography } from "@mui/material";
import { People } from "@mui/icons-material";
import {
  headerContainer,
  headerIconBox,
  titleStyles,
} from "./Colaboradores.styles";
import GridAcoes from "../../components/GridAcoes/GridAcoes";
import ViewModal from "../../components/ViewModal/ViewModal";
import InfoIcon from "@mui/icons-material/Info";

export default function Colaboradores() {
  const { colaboradores, isLoadingColaboradores } = useColaboradores();
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);

  const handleViewBtn = useCallback((colaborador) => {
    setSelectedItem(colaborador);
    setViewModalOpen(true);
  }, []);

  const columns = useMemo(() => {
    return [
      { field: "id", headerName: "ID", width: 100 },
      {
        field: "nomeCompleto",
        headerName: "Nome Completo",
        width: 500,
      },
      {
        field: "cargo",
        headerName: "Cargo",
        width: 350,
      },
      {
        field: "acoes",
        headerName: "Ações",
        flex: 1,
        sortable: false,
        headerAlign: "center",
        renderCell: (params) => (
          <GridAcoes paramsRow={params.row} handleViewBtn={handleViewBtn} />
        ),
      },
    ];
  }, [handleViewBtn]);

  return (
    <ContainerInterno lg>
      {isLoadingColaboradores ? (
        <Loader />
      ) : (
        <>
          {/* Header */}
          <Box sx={headerContainer}>
            <Box sx={headerIconBox}>
              <People sx={{ fontSize: 32, color: "white" }} />
            </Box>

            <Typography variant="h4" sx={titleStyles}>
              Visualizar Colaboradores
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <InfoIcon
                sx={(theme) => ({
                  background: theme.custom.gradient,
                  color: "#fff",
                  verticalAlign: "middle",
                  mr: 1,
                  borderRadius: "50%",
                })}
              />
              Para filtrar clique no cabeçalho de cada coluna. Para visualizar
              os detalhes de um colaborador, clique no botão "Visualizar" na
              coluna de ações.
            </Typography>
          </Box>
          <DataGrid
            rows={colaboradores}
            columns={columns}
            checkboxSelection={false}
            initialState={{
              pagination: { paginationModel: { page: 0, pageSize: 25 } },
            }}
            pageSizeOptions={[10, 25, 50, 100]}
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
            sx={{
              border: 0,
              marginTop: "20px",
              width: "100%",
            }}
          />
        </>
      )}
      <ViewModal
        open={viewModalOpen}
        onCancel={() => setViewModalOpen(false)}
        item={selectedItem}
        variant={"servico"}
      />
    </ContainerInterno>
  );
}
