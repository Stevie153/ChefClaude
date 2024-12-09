import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData)
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const employmentStatus = formData.get("employmentStatus");
    // const description = formData.get("description");
    // const favColor = formData.get("favColor");
    console.log(data);
    
    e.currentTarget.reset();
    // Send the data to your server here
  };
  
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md m-14">
          <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="px-2" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              className="rounded-full border-2 border-gray-300 p-3 shadow-md w-full"
              type="email"
              name="email"
              required
            />
            <label className="px-2" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              className="rounded-full border-2 border-gray-300 p-3 shadow-md w-full"
              type="password"
              name="password"
              minLength="8"
              required
            />

            <label className="px-2" htmlFor="description">
              Description:
            </label>

            <textarea
              className="rounded-full border-2 border-gray-300 p-3 shadow-md w-full"
              name="description"
              id="description"
              defaultValue="this is a description"
            ></textarea>
            <fieldset className="rounded-lg border border-gray-300 shadow-md p-4 space-y-4 bg-white mb-6" >
              <legend className="text-lg font-semibold text-gray-700 text-center ">
                Employment Status
              </legend>
              <div className="flex flex-col items-start space-y-2">
                <label className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer">
                  <input
                    className="mr-3 h-4 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                    type="radio"
                    name="employmentStatus"

                    value="unemployed"
                  />
                  Unemployed
                </label>
                <label className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer">
                  <input
                    className="mr-3 h-4 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                    type="radio"
                    name="employmentStatus"
                    value="part-time"
                  />
                  Part-Time
                </label>
                <label className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer">
                  <input
                    className="mr-3 h-4 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                    type="radio"
                    name="employmentStatus"
                    defaultChecked={true}
                    value="full-time"
                  />
                  Full-Time
                </label>
              </div>
            </fieldset>

            <label htmlFor="">What is ur favorite color?</label>
            <select
              className="rounded-3xl border-2 border-gray-300 p-3 shadow-md w-full"
              name="favColor"
              id="favColor"
            >
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>

              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="purple">Purple</option>
              <option value="pink">Pink</option>
              <option value="brown">Brown</option>
            </select>

            <button
              className="rounded-full bg-blue-500 text-white p-3 shadow-md transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 mt-4"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
