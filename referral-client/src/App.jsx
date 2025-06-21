import RegisterForm from './components/RegisterForm'
import PurchaseForm from './components/PurchaseForm'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Multi-Level Referral System</h1>
      <RegisterForm />
      <PurchaseForm />
      <Dashboard />
    </div>
  )
}
