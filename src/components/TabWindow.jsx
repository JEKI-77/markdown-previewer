import { Tabs } from "antd";
import styled from "styled-components";
import { marked } from "marked";

const { TabPane } = Tabs;

// Set options
// `highlight` example uses `highlight.js`
marked.setOptions({
  renderer: new marked.Renderer(),
  // highlight: function(code, language) {
  //   const hljs = require('highlight.js');
  //   const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
  //   return hljs.highlight(validLanguage, code).value;
  // },
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

function callback(key) {
  console.log(key);
}

const MarkdownEditor = ({ markdownString, setMarkdownString }) => (
  <TabWindow>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Editor" key="1">
        <Editor>
          <header>
            <h2 className="heading">Editor</h2>
          </header>
          <textarea
            id="editor"
            name="editor"
            placeholder="Enter Markdown"
            onChange={(event) => setMarkdownString(event.target.value)}
            value={markdownString}
          ></textarea>
        </Editor>
      </TabPane>
      <TabPane tab="Preview" key="2">
        <Preview>
          <header>
            <h2 className="heading">Preview</h2>
          </header>
          <div
            id="preview"
            name="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdownString) }}
          ></div>
        </Preview>
      </TabPane>
    </Tabs>
  </TabWindow>
);

const TabWindow = styled.section`
  width: 100%;

  .ant-tabs-tab-btn {
    padding: 1rem;
    font-weight: 800;
  }

  .ant-tabs-nav-list {
    display: flex;
    background-color: #f1f8ff;
    border-radius: 6px 6px 0 0;
    border-color: #e1e4e8;
    border-style: double;
    width: 90%;
    border-width: 1px;
  }

  .ant-tabs-tab-active {
    background-color: #fff;
    border-color: #e1e4e8;
    border-radius: 6px 6px 0 0;
    border-style: inherit;
    border-bottom: 0;
  }

  .ant-tabs-nav-operations {
    display: none;
  }

  .ant-tabs-tabpane {
    height: 50rem;
  }
`;

const Editor = styled.article`
  border: 1px solid #e2e4e9;
  border-radius: 0 0 20px 20px;
  width: 90%;
  height: 75%;

  .heading {
    height: 5%;
  }

  #editor {
    height: 80%;
    width: 95%;
    border: 1px solid #e1e4e8;
    overflow: scroll;
    padding: 1rem;
  }

  #editor,
  .heading {
    margin: 1rem 0 1rem 1rem;
    padding: 0 1rem 0 0;
  }

  @media only screen and (max-width: 600px) {
    border: 0.5em solid #fff;
    width: 100%;
  }
`;

const Preview = styled.article`
  border: 1px solid #e2e4e9;
  border-radius: 0 0 20px 20px;
  width: 90%;
  height: 75%;

  #preview,
  .heading {
    margin: 1rem 0 1rem 1rem;
    padding: 0 1rem 0 0;
  }

  #preview {
    height: 80%;
    width: 95%;
    border: 1px solid #e1e4e8;
    overflow: scroll;
    padding: 1rem;
  }

  #preview h1 {
    font-size: 1.5rem;
  }

  #preview h2 {
    font-size: 1.25rem;
  }

  #preview img {
    width: 20%;
  }

  .heading {
    height: 5%;
  }

  @media only screen and (max-width: 600px) {
    border: 0.5em solid #fff;
    width: 100%;
  }
}
`;
export default MarkdownEditor;
