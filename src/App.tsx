import "./App.css";
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "./components/resizablepanels/ResizablePanels";

function App() {
  return (
    <>
      <div className="app">
        <header className="header">
          <strong>My Application</strong> - Fixed Header
        </header>
        <PanelGroup direction="horizontal">
          <Panel defaultSize={20}>Browser</Panel>
          <PanelResizeHandle />
          <Panel defaultSize={60}>
            <PanelGroup direction="vertical">
              <Panel defaultSize={80}>App</Panel>
              <PanelResizeHandle />
              <Panel defaultSize={20}>Terminal</Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle />
          <Panel defaultSize={20}>Documentation</Panel>
        </PanelGroup>
      </div>
    </>
  );
}

export default App;
