import { Box, Paper } from "@mui/material";
import { containerStyles, paperStyles } from "./ContainerInterno.styles";
export default function ContainerInterno({ lg, children }) {
  return (
    <Box sx={containerStyles}>
      <Paper elevation={0} sx={paperStyles(lg)}>
        {children}
      </Paper>
    </Box>
  );
}
