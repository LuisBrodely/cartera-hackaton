import { Button, ButtonSocial } from '../../components';
import apple from '../../assets/icons/apple.png'
import google from '../../assets/icons/google.png'
import logo from '../../assets/icons/logo.svg'

export const GraficasPage = () => {
    return (
        <section className="bg-[#161515] h-screen py-10 px-7">
            <div className='flex items-center flex-col mt-20'>
                <img src={logo} alt="logo" className='h-10 w-auto' />
                <h1 className='font-bold text-[#f0f0f0] text-3xl mt-4'>Iniciar Sesión</h1>
                <p className='text-[#BFBEBE]'>Ingresa tus datos para comenzar</p>
            </div>

            <div className='flex items-center flex-col gap-y-2 mt-12'>
                <div className='w-full'>
                    <input className='w-full bg-[#161515] border-[#757575] border-[0.5px] py-4 px-4 text-sm' type="text" placeholder='Correo electrónico' />
                </div>
                <div className='mt-3 w-full'>
                    <input className='w-full bg-[#161515] border-[#757575] border-[0.5px] py-4 px-4 text-sm text-[#757575] focus:border-[0.5px]' type="text" placeholder='Contraseña' />
                </div>
                <div className='flex justify-end w-full mt-4'>
                    <p className='text-[#DCEF64] text-sm'>¿Olvidaste tu contraseña?</p>
                </div>
                <div className='w-full mt-3'>
                    <Button className="w-full" onClick={() => { }} text='Registrate' />
                </div>
                <div className='w-full flex items-center justify-center mt-4'>
                    <p className='text-[#f0f0f0] text-sm'>Crear una cuenta nueva</p>
                </div>

                <div className='w-full flex items-center justify-center mt-7'>
                    <p className='text-[#DCEF64] text-sm'>También puedes entrar con</p>
                </div>

                <div className='mt-6 flex gap-5'>
                    <ButtonSocial onClick={() => { }}>
                        <img src={apple} alt="Apple logo" className='w-5' />
                    </ButtonSocial>
                    <ButtonSocial onClick={() => { }}>
                        <img src={google} alt="Google logo" className='w-5' />
                    </ButtonSocial>
                </div>
            </div>
        </section>
    )
}