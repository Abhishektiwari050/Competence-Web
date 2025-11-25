import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

const ThankYou = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Contentsquare Script
        const csScript = document.createElement("script");
        csScript.type = "text/javascript";
        csScript.async = true;
        csScript.src = "https://t.contentsquare.net/uxa/15a4cb85c2059.js";
        document.head.appendChild(csScript);

        // Meta Pixel Script
        const metaScript = document.createElement("script");
        metaScript.innerHTML = `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1890141068251374');
          fbq('track', 'PageView');
        `;
        document.head.appendChild(metaScript);

        // Meta Pixel Noscript
        const metaNoscript = document.createElement("noscript");
        metaNoscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1890141068251374&ev=PageView&noscript=1" />`;
        document.body.appendChild(metaNoscript);

        const timer = setTimeout(() => {
            navigate("/");
        }, 5000);

        return () => {
            document.head.removeChild(csScript);
            document.head.removeChild(metaScript);
            document.body.removeChild(metaNoscript);
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
