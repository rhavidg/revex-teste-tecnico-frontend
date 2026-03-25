import { Button, Box } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

export default function GridAcoes({ paramsRow, handleViewBtn, editPath }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {/* Botão Visualizar */}
      <Button
        size="small"
        onClick={() => {
          handleViewBtn(paramsRow);
        }}
        sx={(theme) => ({
          background: theme.custom.gradient,
          color: '#fff',
        })}
      >
        <VisibilityIcon sx={{ mr: 1 }} /> Visualizar
      </Button>
      {/* Botão Editar */}
      {editPath && (
        <Button
          size="small"
          href={`${editPath}/${paramsRow.id}`}
          sx={(theme) => ({
            background: theme.custom.gradient,
            color: '#fff',
          })}
          onClick={() => navigate(`${editPath}/${paramsRow.id}`)}
        >
          Editar
        </Button>
      )}
    </Box>
  );
}
