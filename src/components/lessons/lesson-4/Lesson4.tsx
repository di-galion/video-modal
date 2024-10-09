import 'rc-collapse/assets/index.css'
import AbacusTemplate from '../../abacus-tepmlate/AbacusTemplate'
import NavElement, { EnumNavElementVariant } from '../../nav-element/NavElement'
import VideoPlayer from '../../video-player/VideoPlayer'
import styles from './styles.module.scss'

const ITEMS = [
	{
		title: 'Флешкарта 0',
		src: '/assets/img/ma/1.4/flashkart0.jpg',
	},
	{
		title: 'Флешкарта 1',
		src: '/assets/img/ma/1.4/flashkart1.jpg',
	},
	{
		title: 'Флешкарта 2',
		src: '/assets/img/ma/1.4/flashkart2.jpg',
	},
	{
		title: 'Флешкарта 3',
		src: '/assets/img/ma/1.4/flashkart3.jpg',
	},
	{
		title: 'Флешкарта 4',
		src: '/assets/img/ma/1.4/flashkart4.jpg',
	},
]

const Lesson4 = () => {
	return (
		<div className={styles.items}>
			<NavElement
				variant={EnumNavElementVariant.SELECTOR_FILLED}
				isDropDownIcon
				title={'Способы обнуления абакуса'}
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
		</div>
	)
}

export default Lesson4
