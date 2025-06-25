import Icon from "@/components/ui/icon";

const steps = [
  {
    number: "01",
    title: "Консультация",
    description:
      "Обсуждаем ваши цели, изучаем объект, определяем техническое задание",
    icon: "MessageCircle",
  },
  {
    number: "02",
    title: "Съемка",
    description:
      "Профессиональная съемка на оборудовании Matterport Pro3 в удобное время",
    icon: "Camera",
  },
  {
    number: "03",
    title: "Обработка",
    description:
      "Создание 3D-модели, оптимизация, добавление интерактивных элементов",
    icon: "Settings",
  },
  {
    number: "04",
    title: "Результат",
    description:
      "Готовый виртуальный тур с возможностью интеграции на ваш сайт",
    icon: "CheckCircle",
  },
];

const Process = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-serif text-4xl md:text-5xl mb-6">
            Как мы
            <span className="text-gold"> работаем</span>
          </h2>
          <p className="text-premium text-xl max-w-2xl mx-auto">
            Простой и понятный процесс от идеи до готового результата
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="heading-serif text-6xl font-light text-gold/20 mb-4">
                    {step.number}
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                      <Icon
                        name={step.icon as any}
                        className="text-gold"
                        size={24}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="heading-serif text-xl font-medium">
                    {step.title}
                  </h3>
                  <p className="text-premium text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-4 w-8 h-0.5 bg-gold/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
