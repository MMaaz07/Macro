import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ControlledForm, UnControlledForm } from './Forms'
import { Crash, Notification } from './utilities'
import {ErrorBoundary} from './ErrorBoundary'

function App() {
  return (
    <>
    <Notification />
    <ControlledForm />
    <UnControlledForm />
    <ErrorBoundary>
      <Crash />
    </ErrorBoundary>
    </>
  )
}

export default App
