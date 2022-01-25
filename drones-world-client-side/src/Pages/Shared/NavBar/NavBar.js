import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
    Box,
    Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import useFirebase from "../../../Hooks/useFirebase";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(5),
        "&:hover": {
            color: "yellow",
        },
    },
}));

const NavBar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { user, signOutHandle } = useFirebase();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <CssBaseline />
                <Toolbar>
                    <Typography variant="h5" className={classes.logo}>
                        Drones <span style={{ color: 'crimson' }}>World</span>
                    </Typography>
                    {isMobile ? (
                        <DrawerComponent />
                    ) : (
                        <div className={classes.navlinks}>
                            <Link to="/" className={classes.link}>
                                Home
                            </Link>
                            <Link to="/about" className={classes.link}>
                                About
                            </Link>
                            <Link to="/products" className={classes.link}>
                                Products
                            </Link>
                            <Link to="/contact" className={classes.link}>
                                Contact
                            </Link>
                            {
                                user.email ? <Link to="/dashboard" className={classes.link}>
                                    Dashboard
                                </Link> : null
                            }
                            <span style={{
                                marginTop: "5px",
                                marginLeft: "15px",
                            }}> {user.displayName} </span>
                            {
                                user?.email ?
                                    <Button onClick={signOutHandle}
                                        style={{
                                            padding: "0px",
                                        }}
                                        className={classes.link}>Logout</Button> :
                                    <>
                                        <Link to="/login" className={classes.link}>
                                            Login
                                        </Link>
                                        <Link to="/signup" className={classes.link}>
                                            Sign Up
                                        </Link>
                                    </>

                            }
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default NavBar;