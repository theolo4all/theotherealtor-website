import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface MortgageLeadEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  province: string;
  message: string;
}

export default function MortgageLeadEmail({
  firstName,
  lastName,
  email,
  phone,
  city,
  province,
  message,
}: MortgageLeadEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Mortgage Ready Lead</Preview>

      <Body
        style={{
          backgroundColor: "#f5f5f5",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "12px",
            margin: "40px auto",
            maxWidth: "600px",
          }}
        >
          <Heading style={{ color: "#0a1628" }}>
            🏡 New Mortgage Ready Lead
          </Heading>

          <Section>
            <Text>
              <strong>Name:</strong> {firstName} {lastName}
            </Text>

            <Text>
              <strong>Email:</strong> {email}
            </Text>

            <Text>
              <strong>Phone:</strong> {phone}
            </Text>

            <Text>
              <strong>City:</strong> {city}
            </Text>

            <Text>
              <strong>Province:</strong> {province}
            </Text>

            <Text>
              <strong>Goals:</strong>
            </Text>

            <Text>{message || "No message provided."}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}