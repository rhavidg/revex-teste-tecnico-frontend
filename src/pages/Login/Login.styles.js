export const container = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  position: "relative",
  overflow: "hidden",
};
export const paper = {
  maxWidth: "450px",
  width: "90%",
  p: { xs: 3, sm: 4, md: 5 },
  borderRadius: 4,
  position: "relative",
  zIndex: 1,
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  boxShadow: "0 20px 40px -12px rgba(0,0,0,0.2)",
};

export const headerIconBox = {
  width: 70,
  height: 70,
  borderRadius: "20px",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 20px",
  boxShadow: "0 10px 20px -8px rgba(102,126,234,0.4)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

export const textFieldStyles = {
  mb: 2.5,
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderRadius: 2,
    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#667eea",
      },
    },
  },
};

export const forgotLink = {
  textAlign: "right",
  mt: 1,
  mb: 2,
  "& a": {
    color: "#667eea",
    textDecoration: "none",
    fontSize: "0.875rem",
    fontWeight: 500,
    transition: "color 0.2s ease",
    "&:hover": {
      color: "#764ba2",
      textDecoration: "underline",
    },
  },
};
export const registerContainer = {
  textAlign: "center",
  mt: 3,
  pt: 2,
  borderTop: "1px solid",
  borderColor: "divider",
};

export const registerLink = {
  color: "#667eea",
  textDecoration: "none",
  fontWeight: 600,
  "&:hover": {
    color: "#764ba2",
    textDecoration: "underline",
  },
};
export const iconStyles = (hasError) => ({
  color: hasError ? "error.main" : "text.secondary",
  fontSize: 20,
});
