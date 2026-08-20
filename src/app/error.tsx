"use client"
import ErrorPage from "@/components/ErrorPage"
export default function NotFound(){
    return(
        <ErrorPage
            code="505"
            title="Camera Malfunciton"
            description="something went wrong" />
    )
}