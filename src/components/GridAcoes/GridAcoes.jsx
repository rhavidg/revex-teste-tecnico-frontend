import { Button, Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function GridAcoes({ paramsRow, handleViewBtn }) {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      {/* Botão Visualizar */}
      <Button
        size="small"
        onClick={() => {
          handleViewBtn(paramsRow);
        }}
        sx={(theme) => ({
          background: theme.custom.gradient,
          color: "#fff",
        })}
      >
        <VisibilityIcon sx={{ mr: 1 }} /> Visualizar
      </Button>
    </Box>
  );
}
