import './styles.css';
import viteIcon from '../../assets/vite.svg';
import { useState } from 'react'
import { Button } from '@mui/material';
import { ButtonWithMessageProps } from './index.types';
import Message from '../Message';


const ButtonWithMessage = ({
  buttonText = 'Show the thing',
  message = 'Its the message',
}: ButtonWithMessageProps) => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      <Button className="button" onClick={() => setShowMessage(true)}>
        {buttonText}
      </Button>

      {showMessage && <Message>{message}</Message>}

      <img src={viteIcon} />
    </>
  );
};

export default ButtonWithMessage;
