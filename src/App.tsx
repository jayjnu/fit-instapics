import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {UploadList} from './libs/UploadList'
import {Preview} from './libs/Preview';
import {Controls} from './libs/Controls';

function App() {
  const [files, setFiles] = useState<FileList | null>(null)

  return (
    <div className="App">
      <div>
        <UploadList files={files} onUpload={(files) => setFiles(files)}/>
      </div>
      <div>
        <Preview files={files}/>
      </div>
      <div>
        <Controls/>
      </div>
    </div>
  )
}

export default App
