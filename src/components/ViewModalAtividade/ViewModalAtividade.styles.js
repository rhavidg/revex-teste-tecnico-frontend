export const modalStyles = {
  body: {
    padding: 0,
  },
  content: {
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 25px 40px -12px rgba(0,0,0,0.25)',
  },
};

export const headerContainer = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  p: 3,
  textAlign: 'center',
  position: 'relative',
  margin: '-24px -24px 0 -24px',
};

export const headerIcon = {
  width: 56,
  height: 56,
  borderRadius: '16px',
  background: 'rgba(255,255,255,0.2)',
  backdropFilter: 'blur(10px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 12px',
  border: '1px solid rgba(255,255,255,0.3)',
};

export const headerTitle = {
  color: 'white',
  fontWeight: 600,
  letterSpacing: '-0.5px',
};

export const headerSubtitle = {
  color: 'rgba(255,255,255,0.85)',
  mt: 0.5,
};

export const contentContainer = {
  p: 3,
};

export const detailsContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

export const detailItem = (highlight) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 2,
  p: 1.5,
  borderRadius: 2,
  transition: 'all 0.2s ease',
  bgcolor: highlight ? '#f0fdf4' : 'transparent',
  '&:hover': {
    bgcolor: highlight ? '#f0fdf4' : '#f8f9fa',
  },
});

export const detailIconContainer = (highlight) => ({
  width: 40,
  height: 40,
  borderRadius: '12px',
  background: highlight
    ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    : 'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const detailLabel = {
  color: 'text.secondary',
  fontWeight: 500,
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
  fontSize: '0.7rem',
  mb: 0.5,
};

export const detailValue = (highlight) => ({
  fontWeight: highlight ? 700 : 600,
  color: highlight ? '#065f46' : 'text.primary',
  mt: 0.5,
  wordBreak: 'break-word',
});

export const dividerStyle = {
  my: 1,
  borderColor: 'rgba(0,0,0,0.06)',
};

export const statusChip = (config) => ({
  mt: 0.5,
  backgroundColor: config.bgColor,
  color: config.color,
  fontWeight: 600,
  fontSize: '0.75rem',
  height: '28px',
  '& .MuiChip-icon': {
    color: config.color,
    fontSize: '16px',
  },
  '& .MuiChip-label': {
    px: 1.5,
  },
});
