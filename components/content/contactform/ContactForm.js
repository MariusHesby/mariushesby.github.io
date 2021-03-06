import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
    firstName: yup.string().min(3, "First name must be at least 3 characters"),
    lastName: yup.string().min(4, "Last name must be at least 3 characters").required("Please enter your first name").required("Please enter your last name"),
    email: yup.string().email("E-mail must be valid").required("Please enter your e-mail"),
    subject: yup.string().required("Please choose a subject"),
    message: yup.string().min(10, "Message must be at least 10 characters").required("Please enter a message"),

});

function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <div className="grid">

            <form onSubmit={handleSubmit(onSubmit)} className="md:max-w-lg">
                <h2>Contact me</h2>
                <div className="mb-6">
                    <label htmlFor="firstName" className="block mb-1">First name</label>
                    <input type="text" {...register("firstName", { required: true })} id="firstName" />
                    {errors.firstName && <span className="block text-red-600">{errors.firstName.message}</span>}
                </div>

                <div className="mb-6">
                    <label htmlFor="lastName" className="block">Last name</label>
                    <input type="text" {...register("lastName", { required: true })} id="lastName" />
                    {errors.lastName && <span className="block text-red-600">{errors.lastName.message}</span>}
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block">E-mail</label>
                    <input type="text" {...register("email", { required: true })} id="email" />
                    {errors.email && <span className="block text-red-600">{errors.email.message}</span>}
                </div>

                <div className="mb-10">
                    <label htmlFor="message" className="block">Message</label>
                    <textarea rows="4" cols="50" {...register("message", { required: true })} id="message" />
                    {errors.message && <span className="block text-red-600">{errors.message.message}</span>}
                </div>

                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;