import FeaturedRoom from '@/components/FeaturedRoom/FeaturedRoom';
import Gallery from '@/components/Gallery/Gallery';
import HeroSection from '@/components/HeroSection/HeroSection';
import CountrySection from '@/components/CountrySection/CountrySection'
import NewsLetter from '@/components/NewsLetter/NewsLetter';
import PageSearch from '@/components/PageSearch/PageSearch';
import { getFeaturedRoom } from '@/libs/apis';

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();

  return (
    <>
      <PageSearch />
      {/* <HeroSection /> */}
      <CountrySection/>
      <Gallery />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <NewsLetter />
    </>
  );
};

export default Home;
