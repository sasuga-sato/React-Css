import styled from "styled-components";

export const StyledCompornents = () => {
  return (
    <Container>
      <STitle>- Styled Compornents -</STitle>
      <SButton>FIGHT!!!</SButton>
    </Container>
  );
};

//styleコンポーネントのContainerなのか、他のコンポーネントからimportしたContainerなのかが分からない。
const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
//styleだと分かるようにSを変数名につける。（自己流なので自由）
const STitle = styled.p`
  margin: 0px;
  color: 3d84a8;
`;

//const 変数名（今回はSButton） = import名(今回はstyled).タグ名(button)
const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
