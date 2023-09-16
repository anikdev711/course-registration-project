
Question and Answers 

Question-1: Add at least 3 Project features

Answer: The course registration project is done using React JS, Tailwind CSS, and Daisy UI. The attractive features of this project are:
* When the select button for each course is clicked, the course is added to the cart. The most interesting thing is that one course can be selected and added to the cart only once. If one course is selected more than once, then a toast is displayed.
* The total credit hour is, by default, 0. When a course is selected, the credit hour of that course is added to the total credit hour. But there is a condition that more than 20 credit hours are not allowed. One can select courses for up to 20 credit hours. If it is more than 20 credit hours, a toast is displayed.
* There is one credit hour remaining in the cart. By default, its value is 20 hours. There is a condition that the number of credit hours remaining should not be less than 0. When the value is 0, a toast is displayed.
* The price of the selected courses is added to the total price in the cart.
* Each card has a cover image of the course, course name, course details, price, and credit hour. There is a see more button to show more details about the courses.


Question-2: Discuss how you managed the state in your assignment project.

Answer: Components in React need to remember things, for example, course registration carts. This is actually a type of memory. This type of component-specific memory in React is called state. To manage the states in this project, the state hook is used. It has two things, basically. The first one is a state variable, which retains data or values between renders. Another one is called the state setter function, which updates the variable and triggers React to render the component again when necessary. The differences between variable and useState are that variable cannot preserve data and cannot trigger React to render. In contrast, useState can preserve data and trigger React to render with the help of the setter function. In this project, the state hook is used for state management.
* The data is fetched from the API and stored in setAllCourses. By using the allCourses state, we can see all the courses in the API. We can handle them according to our needs.
* The selected courses are stored in setSelectCourses. selectCourses retains the data. By using this state management, we can keep track of the selected courses and update them when they are added.
* The total selected course credit hours are stored in the setTotalCreditHour. By using totalCreditHour, a condition is set that a maximum of 20 credit hours can be taken and added to the cart. The initial value of useState is 0.
* The remaining credit hour is stored in setRemainingCreditHour. By using remainingCreditHour, a condition is set that the remaining credit should not be less than 0. The initial value of useState is 20.
* The total price of the selected course is stored in setTotalPrice.
