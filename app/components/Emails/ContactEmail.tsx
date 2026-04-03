import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={headerText}>You got mail 📬</Text>
          </Section>

          {/* Content */}
          <Section style={content}>
            <Heading style={heading}>You got a new contact form submission</Heading>
            <Text style={subtext}>
              Someone reached out through your website. Here are the details:
            </Text>

            <Hr style={divider} />

            <Section style={field}>
              <Text style={label}>FROM</Text>
              <Text style={value}>{name}</Text>
            </Section>

            <Hr style={divider} />

            <Section style={field}>
              <Text style={label}>EMAIL</Text>
              <Text style={value}>{email}</Text>
            </Section>

            <Hr style={divider} />

            <Section style={field}>
              <Text style={label}>MESSAGE</Text>
              <Text style={messageValue}>{message}</Text>
            </Section>

            <Hr style={divider} />
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>This email was sent from your website contact form.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f4f4f5',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '40px auto',
  borderRadius: '12px',
  maxWidth: '560px',
  overflow: 'hidden',
};

const header = {
  backgroundColor: '#222',
  padding: '24px 40px',
};

const headerText = {
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0',
  letterSpacing: '0.05em',
};

const content = {
  padding: '40px 40px 24px',
};

const heading = {
  fontSize: '22px',
  fontWeight: '700',
  color: '#18181b',
  margin: '0 0 8px',
  lineHeight: '1.3',
};

const subtext = {
  fontSize: '14px',
  color: '#71717a',
  margin: '0 0 24px',
};

const divider = {
  borderColor: '#f4f4f5',
  margin: '0',
};

const field = {
  padding: '16px 0',
};

const label = {
  fontSize: '11px',
  fontWeight: '600',
  color: '#a1a1aa',
  letterSpacing: '0.08em',
  margin: '0 0 4px',
};

const value = {
  fontSize: '15px',
  color: '#18181b',
  margin: '0',
  fontWeight: '500',
};

const messageValue = {
  fontSize: '15px',
  color: '#3f3f46',
  margin: '0',
  lineHeight: '1.6',
};

const footer = {
  backgroundColor: '#fafafa',
  padding: '20px 40px',
  borderTop: '1px solid #f4f4f5',
};

const footerText = {
  fontSize: '12px',
  color: '#a1a1aa',
  margin: '0',
  textAlign: 'center' as const,
};
