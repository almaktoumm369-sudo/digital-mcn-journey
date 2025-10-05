import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Shop = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [cart, setCart] = useState<Record<number, number>>({});
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());

  const products = [
    {
      id: 1,
      name: "Masque Décoratif Dan",
      category: "Décoration",
      price: 45000,
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=400&fit=crop",
      description: "Réplique artisanale d'un masque traditionnel Dan",
    },
    {
      id: 2,
      name: "Tissu Kente Authentique",
      category: "Textiles",
      price: 35000,
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=400&fit=crop",
      description: "Tissu tissé à la main, 2m x 1.5m",
    },
    {
      id: 3,
      name: "Statuette Ancestrale",
      category: "Sculptures",
      price: 28000,
      image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=400&h=400&fit=crop",
      description: "Sculpture en bois d'ébène, 30cm",
    },
    {
      id: 4,
      name: "Collier Touareg",
      category: "Bijoux",
      price: 15000,
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop",
      description: "Bijou traditionnel en argent massif",
    },
    {
      id: 5,
      name: "Catalogue du Musée",
      category: "Livres",
      price: 8000,
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=400&fit=crop",
      description: "Édition 2025 avec 200 pages illustrées",
    },
    {
      id: 6,
      name: "Poterie Berbère",
      category: "Céramiques",
      price: 22000,
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop",
      description: "Vase décoratif peint à la main",
    },
    {
      id: 7,
      name: "Djembé Traditionnel",
      category: "Instruments",
      price: 55000,
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=400&fit=crop",
      description: "Tambour authentique, hauteur 50cm",
    },
    {
      id: 8,
      name: "Carte Postale Set",
      category: "Papeterie",
      price: 3000,
      image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=400&h=400&fit=crop",
      description: "Lot de 10 cartes postales",
    },
  ];

  const categories = ["all", "Décoration", "Textiles", "Sculptures", "Bijoux", "Livres", "Céramiques", "Instruments", "Papeterie"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
    toast({
      title: "Ajouté au panier",
    });
  };

  const toggleWishlist = (productId: number) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
      toast({
        title: "Ajouté à la liste de souhaits",
      });
    }
    setWishlist(newWishlist);
  };

  const cartTotal = Object.entries(cart).reduce((total, [id, quantity]) => {
    const product = products.find((p) => p.id === Number(id));
    return total + (product?.price || 0) * quantity;
  }, 0);

  const cartItemCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Boutique du Musée</h1>
          <p className="text-xl text-muted-foreground">
            Souvenirs et objets d'art authentiques
          </p>
        </div>

        {/* Cart Summary */}
        {cartItemCount > 0 && (
          <Card className="mb-8 bg-primary text-primary-foreground">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <ShoppingCart size={24} />
                <div>
                  <p className="font-semibold">{cartItemCount} article(s) dans le panier</p>
                  <p className="text-sm opacity-90">Total: {cartTotal.toLocaleString()} FCFA</p>
                </div>
              </div>
              <Button variant="secondary">
                Voir le panier
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Catégorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les catégories</SelectItem>
              {categories.slice(1).map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 bg-background/90 backdrop-blur p-2 rounded-full hover:bg-background transition"
                >
                  <Heart
                    size={20}
                    className={`transition ${
                      wishlist.has(product.id)
                        ? "fill-accent text-accent"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
              </div>
              <CardContent className="p-4">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {product.price.toLocaleString()} FCFA
                  </span>
                  <Button
                    size="sm"
                    onClick={() => addToCart(product.id)}
                  >
                    <ShoppingCart size={16} className="mr-1" />
                    Ajouter
                  </Button>
                </div>
                {cart[product.id] > 0 && (
                  <div className="mt-2 text-sm text-center text-muted-foreground">
                    {cart[product.id]} dans le panier
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
