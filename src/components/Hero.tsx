import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="heading-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
            Ваш интерьер достоин
            <br />
            <span className="text-gold">идеальной подачи</span>
          </h1>
          <p className="text-xl md:text-2xl text-premium max-w-3xl mx-auto">
            Премиальные 3D-туры Matterport для объектов, где важна атмосфера и
            статус
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="btn-gold text-lg px-8 py-4">
            Заказать тур
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          <Button
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-black text-lg px-8 py-4"
          >
            Посмотреть примеры
          </Button>
        </div>

        <div className="pt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Роман Петров • Персональный подход к каждому проекту
          </p>
          <div className="flex justify-center">
            <Icon
              name="ChevronDown"
              className="text-gold animate-bounce"
              size={32}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
