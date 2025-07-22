import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className="w-full px-10">
            <SectionTitle subHeading="What's new" heading="Add an Item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend font-semibold">Recipe name*</legend>
                    <input type="text" className="input" placeholder="Recipe Name"
                    {...register("name", { required: true, maxLength: 120 })} />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Category*</legend>
                    <select {...register("category", { required: true })} defaultValue="Pick a browser" className="select">
                        <option disabled={true}>Pick one</option>
                        <option>Salad</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Dessert</option>
                        <option>Drinks</option>
                    </select>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend font-semibold">Price*</legend>
                    <input type="number" {...register("price", { required: true })} className="input" placeholder="Type here" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Recipe Details</legend>
                    <textarea {...register("details", { required: true })} className="textarea h-24" placeholder="Bio"></textarea>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Item Image*</legend>
                    <input type="file" className="file-input" />
                    {/* <label className="label">Max size 2MB</label> */}
                </fieldset>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;