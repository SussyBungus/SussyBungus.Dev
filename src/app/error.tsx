"use client";

import { useEffect } from "react";
import ErrorPage from "@/components/ErrorPage";

export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <ErrorPage
            code="500"
            title="CAMERA MALFUNCTION"
            description="Something went wrong during rendering. Let's try reloading the shutter."
            onReset={reset}
        />
    );
}