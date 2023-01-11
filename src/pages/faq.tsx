import type { HolyPage } from '../App';
import Meta from '../Meta';
import { ObfuscatedThemeA, ThemeLink } from '../ThemeElements';
import { TN_DISCORD_URL } from '../consts';
import { Obfuscated } from '../obfuscate';
import { getHot } from '../routes';
import type { ReactNode } from 'react';
import { Trans, useTranslation } from 'react-i18next';

const GitLink = ({ children }: { children?: ReactNode }) => (
	<ObfuscatedThemeA
		href="https://github.com/ymosutai"
		title="Git repository"
	>
		{children}
	</ObfuscatedThemeA>
);

const PrivacyLink = ({ children }: { children?: ReactNode }) => (
	<ThemeLink to={getHot('privacy').path}>{children}</ThemeLink>
);

const FAQMeta = () => {
	const { t } = useTranslation('faq');

	return (
		<Meta
			title="FAQ"
			description="Frequently asked questions."
			faq={[
				{
					name: t('list.selfhost.q'),
					acceptedAnswer: {
						text: t('list.selfhost.a'),
					},
				},
				{
					name: t('list.morelinks.q'),
					acceptedAnswer: {
						text: t('list.morelinks.a'),
					},
				},
				{
					name: t('list.source.q'),
					acceptedAnswer: {
						text: t('list.source.a'),
					},
				},
				{
					name: t('list.secure.q'),
					acceptedAnswer: {
						text: t('list.secure.a'),
					},
				},
			]}
		/>
	);
};

const FAQ: HolyPage = () => {
	const { t } = useTranslation('faq');

	// <0> = obfuscated always

	return (
		<>
			<FAQMeta />
			<main>
				<section>
					<h1>
						<Obfuscated>{t('list.selfhost.q')}</Obfuscated>
					</h1>
				</section>
				<section>
					<h1>
						<Obfuscated>{t('list.morelinks.q')}</Obfuscated>
					</h1>
				</section>
				<section>
					<h1>
						<Obfuscated>{t('list.source.q')}</Obfuscated>
					</h1>
					<p>
						<Trans
							t={t}
							i18nKey="list.source.a"
							components={[<Obfuscated />, <GitLink />]}
						/>
					</p>
				</section>
				<section>
					<h1>
						<Obfuscated>{t('list.secure.q')}</Obfuscated>
					</h1>
					<p>
						<Trans
							t={t}
							i18nKey="list.secure.a"
							components={[<Obfuscated />, <PrivacyLink />]}
						/>
					</p>
				</section>
			</main>
		</>
	);
};

export default FAQ;
