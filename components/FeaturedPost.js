import InfoPost from "@components/InfoPost"
import Link from "next/link"

export default function FeaturedPost() {
    return (
        <article>
            <div className="flex gap-8 lg:items-center items-start flex-wrap md:flex-nowrap">
                <div className="w-full lg:w-8/12 md:w-7/12">
                    <Link href="/detail">
                        <img
                            src="/featured-thumbnail.jpg"
                            className="rounded-md w-full"
                            alt="featured-thumbnail"
                        />
                    </Link>
                </div>
                <div className="w-full lg:w-4/12 md:5/12 space-y-5">
                    <InfoPost
                        category="UI DESIGN"
                        date="April 10, 2021"
                        title="Understanding color theory: the color wheel and finding complementary colors"
                        shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
                        authorAvatar="/author-1.png"
                        authorName="Leslie Alexander"
                        authorJob="UI Designer"
                    />
                </div>
            </div>
            <hr className="border-white/10 mt-10" />
        </article>
    )
}