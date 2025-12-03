import Image from "next/image";
import ProductList from "@/components/ProductList";
import {SearchParams} from "next/dist/server/request/search-params";


const  Home = async ({searchParams}: {searchParams: Promise<{category : string}>})=> {
    const category = (await searchParams).category;
  return (
  <>
    <div className="relative- aspect-[3/1] mb-30 h-[300px] w-full ">
        <img src={"/featured.png"} alt={'featured'}  className="object-cover"/>
    </div>
      <ProductList category={category} />
  </>
  );
}
export default Home;

