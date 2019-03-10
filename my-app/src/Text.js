import React from "react";
import styled from "@emotion/styled/macro";

function Text(props) {
  const TextSpan = styled.div`
    color: ${props.lit
      ? `white`
      : `#595959

    `};
    text-shadow: ${props.lit
      ? `0 0 10px #FFF, 0px 0px 5px rgba(255,255,255,0.24)`
      : `none`};
  `;

  return (
    <>
      <TextSpan>{props.text}</TextSpan>
    </>
  );
}

export default Text;
