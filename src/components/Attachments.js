import React from 'react'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import AttachmentIcon from 'material-ui-icons/Attachment'

const Attachments = ({ attachments }) => {
  return (
    <div>
      <br />
      <Typography type="button">Attachments:</Typography>

      {/* attachments.map((attachment, i) => (
            <Typography gutterBottom key={i}>
              <Button dense color="primary">
                <AttachmentIcon /> {attachment}
              </Button>
            </Typography>
          )) */}
      <Typography gutterBottom>
        <Button dense color="primary">
          <AttachmentIcon /> Attachment1
        </Button>
      </Typography>
    </div>
  )
}
export default Attachments
