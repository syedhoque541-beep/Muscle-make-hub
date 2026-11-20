export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  duration: string;
  popular?: boolean;
  badge?: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
}

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Basic Membership',
    tagline: 'Ideal for independent lifters and consistent gym-goers',
    price: '800',
    duration: 'per month',
    badge: 'Starter',
    features: [
      'Full access to gym floor & free weights',
      'Cardio equipment & basic machines',
      'Locker room & hydration station access',
      'Flexible gym hours (6:00 AM – 9:00 PM)',
      'Basic workout plan guidance',
    ],
    notIncluded: [
      'Personal 1-on-1 trainer sessions',
      'Customized diet & nutrition blueprint',
    ],
    ctaText: 'Choose Basic Plan',
  },
  {
    id: 'premium',
    name: 'Premium Membership',
    tagline: 'Our most popular plan for rapid fitness transformation',
    price: '1,000',
    duration: 'per month',
    popular: true,
    badge: 'Most Popular',
    features: [
      'Everything in Basic Membership',
      'Personalized strength training routine',
      'Bi-weekly body composition & fitness assessment',
      'Form correction & posture analysis',
      'Priority access to high-demand equipment',
      'Nutrition and supplement advice',
    ],
    ctaText: 'Choose Premium Plan',
  },
  {
    id: 'elite',
    name: 'Elite Membership',
    tagline: 'VIP experience with dedicated personal coaching by Trainer Pervesh',
    price: '1,500',
    duration: 'per month',
    badge: 'VIP Coaching',
    features: [
      'Everything in Premium Membership',
      'Dedicated personal training sessions',
      'Direct 1-on-1 coaching by Trainer Pervesh',
      'Custom muscle-building / fat-loss diet plan',
      'Weekly progress tracking & milestone reviews',
      'Free guest pass (1 visit per month)',
      'VIP locker & priority booking',
    ],
    ctaText: 'Choose Elite Plan',
  },
];
