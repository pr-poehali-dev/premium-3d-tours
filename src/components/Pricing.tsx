import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Базовый",
    price: "от 25 000",
    description: "Для небольших объектов до 100 кв.м",
    features: [
      "3D-модель объекта",
      "Виртуальный тур",
      "Планы этажей",
      "Базовые метки",
      "Техническая поддержка 1 месяц",
    ],
    popular: false,
  },
  {
    name: "Премиум",
    price: "от 45 000",
    description: "Для объектов средней площади до 300 кв.м",
    features: [
      "Все из базового пакета",
      "4K качество",
      "Интерактивные метки",
      "Брендинг",
      "Интеграция с сайтом",
      "Техническая поддержка 3 месяца",
    ],
    popular: true,
  },
  {
    name: "Luxury",
    price: "от 75 000",
    description: "Для больших объектов и особых требований",
    features: [
      "Все из премиум пакета",
      "Неограниченная площадь",
      "Индивидуальный дизайн",
      "Дополнительные интеграции",
      "Приоритетная поддержка",
      "Обучение команды",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-serif text-4xl md:text-5xl mb-6">
            Прозрачное
            <span className="text-gold"> ценообразование</span>
          </h2>
          <p className="text-premium text-xl max-w-2xl mx-auto">
            Фиксированная стоимость без скрытых платежей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-lg p-8 ${plan.popular ? "ring-2 ring-gold scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold text-black px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}

              <div className="text-center space-y-4 mb-8">
                <h3 className="heading-serif text-2xl font-medium">
                  {plan.name}
                </h3>
                <div className="space-y-2">
                  <div className="text-4xl font-light">
                    {plan.price}
                    <span className="text-lg text-muted-foreground"> ₽</span>
                  </div>
                  <p className="text-premium text-sm">{plan.description}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Icon
                      name="Check"
                      className="text-gold flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm text-premium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${plan.popular ? "btn-gold" : "border-gold text-gold hover:bg-gold hover:text-black"}`}
                variant={plan.popular ? "default" : "outline"}
              >
                Выбрать пакет
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-premium mb-4">
            Нужно что-то особенное? Обсудим индивидуальное решение
          </p>
          <Button
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-black"
          >
            Индивидуальный расчет
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
