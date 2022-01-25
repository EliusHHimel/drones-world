import React, { useState } from "react";
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Button
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "blue",
        fontSize: "20px",
    },
    icon: {
        color: "white"
    }
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const { user, signOutHandle } = useFirebase();
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/" className={classes.link}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/about" className={classes.link}>About</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/products" className={classes.link}>
                                Products
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/contact" className={classes.link}>Contact</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    {
                        user.email ?
                            <ListItem onClick={() => setOpenDrawer(false)}>
                                <ListItemText>
                                    <Link to="/dashboard" className={classes.link}>Dashboard</Link>
                                </ListItemText>
                            </ListItem> : null
                    }
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <span>{user.displayName}</span>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    {user.email ?

                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <ListItemText>
                                <Button onClick={signOutHandle}
                                    style={{
                                        padding: "0px",
                                    }}
                                    className={classes.link}>Logout</Button>
                            </ListItemText>
                        </ListItem>
                        : <ListItem onClick={() => setOpenDrawer(false)}>
                            <ListItemText>
                                <Link to="/login" className={classes.link}>Login</Link>
                            </ListItemText>
                        </ListItem>}
                    <Divider />
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
                <MenuIcon />
            </IconButton>
        </>
    );
}
export default DrawerComponent;
