/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

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

const App = () => {
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      />

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

        <button
          css={css`
            background-color: red;
            border: none;
            padding: 8px 16px;
            color: white;
            border-radius: 10px;
            cursor: pointer;
            &:hover {
              background-color: #b63f3f;
            }
          `}
          type="button"
          onClick={() => console.log("hello world")}
        >
          Hello Emotion
        </button>
      </FlexCol>
    </>
  );
};

export default App;
