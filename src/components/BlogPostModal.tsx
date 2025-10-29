import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

interface BlogPostModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

const BlogPostModal = ({ post, isOpen, onClose }: BlogPostModalProps) => {
  if (!post) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="mb-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">{post.category}</Badge>
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-left">
            {post.title}
          </DialogTitle>
          <DialogDescription className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </DialogDescription>
        </DialogHeader>
        
        <div className="prose prose-sm md:prose-base max-w-none mt-6">
          <div className="text-base leading-relaxed space-y-4 text-foreground">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogPostModal;
