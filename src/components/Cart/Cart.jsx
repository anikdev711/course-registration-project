import PropTypes from 'prop-types'


const Cart = ({ selectCourses, totalCreditHour, remainingCreditHour, totalPrice }) => {
    // console.log(selectCourses);



    return (
        <div>
            <div className="card pt-1 w-72 bg-base-100 shadow-xl -ml-10 md:ml-28 lg:ml-16">

                <div className="card-body w-72">
                    <h3 className='-ml-20 text-[#2F80ED] text-lg font-bold'>Credit Hour Remaining {remainingCreditHour} hr</h3>
                    <hr className='-ml-12 border-gray-400' />
                    <h3 className='-ml-48 text-[#1C1B1B] text-xl font-bold'>Course Name</h3>
                    <div>
                    {
                        selectCourses.map(course => (
                            <li className='list-decimal text-left -ml-12 text-base font-normal text-[#1C1B1B]' key={course.id}> {course.course_name}</li>
                        ))
                    }
                    </div>
                    <hr className='-ml-12 border-gray-400' />
                    <h3 className='-ml-36 text-base font-medium text-[#1C1B1B]'>Total Credit Hour : {totalCreditHour}</h3>
                    <hr className='-ml-12 border-gray-400' />
                    <h3 className='-ml-32 text-base text-[#1C1B1B] font-semibold'>Total Price :{totalPrice} USD</h3>

                </div>

            </div>

        </div>
    );
};

Cart.propTypes = {
    selectCourses: PropTypes.object.isRequired,
    totalCreditHour: PropTypes.number.isRequired,
    remainingCreditHour: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
}
export default Cart;