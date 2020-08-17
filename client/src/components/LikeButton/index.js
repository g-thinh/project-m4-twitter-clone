import React from "react";
import styled from "styled-components";

import Heart from "./Heart";
import ScaleIn from "./ScaleIn";

const LikeButton = (props) => {
  const size = 40;
  const heartSize = size * 0.6;

  return (
    <Wrapper style={{ width: size, height: size }}>
      {props.isLiked ? (
        <ScaleIn>
          <Heart width={heartSize} isToggled={props.isLiked} />
        </ScaleIn>
      ) : (
        <Heart width={heartSize} isToggled={props.isLiked} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
