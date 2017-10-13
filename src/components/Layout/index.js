import React, { Component } from 'react'
import { withStyles, MuiThemeProvider } from 'material-ui/styles'
import classNames from 'classnames'
import theme from './fusTheme'
import TopBar from './appbar'
import SideBar from './drawer'
import styles from './styles'

class Layout extends Component {
  state = {
    open: false,
    anchorEl: null,
    openMenu: false
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

  handleRequestClose = () => {
    this.setState({ openMenu: false })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  render () {
    const classes = this.props.classes
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <TopBar
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            classes={this.props.classes}
            openMenu={this.state.openMenu}
            handleDrawerOpen={this.handleDrawerOpen}
            handleClick={this.handleClick}
            handleRequestClose={this.handleRequestClose}
          />
          <SideBar
            open={this.state.open}
            classes={this.props.classes}
            handleDrawerClose={this.handleDrawerClose}
          />
          <div className={classes.appFrame}>
            <main className={classNames(classes.content, this.state.open)}>
              {// eslint-disable-next-line
              this.props.children.map((child, i) => {
                  if (child) {
                    return React.cloneElement(child, { foo: 'bar', key: i })
                  }
                })}
            </main>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(Layout)
