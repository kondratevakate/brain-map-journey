'use client';

import { useState } from 'react';
import styles from './chat.module.css';
import Image from 'next/image';

export default function Chat() {
  const [isShowChat, setShowChat] = useState<boolean>(false);

  return (
    <>
      {isShowChat ? (
        <div className={styles.chatBlock}>
          <div className={styles.xBtn} onClick={() => setShowChat(false)}>
            <Image width={24} height={24} src={'/x.svg'} alt={'x'} />
          </div>
          <div className={styles.title}>
            <Image
              width={24}
              height={24}
              src={'/brain-black.svg'}
              alt={'brain'}
            />
            <span>HelloMRI Agent</span>
          </div>
          <div className={styles.messageBlock}></div>
          <div className={styles.inputBlock}>
            <input type="text" className={styles.input} />
            <button className={styles.sendBtn}>
              <Image
                width={18}
                height={18}
                src={'/chevron-right.svg'}
                alt={'chevron'}
              />
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.iconBtn} onClick={() => setShowChat(true)}>
          <Image width={22} height={22} src={'/message.svg'} alt={'Message'} />
        </div>
      )}
    </>
  );
}
