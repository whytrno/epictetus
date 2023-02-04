import InfoPost from "@components/InfoPost"
import Link from "next/link"

export default function CardPost({ thumbnail, ...infoPost }) {
    return (
        <article className="space-y-5">
            <Link href="/detail">
                <img src={thumbnail} className="w-full rounded" />
            </Link>
            <InfoPost
                {...infoPost}
            />
        </article>
    )
}