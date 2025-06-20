
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Book, User } from 'lucide-react';
import { mockUser } from '../data/mockData';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Book className="h-6 w-6 text-primary" />
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            BookHub
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary font-medium' : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link
            to="/books"
            className={`transition-colors hover:text-primary ${
              isActive('/books') ? 'text-primary font-medium' : 'text-muted-foreground'
            }`}
          >
            Browse Books
          </Link>
          <Link
            to="/profile"
            className={`transition-colors hover:text-primary ${
              isActive('/profile') ? 'text-primary font-medium' : 'text-muted-foreground'
            }`}
          >
            My Profile
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Avatar className="h-8 w-8 cursor-pointer">
            <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
