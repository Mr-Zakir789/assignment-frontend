import { Toolbar, Button, Typography, Box } from "@mui/material";

interface NavBarProps {
  onOpenCreate: () => void; // Prop to open the "Create Job" dialog
}

export const Navbar = ({ onOpenCreate }: NavBarProps) => {
  return (
    <Box sx={{ p: 1, boxShadow: 3, borderRadius: 2, m: 2 }}>
      <Toolbar
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", mb: { xs: 1, md: 0 } }}>
          <img 
            src="/assets/productIcon.svg" 
            alt="Logo" 
            style={{ width: 40, height: 40, marginRight: 16 }} 
          />
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 2, md: 4 },
            textAlign: "center",
            mb: { xs: 1, md: 0 },
          }}
        >
          {["Home", "Find Jobs", "Find Talents", "About Us", "Testimonials"].map((item, index) => (
            <Typography 
              key={index} 
              variant="body1" 
              sx={{ cursor: "pointer", fontWeight: 500, fontSize: { xs: "14px", md: "16px" } }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* Create Job Button */}
        <Button
          variant="contained"
          onClick={onOpenCreate}
          sx={{
            background: "#A128FF",
            color: (theme) => theme.palette.common.white,
            borderRadius: 5,
            px: { xs: 2, md: 3 },
            textTransform: "none",
            fontSize: { xs: "12px", md: "14px" },
          }}
        >
          Create Jobs
        </Button>
      </Toolbar>
    </Box>
  );
};
