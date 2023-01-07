import { ComponentPropsWithoutRef } from 'react'

export default function Button(props: ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className="border-2 border-slate-100 py-1 px-2 rounded-md hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-slate-100 dark:border-slate-900 active:translate-y-1 transition-all duration-200"
      {...props}
    />
  )
}
