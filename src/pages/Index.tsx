import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'rules', label: 'Правила', icon: 'ScrollText' },
    { id: 'map', label: 'Карта', icon: 'Map' },
    { id: 'wiki', label: 'Вики', icon: 'BookOpen' },
    { id: 'team', label: 'Команда', icon: 'Users' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' },
  ];

  const newsItems = [
    { title: 'Открытие нового сезона', date: '29 октября 2025', category: 'Обновление' },
    { title: 'Новые биомы в мире', date: '25 октября 2025', category: 'Контент' },
    { title: 'Турнир строителей', date: '20 октября 2025', category: 'События' },
  ];

  const teamMembers = [
    { name: 'SkyBuilder', role: 'Основатель', status: 'online' },
    { name: 'RedStone_Pro', role: 'Администратор', status: 'online' },
    { name: 'CreativeKid', role: 'Модератор', status: 'offline' },
    { name: 'MineExpert', role: 'Хелпер', status: 'online' },
  ];

  const features = [
    { icon: 'Pickaxe', title: 'Классическое выживание', desc: 'Настоящий ванильный опыт' },
    { icon: 'Shield', title: 'Защита территории', desc: 'Приватные регионы для игроков' },
    { icon: 'Store', title: 'Экономика', desc: 'Торговля и магазины игроков' },
    { icon: 'Sparkles', title: 'Достижения', desc: 'Уникальная система наград' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Gem" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                SF Worlds
              </h1>
            </div>
            
            <div className="hidden md:flex gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className="gap-2 transition-all hover:scale-105"
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </Button>
              ))}
            </div>

            <Button className="md:hidden" variant="outline" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {activeSection === 'home' && (
          <div className="space-y-16">
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
              
              <div className="container mx-auto px-4 text-center relative z-10">
                <Badge className="mb-6 bg-primary/20 text-primary border-primary animate-scale-in" variant="outline">
                  🎮 Сезон 2025 открыт!
                </Badge>
                <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
                  Добро пожаловать<br />на{' '}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    SF Worlds
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
                  Классическое выживание с дополнениями для лучшего игрового опыта
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                  <Button size="lg" className="gap-2 text-lg px-8 hover:scale-105 transition-all bg-primary hover:bg-primary/90">
                    <Icon name="Play" size={20} />
                    Начать играть
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 text-lg px-8 hover:scale-105 transition-all">
                    <Icon name="Info" size={20} />
                    Узнать больше
                  </Button>
                </div>

                <div className="mt-12 flex flex-wrap gap-8 justify-center text-center">
                  <div className="animate-fade-in">
                    <div className="text-4xl font-bold text-primary">500+</div>
                    <div className="text-muted-foreground">Игроков</div>
                  </div>
                  <div className="animate-fade-in">
                    <div className="text-4xl font-bold text-secondary">24/7</div>
                    <div className="text-muted-foreground">Онлайн</div>
                  </div>
                  <div className="animate-fade-in">
                    <div className="text-4xl font-bold text-accent">99%</div>
                    <div className="text-muted-foreground">Аптайм</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
              </div>
            </section>

            <section className="container mx-auto px-4 py-16">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Особенности сервера
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, idx) => (
                  <Card
                    key={idx}
                    className="p-6 hover:scale-105 transition-all cursor-pointer bg-card/50 backdrop-blur border-border hover:border-primary group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:animate-float">
                      <Icon name={feature.icon as any} size={28} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeSection === 'rules' && (
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Правила сервера</h2>
            <Card className="max-w-3xl mx-auto p-8 space-y-6">
              <div className="space-y-4">
                {[
                  'Уважайте других игроков',
                  'Запрещено использование читов и модов',
                  'Не разрушайте чужие постройки',
                  'Не спамьте в чате',
                  'Следуйте указаниям администрации',
                  'Гриферство караается баном',
                  'Торговля только внутриигровыми предметами',
                ].map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-lg pt-1">{rule}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'map' && (
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Карта мира</h2>
            <Card className="max-w-4xl mx-auto p-4">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={64} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground text-lg">Интерактивная карта загружается...</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'wiki' && (
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Вики сервера</h2>
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="start" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="start">Начало</TabsTrigger>
                  <TabsTrigger value="commands">Команды</TabsTrigger>
                  <TabsTrigger value="economy">Экономика</TabsTrigger>
                  <TabsTrigger value="plugins">Плагины</TabsTrigger>
                </TabsList>
                <TabsContent value="start" className="space-y-4">
                  <Card className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Как начать играть</h3>
                    <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                      <li>Скопируйте IP адрес: <code className="bg-muted px-2 py-1 rounded">play.sfworlds.net</code></li>
                      <li>Откройте Minecraft и выберите "Мультиплеер"</li>
                      <li>Нажмите "Добавить сервер" и вставьте адрес</li>
                      <li>Подключитесь и начните приключение!</li>
                    </ol>
                  </Card>
                </TabsContent>
                <TabsContent value="commands" className="space-y-4">
                  <Card className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Основные команды</h3>
                    <div className="space-y-2 font-mono text-sm">
                      <p><span className="text-primary">/spawn</span> - телепорт на спавн</p>
                      <p><span className="text-primary">/home</span> - телепорт домой</p>
                      <p><span className="text-primary">/tpa [ник]</span> - запрос телепортации</p>
                      <p><span className="text-primary">/bal</span> - проверить баланс</p>
                    </div>
                  </Card>
                </TabsContent>
                <TabsContent value="economy" className="space-y-4">
                  <Card className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Игровая экономика</h3>
                    <p className="text-muted-foreground mb-4">
                      На сервере используется внутриигровая валюта - кристаллы. Зарабатывайте их через добычу ресурсов и торговлю.
                    </p>
                  </Card>
                </TabsContent>
                <TabsContent value="plugins" className="space-y-4">
                  <Card className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Установленные плагины</h3>
                    <div className="grid gap-3">
                      {['GriefPrevention', 'Essentials', 'Vault', 'ChestShop'].map((plugin) => (
                        <Badge key={plugin} variant="outline" className="justify-start py-2">
                          {plugin}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}

        {activeSection === 'team' && (
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Команда сервера</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {teamMembers.map((member, idx) => (
                <Card key={idx} className="p-6 text-center hover:scale-105 transition-all">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={36} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{member.role}</p>
                  <Badge variant={member.status === 'online' ? 'default' : 'secondary'}>
                    {member.status === 'online' ? '🟢 Онлайн' : '⚫ Оффлайн'}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Новости</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {newsItems.map((item, idx) => (
                <Card key={idx} className="p-6 hover:border-primary transition-all cursor-pointer group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Badge className="mb-3" variant="outline">{item.category}</Badge>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.date}</p>
                    </div>
                    <Icon name="ChevronRight" size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'faq' && (
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Частые вопросы</h2>
            <Card className="max-w-3xl mx-auto p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Какая версия Minecraft поддерживается?</AccordionTrigger>
                  <AccordionContent>
                    Сервер поддерживает версии от 1.19 до 1.21. Рекомендуем использовать последнюю стабильную версию.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Можно ли использовать моды?</AccordionTrigger>
                  <AccordionContent>
                    Разрешены только визуальные моды (шейдеры, мини-карты). Моды дающие преимущество запрещены.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Как защитить свою территорию?</AccordionTrigger>
                  <AccordionContent>
                    Используйте золотую лопату и команду /claim. Подробная инструкция в разделе Вики.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Есть ли вайп на сервере?</AccordionTrigger>
                  <AccordionContent>
                    Полный вайп происходит только при обновлении на новую версию игры раз в год. Частичные вайпы не проводятся.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Gem" size={24} className="text-white" />
              </div>
              <div>
                <div className="font-bold">SF Worlds</div>
                <div className="text-sm text-muted-foreground">© 2025 Все права защищены</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
