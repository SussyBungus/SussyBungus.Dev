import ErrorPage from "@/components/ErrorPage"
export default function NotFound(){
    return(
        <ErrorPage
            code="404"
            title="FRAME NOT FOUND"
            description="the page your looking for does exsict" />
    )
}