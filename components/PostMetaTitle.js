import Link from "next/link"

export default function PostMetaTitle({ category, title, date, center }) {
    return (
        <>
            <div className="flex items-center text-white/60 gap-4">
                <div className="uppercase">
                    {category}
                </div>
                <span>&bull;</span>
                <div>
                    {date}
                </div>
            </div>
            <h2 className={`text-2xl ${center && 'text-center'}`}>
                <Link href="/detail">{title}</Link>
            </h2>
        </>
    )
}