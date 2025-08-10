import { Articles } from "@/app/data/articles";
import BlogCard from "../ui/BlogCard";

export default function BlogListe() {



    return (

        <section className=" md:p-10 flex flex-col gap-10">
            {
                Articles.map((el) => (
                    <BlogCard key={el.id} title={el.title} img={el.img} subtitle={el.subtitle}  author={el.author} datePublier={el.datePublier} categorie={el.categorie} theme={el.theme} />
                ))
            }
        </section>

    )
}
