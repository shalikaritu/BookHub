
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import { mockBooks } from '../data/mockData';
import { Book as BookIcon, TrendingUp, Users, Star } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const featuredBooks = mockBooks.filter(book => book.isFeatured);
  const popularBooks = mockBooks.slice(0, 4);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    navigate(`/books?search=${encodeURIComponent(query)}`);
  };

  const handleBookClick = (bookId: string) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
            Discover Your Next
            <br />
            Great Read
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of book lovers sharing reviews, discovering new authors, 
            and building their personal libraries.
          </p>
          
          <div className="max-w-2xl mx-auto mb-12">
            <SearchBar onSearch={handleSearch} className="mb-6" />
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="sm">Fiction</Button>
              <Button variant="outline" size="sm">Science Fiction</Button>
              <Button variant="outline" size="sm">Romance</Button>
              <Button variant="outline" size="sm">Mystery</Button>
              <Button variant="outline" size="sm">Biography</Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <BookIcon className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="text-2xl font-bold mb-1">12,000+</h3>
                <p className="text-muted-foreground">Books Reviewed</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="text-2xl font-bold mb-1">5,000+</h3>
                <p className="text-muted-foreground">Active Readers</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="text-2xl font-bold mb-1">50,000+</h3>
                <p className="text-muted-foreground">Reviews Written</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Books</h2>
              <p className="text-muted-foreground">Handpicked selections from our editorial team</p>
            </div>
            <Button variant="outline" onClick={() => navigate('/books')}>
              View All Books
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onClick={() => handleBookClick(book.id)}
                className="animate-fade-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular This Week */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Trending This Week</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularBooks.map((book, index) => (
              <BookCard
                key={book.id}
                book={book}
                onClick={() => handleBookClick(book.id)}
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-purple-600/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Share Your Love for Books?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of passionate readers and start building your personal library today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Start Reading
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Browse Books
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
