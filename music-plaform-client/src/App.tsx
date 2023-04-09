import { useState, Suspense, memo, useEffect } from "react";
import Layout from "./layout";
import { useUser } from "./store/useUser";
let user: any = localStorage.getItem("user");
console.log(user);

const App = memo(() => {
  const [setUserId, setUsername, userId] = useUser((state: any) => [
    state.setUserId,
    state.setUsername,
    state.userId,
  ]);
  // user = JSON.parse(user || "");
  // console.log(user.id);

  // if (user) {
  //   setUserId(user?.id);
  //   setUsername(user?.username);
  // }
  useEffect(() => {
    user = JSON.parse(user || "");
    console.log(user.id);
    if (user) {
      setUserId(user?.id);
      setUsername(user?.username);
    }
  }, []);
  return (
    <div className="App">
      <Layout></Layout>
    </div>
  );
});

export default App;
