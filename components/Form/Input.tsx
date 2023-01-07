import { ComponentPropsWithoutRef } from 'react'

export default function Input(props: ComponentPropsWithoutRef<'input'>) {
  return (
    <label
      aria-label={props.name}
      aria-hidden="true"
      className="block"
    >
      <input
        className="w-full p-1 border-2 rounded-md bg-inherit"
        {...props}
      />
    </label>
  )
}
