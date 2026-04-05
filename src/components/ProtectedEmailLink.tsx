import { useState } from "react";

export function ProtectedEmailLink({ children }: { children: string }) {
    const [isSelecting, setIsSelecting] = useState(false);

    const obfuscatedString = children.split("").reverse().map(character => `&#${character.charCodeAt(0)};`);

    return (
        <a
            href=""
            onClick={() => window.open(`mailto:${children}`, "_blank")}
            className="inline-flex flex-row-reverse cursor-pointer select-none"
            onMouseDown={() => setIsSelecting(true)}
        >
            {isSelecting
                ? children
                : obfuscatedString.map((char, index) => (
                    <span key={index} dangerouslySetInnerHTML={{ __html: char }} />
                ))
            }
        </a>
    );
}