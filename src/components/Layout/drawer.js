import React, { Component } from 'react'
import { getAllCategories } from '../../graphql/queries/categories'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ListSubheader from 'material-ui/List/ListSubheader'
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import { Link } from 'react-router-dom'
import AlarmClock from 'material-ui-icons/Alarm'
import { graphql } from 'react-apollo'

class SideComponent extends Component {
  render () {
    const classes = this.props.classes
    return (
      <div>
        <Drawer
          type="persistent"
          classes={{
            paper: classes.drawerPaper
          }}
          open={this.props.open}
        >
          <div className={classes.drawerInner}>
            <div className={classes.drawerHeader}>
              <ListItem>
                <img
                  className={classes.image}
                  alt="logo"
                  src="https://franciscan.university/img/side-nav-logo.jpg"
                />
              </ListItem>
              <IconButton onClick={this.props.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <ListSubheader>Current Bulletin</ListSubheader>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <AlarmClock />
                </ListItemIcon>
                <ListItemText inset secondary="Take Action" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/categories" className={classes.link}>
              <ListItem button>
                <ListItemText primary="Categories" />
              </ListItem>
            </Link>
            {!this.props.data.loading &&
              this.props.data.categories &&
              this.props.data.categories.edges.map(category => (
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
            <Divider />
          </div>
        </Drawer>
      </div>
    )
  }
}

export default graphql(getAllCategories)(SideComponent)
