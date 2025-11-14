import Header from "@/app/components/ui/Header"

export default function page() {
    return (
        <div>
            <Header />
            <iframe src="/pdf/cv_chadrack_massamba_fr.pdf" className=" w-full h-screen my-20 bg-black" ></iframe>
        </div>
    )
}
