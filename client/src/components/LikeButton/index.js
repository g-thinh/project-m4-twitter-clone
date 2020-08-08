import React from "react";
import styled from "styled-components";

import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";
import ScaleIn from "./ScaleIn";

import { range } from "../../utils/utilities";

import ConfettiPiece from "./ConfettiPiece";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = (props) => {
  const size = 40;
  const heartSize = size * 0.6;

  return (
    <Wrapper style={{ width: size, height: size }}>
      {props.isLiked && <PoppingCircle size={size} color="#E790F7" />}
      {props.isLiked &&
        range(12).map((i) => (
          <ConfettiPiece
            key={i}
            angle={360 * (i / 12)}
            distance={20}
            color={PARTICLE_COLORS[0]}
          />
        ))}
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
