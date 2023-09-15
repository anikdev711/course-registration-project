import { useState } from "react";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
// import './Home.css'
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';



const Home = () => {

    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])
    // console.log(allCourses);

    return (
        <div className="bg-[#F3F3F3]">
            <h1 className="pt-12 mb-8 text-2xl font-bold text-[#1C1B1B]">Course Registration</h1>

            <div className="flex flex-col lg:flex-row w-full mx-8 md:mx-12 lg:mx-10">
                {/* card starts here */}
                <div className="w-2/3">

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-32 lg:grid-cols-3 lg:gap-28 mb-20">
                        {
                            allCourses.map(course => (
                                <div key={course.id} className="card w-72 bg-base-100 shadow-xl px-2 pt-2">
                                    <figure className="px-2 pt-2">
                                        <img src={course.image} alt="" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-lg font-semibold text-[#1C1B1B]">{course.course_name}</h2>

                                        <p className="text-justify text-sm text-[#1C1B1B] font-normal">{course.details.slice(0, 60)}...{/* Open the modal using document.getElementById('ID').showModal() method */} 
                                            <button className="btn btn-secondary text-white w-full mt-4 mb-4" onClick={() => document.getElementById(course.id).showModal()}>See more</button>
                                            <dialog id={course.id} className="modal modal-bottom sm:modal-middle">
                                                <div className="modal-box">
                                                    <h3 className="font-bold text-lg">Details</h3>
                                                    <p className="py-4">{course.details}</p>
                                                    <div className="modal-action">
                                                        <form method="dialog">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button className="btn">Close</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </p>

                                        <div className="flex justify-between px-4 w-72 text-base text-[#1C1B1B] font-medium mb-4">

                                            <div className="flex gap-1">
                                                <FaDollarSign></FaDollarSign>
                                                <p>Price: {course.price}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <FaBookOpen></FaBookOpen>
                                                <p>Credit: {course.credit}hr</p>
                                            </div>

                                        </div>

                                        <div className="card-actions">
                                            <button className="btn btn-accent text-white w-64">Select</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

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