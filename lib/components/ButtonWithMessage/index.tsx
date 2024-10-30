import { useState } from 'react'
import { Button } from '@mui/material';
import { ButtonWithMessageProps } from './index.types';


const ButtonWithMessage = ({
  buttonText = 'Show the thing',
  message = 'Its the message',
  messageId = 'delayedMessage',
}: ButtonWithMessageProps) => {
  const [showMessage, setShowMessage] = useState(false);

  console.log('TEST')

  return (
    <>
      <Button onClick={() => setShowMessage(true)}>
        {buttonText}
      </Button>

      {showMessage && <div id={messageId}>{message}</div>}
    </>
  );
};

export default ButtonWithMessage;
