export default function Heading({ children }: { children: React.ReactNode }) {

    // render return
    return (
        <>
            <h1 className="text-xl font-semibold leading-tight mb-4">
                {children}
            </h1>
        </>
    )
}