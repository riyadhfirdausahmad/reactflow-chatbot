import { useState } from "react";
import ChatBot from "react-simple-chatbot";

const datas = [
  {
    id: "1",
    data: {
      label: "Ada Yang Bisa Kami Bantu?",
    },
  },
  {
    id: "2",
    data: {
      label: "tampilkan menu",
    },
  },
  {
    id: "3",
    data: {
      label: "Baiklah, berikut ini menunya:",
    },
  },
  {
    id: "4",
    data: {
      option: true,
    },
  },
  {
    id: "5",
    data: {
      label: "Baik, kami akan mengirimkan {previousValue}",
    },
  },
];

const MenuBotChat = ({ edges }) => {
  const [nodes, setnodes] = useState(datas);

  console.log(nodes);

  if (!nodes || nodes.length === 0) {
    return null;
  }

  const steps = nodes.flatMap((node, index) => {
    if (index === nodes.length - 1) {
      return [
        {
          id: node.id,
          message: node.data.label,
          end: true,
        },
      ];
    } else if (index % 2 === 0) {
      return [
        {
          id: node.id,
          message: node.data.label,
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

  console.log(steps);

  return (
    <>
      <ChatBot steps={steps} />
      {/* <h1>Hello</h1> */}
    </>
  );
};

export default MenuBotChat;
