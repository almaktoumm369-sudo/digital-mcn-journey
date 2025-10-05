import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users, Ticket, CreditCard } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const Tickets = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [ticketCounts, setTicketCounts] = useState({
    full: 0,
    student: 0,
    group: 0,
  });

  const ticketTypes = [
    {
      id: "full",
      name: "Visite Libre - Tarif Plein",
      price: 3000,
      icon: Ticket,
      description: "Accès complet au musée",
    },
    {
      id: "student",
      name: "Tarif Scolaire/Étudiant",
      price: 500,
      icon: Users,
      description: "Sur présentation de la carte étudiant",
    },
    {
      id: "group",
      name: "Groupe (10-30 personnes)",
      price: 2500,
      icon: Users,
      description: "Tarif par personne",
    },
  ];

  const updateTicketCount = (type: keyof typeof ticketCounts, increment: boolean) => {
    setTicketCounts((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + (increment ? 1 : -1)),
    }));
  };

  const calculateTotal = () => {
    return (
      ticketCounts.full * 3000 +
      ticketCounts.student * 500 +
      ticketCounts.group * 2500
    );
  };

  const totalTickets = ticketCounts.full + ticketCounts.student + ticketCounts.group;

  const handlePurchase = () => {
    if (!date) {
      toast({
        title: "Date requise",
        description: "Veuillez sélectionner une date de visite",
        variant: "destructive",
      });
      return;
    }
    if (totalTickets === 0) {
      toast({
        title: "Billets requis",
        description: "Veuillez sélectionner au moins un billet",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Réservation confirmée !",
      description: `${totalTickets} billet(s) réservé(s) pour le ${format(date, "PPP", { locale: fr })}`,
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Billeterie</h1>
          <p className="text-xl text-muted-foreground">
            Réservez votre visite au Musée des Civilisations Noires
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Date Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Sélectionnez votre date de visite</CardTitle>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: fr }) : "Choisir une date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>

            {/* Ticket Types */}
            <Card>
              <CardHeader>
                <CardTitle>Choisissez vos billets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {ticketTypes.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <ticket.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{ticket.name}</h3>
                        <p className="text-sm text-muted-foreground">{ticket.description}</p>
                        <p className="text-lg font-bold text-primary mt-1">
                          {ticket.price.toLocaleString()} FCFA
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateTicketCount(ticket.id as keyof typeof ticketCounts, false)}
                        disabled={ticketCounts[ticket.id as keyof typeof ticketCounts] === 0}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center font-semibold">
                        {ticketCounts[ticket.id as keyof typeof ticketCounts]}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateTicketCount(ticket.id as keyof typeof ticketCounts, true)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" placeholder="Votre prénom" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" placeholder="Votre nom" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" type="tel" placeholder="+221 XX XXX XX XX" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Récapitulatif</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {date && (
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Date de visite</p>
                    <p className="font-semibold">{format(date, "PPP", { locale: fr })}</p>
                  </div>
                )}

                <div className="space-y-2">
                  {ticketCounts.full > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Tarif Plein × {ticketCounts.full}</span>
                      <span className="font-semibold">
                        {(ticketCounts.full * 3000).toLocaleString()} FCFA
                      </span>
                    </div>
                  )}
                  {ticketCounts.student > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Étudiant × {ticketCounts.student}</span>
                      <span className="font-semibold">
                        {(ticketCounts.student * 500).toLocaleString()} FCFA
                      </span>
                    </div>
                  )}
                  {ticketCounts.group > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Groupe × {ticketCounts.group}</span>
                      <span className="font-semibold">
                        {(ticketCounts.group * 2500).toLocaleString()} FCFA
                      </span>
                    </div>
                  )}
                </div>

                {totalTickets > 0 && (
                  <>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-2xl font-bold text-primary">
                          {calculateTotal().toLocaleString()} FCFA
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {totalTickets} billet{totalTickets > 1 ? "s" : ""}
                      </p>
                    </div>

                    <Button
                      onClick={handlePurchase}
                      className="w-full"
                      size="lg"
                    >
                      <CreditCard className="mr-2" size={20} />
                      Procéder au paiement
                    </Button>
                  </>
                )}

                <div className="text-xs text-muted-foreground space-y-1 pt-4 border-t border-border">
                  <p>✓ Confirmation instantanée</p>
                  <p>✓ Billets envoyés par email</p>
                  <p>✓ Annulation gratuite 24h avant</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
