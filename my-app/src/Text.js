import React from "react";
import styled from "@emotion/styled/macro";

function Text(props) {
  const TextSpan = styled.div`
    color: ${props.lit ? `white` : `gray`};
  `;

  return (
    <>
      <TextSpan>{props.text}</TextSpan>
    </>
  );
}

export default Text;
