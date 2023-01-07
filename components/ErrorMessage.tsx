export default function ErrorMessage({ error }: { error: string }) {
  if (error)
    return (
      <p className="mt-6 text-center text-sm text-white bg-red-400 sm:w-1/2 md:w-1/3 mx-auto rounded-md py-1">
        {error}
      </p>
    )
  return null
}
