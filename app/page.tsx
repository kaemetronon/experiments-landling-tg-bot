"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, CheckCircle, Zap, Shield, Target, TrendingUp, Users, Star } from "lucide-react"

export default function TelegramBotLanding() {
  const [showEmailForm, setShowEmailForm] = useState(false)

  const handleSignUp = () => {
    setShowEmailForm(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background py-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              <span className="text-balance">Упускаете </span>
              <span className="text-accent">выгодные сделки</span>
              <span className="text-balance"> пока спите?</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              Наш Telegram-бот отслеживает <strong className="text-foreground">десятки каналов 24/7</strong>{" "}
              и уведомляет вас о новых постах за <strong className="text-accent">секунды</strong>.
            </p>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Дешевые авиабилеты разбирают за 15 минут. Лимитированные кроссовки — за 5. Лучшие квартиры сдают в день
              публикации. <strong className="text-foreground">Будьте первым.</strong>
            </p>

            {/* CTA moved to pricing section */}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Знакомые проблемы?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="text-4xl mb-4">😴</div>
              <h3 className="text-xl font-semibold mb-3">Проспали сделку века</h3>
              <p className="text-muted-foreground">
                Билеты в Тайланд за 15,000₽ разобрали пока вы спали. Узнали об этом только утром из комментариев.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Устали мониторить</h3>
              <p className="text-muted-foreground">
                Подписаны на 20+ каналов, но физически не успеваете читать все. Важное теряется в потоке сообщений.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold mb-3">Опоздали на минуту</h3>
              <p className="text-muted-foreground">
                Увидели пост через час после публикации. Квартира уже сдана, кроссовки распроданы, места на рейс
                закончились.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ваш личный <span className="text-accent">охотник за сделками</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Пока другие спят или заняты работой, наш бот уже нашел для вас лучшие предложения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/20">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Мгновенно</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Уведомление приходит через <strong className="text-foreground">3-5 секунд</strong> после публикации.
                  Вы всегда первый в очереди.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/20">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Точно в цель</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Настройте фильтры по ключевым словам, ценам, районам. Получайте только{" "}
                  <strong className="text-foreground">релевантные</strong> предложения.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/20">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">24/7 мониторинг</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Бот отслеживает{" "}
                  <strong className="text-foreground">до 50 каналов</strong>
                  одновременно, круглосуточно.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/20">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Безопасно</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Никакой работы с третьими сторонами. Бот использует официальные механизмы и API Telegram.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Как это работает</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Настройка — 2 минуты. Дальше все делает бот.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center mx-auto text-3xl font-bold shadow-lg">
                  1
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent/20 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold">Отправьте боту ссылки и ключевые слова</h3>
              <p className="text-muted-foreground leading-relaxed">
                Перешлите нашему боту каналы/группы и укажите ключевые слова. Больше ничего не требуется.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center mx-auto text-3xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold">Мы мониторим и фильтруем за вас</h3>
              <p className="text-muted-foreground leading-relaxed">
                Бот отслеживает новые посты. Совпадения фиксируем за секунды.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center mx-auto text-3xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold">Мгновенные уведомления в Telegram</h3>
              <p className="text-muted-foreground leading-relaxed">
                Подходящие посты приходят в личку от нашего бота. Быстро, точно, без лишнего шума.
              </p>
            </div>
          </div>
          <div className="mt-12 p-6 rounded-xl border border-border bg-accent/5 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-accent" />
              <h4 className="text-lg font-semibold">Нужно из приватных групп?</h4>
              <span className="ml-auto text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground">Вход по QR</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Войдите по QR — юзербот будет работать под вашим аккаунтом и увидит закрытые группы. Настройка по‑прежнему через нашего бота.
            </p>
            <p className="text-xs text-muted-foreground">Мы не храним ваш пароль и используем официальный механизм входа.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Всегда в курсе, без лишнего шума</h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
          Только важные посты — в момент публикации
          </p>

          <Card className="p-12 border-2 border-accent shadow-2xl relative">
            <CardContent className="space-y-8">
              <div className="flex justify-center">
                <div className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-bold">
                  🔥 ПОПУЛЯРНЫЙ ТАРИФ
                </div>
              </div>
              <div>
                <div className="text-6xl font-bold text-accent mb-2">299 ₽</div>
                <div className="text-2xl text-muted-foreground">в месяц</div>
              </div>

              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span>Мониторинг до 50 каналов</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span>Неограниченные уведомления</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span>Персональные фильтры</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span>Техподдержка 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span>Отмена в любой момент</span>
                </div>
              </div>

              {!showEmailForm && (
                <Button
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-xl py-6 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleSignUp}
                >
                  <TrendingUp className="w-6 h-6 mr-2" />
                  Получить доступ за 299 ₽
                </Button>
              )}

              {showEmailForm && (
                <Card className="max-w-lg mx-auto mt-8 border-2 border-accent/20 shadow-xl">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Ранний доступ</h3>
                      <p className="text-muted-foreground">
                        Сервис скоро запускается. Первая неделя — бесплатно. Напишите нашему боту в Telegram, чтобы
                        попасть в waitlist и получить приглашение первым.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <a
                        href="https://t.me/your_bot_here"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-accent-foreground font-semibold shadow hover:bg-accent/90"
                      >
                        <Zap className="w-5 h-5" /> Написать боту в Telegram
                      </a>
                      <p className="text-xs text-muted-foreground">Никакого спама. Заблокировать бота можно в любой момент🐳</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background text-foreground py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4">TelegramBot Monitor</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Сервис мониторинга Telegram-каналов для тех, кто ценит свое время и не хочет упускать
                выгодные возможности.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Безопасно</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Надежно</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4" />
                  <span>Быстро</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>Telegram: @support_bot</p>
                <p>Email: help@tbmonitor.ru</p>
                <p>Время ответа: до 2 часов</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-foreground/60 mb-2">© 2025 TelegramBot Monitor. Все права защищены.</p>
            <p className="text-xs text-foreground/50">
              Не аффилировано с Telegram. Используем официальный API.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
