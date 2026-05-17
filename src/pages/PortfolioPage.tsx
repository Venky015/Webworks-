import Portfolio from '../components/Portfolio';

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-dark tracking-tighter">
            Our <span className="text-primary italic">Signature</span> Work
          </h1>
          <p className="text-xl text-dark/40 max-w-2xl mx-auto">
            Explore a curated selection of our most impactful digital creations and successful business transformations.
          </p>
        </div>
        <Portfolio />
      </div>
    </div>
  );
}
