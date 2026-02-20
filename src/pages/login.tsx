import React from 'react'
import { Navigate } from 'react-router-dom'
import { Button, Card, Form, Input, Typography, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'


export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  requiredRole?: 'admin' | 'client'
) {
  const ComponentWithAuth: React.FC<P> = (props) => {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')

    if (!token) {
      return <Navigate to="/login" replace />
    }

    if (requiredRole && role !== requiredRole) {
      return <Navigate to="/unauthorized" replace />
    }

    return <WrappedComponent {...props} />
  }

  return ComponentWithAuth
}

const { Title, Text } = Typography

interface LoginForm {
  username: string
  password: string
}

export default function Login() {
  const navigate = useNavigate()

  const onFinish = (values: LoginForm) => {
    const { username, password } = values

    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('token', 'demo-token')
      localStorage.setItem('role', 'admin')
      navigate('/admin')
    } else if (username === 'client' && password === 'client123') {
      localStorage.setItem('token', 'demo-token')
      localStorage.setItem('role', 'client')
      navigate('/client')
    } else {
      message.error('Invalid credentials')
    }
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
      }}
    >
      <Card style={{ width: 400 }}>
        <Title level={3} style={{ textAlign: 'center' }}>
          Login
        </Title>

        <Form name="login" layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please enter username' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter password' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
          </Form.Item>
        </Form>

        <Text type="secondary">
          Admin: admin / admin123 <br />
          Client: client / client123
        </Text>
      </Card>
    </div>
  )
}