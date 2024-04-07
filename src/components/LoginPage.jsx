import { useState } from 'react';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation
        const errors = {};
        if (formData.email.trim() === '') {
            errors.email = '*Email Address is required';
        }
        if (formData.password.trim() === '') {
            errors.password = '*Password is required';
        }
        if (formData.confirmPassword.trim() === '') {
            errors.confirmPassword = '*Confirm Password is required';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            console.log(formErrors);
        } else {
            console.log('Form submitted successfully!');
            setFormData({
                email: '',
                password: '',
                confirmPassword: ''
            });
            setFormErrors({
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center">
            {/* Header */}
            <div className="bg-white fixed top-0 left-0 right-0 border-b-2 border-black flex justify-center items-center">
                <h1 className=' roboto-medium py-5 text-3xl '>teach;able</h1>
            </div>

            {/* Heading */}
            <div className="max-w-lg px-2 w-full">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Log In to Your Account</h1>
            </div>

            {/* Login Form */}
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
                <form className="flex flex-col">
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
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="confirm-password"
                            id="confirm-password"
                            name="confirm-password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className={`mt-1 p-2 w-full border rounded-md ${formErrors.confirmPassword && 'border-red-500'}`}
                            required
                        />
                        {formErrors.password && <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>}
                    </div>

                    <button
                        type="button"
                        className="w-1/2 mx-auto bg-black text-white py-2 rounded-md hover:bg-gray-800"
                        onClick={handleSubmit}
                    >
                        Log In
                    </button>
                </form>

                {/* Register Link */}
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Don&apos;t have an account? <a href="/" className="text-indigo-600 hover:underline">Create one</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;