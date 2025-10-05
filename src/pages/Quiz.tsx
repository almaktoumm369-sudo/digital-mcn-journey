import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Quiz = () => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const questions = [
    {
      question: "De quel pays provient le masque Dan ?",
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=400&fit=crop",
      answers: ["Ghana", "Côte d'Ivoire", "Sénégal", "Nigeria"],
      correctAnswer: 1,
      explanation: "Le masque Dan est originaire de la région frontalière entre la Côte d'Ivoire et le Liberia.",
    },
    {
      question: "Quel est le nom du tissu traditionnel ghanéen ?",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=600&h=400&fit=crop",
      answers: ["Bogolan", "Kente", "Mudcloth", "Ankara"],
      correctAnswer: 1,
      explanation: "Le Kente est un tissu traditionnel du Ghana, tissé à la main avec des motifs colorés symboliques.",
    },
    {
      question: "À quelle période remonte la civilisation de l'Égypte Antique ?",
      image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=600&h=400&fit=crop",
      answers: ["3000 av. J.-C.", "1000 av. J.-C.", "500 apr. J.-C.", "1500 apr. J.-C."],
      correctAnswer: 0,
      explanation: "La civilisation égyptienne antique a commencé vers 3000 av. J.-C. et a duré plus de 3000 ans.",
    },
    {
      question: "Quel instrument de musique est le djembé ?",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=400&fit=crop",
      answers: ["Une flûte", "Un tambour", "Une harpe", "Une guitare"],
      correctAnswer: 1,
      explanation: "Le djembé est un tambour traditionnel d'Afrique de l'Ouest, joué avec les mains.",
    },
    {
      question: "Quelle est la fonction principale des masques africains traditionnels ?",
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=400&fit=crop",
      answers: ["Décoration", "Rituels et cérémonies", "Commerce", "Protection du soleil"],
      correctAnswer: 1,
      explanation: "Les masques africains jouent un rôle central dans les rituels, cérémonies et performances culturelles.",
    },
  ];

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    if (answered) return;

    setSelectedAnswer(answerIndex);
    setAnswered(true);

    if (answerIndex === currentQ.correctAnswer) {
      setScore(score + 1);
      toast({
        title: "Bravo ! 🎉",
        description: "Bonne réponse !",
      });
    } else {
      toast({
        title: "Dommage",
        description: "Ce n'est pas la bonne réponse",
        variant: "destructive",
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Parfait ! Vous êtes un expert ! 🏆";
    if (percentage >= 80) return "Excellent ! Très bonne culture ! 🌟";
    if (percentage >= 60) return "Bien joué ! Continuez d'apprendre ! 👍";
    if (percentage >= 40) return "Pas mal ! Il y a encore à découvrir ! 📚";
    return "Venez visiter le musée pour en apprendre plus ! 🎨";
  };

  if (showResults) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4">
                <Trophy size={80} className="text-primary" />
              </div>
              <CardTitle className="text-4xl mb-4">Quiz Terminé !</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-6xl font-bold text-primary">
                {score} / {questions.length}
              </div>
              <p className="text-2xl">{getScoreMessage()}</p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" onClick={restartQuiz}>
                  Recommencer
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = "/collections"}>
                  Découvrir les œuvres
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Quiz Culturel</h1>
          <p className="text-xl text-muted-foreground">
            Testez vos connaissances sur les civilisations africaines
          </p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} sur {questions.length}
            </span>
            <span className="text-sm font-semibold text-primary">
              Score: {score}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="mb-6 rounded-lg overflow-hidden">
              <img
                src={currentQ.image}
                alt="Question"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mb-6">{currentQ.question}</h2>

            <div className="space-y-3 mb-6">
              {currentQ.answers.map((answer, index) => {
                let buttonClass = "";
                if (answered) {
                  if (index === currentQ.correctAnswer) {
                    buttonClass = "border-green-500 bg-green-500/10 text-green-700";
                  } else if (index === selectedAnswer) {
                    buttonClass = "border-red-500 bg-red-500/10 text-red-700";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={answered}
                    className={`w-full p-4 text-left border-2 rounded-lg transition hover:border-primary ${
                      answered ? "cursor-not-allowed" : "hover:bg-muted"
                    } ${buttonClass}`}
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center mr-3 font-semibold">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="font-medium">{answer}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className="p-4 bg-muted rounded-lg mb-6">
                <div className="flex items-start space-x-2">
                  <Star className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Le saviez-vous ?</p>
                    <p className="text-sm text-muted-foreground">{currentQ.explanation}</p>
                  </div>
                </div>
              </div>
            )}

            {answered && (
              <Button onClick={nextQuestion} className="w-full" size="lg">
                {currentQuestion < questions.length - 1 ? (
                  <>
                    Question suivante <ArrowRight className="ml-2" />
                  </>
                ) : (
                  "Voir les résultats"
                )}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
