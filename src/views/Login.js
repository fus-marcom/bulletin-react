import React, { Component } from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'
import { withStyles, MuiThemeProvider } from 'material-ui/styles'
import theme from '../components/Layout/fusTheme'

const styles = theme => ({
  heightvh: {
    height: '100vh',
    width: '100vw',
    background: '#21412a',
    margin: 0
  }
})

class Login extends Component {
  state = { email: '', err: '', txt: 'Submit' }
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
          align="center"
        >
          <Grid item xs={8} sm={5} md={4}>
            <Card>
              <form onSubmit={this.handleSubmit}>
                <CardContent>
                  <Typography type="display1" component="h2">
                    Login
                  </Typography>
                  <TextField
                    error={!!this.state.err}
                    name="email"
                    label={this.state.err ? this.state.err : 'Email'}
                    value={this.state.email}
                    onChange={this.handleChange}
                    fullWidth
                    margin={'normal'}
                    type="email"
                    required
                  />
                </CardContent>
                <CardActions>
                  <Button type="submit" raised color="primary">
                    {this.state.txt}
                  </Button>
                </CardActions>
              </form>
            </Card>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    )
  }
  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      err: '',
      txt: 'Submitting'
    })
    // eslint-disable-next-line
    fetch('http://localhost:8080/sendtoken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: this.state.email
      })
    })
      .then(res => res.status)
      .then(res => {
        if (res === 200) {
          this.setState({
            txt: 'Email has been sent'
          })
        } else if (res === 401) {
          this.setState({
            err: 'Use a valid franciscan email',
            txt: 'Submit'
          })
        }
      })
      .catch(e => {
        this.setState({
          err: 'This email is not sent',
          txt: 'Submit'
        })
      })
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
}

export default withStyles(styles)(Login)
