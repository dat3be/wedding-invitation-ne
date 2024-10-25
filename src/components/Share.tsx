import { LinkOutlined, MessageFilled } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, message } from "antd";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const KakaoTalkShareButton = styled(Button, {
  background: "#fee500",
  borderColor: "#fee500",
  color: "#181600",
  "&:hover": {
    backgroundColor: "#fcf07e !important",
    borderColor: "#fcf07e !important",
    color: "#17160b !important",
  },
  "&:focus": {
    backgroundColor: "#fcf07e !important",
    borderColor: "#fcf07e !important",
    color: "#17160b !important",
  },
});

const LinkShareButton = styled(Button, {
  background: "#53acee",
  borderColor: "#53acee",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
  "&:focus": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
});

type ShareProps = {
  data?: Data;
};

export default function Share({ data }: ShareProps) {
  const [shareCount, setShareCount] = useState<number>(0);

  useEffect(() => {
    if (shareCount !== 0) {
      window.Kakao.Link.createDefaultButton({
        objectType: "feed",
        container: "#sendKakao",
        content: {
          title: `${data?.groom?.name}❤${data?.bride?.name} mời bạn đến dự đám cưới`,
          description: "Vui lòng đọc bằng cách nhấp vào nút 'Mở lời mời đám cưới' bên dưới.🤵👰",
          imageUrl: data?.kakaotalk?.share_image,
          link: {
            mobileWebUrl: data?.kakaotalk?.wedding_invitation_url,
            webUrl: data?.kakaotalk?.wedding_invitation_url,
          },
        },
        buttons: [
          {
            title: "Mở lời mời đám cưới",
            link: {
              mobileWebUrl: data?.kakaotalk?.wedding_invitation_url,
              webUrl: data?.kakaotalk?.wedding_invitation_url,
            },
          },
        ],
        installTalk: true,
      });
      setTimeout(() => {
        document.getElementById("sendKakao")?.click();
        message.success("Chia sẻ lời mời đám cưới thông qua KakaoTalk!");
      }, 100);
    } else {
      try {
        window.Kakao.init(data?.kakaotalk?.api_token);
      } catch {}
    }
  }, [shareCount]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Chia sẻ lời mời đám cưới</Title>
      </Divider>
      {/* <KakaoTalkShareButton
        style={{ margin: 8 }}
        icon={<MessageFilled />}
        id="sendKakao"
        size="large"
        onClick={() => setShareCount(shareCount + 1)}
      >
        Chia sẻ trên KakaoTalk
      </KakaoTalkShareButton> */}
      <CopyToClipboard text={data?.kakaotalk?.wedding_invitation_url ?? ""}>
        <LinkShareButton
          style={{ margin: 8 }}
          icon={<LinkOutlined />}
          size="large"
          onClick={() => message.success("Liên kết lời mời đám cưới đã được sao chép.")}
        >
          Chia sẻ với liên kết
        </LinkShareButton>
      </CopyToClipboard>
    </Wrapper>
  );
}
