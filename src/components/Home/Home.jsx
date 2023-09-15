import Cart from "../Cart/Cart";
// import './Home.css'



const Home = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <h1 className="pt-12 mb-8 text-2xl font-bold text-[#1C1B1B]">Course Registration</h1>

            <div className="flex w-full">
                {/* card starts here */}
                <div className="w-2/3">

                </div>
                {/* card ends here */}

                {/* cart starts here */}
                <div className="w-1/3">
                    <Cart></Cart>
                </div>
                {/* cart ends here */}
            </div>
        </div>
    );
};

export default Home;