import { ComponentPropsWithoutRef } from 'react'

export default function Button(props: ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className="w-full p-1 border-2 rounded-md bg-blue-600 text-white"
      {...props}
    />
  )
}
