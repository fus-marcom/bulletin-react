import React from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%'
  }
})

const Loader = props => {
  const classes = props.classes
  return (
    <Grid container className={classes.root} justify="center" align="center">
      <Grid item xs={4} sm={3} md={2}>
        <CircularProgress size={100} />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Loader)
