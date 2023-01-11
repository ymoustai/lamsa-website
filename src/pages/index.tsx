import type { HolyPage } from '../App';
import Meta from '../Meta';
import { ThemeButton } from '../ThemeElements';
import { Obfuscated } from '../obfuscate';
import styles from '../styles/Home.module.scss';
import { useTranslation } from 'react-i18next';
s
const HomeMeta = () => (
	<Meta
		title="Holy Lamsa"
		description="This is a side project I was working on to bypass Web filters"
		faq={[
			{
				name: 'How do I unblock websites?',
				acceptedAnswer: {
					text: 'Go to the proxy page and enter the address of a blocked website.',
				},
			},
			},
		]}
	/>
);

const Home: HolyPage = ({ mainLayout }) => {
	const { t } = useTranslation('landing');

	return (
		<>
			<HomeMeta />
			<main className={styles.main}>
				<h1>
					<Obfuscated>{t('title')}</Obfuscated>
				</h1>
				<h2>
					<Obfuscated>{t('caption')}</Obfuscated>
				</h2>
				<ThemeButton
					className={styles.button}
					onClick={() => mainLayout.current!.setExpanded(true)}
				>
					<Obfuscated>{t('getStarted')}</Obfuscated>
				</ThemeButton>
			</main>
		</>
	);
};

export default Home;
