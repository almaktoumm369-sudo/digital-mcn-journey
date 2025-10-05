import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Collections = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [likedArtworks, setLikedArtworks] = useState<Set<number>>(new Set());

  const artworks = [
    {
      id: 1,
      title: "Masque Dan",
      origin: "Côte d'Ivoire",
      category: "Masques",
      period: "XIXe siècle",
      likes: 234,
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Trône Bamoun",
      origin: "Cameroun",
      category: "Mobilier",
      period: "XVIIIe siècle",
      likes: 189,
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Tissage Kente",
      origin: "Ghana",
      category: "Textiles",
      period: "XXe siècle",
      likes: 312,
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Statue Sénoufo",
      origin: "Mali",
      category: "Sculptures",
      period: "XIXe siècle",
      likes: 276,
      image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Masque Baoulé",
      origin: "Côte d'Ivoire",
      category: "Masques",
      period: "XIXe siècle",
      likes: 156,
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Poterie Berbère",
      origin: "Maroc",
      category: "Céramiques",
      period: "XXe siècle",
      likes: 98,
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop",
    },
    {
      id: 7,
      title: "Sculpture Dogon",
      origin: "Mali",
      category: "Sculptures",
      period: "XVIIIe siècle",
      likes: 203,
      image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=400&h=400&fit=crop",
    },
    {
      id: 8,
      title: "Bijoux Touareg",
      origin: "Niger",
      category: "Bijouterie",
      period: "XXe siècle",
      likes: 145,
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=400&fit=crop",
    },
    {
      id: 9,
      title: "Masque Fang",
      origin: "Gabon",
      category: "Masques",
      period: "XIXe siècle",
      likes: 187,
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=400&fit=crop",
    },
    {
      id: 10,
      title: "Tambour Djembé",
      origin: "Guinée",
      category: "Instruments",
      period: "XXe siècle",
      likes: 223,
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop",
    },
    {
      id: 11,
      title: "Statuette Ashanti",
      origin: "Ghana",
      category: "Sculptures",
      period: "XVIIIe siècle",
      likes: 165,
      image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=400&h=400&fit=crop",
    },
    {
      id: 12,
      title: "Panier Zoulou",
      origin: "Afrique du Sud",
      category: "Artisanat",
      period: "XXe siècle",
      likes: 132,
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=400&fit=crop",
    },
  ];

  const categories = ["all", "Masques", "Sculptures", "Textiles", "Céramiques", "Bijouterie", "Mobilier", "Instruments", "Artisanat"];

  const filteredArtworks = artworks.filter((artwork) => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artwork.origin.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || artwork.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const toggleLike = (artworkId: number) => {
    const newLiked = new Set(likedArtworks);
    if (newLiked.has(artworkId)) {
      newLiked.delete(artworkId);
    } else {
      newLiked.add(artworkId);
      toast({
        title: "Œuvre ajoutée aux favoris",
      });
    }
    setLikedArtworks(newLiked);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Notre Collection</h1>
          <p className="text-xl text-muted-foreground">
            Explorez plus de {artworks.length} œuvres du patrimoine africain
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Rechercher une œuvre, un pays..."
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

        {/* Results count */}
        <div className="mb-6 text-muted-foreground">
          {filteredArtworks.length} œuvre(s) trouvée(s)
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtworks.map((artwork) => (
            <Card key={artwork.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => toggleLike(artwork.id)}
                    className="bg-background/90 backdrop-blur p-2 rounded-full hover:bg-background transition"
                  >
                    <Heart
                      size={20}
                      className={`transition ${
                        likedArtworks.has(artwork.id)
                          ? "fill-accent text-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {artwork.category}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-1">{artwork.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{artwork.origin}</p>
                <p className="text-xs text-muted-foreground mb-3">{artwork.period}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Heart size={16} className="fill-accent text-accent" />
                    <span className="text-sm">
                      {artwork.likes + (likedArtworks.has(artwork.id) ? 1 : 0)}
                    </span>
                  </div>
                  <Link to={`/artwork/${artwork.id}`}>
                    <Button size="sm">
                      Découvrir
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">Aucune œuvre trouvée</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collections;
