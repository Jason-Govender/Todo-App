import { Flex, Layout } from 'antd';
import type { CSSProperties, ReactNode } from 'react';

const { Header, Content } = Layout;
const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'white',
};

const layoutStyle: CSSProperties = {
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
};

type RoleVariant = 'admin' | 'client'

type AppLayoutProps = {
  variant: RoleVariant
  title?: string
  children: ReactNode
}

const HomeLayout = ({ variant, title, children }: AppLayoutProps) => (
  <Flex gap="middle" wrap>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>{title ?? (variant === 'admin' ? 'Admin Portal' : 'Client Portal')}</Header>
      <Content style={contentStyle}>
        {children}
      </Content>
    </Layout>
  </Flex>
);



export default HomeLayout;
