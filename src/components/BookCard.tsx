
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import StarRating from './StarRating';
import { Book } from '../types';
import { cn } from '@/lib/utils';

interface BookCardProps {
  book: Book;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const BookCard = ({ book, onClick, className, style }: BookCardProps) => {
  return (
    <Card 
      className={cn(
        'group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden',
        className
      )}
      onClick={onClick}
      style={style}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={book.coverUrl}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {book.isFeatured && (
          <Badge className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-pink-600">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
          {book.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-2">by {book.author}</p>
        
        <div className="flex items-center justify-between mb-2">
          <StarRating rating={book.averageRating} size="sm" showRating />
          <span className="text-xs text-muted-foreground">
            {book.totalReviews} reviews
          </span>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {book.genre.slice(0, 2).map((genre) => (
            <Badge key={genre} variant="secondary" className="text-xs">
              {genre}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
