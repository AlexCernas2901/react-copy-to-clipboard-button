import React, { useState } from 'react'
import {
  CopyToClipboardIcon,
  CopiedToClipboardIcon
} from '../icons/Clipboard.jsx'
import '../styles/CopyToClipboard.css'

export function CopyToClipboardButton({ link }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link) // Copy the link to the clipboard
    setCopied(true)
    setTimeout(() => {
      // Reset the button after 2 seconds
      setCopied(false)
    }, 2000)
  }

  return (
    <span className='clipboard-span-contanier'>
      <input type='text' value={link} className='clipboard-input' />
      <span className='clipboard-span-group-button'>
        <button
          onClick={copyToClipboard}
          className='clipboard-button'
          aria-label={copied ? 'Copied to clipboard' : 'Copy to clipboard'}
        >
          {copied ? <CopiedToClipboardIcon /> : <CopyToClipboardIcon />}
        </button>
      </span>
    </span>
  )
}
