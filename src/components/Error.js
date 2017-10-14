import React from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import { red } from 'material-ui/colors'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  err: {
    color: red[500]
  }
})

const Error = ({ error, classes }) => {
  return (
    <Grid container className={classes.root} justify="center" align="center">
      <Grid item xs={6} sm={6} md={4}>
        <Typography className={classes.err} type="headline" gutterBottom>
          {error}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Error)
