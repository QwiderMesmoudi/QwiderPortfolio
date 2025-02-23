import Header from "@/app/Components/Header";
import Hero from "./Components/Hero";
import ContactMe from "./Components/ContactMe";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";


const POSTS_QUERY = `*[_type == "pageInfo"]`;

const options = { next: { revalidate: 30 } };

export default async   function Home() {

const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

console.log(posts[0])
return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll z-0">
      
      <Header/>

         

      <section id="hero" className="">
      <Hero role={posts[0].role} image={urlFor(posts[0].mainImage).url()} words={posts[0].typewriterTexts} />
      </section>
      <section id="contact" className="">
        <ContactMe email={posts[0].email} phone={posts[0].phoneNumber}/>
      </section>
      
    </div>
  );
}

