import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

const ChatsBot = ({ nodes, edges }) => {
  const steps = nodes?.flatMap((node, index) => {
    const dataLabel = node.data.label
      .split("\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);

    if (index === nodes.length - 1 && nodes.length === 2) {
      return [
        {
          id: node.id,
          user: true,
          end: true,
          validator: (value) => {
            if (value === node.data.label) {
              return true;
            } else {
              return "Keyword yang anda masukan salah";
            }
          },
        },
      ];
    } else if (index === nodes.length - 1 && nodes.length > 2) {
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
          trigger: nodes[index + 1].id,
        },
      ];
    } else {
      if (!node.data.option) {
        return [
          {
            id: node.id,
            user: true,
            trigger: nodes[index + 1].id,
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
                trigger: nodes[index + 1].id,
              },
              {
                value: "Soto",
                label: "Soto",
                trigger: nodes[index + 1].id,
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
