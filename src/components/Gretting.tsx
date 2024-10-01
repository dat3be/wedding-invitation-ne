import { styled } from "@stitches/react";
import { Divider } from "antd";

// Wrapper with enhanced visual design
const Wrapper = styled("div", {
  background: "#ffffff", // Clean white background for contrast
  backgroundImage: "url(./assets/GroovePaper.png)", // Subtle texture
  width: "100%",
  maxWidth: "800px", // Max width to ensure it's not too wide on larger screens
  margin: "0 auto", // Center the content on the page
  padding: "32px",
  borderRadius: "12px", // Rounded corners for a modern look
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
  border: "1px solid #e0e0e0", // Light border to frame the content
});

// Title styling to make the title more elegant
const Title = styled("p", {
  fontSize: "4vh", // Increased font size for better readability
  fontWeight: "bold",
  opacity: 0.9,
  marginBottom: "24px", // Add spacing below the title
  textAlign: "center", // Center-align the title
  color: "#333", // Darker color for contrast
});

// Content section for the greeting text
const Content = styled("div", {
  fontSize: "2.25vh", // Larger font size for readability
  lineHeight: 1.8, // Adjusted line height for more space between lines
  opacity: 0.85,
  marginBottom: "24px", // Add spacing below the content
  textAlign: "center", // Center-align the content
  color: "#555", // Softer text color for a more subtle look
  padding: "0 16px", // Padding for content readability on mobile
});

// Styling for the groom and bride details
const GroomBride = styled("p", {
  fontSize: "2.25vh",
  lineHeight: 1.8,
  opacity: 0.9,
  marginBottom: 0,
  textAlign: "center", // Center the text
  color: "#444", // Softer text color for groom and bride details
});

// Additional visual improvements for spacing and organization
const InfoBox = styled("div", {
  backgroundColor: "#f9f9f9", // Slightly off-white background
  padding: "24px", // Padding for separation
  borderRadius: "8px", // Rounded edges to keep the design soft
  border: "1px solid #eaeaea", // Light border for emphasis
  marginTop: "24px", // Space above the groom/bride section
});

type GrettingProps = {
  data?: Data;
};

export default function Gretting({ data }: GrettingProps) {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>Tôi sắp kết hôn!</Title>
      </Divider>

      {/* Greeting message */}
      <Content>
        {data?.gretting?.split("\n")?.map((value, index) => (
          <div key={index}>
            {value}
            <br />
          </div>
        ))}
      </Content>

      {/* Groom and Bride Information */}
      <InfoBox>
        <GroomBride>
          {data?.groom?.parents?.father?.name} · {data?.groom?.parents?.mother?.name} · Thứ Nam {data?.groom?.name}
          <br />
          {data?.bride?.parents?.father?.name} · {data?.bride?.parents?.mother?.name} · Quý Nữ {data?.bride?.name}
        </GroomBride>
      </InfoBox>
    </Wrapper>
  );
}
