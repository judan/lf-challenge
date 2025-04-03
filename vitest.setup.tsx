import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Optional: mock next/image if you're using it in components
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // You can also render <img /> here if needed
    return <img {...props} />;
  },
}));