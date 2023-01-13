import styled from "styled-components";

export const HighLight = styled.a`
  color: #f78719;
  font-weight: ${(props) => (props.variant === "bold" ? "bold" : "")};
`;

export const Submit = styled.input.attrs({ type: "submit" })`
  margin: 20px;
  border: none;
  border-radius: 8px;
  height: 40px;
  width: 350px;
  background: #1575a7;
  font-size: 15px;
  color: white;
  @media (max-width: 540px) {
    width: calc(350px * 4 / 5);
  }
  @media (max-width: 440px)
  {
    margin: 10px;
    width: calc(400px *64/125)
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
  width: 500px;
  border-radius: 10px;
  font-size: 0.9rem;
  @media (max-width: 1120px) {
    margin: 10px;
  }
  @media (max-width: 540px) {
    width: 400px;
    height: 60vh;
  }
  @media (max-width: 440px) {
    width: 290px
    
  }
`;

export const Figure = styled.figure`
  margin: 20px 0px 20px 0px;
  @media (min-width: 1120px) {
    height: 80vh;
    width: 500px;
  }
  @media (max-width: 540px) {
    height: 60vh;
  }
  @media (max-width: 1120px) {
    width: 400px;
  }
  @media (max-width: 440px) {
    height: 40vh
  }
`;

export const InputText = styled.input.attrs({ type: "text" })`
  width: 400px;
  border: 2px solid rgba(4, 7, 47, 0.4);
  border-radius: 8px;
  height: 30px;
  padding: 5px;
  margin-top: 5px;
  @media (max-width: 540px) {
    width: calc(400px * 4 / 5);
  }
  @media (max-width: 440px)
  {
    width: calc(400px *64/125)
  }
`;

export const Password = styled.input.attrs({ type: "password" })`
  width: 400px;
  border: 2px solid rgba(4, 7, 47, 0.4);
  border-radius: 8px;
  height: 30px;
  padding: 5px;
  margin-top: 5px;
  @media (max-width: 540px) {
    width: calc(400px * 4 / 5);
  }
  @media (max-width: 440px)
  {
    width: calc(400px *64/125)
  }
`;

export const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1120px) {
    height: 100vh;
  }
  @media (max-width: 1120px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const Form = styled.form`
  ${'' /* position: relative; */}
  display: flex;
  flex-direction: column;
  @media (max-width: 440px)
  {
    align-items: center
  }
`;

export const Label = styled("label").attrs({ className: "names" })`
  font-weight: 700;
`;

export const DivMargin = styled("div").attrs({ className: "sametype" })`
  margin: 15px 0px 0 0px;
  position: relative;
`;
export const Confirmation = styled("div").attrs({ className: "confirmation" })`
  display: flex;
  justify-content: space-between;
  margin: 15px 0px 0 0px;
  @media (max-width: 440px)
  {
    flex-direction: column-reverse
  }
`;

export const Eye = styled.i.attrs({className:"fa-solid fa-eye-slash"})`
  position: absolute;
  font-size: 20px;
  right: 20px;
  top: 35px;
`