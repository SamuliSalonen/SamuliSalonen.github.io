import React from 'react';
import './panels.scss';

/*
  Support and TwitchPanel were the same markup with different strings,
  so they're one component now. Both are still exported by name, so
  existing usage keeps working after you update the import path.
*/
export const CalloutPanel = ({
  eyebrow,
  title,
  children,
  href,
  action,
  live = false,
}) => (
  <aside className="callout">
    {eyebrow && (
      <p className="label callout__eyebrow">
        {live && <span className="callout__live" aria-hidden="true" />}
        {eyebrow}
      </p>
    )}

    <h3 className="callout__title">{title}</h3>
    <div className="callout__body">{children}</div>

    {href && (
      <a
        className="btn-primary"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {action}
      </a>
    )}
  </aside>
);

export const Support = ({ link }) => (
  <CalloutPanel
    eyebrow="Support"
    title="Fund the next build"
    href={link}
    action="Support on Ko-fi"
  >
    <p>
      This is a solo project. A one-off tip covers asset licences and keeps
      builds shipping.
    </p>
  </CalloutPanel>
);

export const TwitchPanel = ({ channelName, isLive = false }) => (
  <CalloutPanel
    eyebrow={isLive ? 'Live now' : 'Streaming'}
    live={isLive}
    title="Watch it get made"
    href={`https://www.twitch.tv/${channelName}`}
    action="Watch on Twitch"
  >
    <p>
      Features get built live on stream, most weeknights. Turn up and argue
      with the design decisions in chat.
    </p>
  </CalloutPanel>
);

export default CalloutPanel;