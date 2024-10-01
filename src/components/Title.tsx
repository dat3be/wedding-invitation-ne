import { styled } from "@stitches/react";
import { useState, useRef, useEffect } from "react";

// Layout to cover the entire screen
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

// TitleWrapper for wedding details in the center of the screen
const TitleWrapper = styled("div", {
  textAlign: "center",
  color: "#fff",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)", // Subtle shadow for better readability
  padding: "0 16px",

  "@media(max-width: 768px)": {
    top: "45%",
  },

  animation: "fadein 3s ease-in-out",
});

// Video Background styling to cover the entire screen
const VideoBackground = styled("video", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  objectFit: "cover",
  zIndex: -1, // Make sure the video stays in the background
  backgroundColor: "#aeb8b3 !important",
  opacity: 0.85, // Reduced opacity for a subtle overlay effect

  "@media(max-width: 768px)": {
    objectFit: "cover",
  },
});

// Styled mute/unmute button
const MuteButton = styled("button", {
  position: "absolute",
  bottom: "40px",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "12px 36px",
  fontSize: "16px",
  borderRadius: "24px",
  backgroundColor: "rgba(255, 255, 255, 0.9)", // Transparent button
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

// Typography for wedding invitation text
const Typography = styled("p", {
  fontSize: "2.5vw",
  marginBottom: "16px",
  opacity: 0.85,

  "@media(max-width: 768px)": {
    fontSize: "4vw",
  },
});

// Bold text for groom and bride
const GroomBride = styled("p", {
  fontSize: "5.5vw",
  fontWeight: "bold",
  marginBottom: "16px",
  opacity: 0.95,

  "@media(max-width: 768px)": {
    fontSize: "7.5vw",
  },
});

// Text for date and location
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
  const [isMuted, setIsMuted] = useState(false); // Unmuted by default

  // Toggle mute/unmute when the button is clicked
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      // Attempt to play the video on load, unmuted
      videoRef.current.muted = false; // Ensure it's not muted
      videoRef.current.play().catch((error) => {
        console.log("Autoplay with sound was blocked, muting video.", error);
        videoRef.current.muted = true; // Mute if autoplay with sound is blocked
        setIsMuted(true); // Update the button state to reflect the muted status
      });
    }
  }, []);

  return (
    <Layout>
      {/* Background video */}
      <VideoBackground ref={videoRef} autoPlay loop muted={isMuted} playsInline>
        <source src="./assets/BackgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      {/* Wedding invitation details */}
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

      {/* Mute/Unmute button */}
      <MuteButton onClick={toggleMute}>
        {isMuted ? "Unmute" : "Mute"}
      </MuteButton>
    </Layout>
  );
}
