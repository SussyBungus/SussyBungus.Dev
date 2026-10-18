"use client";

interface SectionBadgeProps {
    number?: string;
    label: string;
    className?: string;
}

export default function SectionBadge({
    number,
    label,
    className = "",
}: SectionBadgeProps) {
    return (
        <div
            className={`inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-3.5 py-1 text-xs font-medium text-neutral-600 shadow-xs backdrop-blur-md transition-all duration-200 ${className}`}
        >
            {number && (
                <>
                    <span className="font-mono text-neutral-400">{number}</span>
                    <span className="h-1 w-1 rounded-full bg-neutral-300" />
                </>
            )}
            <span className="tracking-tight">{label}</span>
        </div>
    );
}
