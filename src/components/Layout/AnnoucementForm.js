import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'
import { blue, yellow } from 'material-ui/colors'
import Button from 'material-ui/Button'
import Input from 'material-ui/Input'

const styles = theme => ({
  textfield: {
    width: '100%',
    marginBottom: '24px'
  },
  bluetext: {
    color: blue[800]
  },
  marginTop: {
    marginTop: '20px'
  },
  hide: {
    display: 'none'
  },
  button: {
    background: yellow[800],
    color: '#fff'
  },
  padding: {
    padding: '30px'
  }
})

class AnnouncementForm extends Component {
  state = {
    files: ''
  }

  render () {
    const classes = this.props.classes
    return (
      <Drawer
        anchor="bottom"
        open={this.props.btnDrawerOpen}
        onRequestClose={this.props.toggleDrawer}
      >
        <div className={classes.padding}>
          <Typography
            className={classes.marginTop}
            type="display1"
            align="center"
          >
            Submit your Announcement
          </Typography>
          <Typography type="subheading" align="center">
            New announcements will be made on Monday. The deadline for next
            upload is 2:00pm Monday
          </Typography>
          <Typography
            className={classes.bluetext}
            type="caption"
            align="center"
          >
            Do you need to request a special bulletin?
          </Typography>
          <form encType="multipart/form-data">
            <TextField
              label="Announcement"
              placeholder="Write you announcement here..."
              multiline
              name="announcement"
              margin="normal"
              className={classes.textfield}
              onChange={this.handleChange}
            />
            <label htmlFor="file">
              <Button raised component="span" className={classes.button}>
                Upload
              </Button>
            </label>
            <input
              onChange={this.handleFileChange}
              className={classes.hide}
              accept="jpg,jpeg,JPG,JPEG"
              multiple
              id="file"
              name="filesArray"
              type="file"
            />
            <Input
              className={classes.textfield}
              disabled
              placeholder="Select one file or more"
              value={this.state.files}
            />
            <center>
              <Button type="submit" raised className={classes.button}>
                SUBMIT
              </Button>
            </center>
            <br />
            <br />
            <br />
          </form>
        </div>
      </Drawer>
    )
  }
  handleFileChange = e => {
    if (e.target.files) {
      let sString = ''
      for (let file of e.target.files) {
        sString += ` ${file.name}`
      }
      this.setState({
        files: sString,
        filesArray: e.target.files
      })
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
}

export default withStyles(styles)(AnnouncementForm)
