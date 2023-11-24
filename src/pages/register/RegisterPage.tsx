import { Button, ButtonSocial } from '../../components';
import apple from '../../assets/icons/apple.png'
import google from '../../assets/icons/google.png'
import logo from '../../assets/icons/logo.svg'

export const RegisterPage = () => {
  return (
    <section className="bg-[#161515] h-screen py-10 px-7">
			<div className='flex gap-3 items-center'>
				<img src={logo} alt="logo" className='w-6'/>
				<h1 className='font-bold text-[#f0f0f0]'>Cartera</h1>
			</div>
      <div className="relative pb-3 mt-24">
        <h2 className="text-[#f0f0f0] font-bold text-5xl relative z-10">
          Optimiza
          <br />
          Gastos,
          <br />
          Ahorra
          <br />
          Mientras
          <br />
          Disfrutas
        </h2>
        <div className="w-52 h-6 bg-[#DCEF64] absolute bottom-0 left-4 rounded-sm z-0"></div>
      </div>
      <p className="text-sm text-[#8D8D8D] w-[310px] mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget interdum
        bibendum sapien, vitae tristique morbi ipsum eget tortor.
      </p>
			<div className="flex gap-2 mt-11">
				<div className="w-16 h-[5px] rounded-sm bg-[#757575]"></div>
				<div className="w-7 h-[5px] rounded-sm bg-[#343434]"></div>
				<div className="w-7 h-[5px] rounded-sm bg-[#343434]"></div>
			</div>

			<div className='mt-20 flex gap-5'>
				<Button onClick={ ()=>{} } text='Registrate'/>
				<ButtonSocial onClick={ ()=>{} }>
					<img src={apple} alt="Apple logo" className='w-5'/>
				</ButtonSocial>
				<ButtonSocial onClick={ ()=>{} }>
					<img src={google} alt="Google logo" className='w-5'/>
				</ButtonSocial>
			</div>
			<div className='flex items-center justify-center w-full mt-12 text-[#f0f0f0]'>
				<h3>¿Ya tienes una cuenta? <span className='font-medium text-[#DCEF64]'>Iniciar Sesión</span></h3>
			</div>
    </section>
  );
};
