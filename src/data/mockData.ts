
import { Book, Review, User } from '../types';

export const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.',
    genre: ['Fiction', 'Philosophy', 'Contemporary'],
    publishedYear: 2020,
    isbn: '978-0525559474',
    averageRating: 4.2,
    totalReviews: 1247,
    isFeatured: true
  },
  {
    id: '2',
    title: 'Klara and the Sun',
    author: 'Kazuo Ishiguro',
    coverUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop',
    description: 'A thrilling book that offers a look at our changing world through the eyes of an unforgettable narrator, and one that explores the fundamental question: what does it mean to love?',
    genre: ['Fiction', 'Science Fiction', 'Literary Fiction'],
    publishedYear: 2021,
    isbn: '978-0571364879',
    averageRating: 4.0,
    totalReviews: 892,
    isFeatured: true
  },
  {
    id: '3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    coverUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    description: 'A lone astronaut must save the earth from disaster in this incredible new science-based thriller from the author of The Martian.',
    genre: ['Science Fiction', 'Thriller', 'Adventure'],
    publishedYear: 2021,
    isbn: '978-0593135204',
    averageRating: 4.6,
    totalReviews: 2156,
    isFeatured: true
  },
  {
    id: '4',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
    description: 'A reclusive Hollywood icon finally tells her story to a young journalist, revealing stunning secrets about her life and career.',
    genre: ['Fiction', 'Historical Fiction', 'Romance'],
    publishedYear: 2017,
    isbn: '978-1501161933',
    averageRating: 4.5,
    totalReviews: 3421,
  },
  {
    id: '5',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    coverUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=600&fit=crop',
    description: 'A haunting and unforgettable novel about a young girl abandoned by her family in the North Carolina marshlands.',
    genre: ['Fiction', 'Mystery', 'Coming-of-age'],
    publishedYear: 2018,
    isbn: '978-0735219090',
    averageRating: 4.3,
    totalReviews: 4567,
  },
  {
    id: '6',
    title: 'Educated',
    author: 'Tara Westover',
    coverUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop',
    description: 'A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
    genre: ['Biography', 'Memoir', 'Non-fiction'],
    publishedYear: 2018,
    isbn: '978-0399590504',
    averageRating: 4.4,
    totalReviews: 2890,
  }
];

export const mockReviews: Review[] = [
  {
    id: '1',
    bookId: '1',
    userId: '1',
    userName: 'Sarah Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    title: 'A thought-provoking masterpiece',
    content: 'This book completely changed my perspective on life choices and regret. Matt Haig has created something truly special here.',
    createdAt: '2024-01-15',
    likes: 42
  },
  {
    id: '2',
    bookId: '1',
    userId: '2',
    userName: 'Michael Chen',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 4,
    title: 'Beautiful concept, well executed',
    content: 'The idea of infinite possibilities explored through a magical library is fascinating. Some parts felt a bit repetitive, but overall a wonderful read.',
    createdAt: '2024-01-10',
    likes: 28
  },
  {
    id: '3',
    bookId: '3',
    userId: '3',
    userName: 'Emma Rodriguez',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    title: 'Absolutely brilliant!',
    content: 'Andy Weir has done it again! The science is fascinating, the humor is perfect, and the story kept me up all night. A must-read for sci-fi fans.',
    createdAt: '2024-01-20',
    likes: 67
  }
];

export const mockUser: User = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah@example.com',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  bio: 'Avid reader and book reviewer. Love fantasy, sci-fi, and literary fiction.',
  booksRead: 127,
  reviewsWritten: 43,
  favoriteGenres: ['Fiction', 'Science Fiction', 'Fantasy']
};
