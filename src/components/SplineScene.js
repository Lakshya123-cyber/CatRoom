import Spline from "@splinetool/react-spline";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/sUZ6VWcG-SN-DsYG/scene.splinecode"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 720px;

  @media (max-width: 560px) {
    min-height: 520px;
  }
`;
