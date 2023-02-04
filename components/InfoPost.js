import PostAuthor from "./PostAuthor";
import PostMetaTitle from "./PostMetaTitle";

export default function InfoPost({
    category,
    date,
    title,
    shortDescription,
    authorAvatar,
    authorName,
    authorJob
}) {
    return (
        <>
            <PostMetaTitle category={category} title={title} date={date} />
            <p className="text-white/60 w-8/12">{shortDescription}</p>
            <PostAuthor authorName={authorName} authorJob={authorJob} authorAvatar={authorAvatar} />
        </>
    )
}