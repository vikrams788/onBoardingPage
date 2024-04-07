import { useState } from 'react';

const AdditionalInfo = () => {
    const [formData, setFormData] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        checkboxQuestion: [],
        finalQuestion: ''
    });

    const [formErrors, setFormErrors] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        checkboxQuestion: '',
        finalQuestion: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        const { checkboxQuestion } = formData;

        if (checked && checkboxQuestion.length >= 3) {
            return;
        }

        const updatedCheckboxQuestion = checked
            ? [...checkboxQuestion, name]
            : checkboxQuestion.filter((item) => item !== name);

        setFormData((prevData) => ({
            ...prevData,
            checkboxQuestion: updatedCheckboxQuestion
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        // Validate required fields
        if (formData.question1.trim() === '') {
            errors.question1 = '*This field is required';
        }
        if (formData.question2.trim() === '') {
            errors.question2 = '*This field is required';
        }
        if (formData.question3.trim() === '') {
            errors.question3 = '*This field is required';
        }
        if (formData.question4.trim() === '') {
            errors.question4 = '*This field is required';
        }
        if (formData.question5.trim() === '') {
            errors.question5 = '*This field is required';
        }
        if (formData.checkboxQuestion.length === 0) {
            errors.checkboxQuestion = '*Please select at least one option';
        }
        if (formData.finalQuestion.trim() === '') {
            errors.finalQuestion = '*This field is required';
        }

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log(formData);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center">
            {/* Progress Bar */}
            <div className="bg-gray-200 fixed top-0 h-2 w-full">
                <div className="bg-emerald-400 h-full rounded" style={{ width: '50%' }}></div>
            </div>

            {/* Additional Info Form */}
            <div className="bg-white rounded-lg max-w-xl w-full mt-10">
                {/* Heading */}
                <div className="max-w-lg w-full mt-8">
                    <h1 className="text-3xl font-bold text-black playfair-display-gfont mb-8">Tell us a little more about yourself</h1>
                    <p className="text-black mb-4">Your answers will help us build an experience to match your needs.</p>
                </div>
                <form className="flex flex-col">
                    {/* Question 1 */}
                    <div className="my-4">
                        <label htmlFor="question1" className="block font-medium ">
                            Do you currently run an online business?
                        </label>
                        <select
                            id="question1"
                            name="question1"
                            value={formData.question1}
                            onChange={handleInputChange}
                            className="mt-1 py-2 px-3 w-full border-2 hover:border-gray-800 border-gray-300 rounded-md"
                            required
                        >
                            <option value="" className=' text-gray-700 ' disabled>Please choose an option...</option>
                            <option value="Yes, full time" >Yes, full time</option>
                            <option value="Yes, part time">Yes, part time</option>
                            <option value="No, I'm creating this account for someone else (a client, employer, etc)">No, I&apos;m creating this account for someone else (a client, employer, etc)</option>
                            <option value="No, but I run a physical one">No, but I run a physical one</option>
                            <option value="No, just exploring!">No, just exploring!</option>
                        </select>
                        {formErrors.question1 && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.question1}</p>
                        )}
                    </div>

                    <div className="my-4">
                        <label htmlFor="question2" className="block font-medium ">
                            Are you already teaching or offering content online?
                        </label>
                        <select
                            id="question2"
                            name="question2"
                            value={formData.question2}
                            onChange={handleInputChange}
                            className="mt-1 py-2 px-3 w-full border-2 hover:border-gray-800 border-gray-300 rounded-md"
                            required
                        >
                            <option value="" className='text-gray-700' disabled>Please choose an option...</option>
                            <option value="Yes, I'm switching from a platform like Teachable">Yes, I&apos;m switching from a platform like Teachable</option>
                            <option value="Yes, but not on a platform like Teachable">Yes, but not on a platform like Teachable</option>
                            <option value="No, I teach/coach/consult but not online">No, I teach/coach/consult but not online</option>
                            <option value="No, I'm just getting started sharing my knowledge">No, I&apos;m just getting started sharing my knowledge</option>
                            <option value="Others">Others (please explain)</option>
                        </select>
                        {formErrors.question2 && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.question1}</p>
                        )}
                    </div>

                    <div className="my-4">
                        <label htmlFor="question3" className="block font-medium ">
                            How big is your current audience (email list, social media followers, subscribers, etc.)?
                        </label>
                        <select
                            id="question3"
                            name="question3"
                            value={formData.question3}
                            onChange={handleInputChange}
                            className="mt-1 py-2 px-3 w-full border-2 hover:border-gray-800 border-gray-300 rounded-md"
                            required
                        >
                            <option value="" className='text-gray-700' disabled>Please choose an option...</option>
                            <option value="No one yet" >No one yet</option>
                            <option value="1 - 1000 people" >1 - 1,000 people</option>
                            <option value="1,000 - 10,000 people" >1,000 - 10,000 people</option>
                            <option value="10,000 - 50,000 people" >10,000 - 50,000 people</option>
                            <option value="50,000+ people" >50,000+ people</option>
                        </select>
                        {formErrors.question3 && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.question1}</p>
                        )}
                    </div>

                    <div className="my-4">
                        <label htmlFor="question4" className="block font-medium ">
                            Which topic is most relevant to your business or content?
                        </label>
                        <select
                            id="question4"
                            name="question4"
                            value={formData.question4}
                            onChange={handleInputChange}
                            className="mt-1 py-2 px-3 w-full border-2 hover:border-gray-800 border-gray-300 rounded-md"
                            required
                        >
                            <option value="" className='text-gray-700' disabled>Please choose an option...</option>
                            <option value="Selling Courses" >Selling Courses</option>
                            <option value="Lead Acquisition" >Lead Acquisition</option>
                            <option value="Internal Training" >Internal Training</option>
                            <option value="Customer Training" >Customer Training</option>
                            <option value="Something Else" >Something Else</option>
                        </select>
                        {formErrors.question4 && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.question1}</p>
                        )}
                    </div>

                    <div className="my-4">
                        <label htmlFor="question5" className="block font-medium ">
                            Approximately how much money do you make charging for your knowledge today (in courses, consulting, books, speaking, etc.)? We ask this so that we can provide you with relevant resources for the size and stage of your business.
                        </label>
                        <select
                            id="question5"
                            name="question5"
                            value={formData.question5}
                            onChange={handleInputChange}
                            className="mt-1 py-2 px-3 w-full border-2 hover:border-gray-800 border-gray-300 rounded-md"
                            required
                        >
                            <option value="" className='text-gray-700' disabled>Please choose an option...</option>
                            <option value="None Yet" >None Yet</option>
                            <option value="$1 to $5k in annual revenue" >$1 to $5k in annual revenue</option>
                            <option value="$5k to $25k in annual revenue" >$5k to $25k in annual revenue</option>
                            <option value="$25k to $75k in annual revenue" >$25k to $75k in annual revenue</option>
                            <option value="$75k to $240k in annual revenue" >$75k to $240k in annual revenue</option>
                            <option value="$240k to $500k in annual revenue" >$240k to $500k in annual revenue</option>
                            <option value="$500k and above in annual revenue" >$500k and above in annual revenue</option>
                            <option value="I prefer not to answer" >I prefer not to answer</option>
                        </select>
                        {formErrors.question5 && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.question1}</p>
                        )}
                    </div>

                    {/* Checkbox Question */}
                    <div className="my-4">
                        <p className=" font-medium ">What are you hoping to do first on Teachable? (Select upto 3 to get started as quickly as possible)</p>
                        <div className="flex flex-col">
                            <label className="inline-flex items-center mt-2 mr-4">
                                <input
                                    type="checkbox"
                                    name="Create an online course"
                                    checked={formData.checkboxQuestion.includes('Create an online course')}
                                    onChange={handleCheckboxChange}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-gray-700">Create an online course</span>
                            </label>
                            <label className="inline-flex items-center mt-2 mr-4">
                                <input
                                    type="checkbox"
                                    name="Create a coaching program"
                                    checked={formData.checkboxQuestion.includes('Create a coaching program')}
                                    onChange={handleCheckboxChange}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-gray-700">Create a coaching program</span>
                            </label>
                            <label className="inline-flex items-center mt-2 mr-4">
                                <input
                                    type="checkbox"
                                    name="Create a digital download (ebook, article, template, worksheet, etc.)"
                                    checked={formData.checkboxQuestion.includes('Create a digital download (ebook, article, template, worksheet, etc.)')}
                                    onChange={handleCheckboxChange}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-gray-700">Create a digital download (ebook, article, template, worksheet, etc.)</span>
                            </label>
                            <label className="inline-flex items-center mt-2 mr-4">
                                <input
                                    type="checkbox"
                                    name="Create a community or forum"
                                    checked={formData.checkboxQuestion.includes('Create a community or forum')}
                                    onChange={handleCheckboxChange}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-gray-700">Create a community or forum</span>
                            </label>
                            <label className="inline-flex items-center mt-2 mr-4">
                                <input
                                    type="checkbox"
                                    name="Create a pre-sell"
                                    checked={formData.checkboxQuestion.includes('Create a pre-sell')}
                                    onChange={handleCheckboxChange}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-gray-700">Create a pre-sell</span>
                            </label>
                            <label className="inline-flex items-center mt-2 mr-4">
                                <input
                                    type="checkbox"
                                    name="I'm not sure yet"
                                    checked={formData.checkboxQuestion.includes("I'm not sure yet")}
                                    onChange={handleCheckboxChange}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-gray-700">I&apos;m not sure yet</span>
                            </label>
                            <label className="inline-flex items-center mt-2 mr-4">
                                <input
                                    type="checkbox"
                                    name="Something else (please explain)"
                                    checked={formData.checkboxQuestion.includes('Something else (please explain)')}
                                    onChange={handleCheckboxChange}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-gray-700">Something else (please explain)</span>
                            </label>
                        </div>
                        {formErrors.checkboxQuestion && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.checkboxQuestion}</p>
                        )}
                    </div>

                    {/* Final Question */}
                    <div className="my-4">
                        <label htmlFor="finalQuestion" className="block font-medium ">
                            How much content or training material (videos, worksheets, downloads, etc.) have you already prepared?
                        </label>
                        <select
                            id="finalQuestion"
                            name="finalQuestion"
                            value={formData.finalQuestion}
                            onChange={handleInputChange}
                            className="mt-1 py-2 px-3 w-full border-2 hover:border-gray-800 border-gray-300 rounded-md"
                            required
                        >
                            <option value="" className='text-gray-700' disabled>Select an option</option>
                            <option value="None - I'm just getting started" >None - I&apos;m just getting started</option>
                            <option value="A little" >A little</option>
                            <option value="Quite a bit" >Quite a bit</option>
                            <option value="My content is ready to go!" >My content is ready to go!</option>
                        </select>
                        {formErrors.finalQuestion && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.finalQuestion}</p>
                        )}
                    </div>

                    <button
                        type="button"
                        className="help-button fixed bottom-1/4 flex justify-center items-center border-2 roboto-regular hover:border-black right-0 m-4 bg-black text-white hover:bg-white hover:text-black px-4 py-2 rounded-md"
                        onClick={() => alert('Help button clicked!')}
                    >
                        <i className="fa-regular fa-circle-question mr-2"></i>Help
                    </button>

                    <button
                        type="button"
                        className="ml-auto my-10 bg-white text-black border-black border-2 py-2 px-10 rounded-md hover:bg-black hover:text-white"
                        onClick={handleSubmit}
                    >
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdditionalInfo;