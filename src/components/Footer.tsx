import Link from "next/link"


const Footer = () => {
  return (
    <footer className="grid grid-cols-1 gap-4 mt-4 border-t sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className="flex flex-col w-[300px] h-auto justify-center items-center gap-5 mt-4">
            <Link href="./">Find a Store</Link>
            <Link href="./">Become a Member</Link>
            <Link href="./">Feedback</Link>
            <Link href="./">Promo Codes</Link>
            <Link href="./">asdf</Link>
        </div>
        <div className="flex flex-col w-[300px] h-auto justify-center items-center gap-5 mt-4">
            <Link href="./">Find a Store</Link>
            <Link href="./">Become a Member</Link>
            <Link href="./">Feedback</Link>
            <Link href="./">Promo Codes</Link>
            <Link href="./">asdf</Link>
        </div>
        <div className="flex flex-col w-[300px] h-auto justify-center items-center gap-5 mt-4">
            <Link href="./">Find a Store</Link>
            <Link href="./">Become a Member</Link>
            <Link href="./">Feedback</Link>
            <Link href="./">Promo Codes</Link>
            <Link href="./">asdf</Link>
        </div>
        <div className="flex flex-col w-[300px] h-auto justify-center items-center gap-5 mt-4">
            <Link href="./">Find a Store</Link>
            <Link href="./">Become a Member</Link>
            <Link href="./">Feedback</Link>
            <Link href="./">Promo Codes</Link>
            <Link href="./">asdf</Link>
        </div>
    </footer>
  )
}

export default Footer