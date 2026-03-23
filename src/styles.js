export const buttonStyles = {
  mt: 2,
  py: 1.5,
  borderRadius: 2,
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  boxShadow: "0 8px 16px -6px rgba(102,126,234,0.4)",
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 600,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 12px 20px -8px rgba(102,126,234,0.5)",
    background: "linear-gradient(135deg, #5a67d8 0%, #6b46a0 100%)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
};
