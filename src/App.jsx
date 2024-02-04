import { CopyToClipboardButton } from './components/CopyToClipboardButton'
import './styles/App.css'

const myProfileLink = 'https://github.com/AlexCernas2901'

export function App() {
  return (
    <div className='app-container'>
      <CopyToClipboardButton link={myProfileLink} />
      <input type='text' className='paste-clipboard' />
    </div>
  )
}
