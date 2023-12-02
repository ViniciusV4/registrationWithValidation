import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {

  const { register, handleSubmit, reset, formState: { errors }} = useForm()
  const onSubmit = (data) => {
    if (data.senha !== data.confirmeSenha) {
      alert('Verifique se as senhas são iguais');
      return;
    }

    reset() // Resetando o formulário após o envio
  }
  
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Entrar</h2>
                <span>Registre-se para usar os serviços</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                  <input type="text" {...register("nomeUsuario", { required : true })} placeholder='Nome do usuario'/>
                  <input type="password" {...register("senha", { required : true })} placeholder='Senha'/>
                  <input type="password" {...register("confirmeSenha", { required : true })} placeholder='Confirme a senha'/>
                  <input type="text" {...register("celular", { required : true, maxLength: 11 })} placeholder='numero de celular'/>
                  {errors.celular?.type === "required" && "Digite o numero do celular"}
                  {errors.celular?.type === "maxLength" && "O número é muito grande"}

                  <button className='btn'>Entrar</button>
                </form>              
            </div>

            <div className="col-2">
                <img src="bgImg.jpg" alt="paisagem de escada com vista para praia" />
            </div>
        </div>
    </section>
  )
}
