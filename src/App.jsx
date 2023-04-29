import { useState } from 'react'
import './App.css'
import { marked } from 'marked';

  const initialState = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo](//upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/langfr-220px-React-icon.svg.png)
  
`


function App() {
  const [text, setText] = useState(initialState)

  const markeDown = marked(text, {breaks: true})

  return (
    <div className="App">
      <div className="text-editor">
        <h2 className='heading'>Editor</h2>
        <textarea id="editor" value={text} onChange={(e) => setText(e.target.value)}>
          {initialState}
        </textarea>
      </div>
      <div className="text-previer">
        <h2 className='heading'>Preview</h2>
          <div dangerouslySetInnerHTML={{__html: markeDown}} id="preview"/>
      </div>
    </div>
  )
}

export default App
