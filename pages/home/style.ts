import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { StyleTypes } from "../../types";

const theme = {
  light: "#3A7C2D",
  medium: "#1D4817",
  datk: "#001500",
};

const linkAnimation = keyframes`
to{
  box-shadow: 5px 0 50px ${theme.light};
  transform: scale(1.1);
}
`;

const sectionAnim = keyframes`
to{
  box-shadow: 5px 5px 10px black;
}
`;

export const Container = styled.div<StyleTypes>`
  display: flex;
  flex-direction: ${(props) => (props.fd ? props.fd : "column")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: center;
  gap: ${(props) => (props.gap ? props.gap : "10px")};
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding: 5rem;
  @media (max-width: 750px) {
    padding: 0 2rem;
  }
`;
export const Header = styled.header``;

export const Section = styled.section<StyleTypes>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-self: ${(props) => (props.selfA ? props.selfA : "auto")};
  flex-direction: ${(props) => (props.fd ? props.fd : "column")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  gap: ${(props) => (props.gap ? props.gap : "0px")};
  padding: 1rem;
  h2 {
    font-size: 2rem;
    color: ${theme.light};
  }
  p {
  }
`;

export const Text = styled.p<StyleTypes>`
  color: ${(props) => (props.color ? props.color : "auto")};
  font-weight: ${(props) => (props.bd ? "bold" : "auto")}; ;
`;

export const TheLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 10rem;
  border-radius: 10px;
  background-color: ${theme.medium};
  padding: 0.2rem 1rem;
  :hover {
    animation: ${linkAnimation} 1s 0s infinite alternate;
  }
`;
export const GenericContainer = styled.div<StyleTypes>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.fd ? props.fd : "column")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  gap: ${(props) => (props.gap ? props.gap : "10px")};
  h2 {
    font-size: 2rem;
    color: ${theme.light};
  }
`;
export const Foot = styled.footer<StyleTypes>`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  p {
    text-align: center;
  }
`;
export const Button = styled.button.attrs((props) => {
  props.type = "button";
})`
  padding: 0.2rem 1rem;
  font-size: 1.2rem;
  background-color: ${theme.medium};
  border: none;
  border-radius: 5px;
`;
export const Form = styled.div<StyleTypes>`
  display: ${(props) => (props.show ? "flex" : "none")};
  margin: 1rem;
`;
