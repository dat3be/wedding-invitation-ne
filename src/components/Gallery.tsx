import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "#ffffff", // Clean white background for the gallery
  backgroundImage: "url(./assets/GroovePaper.png)", // Optional background texture
  width: "100%",
  maxWidth: "1000px", // Set max width for larger screens
  margin: "0 auto", // Center the gallery on the page
  padding: "32px",
  borderRadius: "12px", // Add subtle rounded corners for a modern look
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  border: "1px solid #e0e0e0", // Add a light border
});

const Title = styled("p", {
  fontSize: "3vh", // Larger font for readability
  fontWeight: "bold",
  opacity: 0.95,
  marginBottom: "24px", // Increase spacing under the title
  textAlign: "center",
  color: "#333", // Darker font color for contrast
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

// Main gallery component
export default function Gallery() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Khoảnh khắc của tụi mình</Title>
      </Divider>

      {/* Enhanced image gallery with autoplay and smooth transitions */}
      <ImageGallery
        items={images}
        showPlayButton={false} // Hide play button for a cleaner look
        showFullscreenButton={true} // Allow fullscreen viewing
        showThumbnails={true} // Display thumbnails for easy navigation
        thumbnailPosition="bottom" // Thumbnails at the bottom for mobile users
        useBrowserFullscreen={false} // Custom fullscreen instead of browser fullscreen
        autoPlay={true} // Automatically cycle through images
        slideInterval={4000} // Set interval to 4 seconds (4000 ms)
        slideDuration={600} // Smooth transition between slides (600 ms)
      />
    </Wrapper>
  );
}
