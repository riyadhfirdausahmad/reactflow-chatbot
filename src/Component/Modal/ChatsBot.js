import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

const ChatsBot = () => {
  const dataFromLocalStorage = localStorage.getItem("example-flow");
  const response = dataFromLocalStorage
    ? JSON.parse(dataFromLocalStorage)
    : null;
  const datas = response.nodes;

  if (!datas || datas.length === 0) {
    return null;
  }

  const steps = datas.flatMap((node, index) => {
    const dataLabel = node.data.label
      .split("\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);

    if (index === datas.length - 1) {
      return [
        {
          id: node.id,
          component: <div>{dataLabel}</div>,
          asMessage: true,
          end: true,
        },
      ];
    } else if (index % 2 === 0) {
      return [
        {
          id: node.id,
          component: <div>{dataLabel}</div>,
          asMessage: true,
          trigger: datas[index + 1].id,
        },
      ];
    } else {
      if (!node.data.option) {
        return [
          {
            id: node.id,
            user: true,
            trigger: datas[index + 1].id,
            validator: (value) => {
              if (value === node.data.label) {
                return true;
              } else {
                return "Keyword yang anda masukan salah";
              }
            },
          },
        ];
      } else {
        return [
          {
            id: node.id,
            options: [
              {
                value: "Nasi Padang",
                label: "Nasi Padang",
                trigger: datas[index + 1].id,
              },
              {
                value: "Soto",
                label: "Soto",
                trigger: datas[index + 1].id,
              },
            ],
          },
        ];
      }
    }
  });

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#25D366",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#25D366",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot headerTitle="React Chatbot" steps={steps} />
    </ThemeProvider>
  );
};

export default ChatsBot;
