export const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "calc(100vh - 200px)",
  p: 3,
};

export const paperStyles = {
  maxWidth: "520px",
  width: "100%",
  p: { xs: 3, sm: 5 },
  borderRadius: 4,
  background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
  boxShadow: "0 20px 35px -12px rgba(0,0,0,0.1)",
  border: "1px solid rgba(0,0,0,0.05)",
};

export const headerContainer = {
  mb: 4,
  textAlign: "center",
};

export const headerIconBox = {
  width: 60,
  height: 60,
  borderRadius: "16px",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 16px",
  boxShadow: "0 10px 20px -8px rgba(102,126,234,0.3)",
};

export const titleStyles = {
  fontWeight: 700,
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  mb: 1,
};

export const textFieldStyles = {
  mb: 2.5,
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
  },
};

export const inputStyles = {
  borderRadius: 2,
  "&:hover": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#667eea",
    },
  },
};

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

export const iconStyles = (hasError) => ({
  color: hasError ? "error.main" : "text.secondary",
  fontSize: 20,
});

export const salaryAdornment = (hasError) => ({
  fontWeight: 600,
  color: hasError ? "error.main" : "text.secondary",
});
