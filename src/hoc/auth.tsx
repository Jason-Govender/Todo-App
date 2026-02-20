import React from 'react'
import { Navigate } from 'react-router-dom'

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  requiredRole?: 'admin' | 'client'
) {
  const ComponentWithAuth: React.FC<P> = (props) => {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role') as 'admin' | 'client' | null

    if (!token) return <Navigate to="/login" replace />

    if (requiredRole && role !== requiredRole) {
      return <Navigate to="/unauthorized" replace />
    }

    return <WrappedComponent {...props} />
  }

  ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`
  return ComponentWithAuth
}