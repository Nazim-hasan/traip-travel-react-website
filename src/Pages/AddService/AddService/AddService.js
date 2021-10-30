import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } ,reset} = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('https://rocky-sea-97653.herokuapp.com/plan',data)
      .then(res => {
          console.log(res);
          if(res.data.insertedId){
              alert("New Plan Added Successfully");
              reset();
          }
      })
  }
    return (
        <Container>
            <h2 className="text-center my-2">Add A New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="name" className="form-label mt-2">Event Name</label>
                    <input className="form-control" id="name" {...register("name", { required: true })} placeholder="Name"/>
                    {errors.name && <p className="text-danger">This field is required</p>}

                    <label htmlFor="date" className="form-label  mt-2">Travel Date</label>
                    <input className="form-control" id="date" {...register("date", { required: true })} placeholder="Enter Date"/>
                    {errors.date && <p className="text-danger">This field is required</p>}

                    <label htmlFor="reviews" className="form-label  mt-2">Review count from previous group</label>
                    <input className="form-control" id="reviews" {...register("reviews", { required: true })} placeholder="How many "/>
                    {errors.reviews && <p className="text-danger">This field is required</p>}

                    <label htmlFor="shortDec" className="form-label  mt-2">Short Decription</label>
                    <textarea className="form-control" id="shortDec" {...register("shortDec", { required: true })} placeholder="Write a Short Decription "/>
                    {errors.shortDec && <p className="text-danger">This field is required</p>}

                    <label htmlFor="img" className="form-label  mt-2">Photo Link </label>
                    <input className="form-control" id="img" {...register("img", { required: true })} placeholder="Image URL Link "/>
                    {errors.img && <p className="text-danger">This field is required</p>}

                    <label htmlFor="price" className="form-label  mt-2">Tour Cost </label>
                    <input className="form-control" id="price" {...register("price", { required: true })} placeholder="Tour Cost"/>
                    {errors.price && <p className="text-danger">This field is required</p>}
                    
                    <p className="text-center mt-2">
                    <input className="btn btn-success my-2" type="submit" value="Place Order"/></p>
                </form>
        </Container>
    );
};

export default AddService;