import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import menuImage from "./components/3line.png";
import { Link } from "react-router-dom";
// import { Image } from "lucide-react";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="small"
      >
        <img src={menuImage} className="w-6" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/events" className="text-gray-700 hover:text-gray-900">
            Events
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
