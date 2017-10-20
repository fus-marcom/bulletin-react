import React, { Component } from 'react'
import { getAllCategories } from '../../graphql/queries/categories'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ListSubheader from 'material-ui/List/ListSubheader'
import Hidden from 'material-ui/Hidden'
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import { Link } from 'react-router-dom'
import AlarmClock from 'material-ui-icons/Alarm'
import ClockIcon from 'material-ui-icons/AccessTime'
import { graphql } from 'react-apollo'

const displayCategories = props => {
  const { data, classes } = props
  if (data.loading) return

  return (
    <div>
      <Link to={`/category/`} className={classes.link}>
        <ListItem button>
          <ListItemText secondary={`All`} />
        </ListItem>
      </Link>
      {data.categories &&
        data.categories.edges.map(category => (
          <Link
            key={category.node.id}
            to={`/category/${category.node.slug}`}
            className={classes.link}
          >
            <ListItem button>
              <ListItemText secondary={category.node.name} />
            </ListItem>
          </Link>
        ))}
    </div>
  )
}

class SideComponent extends Component {
  render () {
    const classes = this.props.classes
    const drawer = (
      <div className={classes.drawerInner}>
        <div className={classes.drawerHeader}>
          <ListItem>
            <Link to="/">
              <img
                className={classes.image}
                alt="logo"
                src="https://rc.franciscan.university/static/media/fus-logo.5e5882da.svg"
              />
            </Link>
          </ListItem>
          <IconButton
            className={classes.navIconHide}
            onClick={this.props.handleDrawerClose}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemText secondary="Current Bulletin" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <AlarmClock />
            </ListItemIcon>
            <ListItemText inset secondary="Take Action" />
          </ListItem>
        </Link>
        <Divider />
        <ListSubheader>Categories</ListSubheader>
        {displayCategories(this.props)}
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <ClockIcon />
          </ListItemIcon>
          <ListItemText inset primary="Filter By Date" />
        </ListItem>
        <Divider />
        <ListSubheader
          className={classes.btn}
          onClick={this.props.toggleDrawer}
        >
          Submit Announcement
        </ListSubheader>
        <ListSubheader>Classic Mode</ListSubheader>
        <ListSubheader>Help</ListSubheader>
      </div>
    )
    return (
      <div>
        <Hidden mdUp>
          <Drawer
            type="temporary"
            open={this.props.open}
            classes={{
              paper: classes.drawerPaper
            }}
            onRequestClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            type="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    )
  }
}

export default graphql(getAllCategories)(SideComponent)
