import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  Clock,
  Coffee
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "laminekama038@gmail.com",
      href: "mailto:laminekama038@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Téléphone",
      value: "+221 77 xxx xx xx",
      href: "tel:+22177xxxxxxx"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Localisation",
      value: "Dakar, Sénégal",
      href: "https://maps.google.com/?q=Dakar,Senegal"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      href: "https://github.com/naruto-xps",
      color: "hover:text-foreground"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/lamine-kama",
      color: "hover:text-blue-600"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: "Email",
      href: "mailto:laminekama038@gmail.com",
      color: "hover:text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Me <span className="bg-gradient-primary bg-clip-text text-transparent">contacter</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une idée de projet ? Une question ? N'hésitez pas à me contacter, 
              je serais ravi d'échanger avec vous !
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 animate-slide-in">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Restons en contact
              </h3>
              
              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground mr-4 group-hover:shadow-glow transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability */}
              <Card className="border-0 shadow-elegant mb-8">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-primary mr-2" />
                    <h4 className="font-semibold text-foreground">Disponibilité</h4>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    Généralement disponible pour répondre sous 24h
                  </p>
                  <div className="flex items-center text-accent">
                    <Coffee className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Ouvert aux nouvelles opportunités</span>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Suivez-moi</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="portfolio"
                      size="icon"
                      asChild
                      className={`group ${social.color}`}
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <Card className="border-0 shadow-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">
                    Envoyez-moi un message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-foreground">
                          Nom complet *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-2 border-border focus:border-primary transition-colors"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-2 border-border focus:border-primary transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-foreground">
                        Sujet *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-border focus:border-primary transition-colors"
                        placeholder="Sujet de votre message"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-2 border-border focus:border-primary transition-colors resize-none"
                        placeholder="Décrivez votre projet ou votre demande..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-muted-foreground text-sm mt-4 text-center">
                    En envoyant ce message, vous acceptez d'être contacté concernant votre demande.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;