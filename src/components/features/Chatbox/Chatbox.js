import Button from '../../common/Button/Button';
import React from 'react';
import styles from './Chatbox.module.scss';

const Chatbox = () => {
  const {
    root,
    header,
    open,
    close,
    body,
    overlay,
    logs,
    input,
    submit,
    messageBox,
  } = styles;
  const settings = {
    buttonMessage: 'Ask us a question',
    placeholderMessage: 'Type a question',
    messageBox: {
      class: 'd-none',
    },
  };

  document.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.id === open) {
      handleOpen(event);
    } else if (event.target.id === close || !event.target.closest(`#${messageBox}`)) {
      handleClose(event);
    }
  });

  const handleOpen = event => {
    document.getElementById(open).classList.add('d-none');
    document.getElementById(messageBox).classList.remove('d-none');
  };

  const handleClose = event => {
    document.getElementById(messageBox).classList.add('d-none');
    document.getElementById(open).classList.remove('d-none');
  };

  return (
    <div className={root}>
      <div id={messageBox} className={settings.messageBox.class}>
        <div className={header}>
          ChatBot
          <span>
            <i className='material-icons' id={close}>
              close
            </i>
          </span>
        </div>
        <div className={body}>
          <div className={overlay}></div>
          <div className={logs}></div>
        </div>
        <div className={input}>
          <form>
            <input type='text' id={input} placeholder={settings.placeholderMessage} />
            <button type='submit' className={submit} id={submit}>
              <i className='material-icons'>send</i>
            </button>
          </form>
        </div>
      </div>
      <Button id={open} variant={'floating'}>
        {settings.buttonMessage}
      </Button>
    </div>
  );
};

export default Chatbox;
