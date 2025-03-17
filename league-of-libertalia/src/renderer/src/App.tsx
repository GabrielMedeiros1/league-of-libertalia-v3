import Versions from './components/Versions';
import electronLogo from './assets/electron.svg';
import { useState } from 'react';
import NavBar from './ui/NavBar';
import Settings from './ui/Settings';


function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  const [showSettings, toggleShowSettings] = useState(true);

  const toggleSettings = () => {
    toggleShowSettings(!showSettings);
  };


  return (
    <>
      <div className="container">
        <NavBar onSettingsClick={toggleSettings} />
        {showSettings && <Settings />} {/* render settings if showSettings is true */}
      </div>
    </>
  )
}

export default App
