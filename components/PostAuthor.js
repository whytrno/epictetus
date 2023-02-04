export default function PostAuthor({ authorAvatar, authorName, authorJob }) {
    return (
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
    )
}