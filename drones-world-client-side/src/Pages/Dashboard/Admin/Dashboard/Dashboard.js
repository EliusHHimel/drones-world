import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from "@material-ui/icons/Menu"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useFirebase from '../../../../Hooks/useFirebase';
import { Button } from '@material-ui/core';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageOrders from '../ManageOrders/ManageOrders';
import AdminRoute from '../AdminRoute/AdminRoute';
import MyOrders from '../../User/MyOrders/MyOrders';
import AddReview from '../../User/AddReview/AddReview';
import useAdmin from '../../../../Hooks/useAdmin';
import Pay from '../../User/Pay/Pay';

const drawerWidth = 220;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, signOutHandle } = useFirebase();
    const { admin } = useAdmin();
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <img align='center' src={user.photoURL ? user.photoURL : 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'} alt="" style={{
                width: '100px',
                marginLeft: '50px',
                borderRadius: "50%",
                marginBottom: '5px'
            }} />
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="" className="icon-image" />
                    </ListItemIcon>
                    <Link className='link-text' to='/'>Home</Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <img src="https://png.pngtree.com/png-vector/20191117/ourlarge/pngtree-beautiful-dashboard-glyph-vector-icon-png-image_1995525.jpg" alt="" className="icon-image" />
                    </ListItemIcon>
                    <Link className='link-text' to={`${url}`}>Dashboard</Link>
                </ListItem>
                {
                    admin ?
                        <>
                            <ListItem button>
                                <ListItemIcon>
                                    <img src="https://www.kindpng.com/picc/m/247-2472380_add-administrator-icon-admin-setting-icon-png-transparent.png" alt="" className="icon-image" />
                                </ListItemIcon>
                                <Link className='link-text' to={`${url}/makeAdmin`}>Make Admin</Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <img src="https://www.pinclipart.com/picdir/big/253-2530638_product-and-services-png-download-clipart.png" alt="" className="icon-image" />
                                </ListItemIcon>
                                <Link className='link-text' to={`${url}/addproduct`}>Add Products</Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <img src="https://static.thenounproject.com/png/3688255-200.png" alt="" className="icon-image" />
                                </ListItemIcon>
                                <Link className='link-text' to={`${url}/manageproduct`}>Manage Products</Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <img src="https://www.pngkey.com/png/full/299-2992974_however-for-better-order-management-we-should-know.png" alt="" className="icon-image" />
                                </ListItemIcon>
                                <Link className='link-text' to={`${url}/manageOrders`}>Manage Orders</Link>
                            </ListItem>
                        </> :

                        <>
                            <ListItem button>
                                <ListItemIcon>
                                    <img src="https://www.pngkey.com/png/full/299-2992974_however-for-better-order-management-we-should-know.png" alt="" className="icon-image" />
                                </ListItemIcon>
                                <Link className='link-text' to={`${url}/myorders`}>My Orders</Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <img src="https://cdn-icons-png.flaticon.com/512/1484/1484821.png" alt="" className="icon-image" />
                                </ListItemIcon>
                                <Link className='link-text' to={`${url}/addreview`}>Add Review</Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <img src="https://cdn-icons-png.flaticon.com/512/1484/1484821.png" alt="" className="icon-image" />
                                </ListItemIcon>
                                <Link className='link-text' to={`${url}/pay`}>Pay</Link>
                            </ListItem>
                        </>
                }
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <img className='icon-image' src="https://www.pinclipart.com/picdir/big/182-1821638_logout-icon-png-red-clipart.png" alt="" />
                    </ListItemIcon>
                    <Button onClick={signOutHandle}>Log Out</Button>
                </ListItem>
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproduct`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/addreview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}


export default Dashboard;
