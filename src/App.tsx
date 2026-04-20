import { RegistrationForm } from './components/organisms/RegistrationForm'

function App() {
  return (
    // Background gradasi agar terlihat modern
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-white to-blue-50 flex items-center justify-center p-6">
      <RegistrationForm />
    </div>
  )
}

export default App