import { useState } from "react";
import Counter from "./components/Counter";
import { CallGPT } from "./api/gpt";

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoding] = useState(false);

  const handleClickAPICall = async () => {
    try {
      setIsLoding(true);
      const message = await CallGPT();
      setData(message);
    } catch (error) {
    } finally {
      setIsLoding(false);
    }
  };
  return (
    <>
      <button onClick={handleClickAPICall}>GPT API CALL</button>
      <div>data: {data}</div>
      <div>isLoading : {isLoading ? "loding.." : "fin"}</div>
    </>
  );
}

export default App;
