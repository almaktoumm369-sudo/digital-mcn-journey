import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Clock, Users, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Events = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [registeredEvents, setRegisteredEvents] = useState<Set<number>>(new Set());

  const events = [
    {
      id: 1,
      title: "Exposition: L'Art du Masque",
      description: "Une exploration fascinante des masques traditionnels africains à travers les âges et les cultures.",
      date: "15-30 Octobre 2025",
      time: "10h00 - 18h00",
      location: "Grande Galerie",
      capacity: "Illimité",
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=500&fit=crop",
      category: "Exposition",
    },
    {
      id: 2,
      title: "Conférence: Civilisations Africaines Anciennes",
      description: "Plongée dans l'histoire des grandes civilisations africaines avec le Professeur Amadou Diop.",
      date: "20 Octobre 2025",
      time: "14h00 - 16h30",
      location: "Auditorium",
      capacity: "200 places",
      image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800&h=500&fit=crop",
      category: "Conférence",
    },
    {
      id: 3,
      title: "Atelier: Tissage Traditionnel",
      description: "Apprenez les techniques ancestrales du tissage avec des artisans expérimentés.",
      date: "25 Octobre 2025",
      time: "09h00 - 13h00",
      location: "Salle d'Atelier",
      capacity: "30 places",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop",
      category: "Atelier",
    },
    {
      id: 4,
      title: "Concert: Musiques Africaines Traditionnelles",
      description: "Soirée musicale avec des instruments traditionnels et chants ancestraux.",
      date: "28 Octobre 2025",
      time: "19h00 - 22h00",
      location: "Jardin du Musée",
      capacity: "500 places",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=800&h=500&fit=crop",
      category: "Concert",
    },
    {
      id: 5,
      title: "Visite Guidée Spéciale: Les Trésors Cachés",
      description: "Découvrez les œuvres rarement exposées avec notre conservateur en chef.",
      date: "2 Novembre 2025",
      time: "15h00 - 17h00",
      location: "Collections Privées",
      capacity: "15 places",
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=500&fit=crop",
      category: "Visite Guidée",
    },
    {
      id: 6,
      title: "Festival: Journée de la Culture Africaine",
      description: "Une journée dédiée à la célébration de la diversité culturelle africaine avec animations, danse et gastronomie.",
      date: "10 Novembre 2025",
      time: "10h00 - 20h00",
      location: "Tout le Musée",
      capacity: "Illimité",
      image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800&h=500&fit=crop",
      category: "Festival",
    },
  ];

  const toggleRegistration = (eventId: number) => {
    const newRegistered = new Set(registeredEvents);
    if (newRegistered.has(eventId)) {
      newRegistered.delete(eventId);
      toast({
        title: "Inscription annulée",
      });
    } else {
      newRegistered.add(eventId);
      toast({
        title: "Inscription confirmée !",
        description: "Vous recevrez un email de confirmation",
      });
    }
    setRegisteredEvents(newRegistered);
  };

  const handleNewsletterSignup = () => {
    if (!email) {
      toast({
        title: "Email requis",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Inscription réussie !",
      description: "Vous recevrez nos actualités par email",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Événements</h1>
          <p className="text-xl text-muted-foreground">
            Découvrez notre programmation culturelle
          </p>
        </div>

        {/* Newsletter Signup */}
        <Card className="mb-12 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Bell size={48} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Restez Informé</h2>
            <p className="text-lg mb-6 opacity-90">
              Inscrivez-vous à notre newsletter pour recevoir nos actualités et invitations exclusives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 text-foreground"
              />
              <Button
                size="lg"
                variant="secondary"
                onClick={handleNewsletterSignup}
              >
                S'inscrire
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Events List */}
        <div className="space-y-8">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-64 md:h-auto">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <CardContent className="p-6 h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {event.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-2 text-primary" size={18} />
                        <span className="font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="mr-2 text-primary" size={18} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="mr-2 text-primary" size={18} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="mr-2 text-primary" size={18} />
                        <span>{event.capacity}</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => toggleRegistration(event.id)}
                      variant={registeredEvents.has(event.id) ? "outline" : "default"}
                      className="w-full"
                    >
                      {registeredEvents.has(event.id) ? "Inscription Confirmée ✓" : "S'inscrire"}
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
