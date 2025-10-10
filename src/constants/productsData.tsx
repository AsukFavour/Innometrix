interface Product {
    id: number;
    name: string;
    logo: string; // Using text initials as logo
    url: string;
    description: string;
}

export const productsData:Product[] = [
  {
    id: 1,
    name: 'DTherapist',
    logo: '/dtherapist-logo.png',
    url: 'https://dtherapist.com/',
    description: 'Digital therapy platform'
  }
];