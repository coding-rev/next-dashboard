import AppButton from '../ui/AppButton'
import { Plus } from 'lucide-react'

export default function PageHeader() {
  return (
    <div className="flex justify-between items-center mb-5">
        <div>
            <h2 className="text-2xl font-medium">Dashboard</h2>
            <span className="text-sm text-gray-500">Plan, prioritize and accomplish your tasks with ease.</span>
        </div>
        <div className="flex">
            <AppButton
            label="Add Project"
            prefixIcon={Plus}
            textColor="text-white"
            />
            <AppButton
            label="Import Data"
            bgColor="bg-white"
            textColor="text-[var(--color-primary)]"
            />
        </div>
    </div>
  )
}
