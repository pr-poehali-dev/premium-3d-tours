import Icon from "@/components/ui/icon";

const cases = [
  {
    client: "Four Seasons Moscow",
    project: "Виртуальный тур по президентскому номеру",
    result: "+40% бронирований премиум-номеров",
    metric: "40%",
    description:
      "Создание интерактивного тура позволило гостям заранее оценить уровень сервиса",
  },
  {
    client: "Capital Group",
    project: "3D-презентация элитного ЖК",
    result: "+25% продаж на этапе котлована",
    metric: "25%",
    description:
      "Виртуальные туры по типовым квартирам значительно ускорили процесс продаж",
  },
  {
    client: "Частный заказчик",
    project: "Виртуальный тур загородного дома",
    result: "Продажа за 2 недели вместо 6 месяцев",
    metric: "2 нед.",
    description:
      "Международные покупатели смогли принять решение, не приезжая на просмотр",
  },
];

const Cases = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-serif text-4xl md:text-5xl mb-6">
            Результаты
            <span className="text-gold"> клиентов</span>
          </h2>
          <p className="text-premium text-xl max-w-2xl mx-auto">
            Измеримые результаты, которые говорят за качество работы
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 md:p-12 shadow-sm"
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="heading-serif text-2xl font-medium">
                    {caseItem.client}
                  </h3>
                  <p className="text-premium">{caseItem.project}</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-light text-gold mb-2">
                    {caseItem.metric}
                  </div>
                  <p className="text-sm text-muted-foreground">РОСТ</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gold">
                    <Icon name="TrendingUp" size={20} />
                    <span className="font-medium">{caseItem.result}</span>
                  </div>
                  <p className="text-premium text-sm">{caseItem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
