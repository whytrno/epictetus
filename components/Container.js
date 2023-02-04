export default function Container({ children }) {
    return (
        <div className="container mx-auto px-10 space-y-20">
            {children}
        </div>
    )
}