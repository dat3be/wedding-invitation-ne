import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "#ffffff",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "32px",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
  border: "1px solid #e0e0e0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Center the content horizontally
  justifyContent: "center", // Center the content vertically
  overflowX: "hidden",
  "@media(max-width: 768px)": {
    padding: "16px",
    maxWidth: "90vw", // Adjust width for smaller screens
  }
});

const Title = styled("p", {
  fontSize: "3vh",
  fontWeight: "bold",
  opacity: 0.95,
  marginBottom: "24px",
  textAlign: "center",
  color: "#333",
  wordBreak: "break-word",
  "@media(max-width: 768px)": {
    fontSize: "2.5vh",
  }
});

const images = [
  {
    original: "./assets/Gallery_Photo_1.png",
    thumbnail: "./assets/Gallery_Photo_1.png",
  },
  {
    original: "./assets/Gallery_Photo_2.png",
    thumbnail: "./assets/Gallery_Photo_2.png",
  },
  {
    original: "./assets/Gallery_Photo_3.png",
    thumbnail: "./assets/Gallery_Photo_3.png",
  },
  {
    original: "./assets/Gallery_Photo_4.png",
    thumbnail: "./assets/Gallery_Photo_4.png",
  },
  {
    original: "./assets/Gallery_Photo_5.png",
    thumbnail: "./assets/Gallery_Photo_5.png",
  },
  {
    original: "./assets/Gallery_Photo_6.png",
    thumbnail: "./assets/Gallery_Photo_6.png",
  },
  {
    original: "./assets/Gallery_Photo_7.png",
    thumbnail: "./assets/Gallery_Photo_7.png",
  },
  {
    original: "./assets/Gallery_Photo_8.png",
    thumbnail: "./assets/Gallery_Photo_8.png",
  },
];

export default function Gallery() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Khoảnh khắc của tụi mình</Title>
      </Divider>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={true}
        showThumbnails={true}
        thumbnailPosition="bottom"
        useBrowserFullscreen={false}
        autoPlay={true}
        slideInterval={4000}
        slideDuration={600}
      />
    </Wrapper>
  );
}
