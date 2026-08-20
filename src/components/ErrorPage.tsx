import Link from 'next/link'
type ErrorPageProps = {
    code: string;
    title: string;
    description: string;
}
export default function ErrorPage({ code, title, description, }: 
    ErrorPageProps) {
        return(
            <main className='flex min-h-[calc(100vh-5rem)] items-center justify-center px-6'>
                <div className='w-full max-w-3xl text-center'>
                    <p className='text-sm font-medium tracking-[0.2em] text-black/35'>
                        ERR {code}
                    </p>
                    <h1 className='mt-5 text-[clamp(6rem,18vw,13rem)] font-semibold leading-none tracking-[-0.08em]'>
                        {code}
                    </h1>
                    <h2 className='mt-5 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl'>
                        {title}
                    </h2>
                    <p className='mx-auto mt-4 max-w-md text-base leading-relaxed text-black/50'>
                        {description}
                    </p>
                    <Link href="/" className='mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105'>
                        Back Home
                    </Link>
                </div>
            </main>
        )
    }