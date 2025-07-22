import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`
    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
            })
    };
    console.log(errors);
    console.log(img_hosting_token)
    return (
        <div className="w-full px-10">
            <SectionTitle subHeading="What's new" heading="Add an Item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset mb-4">
                    <legend className="fieldset-legend font-semibold">Recipe name*</legend>
                    <input type="text" className="input" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })} />
                </fieldset>
                <div className="flex my-4">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Category*</legend>
                        <select {...register("category", { required: true })} defaultValue="Pick One" className="select">
                            <option disabled={true}>Pick One</option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset ml-4">
                        <legend className="fieldset-legend font-semibold">Price*</legend>
                        <input type="number" {...register("price", { required: true })} className="input" placeholder="Type here" />
                    </fieldset>
                </div>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Recipe Details</legend>
                    <textarea {...register("recipe", { required: true })} className="textarea h-24" placeholder="Bio"></textarea>
                </fieldset>
                <fieldset className="fieldset my-4">
                    <legend className="fieldset-legend">Item Image*</legend>
                    <input type="file" {...register("image", { required: true })} className="file-input" />
                    {/* <label className="label">Max size 2MB</label> */}
                </fieldset>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;