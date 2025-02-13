import Blank from '@/components/Blank';
import Header from '@/components/Header';
import useTranslation from 'next-translate/useTranslation';

export default function About() {
	const { t, lang } = useTranslation('common');
	return (
		<>
			<Header header={t('about.header')} />
			<Blank />
		</>
	);
}
