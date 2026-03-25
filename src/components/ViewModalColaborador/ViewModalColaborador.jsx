import { Modal } from 'antd';
import { Box, Typography, Divider } from '@mui/material';
import {
  Person,
  WorkOutline,
  CalendarToday,
  Business,
  AttachMoney,
  ConfirmationNumber,
} from '@mui/icons-material';
import { BRL } from '../../utils';

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
} from './ViewModalColaborador.styles';

export default function ViewModalColaborador({ open, onCancel, item }) {
  const details = [
    {
      label: 'Código',
      value: item?.id,
      icon: ConfirmationNumber,
      highlight: false,
    },
    {
      label: 'Nome Completo',
      value: item?.nomeCompleto,
      icon: Person,
      highlight: false,
    },
    {
      label: 'Cargo',
      value: item?.cargo,
      icon: WorkOutline,
      highlight: false,
    },
    {
      label: 'Data de Admissão',
      value: item?.dataAdmissao,
      icon: CalendarToday,
      type: 'date',
      highlight: false,
    },
    {
      label: 'Setor',
      value: item?.setor,
      icon: Business,
      highlight: false,
    },
    {
      label: 'Salário',
      value: BRL.format(item?.salario),
      icon: AttachMoney,
      highlight: true,
    },
  ];

  return (
    <Modal open={open} onCancel={onCancel} footer={null} centered width={520} styles={modalStyles}>
      {/* Header */}
      <Box sx={headerContainer}>
        <Box sx={headerIcon}>
          <Person sx={{ fontSize: 28, color: 'white' }} />
        </Box>

        <Typography variant="h6" sx={headerTitle}>
          Detalhes do Colaborador
        </Typography>

        <Typography variant="body2" sx={headerSubtitle}>
          Informações completas do colaborador
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
                      color: detail.highlight ? 'white' : '#667eea',
                    }}
                  />
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography variant="caption" sx={detailLabel}>
                    {detail.label}
                  </Typography>

                  <Typography variant="body1" sx={detailValue(detail.highlight)}>
                    {detail.type === 'date'
                      ? new Date(detail.value).toLocaleDateString()
                      : detail.value || '—'}
                  </Typography>
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
