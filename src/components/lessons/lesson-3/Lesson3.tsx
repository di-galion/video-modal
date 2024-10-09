import 'rc-collapse/assets/index.css'
import AbacusTemplate from '../../abacus-tepmlate/AbacusTemplate'
import NavElement, { EnumNavElementVariant } from '../../nav-element/NavElement'
import VideoPlayer from '../../video-player/VideoPlayer'
import styles from './styles.module.scss'

const ITEMS = [
	{
		title: 'Рамка',
		src: '/assets/img/ma/1.3/gift1(ramka).gif',
	},
	{
		title: 'Планка',
		src: '/assets/img/ma/1.3/gift2(planka).gif',
	},
	{
		title: 'Ряды',
		src: '/assets/img/ma/1.3/gift3(ryadi).gif',
	},
	{
		title: 'Земные косточки',
		src: '/assets/img/ma/1.3/gift4().gif',
	},
	{
		title: 'Небесные косточки',
		src: '/assets/img/ma/1.3/gift5().gif',
	},
	{
		title: 'Абакус',
		src: '/assets/img/ma/1.3/abacus.jpg',
	},
]
const Lesson3 = () => {
	return (
		<div className={styles.items}>
			<NavElement
				variant={EnumNavElementVariant.SELECTOR_FILLED}
				isDropDownIcon
				title={'Демонстрация абакуса'}
			>
				<VideoPlayer />
			</NavElement>
			{ITEMS.map(item => {
				return (
					<NavElement
						variant={EnumNavElementVariant.SELECTOR_FILLED}
						isDropDownIcon
						title={item.title}
					>
						<AbacusTemplate src={item.src} />
					</NavElement>
				)
			})}
			<NavElement
				variant={EnumNavElementVariant.SELECTOR_FILLED}
				isDropDownIcon
				title={'Игра'}
			></NavElement>
		</div>
	)
}

export default Lesson3
