import React, { Component } from 'react'
import { withStyles, MuiThemeProvider } from 'material-ui/styles'
import classNames from 'classnames'
import theme from './fusTheme'
import TopBar from './appbar'
import SideBar from './drawer'
import Tooltip from 'material-ui/Tooltip'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import styles from './styles'
import AnnouncementForm from './AnnoucementForm'
import { withRouter } from 'react-router-dom'

class Layout extends Component {
  state = {
    open: false,
    anchorEl: null,
    openMenu: false,
    viewType: 'list',
    btnDrawerOpen: false
  }
  componentWillMount () {
    const layoutType = window.localStorage.getItem('l-type') || 'list'
    this.setState({
      viewType: layoutType
    })
  }
  handleDrawerOpen = () => {
    this.setState({ open: true })
  }
  handleClick = event => {
    this.setState({
      openMenu: true,
      anchorEl: event ? event.currentTarget : null
    })
  }

  handleLayoutChange = () => {
    const newVal = this.state.viewType === 'grid' ? 'list' : 'grid'
    window.localStorage.setItem('l-type', newVal)
    this.setState({
      viewType: newVal
    })
  }

  handlePrintIcon = () => {
    this.setState({
      viewType: 'print'
    })
  }

  handleRequestClose = () => {
    this.setState({ openMenu: false })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  handleLogout = () => {
    // eslint-disable-next-line
    window.location.href = 'http://localhost:8080/logout'
  }

  toggleDrawer = () => {
    this.setState({ btnDrawerOpen: !this.state.btnDrawerOpen })
  }

  render () {
    const classes = this.props.classes
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <TopBar
            viewtype={this.state.viewType}
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            classes={this.props.classes}
            openMenu={this.state.openMenu}
            handleDrawerOpen={this.handleDrawerOpen}
            handleClick={this.handleClick}
            handleRequestClose={this.handleRequestClose}
            handleLayoutChange={this.handleLayoutChange}
            handleLogout={this.handleLogout}
            handlePrintIcon={this.handlePrintIcon}
            style={this.state.viewType === 'print' ? { display: 'none' } : {}}
          />
          <SideBar
            open={this.state.open}
            classes={this.props.classes}
            handleDrawerClose={this.handleDrawerClose}
            toggleDrawer={this.toggleDrawer}
            style={this.state.viewType === 'print' ? { display: 'none' } : {}}
          />
          <AnnouncementForm
            btnDrawerOpen={this.state.btnDrawerOpen}
            toggleDrawer={this.toggleDrawer}
          />
          <div className={classes.appFrame}>
            <main
              style={this.state.viewType === 'print' ? { margin: '15px' } : {}}
              className={classNames(classes.content, this.state.open)}
            >
              {// eslint-disable-next-line
              this.props.children.map((child, i) => {
                  if (child) {
                    return React.cloneElement(child, {
                      viewtype: this.state.viewType,
                      key: i
                    })
                  }
                })}
              <Tooltip placement="left" title="Add announcement">
                <Button
                  style={
                    this.state.viewType === 'print' ? { display: 'none' } : {}
                  }
                  onClick={this.toggleDrawer}
                  color="primary"
                  className={classes.absolute}
                  fab
                >
                  <AddIcon />
                </Button>
              </Tooltip>
            </main>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(withRouter(Layout))
