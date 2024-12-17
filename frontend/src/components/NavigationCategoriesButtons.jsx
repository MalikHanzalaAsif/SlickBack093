import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/NavigationCategoriesButton.css";

const options = [
  {
    name: "All",
    url: "/shop",
  },
  {
    name: "TShirts",
    url: "/shop/tshirts",
  },
  {
    name: "Trousers",
    url: "/shop/trousers",
  },
  {
    name: "Hoodies",
    url: "/shop/hoodies",
  },
  {
    name: "Accessories",
    url: "/shop/accessories",
  },
];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route
  const [selectedIndex, setSelectedIndex] = React.useState(0); // Default to "All"

  // Update `selectedIndex` based on the current route
  React.useEffect(() => {
    const currentIndex = options.findIndex(
      (option) => option.url === location.pathname
    );
    if (currentIndex !== -1) {
      setSelectedIndex(currentIndex);
    }
  }, [location.pathname]);

  const handleClick = () => {
    navigate(options[selectedIndex].url);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    navigate(options[index].url);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="flex justify-center mt-10">
      <React.Fragment>
        <ButtonGroup
          variant="contained"
          ref={anchorRef}
          aria-label="Button group with a nested menu"
        >
          {/* Main Button */}
          <Button
            onClick={handleClick}
            style={{ background: "linear-gradient(to right, #b10101, #6d0101)" }}
            className="border-1 border-white"
          >
            {options[selectedIndex].name}
          </Button>

          {/* Dropdown Button */}
          <Button
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
            style={{ background: "linear-gradient(to right, #b10101, #6d0101)" }}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>

        {/* Popper Menu */}
        <Popper
          sx={{ zIndex: 1 }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    {options.map((option, index) => (
                      <MenuItem
                        key={option.name}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option.name}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </React.Fragment>
    </div>
  );
}
