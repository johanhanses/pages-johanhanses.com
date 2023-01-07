import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { ComponentPropsWithoutRef, useState } from 'react'

export default function Input(props: ComponentPropsWithoutRef<'input'> & { toggleVisibility?: boolean }) {
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <div className="relative">
      <label
        aria-label={props.name}
        aria-hidden="true"
        className="block"
      >
        <input
          type={props.toggleVisibility && !passwordVisible ? 'password' : 'text'}
          className="w-full p-1 border-2 rounded-md bg-inherit"
          {...props}
        />
      </label>
      {props.toggleVisibility && (
        <button
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
          className="absolute top-2.5 right-3 hover:text-blue-500 transition-colors duration-200"
        >
          {passwordVisible && <EyeSlashIcon className="w-4 h-4" />}
          {!passwordVisible && <EyeIcon className="w-4 h-4" />}
        </button>
      )}
    </div>
  )
}
