import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const AceEditor = dynamic(import('react-ace'), { ssr: false });

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleRun = () => {
    // Implement code execution logic here
    console.log(code);
  };

  return (
    <div>
      <h1>Code Editor</h1>
      <AceEditor
        mode="javascript"
        theme="monokai"
        onChange={setCode}
        name="code_editor"
        editorProps={{ $blockScrolling: true }}
        value={code}
      />
      <button onClick={handleRun}>Run</button>
    </div>
  );
};

export default CodeEditor;
