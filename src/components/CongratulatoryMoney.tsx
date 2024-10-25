import { CheckCircleTwoTone } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, Modal, message } from "antd";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  paddingBottom: 18,
  width: "100%",
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("p", {
  fontSize: "1.5vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const SubContent = styled("p", {
  fontSize: "1.3vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const Description = styled("p", {
  fontSize: "1.3vh",
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: 8,
});

const ContactButton = styled("div", {
  display: "inline-block",
  textAlign: "center",
  marginLeft: 24,
  marginRight: 24,
  marginBottom: 24,
});

type CongratulatoryMoneyProps = {
  data?: Data;
};

export default function CongratulatoryMoney({
  data,
}: CongratulatoryMoneyProps) {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Gửi lời chúc mừng tới tụi mình!</Title>
      </Divider>
      <Content>Hãy gửi một món quà để bày tỏ lời chúc mừng của bạn.</Content>
      <ContactButton onClick={() => setGroomVisible(true)}>
        <CheckCircleTwoTone
          style={{ fontSize: 64, marginBottom: 16 }}
          twoToneColor="#829fe0"
        />
        <br />
        <SubContent>Nhà Rể</SubContent>
      </ContactButton>
      <ContactButton onClick={() => setBrideVisible(true)}>
        <CheckCircleTwoTone
          style={{ fontSize: 64, marginBottom: 16 }}
          twoToneColor="#fe7daf"
        />
        <br />
        <SubContent>Nhà Dâu</SubContent>
      </ContactButton>
      <Modal
        title={<b>Ting Ting cho Nhà Rể</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        {data?.groom?.parents?.father && (
          <div>
            <b>Ba) {data?.groom?.parents?.father?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard
              text={data?.groom?.parents?.father?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("Số tài khoản đã được sao chép.")}
              >
                
              </Button>
            </CopyToClipboard>
          </div>
        )}
        {data?.groom?.parents?.mother && (
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <b>Mẹ) {data?.groom?.parents?.mother.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard text={data?.groom?.parents?.mother.account_number}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("Số tài khoản đã được sao chép.")}
              >
                
              </Button>
            </CopyToClipboard>
          </div>
        )}
        {data?.groom && (
          <div>
            <b>Út Nam {data?.groom?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard text={data?.groom?.account_number}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("Số tài khoản đã được sao chép.")}
              >
                {data?.groom?.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )}
        <div>
          <Description>
          Khi bạn bấm vào số tài khoản, nó sẽ được sao chép dưới dạng văn bản có thể dán được.
          </Description>
        </div>
      </Modal>
      <Modal
        title={<b>Ting Ting cho nhà dâu</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        {data?.bride?.parents?.father && (
          <div>
            <b>Ba) {data?.bride?.parents?.father?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard
              text={data?.bride?.parents?.father?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("Số tài khoản đã được sao chép.")}
              >
                
              </Button>
            </CopyToClipboard>
          </div>
        )}
        {data?.bride?.parents?.mother && (
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <b>Mẹ) {data?.bride?.parents?.mother?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard
              text={data?.bride?.parents?.mother?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("Số tài khoản đã được sao chép.")}
              >
                
              </Button>
            </CopyToClipboard>
          </div>
        )}
        {data?.bride && (
          <div>
            <b>Quý Nữ {data?.bride?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard text={data?.bride?.account_number}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("Số tài khoản đã được sao chép.")}
              >
                {data?.bride?.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )}
        <div>
          <Description>
            Khi bạn bấm vào số tài khoản, nó sẽ được sao chép dưới dạng văn bản có thể dán được.
          </Description>
        </div>
      </Modal>
    </Wrapper>
  );
}

// 1. hoangkimgroup.vn - Soạn báo giá
// 2. mmohub.io - Chiều follow cafe, ok sẽ tạo group kỹ thuật tư vấn với GB.
// 3. urbox.vn - có contact của CTO 
// 4. Nội thất QiConcept - Cafe trao đổi về O365, chưa có nhu cầu
// 5. Phí migrate 