import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props: any) =>
    props.variant === "outlined" ? "white" : "green"};
  color: ${(props: any) => (props.variant === "outlined" ? "black" : "white")};
  border: 2px solid green;
  padding: 1rem 2rem;
  font-size: 2rem;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: ${(props: any) =>
      props.variant === "outlined" ? "green" : "white"};
    color: ${(props: any) =>
      props.variant === "outlined" ? "white" : "black"};
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FlexCol = styled(Flex)`
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      
      <FlexCol>
        <Flex>
          <StyledButton onClick={() => console.log("hello")}>
            Click Me
          </StyledButton>
          <StyledButton onClick={() => console.log("hello")}>
            Click Me
          </StyledButton>
        </Flex>

        <Flex>
          <StyledButton variant="outlined" onClick={() => console.log("hello")}>
            Click Me
          </StyledButton>

          <StyledButton variant="outlined" onClick={() => console.log("hello")}>
            Click Me
          </StyledButton>
        </Flex>
      </FlexCol>
    </>
  );
};

export default App;
