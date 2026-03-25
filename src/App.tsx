/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, ArrowRight, MapPin, Users, Clock } from 'lucide-react';

import { Gallery } from './components/Gallery';

const WHATSAPP_LINK = "https://chat.whatsapp.com/HeNc3WlSpQlKqXwRpw6crB";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-highlight/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/gallery-1.jpeg" 
            alt="Ungarische Puszta Sonnenuntergang" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3a2a22]/30 via-[#2A201A]/40 to-[#1A1512]/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-serif text-white mb-6 tracking-widest font-light drop-shadow-sm"
          >
            ANKOMMEN
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-3xl text-white/90 font-serif italic mb-8 font-light tracking-wide drop-shadow-sm"
          >
            Im Körper. In der Natur. Bei dir.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-12 drop-shadow-sm"
          >
            5 Tage, um aus dem Funktionieren auszusteigen und wieder zu spüren, was für dich wirklich stimmig ist.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-brand-text transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Platz anfragen
              <ArrowRight size={16} className="opacity-70" />
            </a>
          </motion.div>
        </div>

        {/* Key Facts Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-4 px-6 md:px-12 flex flex-wrap justify-center md:justify-between items-center gap-4 text-white text-xs md:text-sm tracking-[0.15em] uppercase"
        >
          <span className="flex items-center gap-2"><MapPin size={16} /> Ungarische Puszta</span>
          <div className="hidden md:block w-px h-4 bg-white/30"></div>
          <span className="flex items-center gap-2"><Clock size={16} /> 5 Tage</span>
          <div className="hidden md:block w-px h-4 bg-white/30"></div>
          <span className="flex items-center gap-2"><Users size={16} /> max. 6 Teilnehmer:innen</span>
        </motion.div>
      </section>

      {/* 2. EINSTIEG – EMOTIONALE ABHOLUNG */}
      <section className="py-24 md:py-32 px-6 bg-brand-alt">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif italic text-brand-text mb-10 leading-tight">
              Vielleicht ist nichts falsch.<br/>
              Und trotzdem fühlt es sich nicht ganz richtig an.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-6 text-lg md:text-xl font-light text-brand-text/80 leading-relaxed">
              <p>Du funktionierst.<br/>Du triffst Entscheidungen.<br/>Du gehst deinen Weg.</p>
              <p>Und gleichzeitig ist da dieses Gefühl,<br/>dass etwas leiser geworden ist.</p>
              <p>Der Kontakt zum eigenen Körper.<br/>Zur eigenen Klarheit.<br/>Zu dem, was sich wirklich stimmig anfühlt.</p>
              <p className="font-medium text-brand-text pt-4">ANKOMMEN ist eine Einladung, genau dort wieder anzusetzen.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Important Note Box */}
      <section className="pb-24 px-6 bg-brand-alt">
        <FadeIn>
          <div className="max-w-3xl mx-auto bg-brand-highlight p-8 md:p-10 rounded-2xl text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-text/10 rounded-full mb-6 text-brand-text">
              <Info size={24} />
            </div>
            <p className="text-xl md:text-2xl font-serif italic text-brand-text leading-relaxed">
              Du brauchst keine Reit- oder Pferdeerfahrung. Du arbeitest mit den Pferden am Boden und immer in Begleitung der Coaches.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 3. WAS DICH ERWARTET & 4. TRANSFORMATION */}
      <section className="py-24 px-6 bg-brand-bg">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <img 
              src="/gallery-2.jpeg" 
              alt="Ein Raum, in dem du nichts erreichen musst" 
              className="w-full h-[600px] object-cover rounded-2xl shadow-sm"
              referrerPolicy="no-referrer"
            />
          </FadeIn>
          
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-6">Ein Raum, in dem du nichts erreichen musst.</h2>
              <p className="text-lg font-light text-brand-text/80 mb-8 leading-relaxed">
                In der Weite der ungarischen Puszta entsteht ein geschützter Rahmen, in dem dein Nervensystem zur Ruhe kommen darf und Orientierung wieder von innen entsteht.
              </p>
              <ul className="space-y-3 text-lg font-light text-brand-text/80 mb-12">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span> Ohne Druck.</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span> Ohne Zielvorgaben.</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span> Ohne Selbstoptimierung.</li>
              </ul>
              <p className="text-lg font-medium text-brand-text mb-4">Sondern durch:</p>
              <div className="flex flex-wrap gap-3 mb-16">
                {['Körperwahrnehmung', 'Atemarbeit', 'Natur', 'Begegnung mit Pferden'].map((item, i) => (
                  <span key={i} className="px-4 py-2 border border-brand-text/20 rounded-full text-sm tracking-wide">
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-serif text-brand-text mb-6">Was sich verändern kann</h3>
              <p className="text-brand-text/80 font-light mb-6">Viele Teilnehmer:innen beschreiben nach solchen Tagen:</p>
              <ul className="space-y-4 mb-8">
                {[
                  'mehr Ruhe im Körper',
                  'klarere Gedanken',
                  'ein Gefühl von „wieder bei sich sein“',
                  'stimmigere Entscheidungen'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-text/90">
                    <Check className="text-brand-accent shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-serif italic text-brand-text/90">
                Nicht, weil etwas „gemacht“ wurde, sondern weil wieder Raum entstanden ist.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. METHODEN & 6. ÜBER UNS */}
      <section className="py-24 px-6 bg-brand-alt">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">Wer dich begleitet</h2>
            <p className="text-xl font-light text-brand-text/80 max-w-3xl mx-auto">
              ANKOMMEN wird von uns gemeinsam gehalten – mit unterschiedlichen Hintergründen und einer gemeinsamen Haltung: Räume zu öffnen, in denen Menschen wieder bei sich ankommen können.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <FadeIn>
              <div className="flex flex-col items-center text-center">
                <img 
                  src="/gallery-13.jpeg" 
                  alt="Noemi" 
                  className="w-64 h-64 rounded-full object-cover object-top mb-8 border-4 border-brand-bg shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-3xl font-serif text-brand-text mb-4">Noemi</h3>
                <p className="text-brand-text/80 font-light leading-relaxed">
                  Lebt auf dem Hof in der ungarischen Puszta und arbeitet mit Atem, Körper und Nervensystem. Als Block Therapy Instructorin und Breathwork-Facilitatorin (Soma Breathwork) schafft sie Räume, in denen Regulation und Tiefe möglich werden.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <img 
                  src="/lisa.jpeg" 
                  alt="Lisa" 
                  className="w-64 h-64 rounded-full object-cover object-top mb-8 border-4 border-brand-bg shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-3xl font-serif text-brand-text mb-4">Lisa</h3>
                <p className="text-brand-text/80 font-light leading-relaxed">
                  Begleitet Menschen über ihre Wahrnehmung und über innere Ausrichtung. Als Osteopathin und Bewegungstrainerin für Pferde, Mindset Coachin sowie Coachin für pferdegestütztes Leadership verbindet sie körperliche Arbeit mit innerer Klarheit.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="bg-white/50 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif text-brand-text mb-6">Wie wir arbeiten</h3>
            <p className="text-lg font-light text-brand-text/80 mb-8">
              Unsere Arbeit ist somatisch, erfahrungsbasiert und traumasensibel. Wir verbinden:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Block Therapy', 'Atemarbeit (Soma Breathwork)', 'Mindsetarbeit', 'pferdegestützte Prozessbegleitung'].map((method, i) => (
                <span key={i} className="bg-brand-bg px-6 py-3 rounded-full text-brand-text font-medium text-sm">
                  {method}
                </span>
              ))}
            </div>
            <p className="text-xl font-serif italic text-brand-text">
              Was uns verbindet, ist nicht eine Methode – sondern die Überzeugung, dass echte Veränderung dort entsteht, wo der Körper und der Verstand mitgenommen werden.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 7. DIE PFERDE */}
      <section className="py-24 px-6 bg-brand-bg">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">Pferde als Resonanzraum,<br/>unsere Co-Coaches</h2>
            <p className="text-xl font-light text-brand-text/80 max-w-3xl mx-auto">
              Die Pferde sind ein wesentlicher Teil dieses Retreats. Sie begegnen dir ohne Bewertung – und reagieren unmittelbar auf das, was wirklich da ist.
            </p>
          </FadeIn>

          <div className="space-y-24">
            {/* Himalaya */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <img 
                  src="/himalaya.jpeg" 
                  alt="Himalaya" 
                  className="w-full max-w-md mx-auto h-[600px] object-cover object-center rounded-2xl shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </FadeIn>
              <FadeIn delay={0.2} className="space-y-6">
                <h3 className="text-4xl font-serif text-brand-text">Himalaya</h3>
                <div className="space-y-4 text-lg font-light text-brand-text/80 leading-relaxed">
                  <p>Himalaya trägt eine sichtbare Geschichte. Als junges Pferd hatte sie einen schweren Unfall. Eine Narbe an ihrem linken Schulterblatt ist geblieben, und auch ihr linkes Vorderbein ist bis heute eingeschränkt.</p>
                  <p>Und gleichzeitig hält sie nichts zurück. Sie hat einen starken Willen, eine klare Präsenz und den Wunsch, in Verbindung zu gehen.</p>
                  <p>Himalaya braucht eine klare, innere Führung. Wenn du nicht bei dir bist, wird sie dir nicht folgen. Wenn du klar bist, ist sie sofort da.</p>
                  <p className="font-medium text-brand-text italic">Sie spiegelt sehr ehrlich, wie stimmig du in dir selbst bist.</p>
                </div>
              </FadeIn>
            </div>

            {/* Demi */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn className="md:order-2">
                <img 
                  src="/demi.jpeg" 
                  alt="Demi" 
                  className="w-full max-w-md mx-auto h-[600px] object-cover object-center rounded-2xl shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </FadeIn>
              <FadeIn delay={0.2} className="md:order-1 space-y-6">
                <h3 className="text-4xl font-serif text-brand-text">Demi</h3>
                <p className="text-xl font-serif italic text-brand-text/80">Die Leitstute.</p>
                <div className="space-y-4 text-lg font-light text-brand-text/80 leading-relaxed">
                  <p>Ihre Präsenz ist ruhig, sanft und eher zurückhaltend – und gleichzeitig klar. Sie drängt sich nicht in den Vordergrund, aber sie ist da.</p>
                  <p>In der Begegnung mit ihr entsteht oft ein Gefühl von Ruhe und Vertrauen. Gleichzeitig zeigt sie deutlich ihre Grenzen, wenn etwas für sie nicht passt.</p>
                  <p className="font-medium text-brand-text italic">Demi lädt dazu ein, feiner zu werden in der Wahrnehmung und respektvoll in der eigenen Präsenz.</p>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn className="mt-24 max-w-3xl mx-auto text-center bg-brand-bg p-10 rounded-2xl">
            <p className="text-lg font-light text-brand-text/80 mb-6">
              Beide Pferde bringen ihre ganz eigene Qualität mit. Sie führen nicht – und sie folgen auch nicht einfach. In der Begegnung mit ihnen wird spürbar:
            </p>
            <ul className="inline-block text-left space-y-2 mb-8 text-lg font-medium text-brand-text">
              <li>• wo du klar bist</li>
              <li>• wo du dich zurücknimmst</li>
              <li>• wo du bei dir bist</li>
            </ul>
            <p className="text-brand-text/70 italic">
              Die Arbeit findet achtsam und vom Boden aus statt. Reiterfahrung ist nicht notwendig, du solltest allerdings keine Angst vor Pferden haben.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 8. ABLAUF & 9. FÜR WEN & 10. ORT */}
      <section className="py-24 px-6 bg-brand-alt">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          
          {/* Ablauf */}
          <FadeIn className="bg-white/40 p-10 rounded-3xl">
            <h3 className="text-2xl font-serif text-brand-text mb-8">So sind die Tage aufgebaut</h3>
            <p className="text-sm text-brand-text/60 mb-8 uppercase tracking-widest">Änderungen vorbehalten</p>
            <div className="space-y-6">
              {[
                { time: 'Morgen', desc: 'Zeit für dich, Frühstück in der Unterkunft' },
                { time: 'Vormittag', desc: 'Atemarbeit, Körperarbeit, Präsenz' },
                { time: 'Mittag', desc: 'Gemeinsames Essen am Hof' },
                { time: 'Nachmittag', desc: 'Pferdearbeit & Integration' },
                { time: 'Abend', desc: 'Rückzug & eigener Rhythmus' }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-brand-accent pl-4">
                  <p className="font-medium text-brand-text">{item.time}</p>
                  <p className="text-brand-text/70 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Für wen */}
          <FadeIn delay={0.2} className="bg-white/40 p-10 rounded-3xl">
            <h3 className="text-2xl font-serif text-brand-text mb-8">Dieses Retreat ist für dich, wenn …</h3>
            <ul className="space-y-4 mb-12">
              {[
                'du wieder mehr spüren möchtest',
                'du dich in einer Übergangsphase befindest',
                'du bereit bist, langsamer zu werden'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-text/80 font-light">
                  <Check className="text-brand-accent shrink-0 mt-1" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-medium text-brand-text mb-4">Nicht passend, wenn du:</h4>
            <ul className="space-y-4">
              {[
                'schnelle Lösungen suchst',
                'unter akutem psychischem Stress stehst'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-text/60 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-text/30 mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Ort */}
          <FadeIn delay={0.4} className="bg-white/40 p-10 rounded-3xl flex flex-col">
            <h3 className="text-2xl font-serif text-brand-text mb-6">Ein Ort, der trägt</h3>
            <p className="text-brand-text/80 font-light mb-8">
              Das Retreat findet auf einem abgeschiedenen Hof in der ungarischen Puszta statt.
            </p>
            <ul className="space-y-4 mb-8 flex-grow">
              {[
                'kleine Gruppe (4–6 Personen)',
                'ruhige, naturnahe Unterkunft',
                'gemeinsame Zeit am Hof',
                'viel Raum für Rückzug'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-text/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <img 
              src="/gallery-5.jpeg" 
              alt="Puszta Landschaft" 
              className="w-full h-48 object-cover rounded-xl mt-auto"
              referrerPolicy="no-referrer"
            />
          </FadeIn>

        </div>
      </section>

      {/* IMPRESSIONEN GALLERY */}
      <Gallery />

      {/* 11. PREIS */}
      <section className="py-24 px-6 bg-brand-bg">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="bg-brand-alt p-10 md:p-16 rounded-[2.5rem] shadow-sm text-center">
            <h2 className="text-4xl font-serif text-brand-text mb-12">Deine Investition</h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-16">
              <div className="bg-white/50 p-8 rounded-2xl flex-1">
                <p className="text-sm uppercase tracking-widest text-brand-accent mb-4">Early Bird</p>
                <p className="text-5xl font-serif text-brand-text mb-2">1.200 €</p>
                <p className="text-brand-text/60 text-sm">bei Anmeldung bis 30.06.</p>
              </div>
              <div className="bg-white/30 p-8 rounded-2xl flex-1">
                <p className="text-sm uppercase tracking-widest text-brand-text/40 mb-4">Regulär</p>
                <p className="text-4xl font-serif text-brand-text/70 mb-2">1.500 €</p>
                <p className="text-brand-text/60 text-sm">ab 01.07.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div>
                <h4 className="text-lg font-medium text-brand-text mb-6">Im Retreat enthalten:</h4>
                <ul className="space-y-3">
                  {[
                    'alle Sessions',
                    'Begleitung durch uns beide',
                    'tägliches Mittagessen auf dem Hof',
                    'Unterkunft inkl. Frühstück & Abendessen',
                    'Transfer zwischen Unterkunft und Retreatort'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-text/80 font-light">
                      <Check className="text-brand-accent shrink-0 mt-1" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-brand-text mb-6">Nicht enthalten:</h4>
                <ul className="space-y-3 mb-8">
                  {[
                    'Anreise / Flug',
                    'Transfer zwischen Flughafen und Unterkunft'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-text/60 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-text/30 mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-brand-highlight/20 p-4 rounded-xl">
                  <p className="text-sm text-brand-text/80 italic text-center">
                    Das Retreat findet ab 4 Teilnehmer:innen statt.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 12. CTA – HAUPTABSCHNITT */}
      <section className="py-32 px-6 bg-brand-text text-brand-bg text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 font-light">Spürst du, dass es Zeit ist?</h2>
            <p className="text-xl font-light text-brand-bg/80 mb-12 leading-relaxed">
              Dann melde dich gern für ein unverbindliches Vorgespräch.<br/>
              Wir schauen gemeinsam, ob ANKOMMEN gerade zu dir passt.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-transparent border border-brand-bg/30 text-brand-bg px-12 py-5 rounded-full text-sm tracking-[0.2em] uppercase hover:bg-brand-bg hover:text-brand-text transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,245,240,0.15)]"
            >
              Kontaktiere uns
              <ArrowRight size={16} className="opacity-70" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* 13. STORNO & 14. ABSCHLUSS (Footer) */}
      <footer className="bg-brand-bg pt-24 pb-12 px-6 border-t border-brand-text/10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h3 className="text-lg font-serif text-brand-text mb-4">Organisatorisches</h3>
            <p className="text-brand-text/70 font-light mb-16 max-w-xl mx-auto">
              Die Anmeldung ist verbindlich. Eine Stornierung ist nicht möglich. Nach Rücksprache kann dein Platz auf eine Ersatzperson übertragen werden.
            </p>
            
            <div className="w-24 h-px bg-brand-accent/50 mx-auto mb-16"></div>
            
            <p className="text-3xl md:text-4xl font-serif italic text-brand-text mb-16">
              Du musst nichts verändern.<br/>Du darfst wieder bei dir ankommen.
            </p>
            
            <div className="text-sm text-brand-text/50 tracking-widest uppercase">
              © {new Date().getFullYear()} ANKOMMEN Retreat
            </div>
          </FadeIn>
        </div>
      </footer>

    </div>
  );
}
