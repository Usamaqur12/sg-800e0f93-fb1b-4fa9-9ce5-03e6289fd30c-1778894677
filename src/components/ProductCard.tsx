import { Button } from "@/components/ui/themed-button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

interface ProductFeature {
  text: string;
}

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  originalPrice?: string;
  image: string;
  features: ProductFeature[];
  purchaseUrl: string;
}

export function ProductCard({
  title,
  description,
  price,
  priceNote,
  originalPrice,
  image,
  features,
  purchaseUrl,
}: ProductCardProps) {
  return (
    <div className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden bg-muted/10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-8">
        <div className="mb-4">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-3 mb-1">
            <span className="font-serif text-3xl font-bold text-foreground">
              {price}
            </span>
            {priceNote && (
              <span className="text-sm text-muted-foreground font-medium">
                {priceNote}
              </span>
            )}
            {originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
          {originalPrice && (
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
              Limited Time Offer
            </Badge>
          )}
        </div>

        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{feature.text}</span>
            </div>
          ))}
        </div>

        <Button
          variant="accent"
          size="lg"
          className="w-full"
          onClick={() => window.open(purchaseUrl, "_blank")}
        >
          Purchase Now
        </Button>
      </div>
    </div>
  );
}