
import ProductList from "@/components/ProductList";


const  Home = async ({searchParams}: {searchParams: Promise<{category : string}>})=> {
    const category = (await searchParams).category;
  return (
  <>
    <div className="relative- aspect-[3/1] mb-30 h-[300px] w-full ">
        <img src={"/featured.png"} alt={'featured'}  className="object-cover"/>
    </div>
      <ProductList category={category} params={'homepage'}/>
  </>
  );
}
export default Home;

