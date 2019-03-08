import React from "react";
import styled from "@emotion/styled/macro";

function Text(props) {
  const TextSpan = styled.div`
    color: ${props.lit ? `blue` : `red`};
  `;

  return (
    <div>
      <TextSpan>{props.text}</TextSpan>
    </div>
  );
}

export default Text;
