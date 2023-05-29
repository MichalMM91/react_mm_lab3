import React, { useState } from "react";
import { MessageCircle, XCircle } from "react-feather";
import { Icon } from "@iconify/react";

const ChatBox = () => {
  const [opened, setOpen] = useState(false);

  if (!opened)
    return (
      
      <div className="buttons">
                    <button onClick={() => setOpen(true)} className="button is-info">
                        <span className="icon">
                            <Icon icon="fa6-regular:comments" />
                        </span>
                        <span><b>Chat</b></span>
                    </button>
                     
                     
                </div>
    );

  return (
    opened && (
      <div class="box">
          <XCircle onClick={() => setOpen(false)} />
          <input class="input is-info" type="text" placeholder="Chat with AI..."/>
      </div>
    )
  );
};

export default ChatBox;
