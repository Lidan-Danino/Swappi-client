import React, { useContext, useState, useCallback } from "react";
import { Context } from "../../ContextStore";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import LoginIcon from "@material-ui/icons/AccountCircle";
import RegisterIcon from "@material-ui/icons/PersonAdd";
import CategoriesNav from "../../components/Categories/CategoriesNav"; 
import '../../components/Categories/Categories.css';
import { Grow } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  const { spacing, palette } = theme;
  return {
    root: {
      flexGrow: 1,
    },
    appBar: {
      "&.MuiAppBar-colorPrimary": {
        color: palette.common.black,
        backgroundColor: palette.common.white,
      },
    },
    navItem: {
      textDecoration: "none",
      marginLeft: spacing(2),
      marginRight: spacing(2),
    },
    menuButton: {
      marginRight: spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
      width: "100px",
      height: "auto",
    },
    sider: {
      flexGrow: 1,
    }
  };
});

const LOGO_URL = "https://res.cloudinary.com/dd5irg4pr/image/upload/v1678804264/Swappi_vq6lb5.png";

const UserMenu = ({ userData, setUserData, anchorEl, handleMenu, handleClose }) => (
  <>
    <NavLink to="/add-product">
      <IconButton edge="end" color="inherit">
        <AddCircleOutlineIcon />
      </IconButton>
    </NavLink>

    <IconButton edge="end" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
      <AccountCircle />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <NavLink className="dropdown-item" to={`/profile/${userData._id}`}>
          <AccountCircle />
          Profile
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <NavLink className="dropdown-item" to="/messages">
          <MailIcon />
          Messages
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <NavLink
          className="dropdown-item"
          to="/auth/logout"
          onClick={() => {
            setUserData(null);
          }}
        >
          <ExitToAppIcon />
          Log out
        </NavLink>
      </MenuItem>
    </Menu>
  </>
);

const GuestMenu = ({ classes }) => (
  <ButtonGroup color="inherit" variant="outlined">
    <NavLink className={classes.navItem} to="/auth/login">
      <Button startIcon={<LoginIcon />} color="inherit">
        <Typography variant="button">Login</Typography>
      </Button>
    </NavLink>
    <NavLink className={classes.navItem} to="/auth/register">
      <Button startIcon={<RegisterIcon />} color="inherit">
        <Typography variant="button">Register</Typography>
      </Button>
    </NavLink>
  </ButtonGroup>
);

function Header({ handleSearch, query }) {
  const classes = useStyles();
  const { userData, setUserData } = useContext(Context);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);
  //added the useState from the Categories.js file
  // const [query, setQuery] = useState("");
  // const handleSearch = (e) => {
  //   setQuery(e.target.value);
  // };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar >
          <Typography variant="h6" className={classes.title}>
            <NavLink
              className="navbar-brand"
              to="/"
              style={{
                display: "flex",
                flexDirection: "row", 
                alignItems: "center", 
              }}
            >
              <img className={classes.logo} src={LOGO_URL} alt="Logo-img" />
              <div id="sider" style={{ flex: 1 }}>
                <input className="col-lg-6" type="text" placeholder="Find your ticket..." name="search" value={query} onChange={handleSearch} />
              </div>
            </NavLink>
            {/* Move the search bar component here */}
          </Typography>
          {userData ? <UserMenu userData={userData} setUserData={setUserData} anchorEl={anchorEl} handleMenu={handleMenu} handleClose={handleClose} /> : <GuestMenu classes={classes} />}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;