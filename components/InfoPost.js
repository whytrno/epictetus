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
            <div className="flex items-center text-white/60 gap-4">
                <div className="uppercase">
                    {category}
                </div>
                <span>&bull;</span>
                <div>
                    {date}
                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>
            <p className="text-white/60 w-8/12">{shortDescription}</p>
            <div className="flex items-center gap-5">
                <img
                    src={authorAvatar}
                    className="rounded-full w-14 h-14 object-cover"
                    alt="author-1"
                />
                <div className="space-y-1">
                    <h3>{authorName}</h3>
                    <p className="text-white/60 text-sm">{authorJob}</p>
                </div>
            </div>
        </>
    )
}