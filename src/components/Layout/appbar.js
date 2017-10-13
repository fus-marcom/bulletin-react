import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import ViewQuiltIcon from 'material-ui-icons/ViewQuilt'
import SearchIcon from 'material-ui-icons/Search'
import PrintIcon from 'material-ui-icons/Print'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import Menu, { MenuItem } from 'material-ui/Menu'
import classNames from 'classnames'

const TopBar = ({
  classes,
  open,
  openMenu,
  handleDrawerOpen,
  handleClick,
  anchorEl,
  handleRequestClose
}) => {
  return (
    <div>
      <AppBar className={classNames(classes.appBar, open)}>
        <Toolbar disableGutters={!open}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, classes.navIconHide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            type="title"
            color="inherit"
            className={classNames(classes.flex, classes.typo)}
            noWrap
          >
            FUS Bulletin
          </Typography>
          <IconButton color="primary" aria-label="More">
            <SearchIcon />
          </IconButton>
          <IconButton color="primary" aria-label="More">
            <ViewQuiltIcon />
          </IconButton>
          <IconButton color="primary" aria-label="More">
            <PrintIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="More"
            aria-owns={openMenu ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onRequestClose={handleRequestClose}
          >
            <MenuItem onClick={handleRequestClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar
