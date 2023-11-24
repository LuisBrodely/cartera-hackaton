
import './expenselist.css'
import categoryIcon from '../../assets/icons/category.svg'
import notificacionIcon from '../../assets/icons/notification.svg'
import linesContainerIcon from '../../assets/icons/lines_container.png'

export const ExpenseList = () => {
	return (
		<div className="container-el">
			<div className="subcontainer-el">
				<div className="container-icons"><img src={categoryIcon}/><img src={notificacionIcon}/></div>
				<div className='container-lines'><img src={linesContainerIcon}/></div>
				<div className="totalData">
					<div className='t1'>Total de gastos añadidos</div>
					<div className='t2'>$1,723.00</div>
				</div>
				<div className="content">
					<div className="c1">Listas de gastos:</div>
					<div className="c2">
						<input type="text" className="saldo1" />
						<input type="text" className="saldo2" />
					</div>
					<div className="c3">Ahorraste $10.00 hoy</div>
					<div className="c4">
						<input type="text" className="type1" />
						<input type="text" className="type2" />
					</div>
				</div>
			</div>
		</div>
	)
}
