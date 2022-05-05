import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="App">
      <h1>Registeration Form</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" {...register("Name", { required: true })}/><br/><br/>
        {errors?.Name?.type === "required" && <p>This field is required a Name</p>}

        <label for="contact">Contact:</label>
        <input type="text" id="contact" name="contact" {...register("Contact", { required: true, pattern: "^[6-9]{1}[0-9]{9}$" })}/><br/><br/>
        {errors?.Contact?.type === "required" && <p>This field is required a 10 digit number</p>}

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" {...register("email", { required: true })}/><br/><br/>
        {errors?.email?.type === "required" && <p>This field is required a valid email address</p>}
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" {...register("password", { required: true, pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$" })}/><br/><br/>
        {errors?.password?.type === "required" && <p>This field is required a valid password </p>}
        {errors?.password?.type === "pattern" && (<p>Enter valid format!</p>)}

      
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default App;
