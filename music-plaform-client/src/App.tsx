import { useState, Suspense, memo } from "react";
import Layout from "./layout";
const App = memo(() => {
  return (
    <div className="App">
      <Layout></Layout>
    </div>
  );
});

export default App;
