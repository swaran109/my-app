import React, { useState } from 'react';

const RichTextEditor: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', height: '200px' }}
      />
    </div>
  );
};

export default RichTextEditor;