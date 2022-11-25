import { GenericContainer, Section, Text } from "../../styles/style";

export default function Personal() {
  return (
    <Section align="flex-start">
      <h2>Dados Pessoais</h2>
      <GenericContainer fd="row" justify="flex-start">
        <Text color="#3A7C2D" bd>
          Nome:
        </Text>
        <Text>Luiz Sérgio Gomes da Cruz </Text>
      </GenericContainer>
      <GenericContainer fd="row" justify="flex-start">
        <Text color="#3A7C2D" bd>
          Nascimento:
        </Text>
        <Text>02/02/1995 </Text>
      </GenericContainer>
      <GenericContainer fd="row" justify="flex-start">
        <Text color="#3A7C2D" bd>
          Cidade:
        </Text>
        <Text>São José dos Campos - SP </Text>
      </GenericContainer>
      <GenericContainer fd="row" justify="flex-start">
        <Text color="#3A7C2D" bd>
          Contato:
        </Text>
        <Text>WhatSapp (99) 99999999 </Text>
      </GenericContainer>
      <GenericContainer fd="row" justify="flex-start">
        <Text color="#3A7C2D" bd>
          O que eu faço?
        </Text>
        <Text>Dev JavaScript/TypeScript Full Stack </Text>
      </GenericContainer>
    </Section>
  );
}
