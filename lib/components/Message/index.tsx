const Message = ({
  message = '',
  children = null,
}: { message?: string, children?: React.ReactNode }) => {
  return (
    <p className="message" >
      {message || children}
    </p>
  )
};

export default Message;