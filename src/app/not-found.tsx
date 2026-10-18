import ErrorPage from "@/components/ErrorPage";

export default function NotFound() {
    return (
        <ErrorPage
            code="404"
            title="FRAME NOT FOUND"
            description="The page you're looking for doesn't exist or has moved."
        />
    );
}