import { Input, Button } from "antd";
import { useState } from "react";

const AddFoodForm = ({addFood}) => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleSubmit = () => {
        addFood({
            name,
            image,
            calories,
            servings
        })
    }

    return(
        <form>
            <label>Name</label>
            <Input type="text" name="name" onChange={(e) => { setName(e.target.value) }} />
            <label>Image</label>
            <Input type="text" name="image" onChange={(e) => { setImage(e.target.value) }} />
            <label>Calories</label>
            <Input type="number" name="calories" onChange={(e) => { setCalories(e.target.value) }} />
            <label>Servings</label>
            <Input type="number" name="servings" onChange={(e) => { setServings(e.target.value) }} />
            <Button onClick={handleSubmit}>Submit</Button>
        </form>
    )

}

export default AddFoodForm;