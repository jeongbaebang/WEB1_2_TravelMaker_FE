import { Shadows } from "@common/styles/theme";
import { FC } from "react";
import styled from "styled-components";

interface Props {
  size: number;
  url?: string;
  stroke?: boolean;
  shadow?: ShadowTypes;
}

const ChatProfile: FC<Props> = ({ size, url, stroke, shadow = "none" }) => {
  return (
    <ProfileContainer>
      <ImageWrapper $size={size} $stroke={stroke} $shadow={shadow}>
        <StyledImage src={url} alt={"chat-avatar"} />
      </ImageWrapper>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
`;

type ShadowTypes = keyof (Shadows & { none: "string" });

const ImageWrapper = styled.div<{ $size?: number; $stroke?: boolean; $shadow: ShadowTypes }>`
  position: relative; // 자식 요소의 절대 위치 지정을 위한 기준점 설정 (방장 마크, 뱃지 등)
  width: 100%;
  max-width: ${({ $size }) => ($size ? `${$size}px` : "100%")};
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  border: ${({ $stroke, theme: { strokeWidth, colors } }) =>
    $stroke ? `${strokeWidth.regular} solid ${colors.text.title}` : "none"};
  background-color: ${({ theme }) => theme.colors.tertiary.disabled};
  box-shadow: ${({ theme, $shadow }) => ($shadow === "none" ? null : theme.shadows[$shadow])};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export default ChatProfile;
