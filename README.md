# Carlux Inventory Dashboard

A premium, responsive automotive inventory management system built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Dynamic Inventory Views**: Switch between Grid and List views seamlessly.
- **Search & Filter**: Real-time vehicle search by title, brand, or model.
- **Advanced Sorting**: Sort vehicles by price (High to Low, Low to High).
- **Mobile First Design**: Fully responsive UI with a dedicated mobile drawer menu and optimized table layouts.
- **Sticky Header**: Navigation and search remain accessible while scrolling.
- **Premium Aesthetics**: Dark-themed UI with glassmorphism effects, smooth transitions, and custom scrollbars.
- **State Management**: powered by Zustand for predictable and performant state handling.
- **Data Fetching**: Integrated with React Query for efficient data synchronization and caching.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Responsiveness

The dashboard is optimized for all device sizes:
- **Desktop**: full-featured sidebar and multi-column grid.
- **Mobile**: Collapsible sidebar (hamburger menu), compact header, and scroll-free list view.

## 📂 Project Structure

- `src/app`: Page routes and global layout.
- `src/components`: UI components (Layout, Inventory, Shared).
- `src/hooks`: Custom React hooks for data and logic.
- `src/store`: Zustand store for state management.
- `src/types`: TypeScript interfaces and types.
