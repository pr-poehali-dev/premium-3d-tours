import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Eye",
    title: "Photorealistic качество",
    description:
      "Детализация до 4K, которая передает каждую текстуру и игру света в интерьере",
  },
  {
    icon: "Zap",
    title: "Быстрая загрузка",
    description:
      "Оптимизированные туры загружаются мгновенно на любых устройствах",
  },
  {
    icon: "Users",
    title: "Персональный подход",
    description:
      "Индивидуальная работа с каждым клиентом от концепции до реализации",
  },
  {
    icon: "Award",
    title: "Премиальное качество",
    description:
      "Работаю только с объектами luxury-сегмента, понимаю специфику рынка",
  },
];

const Benefits = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-serif text-4xl md:text-5xl mb-6">
            Почему выбирают
            <span className="text-gold"> меня</span>
          </h2>
          <p className="text-premium text-xl max-w-2xl mx-auto">
            Специализируюсь на создании виртуальных туров для объектов
            премиум-класса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center space-y-4 p-6 rounded-lg hover:bg-background transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors duration-300">
                <Icon
                  name={benefit.icon as any}
                  className="text-gold"
                  size={32}
                />
              </div>
              <h3 className="heading-serif text-xl font-medium">
                {benefit.title}
              </h3>
              <p className="text-premium text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
