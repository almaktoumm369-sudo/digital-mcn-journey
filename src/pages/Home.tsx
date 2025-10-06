import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ArrowRight, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import museumHero from "@/assets/museum-hero.jpg";
import maskDan from "@/assets/mask-dan.jpg";
import kenteCloth from "@/assets/kente-cloth.jpg";
import throneBamoun from "@/assets/throne-bamoun.jpg";
import sculptureSenufo from "@/assets/sculpture-senufo.jpg";
import djembe from "@/assets/djembe.jpg";

const Home = () => {
  const { toast } = useToast();
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [likedArtworks, setLikedArtworks] = useState<Set<number>>(new Set());

  const events = [
    {
      id: 1,
      title: "Exposition: L'Art du Masque",
      date: "15-30 Octobre 2025",
      image: maskDan,
    },
    {
      id: 2,
      title: "Conférence: Civilisations Africaines",
      date: "20 Octobre 2025",
      image: sculptureSenufo,
    },
    {
      id: 3,
      title: "Atelier: Tissage Traditionnel",
      date: "25 Octobre 2025",
      image: kenteCloth,
    },
  ];

  const featuredArtworks = [
    {
      id: 1,
      title: "Masque Dan",
      origin: "Côte d'Ivoire",
      likes: 234,
      image: maskDan,
    },
    {
      id: 2,
      title: "Trône Bamoun",
      origin: "Cameroun",
      likes: 189,
      image: throneBamoun,
    },
    {
      id: 3,
      title: "Tissage Kente",
      origin: "Ghana",
      likes: 312,
      image: kenteCloth,
    },
    {
      id: 4,
      title: "Statue Sénoufo",
      origin: "Mali",
      likes: 276,
      image: sculptureSenufo,
    },
  ];

  const collectionPreview = [
    {
      id: 5,
      title: "Masque Baoulé",
      category: "Masques",
      likes: 156,
      image: maskDan,
    },
    {
      id: 6,
      title: "Poterie Berbère",
      category: "Céramiques",
      likes: 98,
      image: djembe,
    },
    {
      id: 7,
      title: "Sculpture Dogon",
      category: "Sculptures",
      likes: 203,
      image: sculptureSenufo,
    },
    {
      id: 8,
      title: "Bijoux Touareg",
      category: "Bijouterie",
      likes: 145,
      image: kenteCloth,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [events.length]);

  const toggleLike = (artworkId: number) => {
    const newLiked = new Set(likedArtworks);
    if (newLiked.has(artworkId)) {
      newLiked.delete(artworkId);
    } else {
      newLiked.add(artworkId);
      toast({
        title: "Œuvre ajoutée aux favoris",
        description: "Vous pouvez retrouver vos œuvres favorites dans votre profil.",
      });
    }
    setLikedArtworks(newLiked);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${museumHero})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Musée des Civilisations Noires
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90">
            Plongez dans la richesse et la diversité du patrimoine africain
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/tickets">
              <Button size="lg" className="text-lg px-8">
                Réserver une visite
              </Button>
            </Link>
            <Link to="/virtual-tour">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Visite virtuelle
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Événements à Venir</h2>
          <p className="text-muted-foreground text-lg">Découvrez nos prochaines expositions et activités</p>
        </div>

        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentEventIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end">
                <div className="p-8 w-full">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="text-primary" />
                    <span className="text-primary font-semibold">{event.date}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">{event.title}</h3>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEventIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentEventIndex ? "bg-primary w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-muted/30 rounded-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Œuvres Vedettes</h2>
          <p className="text-muted-foreground text-lg">Les pièces les plus appréciées de notre collection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredArtworks.map((artwork) => (
            <Card key={artwork.id} className="group overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">{artwork.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{artwork.origin}</p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => toggleLike(artwork.id)}
                    className="flex items-center space-x-1 group/like"
                  >
                    <Heart
                      size={20}
                      className={`transition ${
                        likedArtworks.has(artwork.id)
                          ? "fill-accent text-accent"
                          : "text-muted-foreground group-hover/like:text-accent"
                      }`}
                    />
                    <span className="text-sm">
                      {artwork.likes + (likedArtworks.has(artwork.id) ? 1 : 0)}
                    </span>
                  </button>
                  <Link to={`/artwork/${artwork.id}`}>
                    <Button size="sm" variant="ghost">
                      Découvrir <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Notre Collection</h2>
          <p className="text-muted-foreground text-lg">Un aperçu de notre riche patrimoine</p>
        </div>

        <div className="mb-8 overflow-hidden bg-primary/10 py-4 rounded-lg">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-lg font-medium text-primary mx-4">
              ✨ Plus de 15 000 œuvres d'art africain du monde entier
            </span>
            <span className="text-lg font-medium text-primary mx-4">
              🎭 Des masques ancestraux aux sculptures contemporaines
            </span>
            <span className="text-lg font-medium text-primary mx-4">
              🏛️ Un voyage à travers les civilisations noires
            </span>
            <span className="text-lg font-medium text-primary mx-4">
              ✨ Plus de 15 000 œuvres d'art africain du monde entier
            </span>
            <span className="text-lg font-medium text-primary mx-4">
              🎭 Des masques ancestraux aux sculptures contemporaines
            </span>
            <span className="text-lg font-medium text-primary mx-4">
              🏛️ Un voyage à travers les civilisations noires
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {collectionPreview.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-3">
                <p className="text-xs text-primary font-semibold mb-1">{item.category}</p>
                <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => toggleLike(item.id)}
                    className="flex items-center space-x-1"
                  >
                    <Heart
                      size={16}
                      className={`transition ${
                        likedArtworks.has(item.id)
                          ? "fill-accent text-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                    <span className="text-xs">
                      {item.likes + (likedArtworks.has(item.id) ? 1 : 0)}
                    </span>
                  </button>
                  <Link to={`/artwork/${item.id}`}>
                    <Button size="sm" variant="ghost" className="text-xs p-1 h-auto">
                      Découvrir
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/collections">
            <Button size="lg" className="text-lg px-8">
              Voir toute la collection <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Rejoignez Notre Communauté</h2>
          <p className="text-lg mb-8 opacity-90">
            Recevez les dernières actualités du musée et des invitations exclusives à nos événements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <Button size="lg" variant="secondary">
              S'inscrire
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Home;