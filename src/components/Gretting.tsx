import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#ffffff",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  maxWidth: "1000px", // Matches the video container width
  margin: "0 auto",
  padding: "32px",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
  border: "1px solid #e0e0e0",
  overflowX: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "@media(max-width: 768px)": {
    padding: "16px",
    maxWidth: "90vw", // Responsive width for smaller screens
  }
});

const Title = styled("p", {
  fontSize: "4vh",
  fontWeight: "bold",
  opacity: 0.9,
  marginBottom: "24px",
  textAlign: "center",
  color: "#333",
  "@media(max-width: 768px)": {
    fontSize: "3.5vh",
    wordBreak: "break-word",
  }
});

const Content = styled("div", {
  fontSize: "2.25vh",
  lineHeight: 1.8,
  opacity: 0.85,
  marginBottom: "24px",
  textAlign: "center",
  color: "#555",
  padding: "0 16px",
  wordBreak: "break-word",
  "@media(max-width: 768px)": {
    fontSize: "2vh",
    padding: "0 8px",
  }
});

const GroomBride = styled("p", {
  fontSize: "2.25vh",
  lineHeight: 1.8,
  opacity: 0.9,
  marginBottom: 0,
  textAlign: "center",
  color: "#444",
  wordWrap: "break-word",
  "@media(max-width: 768px)": {
    fontSize: "2vh",
  }
});

const InfoBox = styled("div", {
  backgroundColor: "#f9f9f9",
  padding: "24px",
  borderRadius: "8px",
  border: "1px solid #eaeaea",
  marginTop: "24px",
  width: "100%",
  maxWidth: "800px", // Keep this inside the container
  textAlign: "center",
  "@media(max-width: 768px)": {
    padding: "16px",
    maxWidth: "100%", // Ensures responsiveness
  }
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
      <Content>
        {data?.gretting?.split("\n")?.map((value, index) => (
          <div key={index}>
            {value}
            <br />
          </div>
        ))}
      </Content>
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
