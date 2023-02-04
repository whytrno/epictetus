import InfoPost from "@components/InfoPost"

export default function CardPost({ thumbnail, ...infoPost }) {
    return (
        <article className="space-y-5">
            <img src={thumbnail} className="w-full rounded" />
            <InfoPost
                {...infoPost}
            />
        </article>
    )
}