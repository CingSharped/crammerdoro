import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

import './bootstrapAlert.css'

function AlertDismissibleExample({heading, warning}) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div className="alert-holder">
      <Alert variant="danger" onClose={() => setShow(false)} dismissible >
        <Alert.Heading>{heading}</Alert.Heading>
        <p>
          {warning}
        </p>
      </Alert>

      </div>

    );
  }
}

export default AlertDismissibleExample;