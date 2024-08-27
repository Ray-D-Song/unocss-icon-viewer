import React, { useState } from 'react';
import { UnoIconViewer} from '@unocss-icon-viewer/library/react';
import '@unocss-icon-viewer/library/style'

function App() {
  const [icon, setIcon] = useState('')
  return (
    <div>
      <div>Welcome to React.</div>
      <UnoIconViewer icon={icon} setIcon={setIcon}/>
    </div>
  );
}

export default App;
