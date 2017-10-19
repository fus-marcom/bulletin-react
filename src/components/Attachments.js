import React from 'react'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import AttachmentIcon from 'material-ui-icons/Attachment'

const Attachments = ({ attachments }) => {
  return (
    <div>
      <Typography type="headline" gutterBottom>
        Attachments:
      </Typography>

      <Typography gutterBottom>
        <Button dense color="primary">
          <AttachmentIcon /> Attachment1
          {/* attachments.map((attachment, i) => (
            <div key={i}>
              <AttachmentIcon /> {attachment}
            </div>
          )) */}
        </Button>
      </Typography>
    </div>
  )
}
export default Attachments
