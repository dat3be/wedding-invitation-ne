import { styled } from "@stitches/react";
import { useState, useRef, useEffect } from "react";

const Layout = styled("div", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  margin: "0 auto",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media(max-width: 768px)": {
    height: "100vh",
  },
});

const TitleWrapper = styled("div", {
  textAlign: "center",
  color: "#fff",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
  padding: "0 16px",

  "@media(max-width: 768px)": {
    top: "45%",
  },

  animation: "fadein 3s ease-in-out",
});

const VideoBackground = styled("video", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  objectFit: "cover",
  zIndex: -1,
  backgroundColor: "#aeb8b3 !important",
  opacity: 0.85,

  "@media(max-width: 768px)": {
    objectFit: "cover",
  },
});

const MuteButton = styled("button", {
  position: "absolute",
  bottom: "40px",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "12px 36px",
  fontSize: "16px",
  borderRadius: "24px",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#333",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  transition: "background-color 0.3s, transform 0.2s ease-in-out",
  zIndex: 10,

  "&:hover": {
    backgroundColor: "#f0f0f0",
    transform: "translateX(-50%) scale(1.05)",
  },

  "@media(max-width: 768px)": {
    bottom: "20px",
    padding: "10px 30px",
  },
});

const Typography = styled("p", {
  fontSize: "2.5vw",
  marginBottom: "16px",
  opacity: 0.85,

  "@media(max-width: 768px)": {
    fontSize: "4vw",
  },
});

const GroomBride = styled("p", {
  fontSize: "5.5vw",
  fontWeight: "bold",
  marginBottom: "16px",
  opacity: 0.95,

  "@media(max-width: 768px)": {
    fontSize: "7.5vw",
  },
});

const Schedule = styled("p", {
  fontSize: "4vw",
  opacity: 0.85,

  "@media(max-width: 768px)": {
    fontSize: "5vw",
  },
});

type TitleProps = {
  data?: Data;
};

export default function Title({ data }: TitleProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((error) => {
        console.log("Autoplay with sound was blocked, muting video.", error);
        setIsMuted(true);
      });
    }
  }, []);

  return (
    <Layout>
      <VideoBackground ref={videoRef} autoPlay loop muted={isMuted} playsInline>
        <source src="./assets/BackgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      <TitleWrapper>
        <Typography>WEDDING INVITATION - ĐẠT & HIỀN</Typography>
        <GroomBride>
          {data?.groom?.name} &#38; {data?.bride?.name}
        </GroomBride>
        <Schedule>
          {data?.date}
          <br />
          {data?.location}
        </Schedule>
      </TitleWrapper>

      <MuteButton onClick={toggleMute}>
        {isMuted ? "Unmute" : "Mute"}
      </MuteButton>
    </Layout>
  );
}
