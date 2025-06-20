
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import StarRating from '../components/StarRating';
import ReviewCard from '../components/ReviewCard';
import { mockBooks, mockReviews } from '../data/mockData';
import { ArrowLeft, BookOpen, Calendar, Hash, Heart, Share2, Star } from 'lucide-react';

const BookDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [newReview, setNewReview] = useState({
    title: '',
    content: '',
    rating: 0
  });
  const [hoveredRating, setHoveredRating] = useState(0);

  const book = mockBooks.find(b => b.id === id);
  const bookReviews = mockReviews.filter(r => r.bookId === id);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Book not found</h1>
          <Button onClick={() => navigate('/books')}>
            Back to Books
          </Button>
        </div>
      </div>
    );
  }

  const handleRatingClick = (rating: number) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting review:', newReview);
    // In a real app, this would make an API call
    setNewReview({ title: '', content: '', rating: 0 });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        {/* Book Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1">
            <div className="relative group">
              <img
                src={book.coverUrl}
                alt={book.title}
                className="w-full max-w-sm mx-auto rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
              {book.isFeatured && (
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600">
                  Featured
                </Badge>
              )}
            </div>
            
            <div className="flex gap-2 mt-6 justify-center">
              <Button className="flex-1">
                <Heart className="mr-2 h-4 w-4" />
                Add to Wishlist
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">by {book.author}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <StarRating rating={book.averageRating} size="lg" showRating />
                <span className="text-muted-foreground">
                  ({book.totalReviews} reviews)
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {book.genre.map((genre) => (
                  <Badge key={genre} variant="secondary">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 text-center">
                  <Calendar className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Published</p>
                  <p className="font-semibold">{book.publishedYear}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Hash className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">ISBN</p>
                  <p className="font-semibold text-xs">{book.isbn}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Star className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Rating</p>
                  <p className="font-semibold">{book.averageRating}/5</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <BookOpen className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Reviews</p>
                  <p className="font-semibold">{book.totalReviews}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({bookReviews.length})</TabsTrigger>
            <TabsTrigger value="write-review">Write Review</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>About This Book</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  {book.description}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {bookReviews.length > 0 ? (
                bookReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-lg font-semibold mb-2">No reviews yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Be the first to share your thoughts about this book!
                    </p>
                    <Button onClick={() => setActiveTab('write-review')}>
                      Write First Review
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="write-review" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Write a Review</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <Label htmlFor="rating">Your Rating *</Label>
                    <div className="flex items-center gap-1 mt-2">
                      {Array.from({ length: 5 }, (_, i) => {
                        const rating = i + 1;
                        return (
                          <Star
                            key={i}
                            className={`w-8 h-8 cursor-pointer transition-colors ${
                              rating <= (hoveredRating || newReview.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300 hover:text-yellow-300'
                            }`}
                            onMouseEnter={() => setHoveredRating(rating)}
                            onMouseLeave={() => setHoveredRating(0)}
                            onClick={() => handleRatingClick(rating)}
                          />
                        );
                      })}
                      <span className="ml-2 text-sm text-muted-foreground">
                        {newReview.rating > 0 && `${newReview.rating}/5 stars`}
                      </span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="title">Review Title</Label>
                    <Input
                      id="title"
                      placeholder="Give your review a title..."
                      value={newReview.title}
                      onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Your Review *</Label>
                    <Textarea
                      id="content"
                      placeholder="What did you think of this book? Share your thoughts..."
                      rows={6}
                      value={newReview.content}
                      onChange={(e) => setNewReview(prev => ({ ...prev, content: e.target.value }))}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={!newReview.rating || !newReview.content.trim()}
                  >
                    Submit Review
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BookDetailPage;
