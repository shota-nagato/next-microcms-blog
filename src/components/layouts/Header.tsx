import Link from 'next/link'

export const Header = () => {
  return (
    <header className="mb-16 bg-[#007697]">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-2">
        <Link href="/" className="text-xl font-bold">
          Blog title
        </Link>
      </div>
    </header>
  )
}
