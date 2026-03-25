import { Modal } from 'antd';
import { Box, Typography, Divider } from '@mui/material';
import { Title, Description, Assignment, Person, CheckCircle, Pending } from '@mui/icons-material';
import {
  modalStyles,
  headerContainer,
  headerIcon,
  headerTitle,
  headerSubtitle,
  contentContainer,
  detailsContainer,
  detailItem,
  detailIconContainer,
  detailLabel,
  detailValue,
  dividerStyle,
} from './ViewModalAtividade.styles';

export default function ViewModalAtividade({ open, onCancel, item }) {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'EM_ANDAMENTO':
        return {
          label: 'EM ANDAMENTO',
          icon: Pending,
          color: '#f59e0b',
          bgColor: '#fffbeb',
        };
      case 'FINALIZADA':
        return {
          label: 'FINALIZADA',
          icon: CheckCircle,
          color: '#10b981',
          bgColor: '#f0fdf4',
        };
      case 'PENDENTE':
        return {
          label: 'PENDENTE',
          icon: Assignment,
          color: '#6b7280',
          bgColor: '#f9fafb',
        };
      default:
        return {
          label: status,
          icon: Assignment,
          color: '#6b7280',
          bgColor: '#f9fafb',
        };
    }
  };

  const details = [
    {
      label: 'ID da Tarefa',
      value: item?.id,
      icon: Assignment,
      highlight: false,
    },
    {
      label: 'Título',
      value: item?.titulo,
      icon: Title,
      highlight: false,
    },
    {
      label: 'Status',
      value: getStatusConfig(item?.status).label,
      icon: getStatusConfig(item?.status).icon,
      highlight: false,
      isStatus: true,
      statusConfig: getStatusConfig(item?.status),
    },
    {
      label: 'Descrição',
      value: item?.descricao || 'Sem descrição',
      icon: Description,
      highlight: false,
      multiline: true,
    },
    {
      label: 'Responsável',
      value: item?.responsavel?.nomeCompleto || 'Não atribuído',
      icon: Person,
      highlight: false,
    },
  ];

  return (
    <Modal open={open} onCancel={onCancel} footer={null} centered width={560} styles={modalStyles}>
      {/* Header */}
      <Box sx={headerContainer}>
        <Box sx={headerIcon}>
          <Assignment sx={{ fontSize: 28, color: 'white' }} />
        </Box>

        <Typography variant="h6" sx={headerTitle}>
          Detalhes da Tarefa
        </Typography>

        <Typography variant="body2" sx={headerSubtitle}>
          Informações completas da tarefa
        </Typography>
      </Box>

      {/* Conteúdo */}
      <Box sx={contentContainer}>
        <Box sx={detailsContainer}>
          {details.map((detail, index) => (
            <Box key={detail.label}>
              <Box sx={detailItem(detail.highlight)}>
                <Box sx={detailIconContainer(detail.highlight)}>
                  <detail.icon
                    sx={{
                      fontSize: 20,
                      color: detail.isStatus
                        ? detail.statusConfig.color
                        : detail.highlight
                          ? 'white'
                          : '#667eea',
                    }}
                  />
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography variant="caption" sx={detailLabel}>
                    {detail.label}
                  </Typography>

                  {detail.isStatus ? (
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: detail.statusConfig.color,
                        mt: 0.5,
                      }}
                    >
                      {detail.value}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body1"
                      sx={{
                        ...detailValue(detail.highlight),
                        whiteSpace: detail.multiline ? 'pre-wrap' : 'normal',
                        wordBreak: 'break-word',
                      }}
                    >
                      {detail.value || '—'}
                    </Typography>
                  )}
                </Box>
              </Box>

              {index < details.length - 1 && <Divider sx={dividerStyle} />}
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
}
