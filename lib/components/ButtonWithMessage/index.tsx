import './styles.css';
import viteIcon from '../../assets/vite.svg';
import { useState } from 'react'
import { Button } from '@mui/material';
import { ButtonWithMessageProps } from './index.types';


const ButtonWithMessage = ({
  buttonText = 'Show the thing',
  message = 'Its the message',
  messageId = 'delayedMessage',
}: ButtonWithMessageProps) => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      <Button className="button" onClick={() => setShowMessage(true)}>
        {buttonText}
      </Button>

      {showMessage && <div className="message" id={messageId}>{message}</div>}

      <img src={viteIcon} />
    </>
  );
};

export default ButtonWithMessage;
