const examples = [
  {
    title: "Бутик-отель в центре Москвы",
    category: "Гостиница",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
  },
  {
    title: "Дизайнерские апартаменты",
    category: "Жилая недвижимость",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
  },
  {
    title: "Премиальная вилла в Подмосковье",
    category: "Загородная недвижимость",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
  },
  {
    title: "Luxury SPA-комплекс",
    category: "Коммерческая недвижимость",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
  },
];

const Examples = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-serif text-4xl md:text-5xl mb-6">
            Портфолио
            <span className="text-gold"> работ</span>
          </h2>
          <p className="text-premium text-xl max-w-2xl mx-auto">
            Каждый проект — это уникальная история, рассказанная через призму
            технологий
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-secondary">
                <img
                  src={example.image}
                  alt={example.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-lg font-medium mb-2">Посмотреть тур</p>
                    <div className="w-12 h-0.5 bg-gold mx-auto"></div>
                  </div>
                </div>
              </div>
              <div className="pt-6 space-y-2">
                <p className="text-gold text-sm font-medium uppercase tracking-wider">
                  {example.category}
                </p>
                <h3 className="heading-serif text-xl font-medium">
                  {example.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;
