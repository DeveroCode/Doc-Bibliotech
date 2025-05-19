import type { JSX } from "react"

type titleProps = {
    text: string
    as?: keyof JSX.IntrinsicElements
}

export default function Title({ text, as: Heading = "h1" }: titleProps) {
    return (
        <>
            <Heading className="title flex items-center group">
                <span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-500 ease-in-out text-red-600 pr-2">
                    #
                </span>
                {text}
            </Heading>
        </>
    )
}
