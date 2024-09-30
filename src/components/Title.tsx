import { styled } from "@stitches/react";
import { Divider } from "antd";

const Layout = styled("div", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  margin: "0 auto",
  position: "relative",

  // Ensure it adapts well for mobile screens
  "@media(max-width: 768px)": {
    height: "100vh",
  },
});

const TitleWrapper = styled("div", {
  position: "absolute",
  width: "100%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "#fff",  // Ensure text color contrasts with the background

  // Text shadow for improved readability over video backgrounds
  textShadow: "-1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e",

  // Mobile optimization
  padding: "0 16px",
  "@media(max-width: 768px)": {
    top: "45%",
  },

  // Smooth fade-in animation
  animation: "fadein 3s ease-in-out",
});

const VideoBackground = styled("video", {
  position: "fixed",  // Fix the video to cover the entire background
  top: 0,
  left: 0,
  width: "100vw",  // Ensure video takes up the entire viewport width
  height: "100vh",  // Ensure video takes up the entire viewport height
  objectFit: "cover",
  objectPosition: "center",
  zIndex: -1,  // Make sure the video stays in the background
  backgroundColor: "#aeb8b3 !important",
  opacity: 0.9,  // Keep slight opacity for readability

  // Ensure video maintains aspect ratio on mobile
  "@media(max-width: 768px)": {
    objectFit: "cover",
  },
});

const WeddingInvitation = styled("p", {
  fontSize: "2.5vw",  // Use vw for scalable fonts
  opacity: 0.85,
  marginBottom: "16px",

  // Adjust font size for smaller screens
  "@media(max-width: 768px)": {
    fontSize: "4vw",
  },
});

const GroomBride = styled("p", {
  fontSize: "6vw",
  fontWeight: "bold",
  opacity: 0.95,
  marginBottom: "16px",

  // Adjust for smaller screens
  "@media(max-width: 768px)": {
    fontSize: "8vw",
  },
});

const Schedule = styled("p", {
  fontSize: "4vw",
  opacity: 0.85,
  marginBottom: "24px",

  // Adjust for smaller screens
  "@media(max-width: 768px)": {
    fontSize: "5vw",
  },
});

type TitleProps = {
  data?: Data;
};

export default function Title({ data }: TitleProps) {
  return (
    <Layout>
      {/* Optimized video background for mobile */}
      <VideoBackground autoPlay loop muted playsInline>
        <source src="./assets/BackgroundVideo.mp4" type="video/mp4" />
      </VideoBackground>

      {/* Title wrapper containing wedding info */}
      <TitleWrapper>
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
        <GroomBride>
          {data?.groom?.name} &#38; {data?.bride?.name}
        </GroomBride>
        <Schedule>
          {data?.date}
          <br />
          {data?.location}
        </Schedule>
      </TitleWrapper>
    </Layout>
  );
}
