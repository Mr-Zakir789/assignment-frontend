import { useState, MouseEvent } from "react";
import {
  Box,
  Grid,
  InputBase,
  Typography,
  Slider,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";

export const FilterBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // State for dropdowns
  const [anchorElLocation, setAnchorElLocation] = useState<null | HTMLElement>(null);
  const [anchorElJobType, setAnchorElJobType] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState<string>("Preferred Location");
  const [selectedJobType, setSelectedJobType] = useState<string>("Job Type");

  const { watch, setValue } = useForm({
    defaultValues: {
      salaryRange: [0, 2000000],
    },
  });

  // Handle dropdown open/close
  const handleClickLocation = (event: MouseEvent<HTMLElement>) => {
    setAnchorElLocation(anchorElLocation ? null : event.currentTarget);
    setAnchorElJobType(null);
  };

  const handleClickJobType = (event: MouseEvent<HTMLElement>) => {
    setAnchorElJobType(anchorElJobType ? null : event.currentTarget);
    setAnchorElLocation(null);
  };

  const handleClose = () => {
    setAnchorElLocation(null);
    setAnchorElJobType(null);
  };

  const handleMenuItemClick = (option: string, dropdownType: "location" | "jobType") => {
    if (dropdownType === "location") {
      setSelectedOption(option);
    } else if (dropdownType === "jobType") {
      setSelectedJobType(option);
    }
    handleClose();
  };

  return (
    <Box sx={{ boxShadow: 3, borderRadius: 3, p: 2, m: 2, bgcolor: "white" }}>
      <Grid
        container
        alignItems="center"
        spacing={isMobile ? 2 : 3}
        direction={isMobile ? "column" : "row"}
      >
        {/* Search Bar */}
        <Grid item xs={12} sm={3} sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <img src="/assets/searchIcon.svg" alt="Search" style={{ width: 24, height: 24, marginRight: 8 }} />
          <InputBase placeholder="Search By Job Title, Role" fullWidth sx={{ border: "1px solid #ddd", borderRadius: 2, p: 1 }} />
        </Grid>

        {/* Location Dropdown */}
        <Grid item xs={12} sm={3} sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <img src="/assets/locationIcon.svg" alt="Location" style={{ width: 24, height: 24, marginRight: 8 }} />
          <Box sx={{ flexGrow: 1, cursor: "pointer", display: "flex", alignItems: "center", position: "relative" }}>
            <Box onClick={handleClickLocation} sx={{ display: "flex", alignItems: "center", width: "100%", p: 1, border: "1px solid #ddd", borderRadius: 2 }}>
              <Typography variant="body1">{selectedOption}</Typography>
              <IconButton sx={{ ml: "auto" }}>
                <KeyboardArrowDownOutlinedIcon />
              </IconButton>
            </Box>

            {/* Location Dropdown */}
            {Boolean(anchorElLocation) && (
              <ClickAwayListener onClickAway={handleClose}>
                <Paper sx={{ position: "absolute", top: "calc(100% + 8px)", left: 0, zIndex: 10, width: "100%" }}>
                  <MenuList>
                    <MenuItem onClick={() => handleMenuItemClick("Remote", "location")}>Remote</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick("Onsite", "location")}>Onsite</MenuItem>
                  </MenuList>
                </Paper>
              </ClickAwayListener>
            )}
          </Box>
        </Grid>

        {/* Job Type Dropdown */}
        <Grid item xs={12} sm={3} sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <img src="/assets/jobTypeIcon.svg" alt="Job Type" style={{ width: 24, height: 24, marginRight: 8 }} />
          <Box sx={{ flexGrow: 1, cursor: "pointer", display: "flex", alignItems: "center", position: "relative" }}>
            <Box onClick={handleClickJobType} sx={{ display: "flex", alignItems: "center", width: "100%", p: 1, border: "1px solid #ddd", borderRadius: 2 }}>
              <Typography variant="body1">{selectedJobType}</Typography>
              <IconButton sx={{ ml: "auto" }}>
                <KeyboardArrowDownOutlinedIcon />
              </IconButton>
            </Box>

            {/* Job Type Dropdown */}
            {Boolean(anchorElJobType) && (
              <ClickAwayListener onClickAway={handleClose}>
                <Paper sx={{ position: "absolute", top: "calc(100% + 8px)", left: 0, zIndex: 10, width: "100%" }}>
                  <MenuList>
                    <MenuItem onClick={() => handleMenuItemClick("Full Time", "jobType")}>Full Time</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick("Part Time", "jobType")}>Part Time</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick("Contract", "jobType")}>Contract</MenuItem>
                  </MenuList>
                </Paper>
              </ClickAwayListener>
            )}
          </Box>
        </Grid>

        {/* Salary Slider */}
        <Grid item xs={12} sm={3} sx={{ width: "100%" }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Salary Per Month
          </Typography>
          <Slider
            value={watch("salaryRange") as number[]}
            onChange={(_, newValue) => setValue("salaryRange", newValue as number[])}
            valueLabelDisplay="auto"
            min={0}
            max={2000000}
            step={50000}
            sx={{
              color: "black",
              width: "100%",
              "@media (max-width:600px)": {
                width: "95%",
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
