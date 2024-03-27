import Image from "next/image";

export default function Fallback() {
    return (
        <>
            <head>
                <title>next-pwa example</title>
            </head>
            <h1>This is offline fallback page</h1>
            <h2>When offline, any page route will fallback to this page</h2>
        </>
    );
}
