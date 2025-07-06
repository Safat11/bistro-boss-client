import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../src/assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="Check it Out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>July 05, 2027</p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa consequatur sed suscipit in cum aliquid. Aut sed natus quod accusantium labore eveniet et at doloribus dignissimos, facere quaerat voluptatem dicta. Molestias cum recusandae at provident praesentium minus ad eius omnis, animi, sunt odio rerum? Iusto expedita cumque provident a delectus.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;