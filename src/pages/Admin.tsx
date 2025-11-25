import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Save, Upload, X, Search, Edit, Trash2, CheckCircle, AlertCircle, HelpCircle, Plus, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { useLocation } from "react-router-dom";

import { markdownToHtml } from "../../markdown-parser/src/index";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}

const Admin = () => {
  const location = useLocation();
  const urlToken = new URLSearchParams(location.search).get("token") || "";
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPost, setCurrentPost] = useState<BlogPost>({
    id: "",
    title: "",
    content: "",
    category: "",
    tags: [],
    image: "",
    status: "draft",
    createdAt: "",
    updatedAt: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [autoSaveStatus, setAutoSaveStatus] = useState<"saving" | "saved" | null>(null);
  const [activeFormats, setActiveFormats] = useState<string[]>([]);

  const categories = ["Alibaba Tips", "Export Guide", "Success Stories", "Industry News", "How-To Guides"];
  const availableTags = ["E-commerce", "Export", "Alibaba", "Documentation", "Marketing", "Logistics", "Compliance"];

  // Auto-save functionality
  useEffect(() => {
    if (currentPost.title || currentPost.content) {
      setAutoSaveStatus("saving");
      const timer = setTimeout(() => {
        localStorage.setItem("draft", JSON.stringify(currentPost));
        setAutoSaveStatus("saved");
        setTimeout(() => setAutoSaveStatus(""), 2000);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentPost]);

  // Default blog posts from the website
  const defaultBlogPosts: BlogPost[] = useMemo(() => [
    {
      id: "1",
      title: "Complete Guide to Exporting from India: Step-by-Step Process",
      content: "Learn everything you need to know about starting your export business from India, including documentation, compliance, and best practices.\n\n## Getting Started with Export Business\n\nFirst, you need to obtain an Import Export Code (IEC) from the Directorate General of Foreign Trade (DGFT). This is a mandatory requirement for anyone looking to export from India.",
      category: "Export Guide",
      tags: ["Export", "Documentation", "Compliance"],
      image: "",
      status: "published",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-15",
    },
    {
      id: "2",
      title: "How to Become an Alibaba Verified Supplier: Requirements & Benefits",
      content: "Discover the process of becoming a verified supplier on Alibaba.com and unlock access to millions of global buyers.\n\n## Why Become an Alibaba Verified Supplier?\n\nAlibaba.com is the world's largest B2B marketplace, connecting suppliers with buyers from over 190 countries.",
      category: "Alibaba Tips",
      tags: ["Alibaba", "E-commerce", "Marketing"],
      image: "",
      status: "published",
      createdAt: "2024-01-10",
      updatedAt: "2024-01-10",
    },
    {
      id: "3",
      title: "Top 10 Products to Export from India in 2024",
      content: "Explore the most profitable product categories for Indian exporters and learn how to tap into global demand.\n\n## High-Demand Export Products\n\nIndia has a diverse range of products that are in high demand globally. Understanding which products have the best export potential can help you make informed business decisions.",
      category: "Export Guide",
      tags: ["Export", "Marketing"],
      image: "",
      status: "published",
      createdAt: "2024-01-05",
      updatedAt: "2024-01-05",
    },
    {
      id: "4",
      title: "Export Documentation Checklist: Essential Papers You Need",
      content: "A comprehensive checklist of all the documents required for successful export operations from India.\n\n## Why Documentation Matters\n\nProper documentation is crucial for customs clearance, international payment, legal compliance, and shipment tracking.",
      category: "Export Guide",
      tags: ["Documentation", "Compliance", "Export"],
      image: "",
      status: "published",
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    {
      id: "5",
      title: "From Local to Global: Success Story of a Textile Exporter",
      content: "Read how a small textile manufacturer from Surat transformed into a successful global brand with our guidance.\n\n## The Journey Begins\n\nEvery success story starts with a vision. This is the inspiring journey of a textile manufacturer who took the leap into international markets.",
      category: "Success Stories",
      tags: ["Export"],
      image: "",
      status: "published",
      createdAt: "2023-12-28",
      updatedAt: "2023-12-28",
    },
    {
      id: "6",
      title: "Optimizing Your Alibaba Product Listings for Maximum Visibility",
      content: "Master the art of creating compelling product listings that rank higher and attract more buyers on Alibaba.\n\n## Product Listing Optimization\n\nYour product listing is your digital storefront on Alibaba. Learn how to optimize it for maximum visibility and conversions.",
      category: "Alibaba Tips",
      tags: ["Alibaba", "E-commerce", "Marketing"],
      image: "",
      status: "published",
      createdAt: "2023-12-20",
      updatedAt: "2023-12-20",
    },
  ], []);

  

  const loadPosts = useCallback(async () => {
    try {
      if (!isSupabaseConfigured || !supabase) {
        const local = localStorage.getItem("blogPosts");
        const merged = local ? JSON.parse(local) : defaultBlogPosts;
        setPosts(Array.isArray(merged) ? merged : defaultBlogPosts);
        return;
      }
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error) setPosts(data || []);
    } catch (error) {
      console.error('Error loading posts:', error);
      toast({
        title: "Error",
        description: "Failed to load blog posts",
        variant: "destructive",
      });
    }
  }, [toast, defaultBlogPosts]);

  const loadDraft = useCallback(() => {
    const draft = localStorage.getItem("draft");
    if (draft && !isEditing) {
      const draftPost = JSON.parse(draft);
      if (draftPost.title || draftPost.content) {
        toast({
          title: "Draft Found",
          description: "We found a saved draft. Continue editing?",
        });
      }
    }
  }, [isEditing, toast]);

  // Load posts from Supabase
  useEffect(() => {
    loadPosts();
    loadDraft();
  }, [loadPosts, loadDraft]);

  const savePosts = (updatedPosts: BlogPost[]) => {
    setPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
  };

  const handlePublish = async () => {
    if (!currentPost.title || !currentPost.content || !currentPost.category) {
      toast({
        title: "Missing Information",
        description: "Please fill in title, content, and category before publishing.",
        variant: "destructive",
      });
      return;
    }

    try {
      if (isSupabaseConfigured && !urlToken) {
        toast({ title: "Token Required", description: "Provide a valid URL token to publish.", variant: "destructive" });
        return;
      }
      const imageUrl = await uploadImageIfNeeded(currentPost.image);
      const postData = {
        title: currentPost.title,
        content: currentPost.content,
        category: currentPost.category,
        tags: currentPost.tags,
        image: imageUrl,
        status: "published" as const,
        updated_at: new Date().toISOString(),
      };

      if (urlToken) {
        const resp = await fetch(`/api/posts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: urlToken, ...postData }),
        });
        if (!resp.ok) throw new Error(await resp.text());
      } else if (!isSupabaseConfigured || !supabase) {
        const now = new Date().toISOString();
        const newPost: BlogPost = {
          id: currentPost.id || crypto.randomUUID(),
          title: currentPost.title,
          content: currentPost.content,
          category: currentPost.category,
          tags: currentPost.tags,
          image: imageUrl,
          status: "published",
          createdAt: currentPost.createdAt || now,
          updatedAt: now,
        };
        const updated = isEditing ? posts.map(p => p.id === newPost.id ? newPost : p) : [newPost, ...posts];
        savePosts(updated);
      } else if (isEditing && currentPost.id) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', currentPost.id);

        if (error) throw error;
      } else {
        // Create new post
        const { error } = await supabase
          .from('blog_posts')
          .insert([postData]);

        if (error) throw error;
      }

      toast({
        title: "✅ Published Successfully!",
        description: "Your blog post is now live.",
      });
      
      resetForm();
      setIsEditing(false);
      localStorage.removeItem("draft");
      loadPosts(); // Refresh the posts list
    } catch (error) {
      console.error('Error publishing post:', error);
      toast({
        title: "Error",
        description: "Failed to publish blog post",
        variant: "destructive",
      });
    }
  };

  const handleSaveDraft = async () => {
    if (!currentPost.title || !currentPost.content) {
      toast({
        title: "Missing Content",
        description: "Please add at least a title and some content before saving as draft.",
        variant: "destructive",
      });
      return;
    }

    try {
      if (isSupabaseConfigured && !urlToken) {
        toast({ title: "Token Required", description: "Provide a valid URL token to save draft.", variant: "destructive" });
        return;
      }
      const imageUrl = await uploadImageIfNeeded(currentPost.image);
      const postData = {
        title: currentPost.title,
        content: currentPost.content,
        category: currentPost.category,
        tags: currentPost.tags,
        image: imageUrl,
        status: "draft" as const,
        updated_at: new Date().toISOString(),
      };

      if (urlToken) {
        const resp = await fetch(`/api/posts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: urlToken, ...postData }),
        });
        if (!resp.ok) throw new Error(await resp.text());
      } else if (!isSupabaseConfigured || !supabase) {
        const now = new Date().toISOString();
        const newPost: BlogPost = {
          id: currentPost.id || crypto.randomUUID(),
          title: currentPost.title,
          content: currentPost.content,
          category: currentPost.category,
          tags: currentPost.tags,
          image: imageUrl,
          status: "draft",
          createdAt: currentPost.createdAt || now,
          updatedAt: now,
        };
        const updated = isEditing ? posts.map(p => p.id === newPost.id ? newPost : p) : [newPost, ...posts];
        savePosts(updated);
      } else if (isEditing && currentPost.id) {
        // Update existing draft
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', currentPost.id);

        if (error) throw error;
      } else {
        // Create new draft
        const { error } = await supabase
          .from('blog_posts')
          .insert([postData]);

        if (error) throw error;
      }

      toast({
        title: "💾 Draft Saved",
        description: "Your draft has been saved successfully.",
      });
      
      resetForm();
      setIsEditing(false);
      localStorage.removeItem("draft");
      loadPosts(); // Refresh the posts list
    } catch (error) {
      console.error('Error saving draft:', error);
      toast({
        title: "Error",
        description: "Failed to save draft",
        variant: "destructive",
      });
    }
  };

  const handleUnpublish = async (id: string) => {
    try {
      if (isSupabaseConfigured && !urlToken) {
        toast({ title: "Token Required", description: "Provide a valid URL token to unpublish.", variant: "destructive" });
        return;
      }
      if (urlToken) {
        const resp = await fetch(`/api/posts/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: urlToken, status: 'draft' }),
        });
        if (!resp.ok) throw new Error(await resp.text());
      } else if (!isSupabaseConfigured || !supabase) {
        const updated = posts.map(p => p.id === id ? { ...p, status: 'draft', updatedAt: new Date().toISOString() } : p);
        savePosts(updated);
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .update({ status: 'draft', updated_at: new Date().toISOString() })
          .eq('id', id);
        if (error) throw error;
      }
      toast({ title: "Post Unpublished", description: "The post has been moved to drafts." });
      loadPosts();
    } catch (error) {
      console.error('Error unpublishing post:', error);
      toast({ title: "Error", description: "Failed to unpublish post", variant: "destructive" });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      if (isSupabaseConfigured && !urlToken) {
        toast({ title: "Token Required", description: "Provide a valid URL token to delete.", variant: "destructive" });
        return;
      }
      if (urlToken) {
        const resp = await fetch(`/api/posts/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: urlToken }),
        });
        if (!resp.ok) throw new Error(await resp.text());
      } else if (!isSupabaseConfigured || !supabase) {
        const updated = posts.filter(p => p.id !== id);
        savePosts(updated);
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .delete()
          .eq('id', id);
        if (error) throw error;
      }
      toast({ title: "Post Deleted", description: "The post has been removed." });
      loadPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({ title: "Error", description: "Failed to delete post", variant: "destructive" });
    }
  };

  const handleEdit = (post: BlogPost) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  const resetForm = () => {
    setCurrentPost({
      id: "",
      title: "",
      content: "",
      category: "",
      tags: [],
      image: "",
      status: "draft",
      createdAt: "",
      updatedAt: "",
    });
    setIsEditing(false);
  };

  const applyFormat = (format: string) => {
    const textarea = document.getElementById("content") as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const content = currentPost.content;

    // For headers, apply to the whole line
    if (format.startsWith('h')) {
      let lineStart = start;
      while (lineStart > 0 && content[lineStart - 1] !== '\n') {
        lineStart--;
      }
      
      let lineEnd = end;
      while (lineEnd < content.length && content[lineEnd] !== '\n') {
        lineEnd++;
      }

      const line = content.substring(lineStart, lineEnd);
      const newContent = content.substring(0, lineStart) + `#`.repeat(parseInt(format[1])) + ` ${line.replace(/^[#\s]*/, '')}` + content.substring(lineEnd);
      setCurrentPost({ ...currentPost, content: newContent });

    } else { // For inline formats like bold/italic
      const selectedText = content.substring(start, end);
      let formattedText = "";

      switch (format) {
        case "bold":
          formattedText = `**${selectedText}**`;
          break;
        case "italic":
          formattedText = `*${selectedText}*`;
          break;
        case "bullet":
          formattedText = `- ${selectedText}`;
          break;
        case "number":
          formattedText = `1. ${selectedText}`;
          break;
      }

      const newContent =
        content.substring(0, start) +
        formattedText +
        content.substring(end);

      setCurrentPost({ ...currentPost, content: newContent });
    }
  };

  const handleSelectionChange = () => {
    const textarea = document.getElementById("content") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const content = currentPost.content;
    const formats: string[] = [];

    // Check for bold/italic
    if (start !== end) {
      const selectedText = content.substring(start, end);
      if (selectedText.startsWith('**') && selectedText.endsWith('**')) {
        formats.push('bold');
      }
      if (selectedText.startsWith('*') && selectedText.endsWith('*')) {
        formats.push('italic');
      }
    }

    // Check for headers
    let lineStart = start;
    while (lineStart > 0 && content[lineStart - 1] !== '\n') {
      lineStart--;
    }
    const line = content.substring(lineStart, end);
    if (line.startsWith('# ')) formats.push('h1');
    if (line.startsWith('## ')) formats.push('h2');
    if (line.startsWith('### ')) formats.push('h3');
    if (line.startsWith('#### ')) formats.push('h4');
    if (line.startsWith('##### ')) formats.push('h5');
    if (line.startsWith('###### ')) formats.push('h6');

    setActiveFormats(formats);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentPost({ ...currentPost, image: reader.result as string });
        toast({
          title: "✅ Image Uploaded",
          description: "Your image has been added successfully.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMarkdownUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        setCurrentPost({ ...currentPost, content });
        toast({
          title: "✅ Markdown File Uploaded",
          description: "The file content has been loaded into the editor.",
        });
      };
      reader.readAsText(file);
    }
  };

  const toggleTag = (tag: string) => {
    const newTags = currentPost.tags.includes(tag)
      ? currentPost.tags.filter(t => t !== tag)
      : [...currentPost.tags, tag];
    setCurrentPost({ ...currentPost, tags: newTags });
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {!isSupabaseConfigured && (
          <div className="mb-6 p-4 border rounded bg-yellow-50 text-yellow-800">
            Supabase not configured. Using local storage. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
          </div>
        )}
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Manager</h1>
            <p className="text-gray-600 mt-1">Create and manage your blog posts easily</p>
          </div>
          <Button
            onClick={() => setShowHelp(true)}
            variant="outline"
            size="lg"
            className="min-h-[48px]"
          >
            <HelpCircle className="mr-2 h-5 w-5" />
            Help Guide
          </Button>
        </div>

        <Tabs defaultValue="create" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 h-auto p-1">
            <TabsTrigger value="create" className="text-base py-3">
              <Plus className="mr-2 h-5 w-5" />
              {isEditing ? "Edit Post" : "Create New Post"}
            </TabsTrigger>
            <TabsTrigger value="manage" className="text-base py-3">
              <Edit className="mr-2 h-5 w-5" />
              Manage Posts ({posts.length})
            </TabsTrigger>
          </TabsList>

          {/* Create/Edit Post Tab */}
          <TabsContent value="create" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Step 1: Write Your Post</span>
                  {autoSaveStatus && (
                    <Badge variant="outline" className="text-sm">
                      {autoSaveStatus === "saving" ? "💾 Saving..." : "✅ Saved"}
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Title */}
                <div>
                  <Label htmlFor="title" className="text-base font-semibold">
                    Post Title *
                  </Label>
                  <p className="text-sm text-gray-600 mb-2">Give your post a catchy title</p>
                  <Input
                    id="title"
                    placeholder="e.g., 10 Tips for Successful Alibaba Selling"
                    value={currentPost.title}
                    onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                    className="text-lg min-h-[48px]"
                  />
                </div>

                {/* Formatting Toolbar */}
                <div>
                  <Label className="text-base font-semibold mb-2 block">Format Your Text</Label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => applyFormat("bold")}
                      className={`min-h-[44px] ${activeFormats.includes("bold") ? "bg-muted" : ""}`}>
                      <strong>B</strong>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => applyFormat("italic")}
                      className={`min-h-[44px] ${activeFormats.includes("italic") ? "bg-muted" : ""}`}>
                      <em>I</em>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => applyFormat("h1")}
                      className={`min-h-[44px] ${activeFormats.includes("h1") ? "bg-muted" : ""}`}>
                      H1
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => applyFormat("h2")}
                      className={`min-h-[44px] ${activeFormats.includes("h2") ? "bg-muted" : ""}`}>
                      H2
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => applyFormat("h3")}
                      className={`min-h-[44px] ${activeFormats.includes("h3") ? "bg-muted" : ""}`}>
                      H3
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => applyFormat("h4")}
                      className={`min-h-[44px] ${activeFormats.includes("h4") ? "bg-muted" : ""}`}>
                      H4
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => applyFormat("h5")}
                      className={`min-h-[44px] ${activeFormats.includes("h5") ? "bg-muted" : ""}`}>
                      H5
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => applyFormat("h6")}
                      className={`min-h-[44px] ${activeFormats.includes("h6") ? "bg-muted" : ""}`}>
                      H6
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => applyFormat("bullet")}
                      className="min-h-[44px]"
                    >
                      • List
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => applyFormat("number")}
                      className="min-h-[44px]"
                    >
                      1. List
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Select text and click a button to format it
                  </p>
                </div>

                {/* Content */}
                <div>
                  <Label htmlFor="content" className="text-base font-semibold">
                    Post Content *
                  </Label>
                  <p className="text-sm text-gray-600 mb-2">Write your blog post here</p>
                  <Textarea
                    id="content"
                    placeholder="Start writing your blog post here... Use markdown for formatting."
                    value={currentPost.content}
                    onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                    onSelect={handleSelectionChange}
                    className="min-h-[300px] text-base"
                  />
                </div>

                {/* Preview */}
                <div>
                  <Label className="text-base font-semibold">Preview</Label>
                  <div
                    className="prose max-w-none p-4 border rounded-md min-h-[200px] bg-gray-50"
                    dangerouslySetInnerHTML={{ __html: markdownToHtml(currentPost.content) }}
                  />
                </div>

                {/* File Upload */}
                <div>
                  <Label htmlFor="md-upload" className="text-base font-semibold">
                    Upload Markdown File
                  </Label>
                  <p className="text-sm text-gray-600 mb-2">Alternatively, upload a .md file</p>
                  <Input
                    id="md-upload"
                    type="file"
                    accept=".md"
                    onChange={handleMarkdownUpload}
                    className="min-h-[48px]"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <Label className="text-base font-semibold">Featured Image</Label>
                  <p className="text-sm text-gray-600 mb-2">Add a main image for your post</p>
                  <div className="flex items-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("image-upload")?.click()}
                      className="min-h-[48px]"
                    >
                      <Upload className="mr-2 h-5 w-5" />
                      Choose Image
                    </Button>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    {currentPost.image && (
                      <div className="relative">
                        <img
                          src={currentPost.image}
                          alt="Preview"
                          className="h-20 w-20 object-cover rounded border"
                        />
                        <button
                          onClick={() => setCurrentPost({ ...currentPost, image: "" })}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step 2: Organize Your Post</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Category */}
                <div>
                  <Label className="text-base font-semibold">Category *</Label>
                  <p className="text-sm text-gray-600 mb-2">Choose the best category for your post</p>
                  <Select
                    value={currentPost.category}
                    onValueChange={(value) => setCurrentPost({ ...currentPost, category: value })}
                  >
                    <SelectTrigger className="min-h-[48px] text-base">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat} className="text-base py-3">
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Tags */}
                <div>
                  <Label className="text-base font-semibold">Tags</Label>
                  <p className="text-sm text-gray-600 mb-2">Click to add relevant tags</p>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={currentPost.tags.includes(tag) ? "default" : "outline"}
                        className="cursor-pointer text-sm py-2 px-4 min-h-[36px]"
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step 3: Publish Your Post</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => setShowPreview(true)}
                    variant="outline"
                    size="lg"
                    className="min-h-[56px] text-base"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    Preview Post
                  </Button>
                  <Button
                    onClick={handleSaveDraft}
                    variant="outline"
                    size="lg"
                    className="min-h-[56px] text-base"
                  >
                    <Save className="mr-2 h-5 w-5" />
                    Save as Draft
                  </Button>
                  <Button
                    onClick={handlePublish}
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 min-h-[56px] text-base"
                  >
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Publish Now
                  </Button>
                  {isEditing && (
                    <Button
                      onClick={resetForm}
                      variant="ghost"
                      size="lg"
                      className="min-h-[56px] text-base"
                    >
                      Cancel
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Manage Posts Tab */}
          <TabsContent value="manage" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Label htmlFor="search" className="sr-only">Search posts</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="search"
                        placeholder="Search by title or category..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 min-h-[48px] text-base"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No posts found. Create your first post!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredPosts.map((post) => (
                      <Card key={post.id} className="border-2">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            {post.image && (
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-24 h-24 object-cover rounded"
                              />
                            )}
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Badge variant={post.status === "published" ? "default" : "secondary"}>
                                      {post.status === "published" ? "✅ Published" : "📝 Draft"}
                                    </Badge>
                                    <Badge variant="outline">{post.category}</Badge>
                                  </div>
                                </div>
                              </div>
                              <p className="text-gray-600 mb-3 line-clamp-2">{post.content}</p>
                              <div className="flex flex-wrap gap-2">
                                <Button
                                  onClick={() => handleEdit(post)}
                                  variant="outline"
                                  size="sm"
                                  className="min-h-[44px]"
                                >
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </Button>
                                {post.status === "published" ? (
                                  <Button
                                    onClick={() => handleUnpublish(post.id)}
                                    variant="outline"
                                    size="sm"
                                    className="min-h-[44px]"
                                  >
                                    Unpublish
                                  </Button>
                                ) : (
                                  <Button
                                    onClick={() => {
                                      setCurrentPost(post);
                                      handlePublish();
                                    }}
                                    variant="outline"
                                    size="sm"
                                    className="min-h-[44px]"
                                  >
                                    Publish
                                  </Button>
                                )}
                                <Button
                                  onClick={() => handleDelete(post.id)}
                                  variant="destructive"
                                  size="sm"
                                  className="min-h-[44px]"
                                >
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Preview Dialog */}
        <Dialog open={showPreview} onOpenChange={setShowPreview}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">Preview: {currentPost.title || "Untitled Post"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {currentPost.image && (
                <img src={currentPost.image} alt="Featured" className="w-full h-64 object-cover rounded" />
              )}
              <div className="flex gap-2">
                {currentPost.category && <Badge>{currentPost.category}</Badge>}
                {currentPost.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: markdownToHtml(currentPost.content) }}
              />
            </div>
          </DialogContent>
        </Dialog>

        {/* Help Dialog */}
        <Dialog open={showHelp} onOpenChange={setShowHelp}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">📚 How to Use the Blog Manager</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2">✍️ Creating a New Post</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Click the "Create New Post" tab</li>
                  <li>Enter a catchy title for your post</li>
                  <li>Write your content in the text area</li>
                  <li>Select text and use formatting buttons to make it bold, italic, or add headers</li>
                  <li>Click "Choose Image" to add a featured image</li>
                  <li>Select a category from the dropdown</li>
                  <li>Click tags to add them to your post</li>
                  <li>Click "Preview Post" to see how it looks</li>
                  <li>Click "Publish Now" to make it live!</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">💾 Saving Your Work</h3>
                <p className="text-gray-700">
                  Your work is automatically saved every 2 seconds. You'll see a "Saved" message at the top.
                  You can also click "Save as Draft" to manually save without publishing.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">📝 Formatting Text</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>Bold:</strong> Select text and click "B"</li>
                  <li><em>Italic:</em> Select text and click "I"</li>
                  <li><strong>Headers:</strong> Select text and click "H1" or "H2"</li>
                  <li><strong>Lists:</strong> Click "• List" for bullets or "1. List" for numbers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">🖼️ Adding Images</h3>
                <p className="text-gray-700">
                  Click "Choose Image" button, select an image from your computer, and it will be added to your post.
                  You can remove it by clicking the X button on the image preview.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">🔍 Managing Existing Posts</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Click the "Manage Posts" tab</li>
                  <li>Use the search box to find specific posts</li>
                  <li>Click "Edit" to modify a post</li>
                  <li>Click "Unpublish" to hide a published post</li>
                  <li>Click "Delete" to permanently remove a post</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <AlertCircle className="mr-2 h-5 w-5 text-blue-600" />
                  Important Tips
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Always add a title, content, and category before publishing</li>
                  <li>Use the preview feature to check your post before publishing</li>
                  <li>Your drafts are saved automatically - you won't lose your work!</li>
                  <li>Published posts appear immediately on your website</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Admin;
const SUPABASE_BUCKET = import.meta.env.VITE_SUPABASE_BUCKET || "";

async function uploadImageIfNeeded(image: string): Promise<string> {
  try {
    if (!image || !image.startsWith("data:")) return image;
    if (!SUPABASE_BUCKET || !isSupabaseConfigured || !supabase) return image;

    const match = image.match(/^data:(.*?);base64,/);
    const mime = match?.[1] || "image/png";
    const ext = mime === "image/jpeg" ? "jpg" : mime.split("/")[1] || "bin";
    const path = `blog/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const res = await fetch(image);
    const blob = await res.blob();

    const { error: uploadError } = await supabase.storage.from(SUPABASE_BUCKET).upload(path, blob, {
      contentType: mime,
    });
    if (uploadError) {
      console.error("Image upload error:", uploadError);
      return image;
    }

    const { data } = supabase.storage.from(SUPABASE_BUCKET).getPublicUrl(path);
    return data.publicUrl || image;
  } catch (e) {
    console.error("Image upload failed:", e);
    return image;
  }
}
