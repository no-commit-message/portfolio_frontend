import Link from "next/link"

export const Footer = () => {
    return (
        <div className="flex flex-col items-center border-t-2 mt-12 py-12">
            <p>created by: K Ayumu</p>
            <p>GitHub: 
                <Link href='https://github.com/no-commit-message' className="hover:text-blue-800 hover:underline">no-commit-message</Link>
            </p>
        </div>
    )
}