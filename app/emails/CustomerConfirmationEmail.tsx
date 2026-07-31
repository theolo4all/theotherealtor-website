import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface CustomerConfirmationEmailProps {
  firstName: string;
}

export default function CustomerConfirmationEmail({
  firstName,
}: CustomerConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thanks for contacting The Other Realtor!</Preview>

      <Body
        style={{
          backgroundColor: "#f5f5f5",
          fontFamily: "Arial, sans-serif",
          padding: "30px",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "40px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Heading
            style={{
              color: "#0a1628",
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            Thank You, {firstName}!
          </Heading>

          <Text style={{ fontSize: "16px", lineHeight: "28px" }}>
            Thank you for completing the <strong>Mortgage Ready</strong> form.
          </Text>

          <Text style={{ fontSize: "16px", lineHeight: "28px" }}>
  I've successfully received your information and appreciate you taking
  the first step toward homeownership.
</Text>

<Text style={{ fontSize: "16px", lineHeight: "28px" }}>
  Over the next little while, I'll personally review your request and
  reach out to discuss your goals, answer any questions you may have,
  and help you understand the best path forward.
</Text>

<Text style={{ fontSize: "16px", lineHeight: "28px" }}>
  If financing is part of your journey, I'll connect you with one of my
  trusted mortgage professionals who can help you explore the options
  that best fit your situation.
</Text>

          <Text style={{ fontSize: "16px", lineHeight: "28px" }}>
  Whether you're:
</Text>

          <Section style={{ marginLeft: "15px" }}>
<Text>• Buying your first home</Text>
<Text>• Upgrading to a larger home</Text>
<Text>• Downsizing</Text>
<Text>• Investing in real estate</Text>
          </Section>

          <Text style={{ fontSize: "16px", lineHeight: "28px" }}>
  I'm here to help make the process as smooth and stress-free as
  possible.
</Text>

<Text style={{ fontSize: "16px", lineHeight: "28px" }}>
  If you have any questions before I contact you, feel free to reply to
  this email or call/text me anytime.
</Text>

          <Button
            href="https://theotherealtor.com"
            style={{
              backgroundColor: "#c9a84c",
              color: "#0a1628",
              padding: "14px 28px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Visit My Website
          </Button>

          <Section
            style={{
              marginTop: "40px",
              borderTop: "1px solid #e5e5e5",
              paddingTop: "25px",
            }}
          >
            <Text style={{ fontSize: "16px", marginBottom: "20px" }}>
  Looking forward to helping you achieve your homeownership goals.
</Text>

<Text
  style={{
    color: "#0a1628",
    fontWeight: "bold",
    marginBottom: "5px",
  }}
>
  Theo Tajou
</Text>

<Text>REALTOR® | Century 21 Titans Realty Inc.</Text>

<Text>📞 647-838-5184</Text>

<Text>✉️ theo.tajou@century21.ca</Text>

<Text>🌐 https://theotherealtor.com</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}