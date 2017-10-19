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
    files: '',
    btnText: 'SUBMIT'
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
          <form onSubmit={this.handleSubmit} encType="multipart/form-data">
            <TextField
              label="Title"
              placeholder="Write Title for your announcement here..."
              name="title"
              margin="normal"
              className={classes.textfield}
              onChange={this.handleChange}
            />
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
              ref={input => {
                this.fileInp = input
              }}
            />
            <Input
              className={classes.textfield}
              disabled
              placeholder="Select one file or more"
              value={this.state.files}
            />
            <center>
              <Button type="submit" raised className={classes.button}>
                {this.state.btnText}
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
  handleSubmit = e => {
    this.setState({
      btnText: 'SUBMITTING...'
    })
    e.preventDefault()
    const { title, announcement } = this.state
    if (!title || !announcement) {
      this.setState({
        btnText: 'Fill in all fields and try again'
      })
      return
    }
    // eslint-disable-next-line
    let formData = new FormData()
    formData.append('title', title)
    formData.append('announcement', announcement)
    for (const file of this.fileInp.files) formData.append('upload', file)
    // eslint-disable-next-line
    fetch('http://localhost:8080/email_announcement', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(res => {
        if (res.ok) {
          this.setState({
            btnText: 'SUBMITTED ✔️'
          })
        } else {
          this.setState({
            btnText: 'Oops! Try again'
          })
        }
      })
      .catch(er => {
        this.setState({
          btnText: 'Oops! Try again'
        })
      })
  }
  handleFileChange = e => {
    if (e.target.files) {
      let sString = ''
      // eslint-disable-next-line
      for (let file of e.target.files) {
        sString += ` ${file.name}`
      }
      this.setState({
        files: sString
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
