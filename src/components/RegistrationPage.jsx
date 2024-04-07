import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    });

    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation
        const errors = {};
        if (formData.fullName.trim() === '') {
            errors.fullName = '*Full Name is required';
        }
        if (formData.email.trim() === '') {
            errors.email = '*Email Address is required';
        }
        if (formData.password.trim() === '') {
            errors.password = '*Password is required';
        }
        if (formData.confirmPassword.trim() === '') {
            errors.confirmPassword = '*Confirm Password is required';
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = '*Passwords do not match';
        }
        if (!formData.acceptTerms) {
            errors.acceptTerms = '*You must accept the Terms of Service and Privacy Policy';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            console.log(formErrors);
        } else {
            console.log('Form submitted successfully!', formData);
            setFormData({
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
                acceptTerms: false
            });
            setFormErrors({
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
                acceptTerms: ''
            });
            navigate('/additional-info');
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center">
            {/* Header */}
            <div className="bg-white fixed top-0 left-0 right-0 border-b-2 border-black flex justify-center items-center">
                <h1 className=' roboto-medium py-5 text-3xl '>teach;able</h1>
            </div>

            {/* Heading and Subheading */}
            <div className="max-w-lg px-2 w-full">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Getting Started with Teachable</h1>
                <p className="text-center text-gray-600 px-2 mb-5 mt-5">
                    Join more than 100,000 creators who&apos;ve sold over <span className='font-bold'>$1 billion</span> in courses and coaching.
                </p>

                {/* Registration Form */}
                <div className="bg-white p-8 rounded-lg">
                    <form className='flex flex-col'>
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className={`mt-1 p-2 w-full border rounded-md ${formErrors.fullName && 'border-red-500'}`}
                                required
                            />
                            {formErrors.fullName && <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`mt-1 p-2 w-full border rounded-md ${formErrors.email && 'border-red-500'}`}
                                required
                            />
                            {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`mt-1 p-2 w-full border rounded-md ${formErrors.password && 'border-red-500'}`}
                                required
                            />
                            {formErrors.password && <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className={`mt-1 p-2 w-full border rounded-md ${formErrors.confirmPassword && 'border-red-500'}`}
                                required
                            />
                            {formErrors.confirmPassword && <p className="text-red-500 text-sm mt-1">{formErrors.confirmPassword}</p>}
                        </div>

                        <div className="flex">
                            <input
                                type="checkbox"
                                id="acceptTerms"
                                name="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={handleInputChange}
                                className="h-4 w-4 mr-2 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                required
                            />
                            <label htmlFor="acceptTerms" className="text-sm text-gray-700">
                                I accept the <a href="https://teachable.com/terms-of-use" className="text-indigo-600 hover:underline">Terms of Service</a> and <a href="https://teachable.com/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</a>
                            </label>
                            
                        </div>
                        {formErrors.acceptTerms && <p className="text-red-500 text-sm mt-1 mb-4">{formErrors.acceptTerms}</p>}

                        <button
                            type="button"
                            className="w-1/2 mx-auto bg-black text-white mt-6 p-2 rounded-md hover:bg-gray-800"
                            onClick={handleSubmit}
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Log In Link */}
                    <p className="mt-8 text-sm text-gray-600 text-center">
                        Already have an account? <a href="/login" className="text-indigo-600 hover:underline">Log In</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;