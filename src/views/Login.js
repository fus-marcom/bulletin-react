import React, { Component } from 'react'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import { withStyles, MuiThemeProvider } from 'material-ui/styles'
import theme from '../components/Layout/fusTheme'
import qs from 'qs'

const styles = theme => ({
  heightvh: {
    height: '100vh',
    width: '100vw',
    background: '#21412a',
    margin: 0
  }
})

class Login extends Component {
  state = { err: '' }
  componentDidMount () {
    if (this.props.location.search) {
      const parsed = qs.parse(this.props.location.search)
      if (parsed['?error']) {
        this.setState({
          err: parsed['?error']
        })
      }
    }
  }

  componentWillMount () {
    // eslint-disable-next-line
    fetch('http://localhost:8080/check_auth', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        if (res.ok) this.props.history.replace('/')
      })
  }
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid
          className={this.props.classes.heightvh}
          container
          justify="center"
          alignItems="center"
        >
          <Grid item xs={8} sm={5} md={4}>
            <Card>
              <CardContent>
                <Button
                  type="submit"
                  onClick={this.handleLogin}
                  raised
                  color="primary"
                >
                  LOGIN USING MICROSOFT
                </Button>
                <br />
                {this.state.err && (
                  <p style={{ color: 'red' }}>{this.state.err}</p>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    )
  }
  handleLogin = () => {
    window.location.href = 'http://localhost:8080/auth/microsoft/callback'
  }
}

export default withStyles(styles)(Login)
