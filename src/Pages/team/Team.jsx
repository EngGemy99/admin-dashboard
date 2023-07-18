import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { rows } from "./data";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
function Team() {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.2,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              color: "#fff",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              p: "5px",
              width: "99px",
              borderRadius: "5px",
              textAlign: "center",
              cursor: "pointer",
              background:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manger"
                  ? theme.palette.secondary.main
                  : "#028402",
            }}
          >
            {access == "Admin" && <AdminPanelSettingsIcon fontSize="small" />}
            {access == "Manger" && <ShieldOutlinedIcon fontSize="small" />}
            {["User", "Guest"].includes(access) && (
              <PersonOutlineIcon fontSize="small" />
            )}
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: 17,
              }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 650, width: "98%" }}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}

export default Team;
