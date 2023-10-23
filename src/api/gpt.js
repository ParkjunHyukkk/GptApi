import axios from "axios";

export const CallGPT = () => {
  /*
  curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
   }'
   */

  // const response = await fetch("https://api.openai.com/v1/chat/completions", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${import.meta.env.VITE_GPT_API_KEY}`,
  //   },
  //   body: JSON.stringify({
  //     model: "gpt-3.5-turbo",
  //     messages: [{ role: "user", content: "Say this is a test!" }],
  //     temperature: 0.7,
  //     max_tokens: 1_000,
  //   }),
  // });

  const data = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Say this is a test!" }],
    temperature: 0.7,
    max_tokens: 1_000,
  };

  const response = axios
    .post("https://api.openai.com/v1/chat/completions", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_GPT_API_KEY}`,
      },
    })
    .then((response) => {
      const message = response.data.choices[0].message.content;
      return message;
    })
    .catch((error) => {
      console.error(error);
    });

  return response;
};
