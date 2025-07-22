import React from 'react'
import { useForm } from "react-hook-form"

const FormLearn = () => {

const {
register,
handleSubmit,
watch,
formState: { errors ,isSubmitting},
} = useForm()

async function onSubmit(data){
await new Promise((resolve)=>{setTimeout(resolve,5000)})
console.log(data)

}


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      

      <div>
        <label htmlFor="">FirstName</label>
        <input type="text" 
        className={errors.firstname?'border-4 border-red-500':""}
        {...register("firstname",{
          required: {value:true,message: 'cant be empty'},
          maxLength: {value:20,message: 'max length is 20'},
          minLength:{value:3 ,message: 'min length should be 3'}
          })} />
          {errors.firstname && <p className='text-red-500'>{errors.firstname.message}</p>} 
      </div>  
        <br />
      <div>
        <label htmlFor="">MiddleName</label>
        <input type="text" 
         className={errors.middlename?'border-4 border-red-500':""}
        {...register("middlename",{
          required: {value:true,message: 'cant be empty'},
          maxLength: {value:20,message: 'max length is 20'},
          minLength:{value:3 ,message: 'min length should be 3'} 
          }

        )} />
        {errors.middlename && <p className='text-red-500'>{errors.middlename.message}</p>}
      </div> 
        <br />
      <div>
        <label htmlFor="">lastName</label>
        <input type="text" 
         className={errors.lastname?'border-4 border-red-500':""}
        {...register("lastname",{
          required: {value:true,message: 'cant be empty'},
          maxLength: {value:20,message: 'max length is 20'},
          minLength:{value:3 ,message: 'min length should be 3'} 
          })}/>
          {errors.lastname && <p className='text-red-500'>{errors.lastname.message}</p>}
      </div> 
        <br />
        <input type="submit" disabled={isSubmitting} 
        value={isSubmitting? 'Submitting':'Submit'}/>
      
    </form>
  )
}

export default FormLearn