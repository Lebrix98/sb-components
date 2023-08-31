import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "../../components/Card";

export default {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

// Examples

const htmlBasic = 
<>

    <h1>Prueba de Body</h1>
    <h2>Probar Diferentes</h2>
    <h3>Estilos</h3>
    <h4>de Letras</h4>
    <button>Click Me</button>

</>

const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvr2AtD6BT26TvEKYTHcFM1hsY4ztMy6I2UbugjSNMHBQYPL6Ak6K48lhuCoxrmXyMq4&usqp=CAU"

// Card Header
export const CardHeader = Template.bind({});

CardHeader.args = {
  title: "Prueba de Titulo",
  subTitle: "Prueba de Sub Titulo",
  font: "Arial",
  img: "",
  children: "",
};

// Card Header And Image
export const CardHeaderImage = Template.bind({});

CardHeaderImage.args = {
  title: "Prueba de Titulo",
  subTitle: "Prueba de Sub Titulo",
  font: "Arial",
  img: image,
  children: "",
};

// Card Header And Body

export const CardHeaderBody = Template.bind({});

CardHeaderBody.args = {
    title: "Prueba de Titulo",
    subTitle: "Prueba de Sub Titulo",
    font: "Arial",
    img: "",
    children: htmlBasic,
  };

// Card Header Image And Body

export const CardHeaderImageBody = Template.bind({});

CardHeaderImageBody.args = {
    title: "Prueba de Titulo",
    subTitle: "Prueba de Sub Titulo",
    font: "Arial",
    img: image,
    children: htmlBasic,
  };