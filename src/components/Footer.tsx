import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sidebar-background text-sidebar-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">À Propos</h3>
            <p className="text-sm text-sidebar-foreground/80">
              Le Musée des Civilisations Noires célèbre et préserve le patrimoine culturel africain.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/collections" className="hover:text-primary transition">Collections</Link></li>
              <li><Link to="/events" className="hover:text-primary transition">Événements</Link></li>
              <li><Link to="/tickets" className="hover:text-primary transition">Billeterie</Link></li>
              <li><Link to="/virtual-tour" className="hover:text-primary transition">Visite Virtuelle</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary" />
                <span>Route de l'Aéroport, Dakar</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <span>+221 33 XXX XX XX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <span>contact@mcn.sn</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Réseaux Sociaux</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Musée des Civilisations Noires. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
