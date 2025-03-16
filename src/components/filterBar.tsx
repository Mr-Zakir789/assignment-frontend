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
} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useForm } from "react-hook-form";

export const FilterBar = () => {
  // State for dropdowns
  const [anchorElLocation, setAnchorElLocation] = useState<null | HTMLElement>(
    null
  );
  const [anchorElJobType, setAnchorElJobType] = useState<null | HTMLElement>(
    null
  );
  const [selectedOption, setSelectedOption] = useState<string>(
    "Preferred Location"
  );
  const [selectedJobType, setSelectedJobType] = useState<string>("Job Type");
  const { watch, setValue } = useForm({
    defaultValues: {
      salaryRange: [0, 2000000], // Initial range
    },
  });
  // Handle dropdown open/close for location
  const handleClickLocation = (event: MouseEvent<HTMLElement>) => {
    setAnchorElLocation(anchorElLocation ? null : event.currentTarget);
    setAnchorElJobType(null);
  };

  // Handle dropdown open/close for job type
  const handleClickJobType = (event: MouseEvent<HTMLElement>) => {
    setAnchorElJobType(anchorElJobType ? null : event.currentTarget);
    setAnchorElLocation(null);
  };

  const handleClose = () => {
    setAnchorElLocation(null);
    setAnchorElJobType(null);
  };

  const handleMenuItemClick = (
    option: string,
    dropdownType: "location" | "jobType"
  ) => {
    if (dropdownType === "location") {
      setSelectedOption(option);
    } else if (dropdownType === "jobType") {
      setSelectedJobType(option);
    }
    handleClose();
  };

  return (
    <Box sx={{ boxShadow: 3, borderRadius: 3, p: 1, m: 2, bgcolor: "white" }}>
      <Grid container alignItems="center" spacing={3}>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRight: "1px solid #ddd",
            pr: 2,
          }}
        >
          <img
            src="/assets/searchIcon.svg"
            alt="Search"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
          <InputBase placeholder="Search By Job Title, Role" fullWidth />
        </Grid>

        {/* Location Dropdown */}
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRight: "1px solid #ddd",
            pr: 2,
          }}
        >
          <img
            src="/assets/locationIcon.svg"
            alt="Location"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
          <Box
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              onClick={handleClickLocation}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography variant="body1">{selectedOption}</Typography>
              <IconButton sx={{ ml: 1 }}>
                <KeyboardArrowDownOutlinedIcon />
              </IconButton>
            </Box>

            {/* Location Dropdown */}
            {Boolean(anchorElLocation) && (
              <ClickAwayListener onClickAway={handleClose}>
                <Paper
                  sx={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: 0,
                    zIndex: 10,
                  }}
                >
                  <MenuList>
                    <MenuItem
                      onClick={() => handleMenuItemClick("Remote", "location")}
                    >
                      Remote
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleMenuItemClick("Onsite", "location")}
                    >
                      Onsite
                    </MenuItem>
                  </MenuList>
                </Paper>
              </ClickAwayListener>
            )}
          </Box>
        </Grid>

        {/* Job Type Dropdown */}
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRight: "1px solid #ddd",
            pr: 2,
          }}
        >
          <img
            src="/assets/jobTypeIcon.svg"
            alt="Job Type"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
          <Box
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              onClick={handleClickJobType}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography variant="body1">{selectedJobType}</Typography>
              <IconButton sx={{ ml: 1 }}>
                <KeyboardArrowDownOutlinedIcon />
              </IconButton>
            </Box>
            {/* Job Type Dropdown */}
            {Boolean(anchorElJobType) && (
              <ClickAwayListener onClickAway={handleClose}>
                <Paper
                  sx={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: 0,
                    zIndex: 10,
                  }}
                >
                  <MenuList>
                    <MenuItem
                      onClick={() =>
                        handleMenuItemClick("Full Time", "jobType")
                      }
                    >
                      Full Time
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        handleMenuItemClick("Part Time", "jobType")
                      }
                    >
                      Part Time
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        handleMenuItemClick("Contract", "jobType")
                      }
                    >
                      Contract
                    </MenuItem>
                  </MenuList>
                </Paper>
              </ClickAwayListener>
            )}
          </Box>
        </Grid>

        <Grid item xs={3} sx={{ pl: 2 }}>
          <Typography variant="body1">Salary Per Month</Typography>
          <Slider
      value={watch("salaryRange") as number[]} // Watch for real-time updates
      onChange={(_, newValue) => setValue("salaryRange", newValue as number[])} // Update value
      valueLabelDisplay="auto"
      min={0}
      max={2000000}
      step={50000}
      sx={{
        color: "black", // Black slider
        width: "100%", // Full width
        "@media (max-width:600px)": {
          width: "90%", // Adjust for small screens
        },
      }}
    />
        </Grid>
      </Grid>
    </Box>
  );
};
