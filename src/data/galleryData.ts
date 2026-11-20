export interface GalleryItem {
  id: string;
  title: string;
  category: 'Workouts' | 'Interior' | 'Events';
  image: string;
  description: string;
  tag: string;
}

export const galleryItems: GalleryItem[] = [
  // INTERIOR
  {
    id: 'int-1',
    title: 'Main Strength & Free-Weights Area',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    description: 'Olympic barbells, bumper plates, power racks, and heavy-duty dumbbells up to 45kg.',
    tag: 'Free Weights',
  },
  {
    id: 'int-2',
    title: 'Dumbbell Rack & Mirror Station',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
    description: 'Precision chrome and rubberized dumbbells with dedicated benches for high-volume isolation training.',
    tag: 'Dumbbell Zone',
  },
  {
    id: 'int-3',
    title: 'Cardio & Conditioning Floor',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1200&auto=format&fit=crop',
    description: 'High-end treadmills, air bikes, and rowing machines for endurance and fat loss.',
    tag: 'Cardio Deck',
  },
  {
    id: 'int-4',
    title: 'Cable Stations & Isolation Machines',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    description: 'Smooth multi-stack cable crossover and pin-selected selectorized machines.',
    tag: 'Machine Floor',
  },
  {
    id: 'int-5',
    title: 'Reception & Member Welcome Desk',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop',
    description: 'Warm, welcoming check-in desk, hydration station, and consultation area.',
    tag: 'Reception',
  },
  {
    id: 'int-6',
    title: 'Gym Ambience & Atmospheric Lighting',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop',
    description: 'High-energy dark atmosphere with focused gold illumination to keep you locked in.',
    tag: 'Ambience',
  },

  // WORKOUTS
  {
    id: 'work-1',
    title: 'Heavy Barbell Deadlift Focus',
    category: 'Workouts',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    description: 'Posterior chain strength and explosive hip drive coached with strict form.',
    tag: 'Back & Legs',
  },
  {
    id: 'work-2',
    title: 'Upper Chest Incline Pressing',
    category: 'Workouts',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
    description: 'Targeted hypertrophy movement for clavicular pectoral development.',
    tag: 'Chest Workout',
  },
  {
    id: 'work-3',
    title: 'Standing Overhead Shoulder Press',
    category: 'Workouts',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop',
    description: 'Building shoulder 3D boulder deltoids and vertical pushing power.',
    tag: 'Shoulders',
  },
  {
    id: 'work-4',
    title: 'Biceps Peak Concentration Work',
    category: 'Workouts',
    image: 'https://images.unsplash.com/photo-1581009146147-30d8cbb8ba54?q=80&w=1200&auto=format&fit=crop',
    description: 'Strict isolation and constant time-under-tension for arm growth.',
    tag: 'Arm Training',
  },
  {
    id: 'work-5',
    title: 'High-Volume Back Hypertrophy',
    category: 'Workouts',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1200&auto=format&fit=crop',
    description: 'Lat pulldowns and close-grip rows for dense back thickness.',
    tag: 'Back Training',
  },
  {
    id: 'work-6',
    title: 'Conditioning Battle Rope Intervals',
    category: 'Workouts',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=1200&auto=format&fit=crop',
    description: 'High-intensity conditioning combining upper body explosive endurance.',
    tag: 'Conditioning',
  },

  // EVENTS & COMMUNITY
  {
    id: 'event-1',
    title: 'Weekend Strength Challenge',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop',
    description: 'Members push their limits in pull-up, plank, and bench press friendly community competitions.',
    tag: 'Challenges',
  },
  {
    id: 'event-2',
    title: 'Personal Training Guidance Session',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop',
    description: 'Trainer Pervesh demonstrating proper biomechanics and barbell trajectory.',
    tag: 'Coaching',
  },
  {
    id: 'event-3',
    title: 'Functional Group Circuit',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    description: 'Energetic group training focused on mobility, core stability, and cardio endurance.',
    tag: 'Group Training',
  },
  {
    id: 'event-4',
    title: 'Member Milestone Celebration',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    description: 'Celebrating 3-month and 6-month body transformations and personal records.',
    tag: 'Community',
  },
];
