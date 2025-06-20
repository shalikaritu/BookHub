
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import StarRating from './StarRating';
import { Review } from '../types';
import { formatDistanceToNow } from 'date-fns';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const formattedDate = formatDistanceToNow(new Date(review.createdAt), { addSuffix: true });

  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={review.userAvatar} alt={review.userName} />
            <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm">{review.userName}</h4>
              <span className="text-xs text-muted-foreground">{formattedDate}</span>
            </div>
            <StarRating rating={review.rating} size="sm" className="mt-1" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {review.title && (
          <h5 className="font-medium mb-2">{review.title}</h5>
        )}
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {review.content}
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-xs h-8 px-2">
            👍 {review.likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-xs h-8 px-2">
            Reply
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
