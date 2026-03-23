import { Modal } from "antd";
import { Box, Typography, Divider } from "@mui/material";
import {
  Person,
  WorkOutline,
  CalendarToday,
  Business,
  AttachMoney,
  ConfirmationNumber,
} from "@mui/icons-material";
import { BRL } from "../../utils";

export default function ViewModal({ open, onCancel, item }) {
  const details = [
    {
      label: "Código",
      value: item?.id,
      icon: ConfirmationNumber,
      color: "#667eea",
    },
    {
      label: "Nome Completo",
      value: item?.nomeCompleto,
      icon: Person,
      color: "#667eea",
    },
    {
      label: "Cargo",
      value: item?.cargo,
      icon: WorkOutline,
      color: "#667eea",
    },
    {
      label: "Data de Admissão",
      value: item?.dataAdmissao,
      icon: CalendarToday,
      color: "#667eea",
      type: "date",
    },
    {
      label: "Setor",
      value: item?.setor,
      icon: Business,
      color: "#667eea",
    },
    {
      label: "Salário",
      value: BRL.format(item?.salario),
      icon: AttachMoney,
      color: "#10b981",
      highlight: true,
    },
  ];

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      width={520}
      styles={{
        body: {
          padding: 0,
        },
        content: {
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 25px 40px -12px rgba(0,0,0,0.25)",
        },
      }}
    >
      {/* Header com gradiente */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          p: 3,
          textAlign: "center",
          position: "relative",
          margin: "-24px -24px 0 -24px",
        }}
      >
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: "16px",
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 12px",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <Person sx={{ fontSize: 28, color: "white" }} />
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontWeight: 600,
            letterSpacing: "-0.5px",
          }}
        >
          Detalhes do Colaborador
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.85)",
            mt: 0.5,
          }}
        >
          Informações completas do colaborador
        </Typography>
      </Box>

      {/* Conteúdo */}
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {details.map((detail, index) => (
            <Box key={detail.label}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  p: 1.5,
                  borderRadius: 2,
                  transition: "all 0.2s ease",
                  bgcolor: detail.highlight ? "#f0fdf4" : "transparent",
                  "&:hover": {
                    bgcolor: detail.highlight ? "#f0fdf4" : "#f8f9fa",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "12px",
                    background: detail.highlight
                      ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                      : "linear-gradient(135deg, #667eea20 0%, #764ba220 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <detail.icon
                    sx={{
                      fontSize: 20,
                      color: detail.highlight ? "white" : "#667eea",
                    }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      fontSize: "0.7rem",
                    }}
                  >
                    {detail.label}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: detail.highlight ? 700 : 600,
                      color: detail.highlight ? "#065f46" : "text.primary",
                      mt: 0.5,
                      wordBreak: "break-word",
                    }}
                  >
                    {detail.type === "date"
                      ? new Date(detail.value).toLocaleDateString()
                      : detail.value || "—"}
                  </Typography>
                </Box>
              </Box>
              {index < details.length - 1 && (
                <Divider sx={{ my: 1, borderColor: "rgba(0,0,0,0.06)" }} />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
}
