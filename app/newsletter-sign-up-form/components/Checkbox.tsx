import { Label } from "@radix-ui/react-label"

interface CheckboxProp {
  id: string
  label: string
  checked: boolean
  onCheckedChange: any
}

export default function CheckboxDemo(prop: CheckboxProp) {
  const { id, label, checked, onCheckedChange } = prop
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onCheckedChange}
        className="rounded-full w-5 h-5 checked:bg-newsletter-Tomato hover:ring-newsletter-Tomato focus:ring-newsletter-Tomato checked:focus:bg-newsletter-Tomato hover:bg-newsletter-Tomato checked:hover:bg-newsletter-Tomato"
        id={id}
      />
      <Label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </Label>
    </div>
  )
}
