import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет логика отправки формы
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-4xl md:text-5xl mb-6">
              Обсудим ваш
              <span className="text-gold"> проект</span>
            </h2>
            <p className="text-premium text-xl max-w-2xl mx-auto">
              Расскажите о своем объекте, и я подготовлю персональное
              предложение
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="heading-serif text-2xl mb-6">
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <Icon name="Phone" className="text-gold" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-premium">+7 (495) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <Icon name="Mail" className="text-gold" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-premium">roman@3dtours.ru</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" className="text-gold" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Локация</p>
                      <p className="text-premium">
                        Москва и Московская область
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="heading-serif text-lg mb-4">Социальные сети</h4>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gold/20 transition-colors">
                    <Icon name="Instagram" className="text-gold" size={18} />
                  </div>
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gold/20 transition-colors">
                    <Icon name="Linkedin" className="text-gold" size={18} />
                  </div>
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gold/20 transition-colors">
                    <Icon name="Youtube" className="text-gold" size={18} />
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Имя *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-muted-foreground/20 focus:border-gold"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-muted-foreground/20 focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-muted-foreground/20 focus:border-gold"
                  />
                </div>
                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium mb-2"
                  >
                    Тип объекта
                  </label>
                  <Input
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    placeholder="Отель, квартира, дом..."
                    className="border-muted-foreground/20 focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Расскажите о проекте
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Опишите ваш объект, цели проекта и пожелания..."
                  className="border-muted-foreground/20 focus:border-gold resize-none"
                />
              </div>

              <Button type="submit" className="btn-gold w-full">
                Отправить заявку
                <Icon name="Send" className="ml-2" size={16} />
              </Button>

              <p className="text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
