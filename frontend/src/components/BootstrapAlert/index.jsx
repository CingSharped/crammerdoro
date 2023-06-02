import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

import './bootstrapAlert.css'

function BootstrapAlert({heading, warning}) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div className="alert-holder">
      <Alert variant="info" onClose={() => setShow(false)} dismissible >
        <Alert.Heading>{heading}</Alert.Heading>
        <p>
          {warning}
        </p>
      </Alert>
      </div>

    );
  }
}

export default BootstrapAlert;