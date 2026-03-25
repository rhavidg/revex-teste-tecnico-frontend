import { useState, useMemo, useCallback } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuAnchor, setMenuAnchor] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const isActive = useCallback(
    (path) => location.pathname.startsWith(path),
    [location.pathname],
  );

  const handleOpenMenu = (event, menuKey) => {
    setMenuAnchor(event.currentTarget);
    setActiveMenu(menuKey);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
    setActiveMenu(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleCloseMenu();
  };

  // 🔹 Navigation config
  const menus = useMemo(
    () => ({
      atividades: {
        label: "Atividades",
        basePath: "/atividades",
        items: [
          { label: "Lista de Atividades", path: "/atividades" },
          { label: "Adicionar Atividade", path: "/atividades/adicionar" },
        ],
      },
      colaboradores: {
        label: "Colaboradores",
        basePath: "/colaboradores",
        items: [
          { label: "Lista de Colaboradores", path: "/colaboradores" },
          { label: "Adicionar Colaborador", path: "/colaboradores/adicionar" },
        ],
      },
    }),
    [],
  );

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "5px 20px",
      }}
    >
      {/* NAVIGATION */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {Object.entries(menus).map(([key, menu]) => (
          <Button
            key={key}
            onClick={(e) => handleOpenMenu(e, key)}
            variant={isActive(menu.basePath) ? "contained" : "text"}
            sx={{
              fontWeight: "bold",
              fontSize: 14,
              color: "#fff",
            }}
          >
            {menu.label}
          </Button>
        ))}

        {/* DROPDOWN MENU */}
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleCloseMenu}
        >
          {menus[activeMenu]?.items.map((item) => (
            <MenuItem key={item.path} onClick={() => handleNavigate(item.path)}>
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
}
