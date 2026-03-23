export const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "calc(100vh - 200px)",
  p: 3,
};

export const paperStyles = (lg) => {
  return {
    maxWidth: lg ? "1600px" : "520px",
    width: "100%",
    p: { xs: 3, sm: 5 },
    borderRadius: 4,
    background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
    boxShadow: "0 20px 35px -12px rgba(0,0,0,0.1)",
    border: "1px solid rgba(0,0,0,0.05)",
  };
};
