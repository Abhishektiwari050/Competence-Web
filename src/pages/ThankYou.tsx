import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Inject Contentsquare script
        const script = document.createElement('script');
        script.src = "https://t.contentsquare.net/uxa/15a4cb85c2059.js";
        script.async = true;
        document.head.appendChild(script);

        // Redirect after 5 seconds
        const timer = setTimeout(() => {
            navigate("/");
        }, 5000);

        return () => {
            document.head.removeChild(script);
            clearTimeout(timer);
        };
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary/30 px-4">
            <Card className="max-w-md w-full text-center shadow-lg animate-fade-in-up">
                <CardHeader>
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                    </div>
                    <CardTitle className="text-3xl font-bold text-primary">Thank You!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground">
                        You will be connected in 24 hours.
                    </p>

                    <div className="text-sm text-muted-foreground">
                        You will be automatically redirected to the homepage in a few seconds...
                    </div>

                    <div className="flex flex-col gap-3">
                        <Button asChild className="w-full bg-accent hover:bg-accent/90">
                            <Link to="/">
                                Return to Homepage <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full">
                            <Link to="/blog">
                                Read Our Blog
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ThankYou;
