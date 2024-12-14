
import Header from "@/components/Header/Header";
import Podcast from "@/app/home/Podcast/Podcast";
import Activities from "./home/Activities/Activities";
import Quote from "@/app/home/Quote/Quote";
import Consultancy from "./home/Consultancy/Consultancy";
import Events from "./home/Events/Events";
import Blogs from "./home/Blog/Blogs";
import { SessionProvider } from "next-auth/react"
import Lecture from "./home/Lecture/Lecture";


export default function Home() {
  
  return (
    <div>   
      <Header />
      <Podcast></Podcast>
      <Activities></Activities>
      <Lecture></Lecture>
      <Quote></Quote>
      <Consultancy></Consultancy>
      <Events></Events>
      <Blogs></Blogs>   
    </div>
  );
}


