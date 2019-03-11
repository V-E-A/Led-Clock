import React from "react";
import styled from "@emotion/styled/macro";

function Text(props) {
  const TextSpan = styled.div`
    color: ${props.lit
      ? `white`
      : `#595959

    `};
    text-shadow: ${props.lit
      ? `0 0 10px #fff, 0 0 8px #ffffff57, 0px 0px 20px rgba(255, 255, 255, 0.29)`
      : `none`};
  `;

  return (
    <>
      <TextSpan>{props.text}</TextSpan>
    </>
  );
}

export default Text;
