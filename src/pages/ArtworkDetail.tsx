import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Play, Pause, Volume2, QrCode, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ArtworkDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [liked, setLiked] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<"fr" | "en" | "wo">("fr");

  // Mock data - en production, ceci viendrait d'une API
  const artwork = {
    id: Number(id),
    title: "Masque Dan",
    origin: "Côte d'Ivoire",
    category: "Masques",
    period: "XIXe siècle",
    likes: 234,
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=800&fit=crop",
    video3d: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    descriptions: {
      fr: {
        title: "Masque Dan - Tradition de Côte d'Ivoire",
        text: "Le masque Dan est un chef-d'œuvre de l'art africain traditionnel, originaire de la région frontalière entre la Côte d'Ivoire et le Liberia. Ces masques jouent un rôle central dans les cérémonies rituelles et les performances culturelles de la société Dan. Sculpté dans du bois dur avec une précision remarquable, ce masque présente des traits stylisés caractéristiques : un front bombé, des yeux en amande, un nez aquilin et une bouche finement ciselée. Les Dan croient que ces masques sont habités par des esprits et servent d'intermédiaires entre le monde visible et invisible. Chaque masque a sa propre personnalité et fonction spécifique dans la société - certains sont des juges, d'autres des guerriers ou des danseurs. La patine sombre du bois témoigne de son utilisation régulière lors de cérémonies importantes. Les scarifications tribales reproduites sur le masque représentent l'identité et le statut social. Ce masque particulier date du XIXe siècle et présente une conservation exceptionnelle, permettant d'apprécier le savoir-faire artisanal ancestral des sculpteurs Dan.",
      },
      en: {
        title: "Dan Mask - Tradition from Ivory Coast",
        text: "The Dan mask is a masterpiece of traditional African art, originating from the border region between Ivory Coast and Liberia. These masks play a central role in ritual ceremonies and cultural performances of Dan society. Carved from hardwood with remarkable precision, this mask displays characteristic stylized features: a domed forehead, almond-shaped eyes, an aquiline nose, and a finely chiseled mouth. The Dan people believe these masks are inhabited by spirits and serve as intermediaries between the visible and invisible worlds. Each mask has its own personality and specific function in society - some are judges, others warriors or dancers. The dark patina of the wood testifies to its regular use during important ceremonies. The tribal scarifications reproduced on the mask represent identity and social status. This particular mask dates from the 19th century and shows exceptional preservation, allowing us to appreciate the ancestral craftsmanship of Dan sculptors.",
      },
      wo: {
        title: "Masque Dan - Aada bu Côte d'Ivoire",
        text: "Masque Dan mooy benn chef-d'œuvre bu art africain bu njëkk, jóge ci diiwaan ci biir Côte d'Ivoire ak Liberia. Yii mask dañuy am njëkk bu mag ci seremoni yu ñu def ak performances yu kulture ci société Dan. Mu sculté ci benn garab bu gëna mag ak precision bu wuute mat, mii mask dafay wone ay trait stylisé yu caractéristique: benn front bu bombé, ay bët yi mel ni amande, benn nez aquilin, ak benn gemmiñ bu ñu cisele bu baax. Dan yi dañuy gëm ne yii mask dañu wone ak esprits yi di intermediaire ci biir àdduna buy gis ak buy gis. Benn mask bu nekk am na say personnalité ak fonction bu ànd ci société - yeneen mooy juge, yeneen soldats walla danseur. Patine bu ñuul ci garab bi dafay wone ne dañu ko jëfandikoo bu baax ci seremoni yu mag. Yii scarifications tribales yi reproduit ci mask bi dañuy représenter identité ak statut social. Mii mask bu nekk mooy XIXe siècle te am na conservation bu wuute mat, moo tax ñu mana gis savoir-faire artisanal bu kàddu ci sculpteurs Dan yi.",
      },
    },
  };

  const description = artwork.descriptions[currentLanguage];

  const toggleLike = () => {
    setLiked(!liked);
    toast({
      title: liked ? "Retiré des favoris" : "Ajouté aux favoris",
    });
  };

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
    toast({
      title: isAudioPlaying ? "Audio en pause" : "Lecture audio",
      description: isAudioPlaying ? "" : "La description audio est en cours de lecture",
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/collections">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2" size={20} />
            Retour aux collections
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-auto"
                />
                <button
                  onClick={toggleLike}
                  className="absolute top-4 right-4 bg-background/90 backdrop-blur p-3 rounded-full hover:bg-background transition"
                >
                  <Heart
                    size={24}
                    className={`transition ${
                      liked ? "fill-accent text-accent" : "text-muted-foreground"
                    }`}
                  />
                </button>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded">
                    {artwork.category}
                  </span>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Heart size={18} className="fill-accent text-accent" />
                    <span>{artwork.likes + (liked ? 1 : 0)}</span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-2">{artwork.title}</h1>
                <p className="text-lg text-muted-foreground mb-1">{artwork.origin}</p>
                <p className="text-muted-foreground">{artwork.period}</p>
              </CardContent>
            </Card>

            {/* QR Scanner */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <Button
                  onClick={() => setShowQRScanner(!showQRScanner)}
                  variant="outline"
                  className="w-full"
                >
                  <QrCode className="mr-2" size={20} />
                  Scanner le QR Code
                </Button>
                {showQRScanner && (
                  <div className="mt-4 p-4 bg-muted rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">
                      Scanner activé - Pointez votre caméra vers le QR code sur l'œuvre
                    </p>
                    <div className="mt-4 h-48 bg-background rounded flex items-center justify-center">
                      <QrCode size={64} className="text-muted-foreground" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Content Section */}
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Description</h2>
                  <Button
                    onClick={toggleAudio}
                    variant="outline"
                    size="sm"
                  >
                    {isAudioPlaying ? (
                      <>
                        <Pause className="mr-2" size={16} />
                        Pause
                      </>
                    ) : (
                      <>
                        <Volume2 className="mr-2" size={16} />
                        Écouter
                      </>
                    )}
                  </Button>
                </div>

                <Tabs value={currentLanguage} onValueChange={(v) => setCurrentLanguage(v as any)}>
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="fr">Français</TabsTrigger>
                    <TabsTrigger value="en">English</TabsTrigger>
                    <TabsTrigger value="wo">Wolof</TabsTrigger>
                  </TabsList>

                  <TabsContent value="fr" className="space-y-4">
                    <h3 className="text-xl font-semibold">{description.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{description.text}</p>
                  </TabsContent>

                  <TabsContent value="en" className="space-y-4">
                    <h3 className="text-xl font-semibold">{description.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{description.text}</p>
                  </TabsContent>

                  <TabsContent value="wo" className="space-y-4">
                    <h3 className="text-xl font-semibold">{description.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{description.text}</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* 3D Video */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Vue 3D Immersive</h3>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={artwork.video3d}
                    title="Vidéo 3D de l'œuvre"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
