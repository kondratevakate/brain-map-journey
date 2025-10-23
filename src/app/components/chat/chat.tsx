'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './chat.module.css';

type ChatMessage = {
  id: string;
  role: 'bot' | 'user';
  text: string;
};

const INITIAL_MESSAGE: ChatMessage = {
  id: 'intro',
  role: 'bot',
  text:
    "I’m here to help you schedule your scan and explore how HelloMRI works.\nTogether, we’ll find the nearest center and prepare your personalized brain map session.",
};

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const listRef = useRef<HTMLDivElement>(null);
  const replyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, open]);

  useEffect(() => {
    return () => {
      if (replyTimeout.current) clearTimeout(replyTimeout.current);
    };
  }, []);

  const composeReply = (raw: string) => {
    const normalized = raw.toLowerCase();
    if (normalized.includes('where')) {
      return (
        'We operate in select partner clinics across the US and EU. Share your city, and I’ll check the closest MRI center for you.'
      );
    }

    if (normalized.includes('what') || normalized.includes('help')) {
      return (
        'I can guide you through preparing for a scan, explain what the report includes, and get you onto the waitlist. Ask me anything, or tell me where you are to get started.'
      );
    }

    if (normalized.includes('price') || normalized.includes('cost')) {
      return (
        'A HelloMRI Brain Longevity Scan is $249 with a 7-day risk-free guarantee. Would you like me to send the sample report next?'
      );
    }

    if (normalized.includes('sample')) {
      return (
        'I just shared the sample highlights in the hero section, and you can open the full report from the waitlist card. Need me to walk you through the insights?'
      );
    }

    return (
      'Thanks for the message! I’ll keep things moving—feel free to ask about availability, pricing, or what’s inside your Neuro-Span™ report.'
    );
  };

  const send = (value?: string) => {
    const text = (value ?? input).trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    const reply = composeReply(text);
    if (replyTimeout.current) clearTimeout(replyTimeout.current);
    replyTimeout.current = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: 'bot', text: reply },
      ]);
    }, 700);
  };

  const hasUserMessages = messages.some((m) => m.role === 'user');

  if (!open) {
    return (
      <div className={styles.wrapper}>
        <button
          type="button"
          className={styles.launcher}
          onClick={() => setOpen(true)}
          aria-label="Open HelloMRI agent chat"
        >
          <Image width={22} height={22} src="/message.svg" alt="Message" />
        </button>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <div className={styles.header}>
          <div className={styles.brand}>
            <Image width={24} height={24} src="/brain-black.svg" alt="Agent" />
            <span>HelloMRI Agent</span>
          </div>
          <button
            type="button"
            className={styles.close}
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            ×
          </button>
        </div>

        <div ref={listRef} className={styles.messages}>
          {messages.map((msg) =>
            msg.role === 'bot' ? (
              <div key={msg.id} className={styles.botRow}>
                <div className={styles.avatar}>
                  <Image
                    src="/brain-black.svg"
                    alt="HelloMRI bot"
                    width={40}
                    height={40}
                  />
                </div>
                <div className={styles.botBubble}>{msg.text}</div>
              </div>
            ) : (
              <div key={msg.id} className={styles.userRow}>
                <div className={styles.userBubble}>{msg.text}</div>
              </div>
            )
          )}

          {!hasUserMessages && (
            <div className={styles.chips}>
              <button
                type="button"
                className={styles.chip}
                onClick={() => send('Where is it available?')}
              >
                Where it’s available?
              </button>
              <button
                type="button"
                className={styles.chip}
                onClick={() => send('What can you do?')}
              >
                What can you do?
              </button>
            </div>
          )}
        </div>

        <div className={styles.composer}>
          <div className={styles.inputShell}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder="Share a message"
              className={styles.input}
            />
            <button
              type="button"
              className={styles.sendBtn}
              onClick={() => send()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
