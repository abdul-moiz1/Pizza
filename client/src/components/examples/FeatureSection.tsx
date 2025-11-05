import FeatureSection from '../FeatureSection';
import { Award, Leaf, Pizza } from 'lucide-react';

export default function FeatureSectionExample() {
  const features = [
    {
      icon: Award,
      title: '100% Halal',
      description: 'All our ingredients are certified halal, ensuring quality and trust.'
    },
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'We use only the freshest, highest quality ingredients daily.'
    },
    {
      icon: Pizza,
      title: '20+ Specialties',
      description: 'From house specials to custom creations, endless delicious options.'
    }
  ];

  return <FeatureSection features={features} />;
}
