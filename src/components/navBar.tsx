import { Toolbar, Button, Grid, Typography, Box } from "@mui/material";

interface NavBarProps {
  onOpenCreate: () => void; // Prop to open the "Create Job" dialog
}
export const Navbar = ({onOpenCreate}:NavBarProps) => {
  return (
    <Box sx={{ p: 0.2, boxShadow: 3, borderRadius: 10, m: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/productIcon.svg" alt="Logo" style={{ width: 40, height: 40, marginRight: 16 }} />
        </Box>

        <Box sx={{ display: "flex", gap: 4 }}>
          {["Home", "Find Jobs", "Find Talents", "About Us", "Testimonials"].map((item, index) => (
            <Typography key={index} variant="body1" sx={{ cursor: "pointer", fontWeight: 500 }}>
              {item}
            </Typography>
          ))}
        </Box>

        <Button
          variant="contained"
          onClick={onOpenCreate}
          sx={{
            background: "#A128FF",
            color: (theme)=>theme.palette.common.white,
            borderRadius: 5,
            px: 3,
            ml: 2,
            textTransform: "none",
          }}
        >
          Create Jobs
        </Button>
      </Toolbar>
    </Box>
  );
};
