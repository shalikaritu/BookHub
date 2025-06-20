
export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  description: string;
  genre: string[];
  publishedYear: number;
  isbn: string;
  averageRating: number;
  totalReviews: number;
  isFeatured?: boolean;
}

export interface Review {
  id: string;
  bookId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  content: string;
  createdAt: string;
  likes: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  booksRead: number;
  reviewsWritten: number;
  favoriteGenres: string[];
}
