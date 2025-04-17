import RecommendSlider from '@/components/RecommendSlider';
import SearchForm from '@/components/SearchForm';

export default function Home() {
  return (
    <main className='lg:mt-8'>
      <SearchForm />
      <RecommendSlider />
    </main>
  );
}
