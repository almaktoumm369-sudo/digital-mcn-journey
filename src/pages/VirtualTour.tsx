import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Maximize2, Volume2 } from "lucide-react";

const VirtualTour = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Visite Virtuelle</h1>
          <p className="text-xl text-muted-foreground">
            Explorez le musée depuis chez vous grâce à notre visite immersive 360°
          </p>
        </div>

        {/* Main Virtual Tour */}
        <Card className="mb-12">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Visite virtuelle du musée"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
                allowFullScreen
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button size="sm" variant="secondary">
                  <Volume2 size={16} className="mr-2" />
                  Audio
                </Button>
                <Button size="sm" variant="secondary">
                  <Maximize2 size={16} className="mr-2" />
                  Plein écran
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tour Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Hall d'Entrée",
              description: "Découvrez l'architecture majestueuse",
              thumbnail: "https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=400&h=300&fit=crop",
              duration: "3:45",
            },
            {
              title: "Galerie des Masques",
              description: "Collection unique de masques traditionnels",
              thumbnail: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop",
              duration: "5:20",
            },
            {
              title: "Salle des Textiles",
              description: "Arts du tissage et de la broderie",
              thumbnail: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=300&fit=crop",
              duration: "4:15",
            },
            {
              title: "Exposition Sculptures",
              description: "Statuaires et sculptures anciennes",
              thumbnail: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=400&h=300&fit=crop",
              duration: "6:30",
            },
            {
              title: "Salle des Instruments",
              description: "Instruments de musique traditionnels",
              thumbnail: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
              duration: "4:00",
            },
            {
              title: "Jardin du Musée",
              description: "Espace extérieur et sculptures monumentales",
              thumbnail: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=300&fit=crop",
              duration: "3:30",
            },
          ].map((section, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={section.thumbnail}
                  alt={section.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-background/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold">
                  {section.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">{section.title}</h3>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Maximize2 className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Vue 360°</h3>
            <p className="text-muted-foreground">
              Navigation complète dans toutes les directions pour une expérience immersive
            </p>
          </Card>
          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Volume2 className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Narration Audio</h3>
            <p className="text-muted-foreground">
              Commentaires détaillés sur chaque espace et œuvre présentée
            </p>
          </Card>
          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Vidéos HD</h3>
            <p className="text-muted-foreground">
              Qualité haute définition pour apprécier chaque détail
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
