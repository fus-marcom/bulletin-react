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
      <AppBar className={classNames(classes.appBar, this.props.open)}>
        <Toolbar disableGutters={!this.props.open}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={this.props.handleDrawerOpen}
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
            aria-owns={this.props.openMenu ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.props.handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={this.props.anchorEl}
            open={this.props.openMenu}
            onRequestClose={this.props.handleRequestClose}
          >
            <MenuItem onClick={this.props.handleRequestClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar
