import './globals.css';
import TabBar from '@/components/TabBar';

export const metadata = {
  title: 'GenADecoder — decode teen & kid slang',
  description:
    'A free, no-login glossary that helps parents decode current teen and Gen Alpha slang. 130 documented terms with published sources, organized by age group, with a daily-verified trending list.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0d12',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-frame">
          {children}
          <TabBar />
        </div>
      </body>
    </html>
  );
}
