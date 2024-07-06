import { Button } from "antd";
import React, { FormEvent } from "react";
import { FieldValues, Form, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/AuthApi";
import { verifyToken } from "../utils/VarifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/AuthSlice";
import {useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
  const { handleSubmit, register } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin1234",
    },
  });
  const [login , {data, error}] = useLoginMutation()
  const handleForm = async(data:FieldValues) => {
    const toastId = toast.loading('loging-in')
    const userInfo = {
        id: data.id,
        password: data.password
    }
    try{
      const res =await  login(userInfo).unwrap()
      const token = res?.data?.accessToken
      const decode =verifyToken(token) as TUser
      dispatch(setUser({user:{...decode}, token}))
      navigate(`/${decode.role}/dashboard`)
      toast.success("login complete", {id: toastId,  duration: 2000})

    }catch(err){
      console.log(err)
      toast.error("login fail", {id: toastId,  duration: 2000})
    }
    


  };
  return (
    <form onSubmit={handleSubmit(handleForm)}>
      login page
      <div>
        <label htmlFor="id" id="id">
          {" "}
          ID:{" "}
        </label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password" id="password">
          {" "}
          password:{" "}
        </label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Submit </Button>
    </form>
  );
};

export default Login;
