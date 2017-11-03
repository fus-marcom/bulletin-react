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
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'
import Button from 'material-ui/Button'

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
  state = {
    month: '',
    year: '',
    formStyles: {
      display: 'none'
    }
  }
  handleChange = name => event => {
    console.log(event)
    this.setState({ [name]: event.target.value })
  }

  render () {
    const classes = this.props.classes
    const years = () => {
      let yearsArray = []
      for (let i = new Date().getFullYear(); i >= 2016; i--) yearsArray.push(i)
      return yearsArray
    }
    const form = (
      <form style={this.state.formStyles}>
        <ListItem>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="month">Month</InputLabel>
            <Select
              fullWidth
              value={this.state.month}
              onChange={this.handleChange('month')}
              input={<Input id="month" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>January</MenuItem>
              <MenuItem value={2}>February</MenuItem>
              <MenuItem value={3}>March</MenuItem>
              <MenuItem value={4}>April</MenuItem>
              <MenuItem value={5}>May</MenuItem>
              <MenuItem value={6}>June</MenuItem>
              <MenuItem value={7}>July</MenuItem>
              <MenuItem value={8}>August</MenuItem>
              <MenuItem value={9}>September</MenuItem>
              <MenuItem value={10}>October</MenuItem>
              <MenuItem value={11}>November</MenuItem>
              <MenuItem value={12}>December</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="year">Year</InputLabel>
            <Select
              fullWidth
              value={this.state.year}
              onChange={this.handleChange('year')}
              input={<Input id="year" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {years().map(year => (
                <MenuItem value={year} key={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <Button
            raised
            onClick={() =>
              this.props.handleFilterDate(this.state.month, this.state.year)}
          >
            SUBMIT
          </Button>
        </ListItem>
      </form>
    )
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
        <ListItem button onClick={this.toggleForm}>
          <ListItemIcon>
            <ClockIcon />
          </ListItemIcon>
          <ListItemText inset primary="Filter By Date" />
        </ListItem>
        {form}
        <Divider />
        <ListItem button onClick={this.props.toggleDrawer}>
          <ListItemText secondary={'Submit Announcement'} />
        </ListItem>
        <ListItem button>
          <ListItemText secondary={'Classic Mode'} />
        </ListItem>
        <ListItem button>
          <ListItemText secondary={'Help'} />
        </ListItem>
      </div>
    )
    return (
      <div style={this.props.style}>
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
  toggleForm = () => [
    this.setState({
      formStyles: {
        display: 'block'
      }
    })
  ]
}

export default graphql(getAllCategories)(SideComponent)
