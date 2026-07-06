"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Heart, Users, MapPin, Clock, ArrowRight, Menu, X, Music, BookOpen } from "lucide-react";

const GOLD = "#B8973E";
const DARK = "#1A0F2E";
const CREAM = "#FAF7F0";
const WINE = "#6B1D3A";
const LIGHT_GOLD = "#FBF3E0";

const schedule = [
  { day: "Sunday", services: [{ time: "8:00", title: "Holy Liturgy (Romanian)" }, { time: "10:30", title: "Holy Liturgy (Romanian)" }, { time: "17:00", title: "Vespers" }] },
  { day: "Saturday", services: [{ time: "8:00", title: "Liturgy & Commemoration" }, { time: "16:00", title: "Great Vespers" }] },
  { day: "Weekdays", services: [{ time: "7:30", title: "Morning Liturgy (Tue, Thu, Fri)" }, { time: "17:00", title: "Vespers (Wed)" }] },
];

const sacraments = [
  { icon: <BookOpen className="w-5 h-5" />, name: "Baptism", desc: "Administered by appointment. Contact the parish office at least 2 weeks in advance." },
  { icon: <Heart className="w-5 h-5" />, name: "Marriage", desc: "Couples are asked to meet the priest 3 months before the ceremony for preparation." },
  { icon: <Music className="w-5 h-5" />, name: "Chrismation", desc: "Received during or immediately following Holy Baptism." },
  { icon: <Users className="w-5 h-5" />, name: "Holy Unction", desc: "Available for the sick or elderly. Contact the office for a home visit." },
];

const events = [
  { date: "Jul 20", title: "Feast of the Prophet Elijah — Patronal Festival", desc: "Hierarchical Liturgy with Archbishop Ioan, followed by agapă for parishioners. All are welcome." },
  { date: "Aug 6", title: "Feast of the Transfiguration of Christ", desc: "Special all-night vigil the evening before and Divine Liturgy at 9:00." },
  { date: "Aug 15", title: "Dormition of the Theotokos", desc: "14-day fasting period concludes. Hierarchical Divine Liturgy at 10:00." },
  { date: "Sep 14", title: "Exaltation of the Holy Cross", desc: "One of the 12 Great Feasts. Liturgy at 8:30 and 10:30." },
];

const community = [
  { icon: <Users className="w-5 h-5" />, title: "Sunday School", desc: "For children aged 5–17. Classes after the 10:30 Liturgy every Sunday during school year." },
  { icon: <BookOpen className="w-5 h-5" />, title: "Bible Study", desc: "Wednesday evenings at 19:00. Open to all parishioners and inquirers." },
  { icon: <Heart className="w-5 h-5" />, title: "Social Ministry", desc: "Monthly food and clothing distribution. Volunteers always welcome." },
  { icon: <Music className="w-5 h-5" />, title: "Parish Choir", desc: "Rehearsals Friday at 19:00. New members of all skill levels welcome." },
];

export default function ChurchDemo() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM, fontFamily: "'Georgia', serif", color: DARK }}>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b" style={{ backgroundColor: `${CREAM}F5`, borderColor: `${DARK}14`, backdropFilter: "blur(12px)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-base" style={{ backgroundColor: GOLD }}>
              ☦
            </div>
            <div>
              <div className="text-base font-bold leading-tight" style={{ color: DARK }}>Sfânta Treime</div>
              <div className="font-sans text-xs" style={{ color: `${DARK}50` }}>Parohia Ortodoxă Română · Vienna</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium" style={{ color: `${DARK}65` }}>
            <a href="#schedule" className="hover:opacity-100 transition-opacity" style={{ color: DARK }}>Program</a>
            <a href="#sacraments" className="hover:opacity-100 transition-opacity" style={{ color: DARK }}>Taine</a>
            <a href="#events" className="hover:opacity-100 transition-opacity" style={{ color: DARK }}>Evenimente</a>
            <a href="#community" className="hover:opacity-100 transition-opacity" style={{ color: DARK }}>Comunitate</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#donate" className="hidden md:inline-flex items-center gap-1.5 font-sans text-sm font-semibold h-10 px-5 rounded-xl text-white" style={{ backgroundColor: WINE }}>
              <Heart className="w-4 h-4" /> Donează
            </a>
            <button className="md:hidden p-2" onClick={() => setMobileOpen(true)} style={{ color: DARK }}>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col" style={{ backgroundColor: DARK }}>
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <span className="text-white font-bold text-lg">Sfânta Treime</span>
            <button onClick={() => setMobileOpen(false)} className="text-white"><X className="w-5 h-5" /></button>
          </div>
          <div className="flex flex-col px-6 pt-6">
            {[["Program", "#schedule"], ["Taine", "#sacraments"], ["Evenimente", "#events"], ["Comunitate", "#community"]].map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMobileOpen(false)}
                className="text-2xl text-white py-4 border-b border-white/10 hover:opacity-70 transition-opacity">{label}</a>
            ))}
          </div>
          <div className="mt-auto px-6 pb-8">
            <a href="#donate" className="flex items-center justify-center gap-2 h-12 rounded-xl font-sans font-semibold text-sm text-white w-full" style={{ backgroundColor: WINE }}>
              <Heart className="w-4 h-4" /> Donează
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-20 pt-16">
        <Image
          src="https://images.unsplash.com/photo-1555979986-5d4a3b3a3d5e?w=1600&q=90"
          alt="Sfânta Treime Church"
          fill className="object-cover" priority
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${DARK}F0 0%, ${DARK}60 50%, ${DARK}25 100%)` }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
              Parohia Ortodoxă Română — Vienna, Austria
            </p>
            <h1 className="text-5xl lg:text-7xl text-white leading-[1.0] mb-6">
              Parohia<br />
              <em style={{ color: GOLD }}>Sfânta Treime</em>
            </h1>
            <p className="font-sans text-white/65 text-base leading-relaxed mb-10 max-w-lg">
              Comunitate ortodoxă română în inima Vienei, întemeiată în 1976. Sfinte Liturghii, taine, activități sociale și culturale pentru toată familia.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#schedule" className="inline-flex items-center gap-2 font-sans font-semibold h-12 px-8 rounded-xl text-sm text-white" style={{ backgroundColor: WINE }}>
                Program Liturgic <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 font-sans font-semibold h-12 px-8 rounded-xl text-sm text-white border border-white/25 hover:bg-white/10 transition-colors">
                Contactează Parohia
              </a>
            </div>
          </div>
        </div>
        {/* Location card */}
        <div className="absolute top-24 right-6 rounded-2xl px-5 py-4 hidden lg:block" style={{ backgroundColor: "rgba(255,255,255,0.12)", backdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.15)" }}>
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-white/60" />
            <span className="font-sans text-xs font-bold tracking-widest uppercase text-white/60">Adresă</span>
          </div>
          <p className="font-sans text-sm text-white/85 mb-1">Dampfgasse 14, 1030 Wien</p>
          <p className="font-sans text-xs text-white/50">U3 Erdberg · Bus 74A</p>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-24 px-6" style={{ backgroundColor: LIGHT_GOLD }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>Slujbe</p>
            <h2 className="text-4xl" style={{ color: DARK }}>Program Liturgic</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {schedule.map((day, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border" style={{ borderColor: `${DARK}08` }}>
                <div className="flex items-center gap-2 mb-4 pb-4 border-b" style={{ borderColor: `${DARK}08` }}>
                  <Calendar className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                  <h3 className="font-sans font-black text-base" style={{ color: DARK }}>{day.day}</h3>
                </div>
                <div className="space-y-3">
                  {day.services.map((s, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className="font-sans font-bold text-sm shrink-0 w-12" style={{ color: GOLD }}>{s.time}</span>
                      <span className="text-sm leading-tight" style={{ color: `${DARK}70` }}>{s.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center font-sans text-xs" style={{ color: `${DARK}45` }}>
            ✦ Durata Sfintei Liturghii: aproximativ 90 minute ✦ Toți credincioșii sunt bineveniți
          </div>
        </div>
      </section>

      {/* Sacraments */}
      <section id="sacraments" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>Viața sacramentală</p>
            <h2 className="text-4xl" style={{ color: DARK }}>Tainele Sfinte</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {sacraments.map((s, i) => (
              <div key={i} className="flex gap-4 rounded-2xl p-6 border" style={{ borderColor: `${DARK}08` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ backgroundColor: GOLD }}>
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base mb-1.5" style={{ color: DARK }}>{s.name}</h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: `${DARK}60` }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs text-center mt-8" style={{ color: `${DARK}40` }}>
            Pentru programări contactați cancelaria parohiei: <strong>+43 1 789 456 12</strong>
          </p>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-24 px-6" style={{ backgroundColor: DARK }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>Calendar</p>
            <h2 className="text-4xl text-white">Sărbători & Evenimente</h2>
          </div>
          <div className="space-y-4">
            {events.map((ev, i) => (
              <div key={i} className="flex gap-5 rounded-2xl p-6 border border-white/8">
                <div className="text-center shrink-0 w-16">
                  <div className="font-sans text-xs font-bold uppercase" style={{ color: GOLD }}>{ev.date.split(" ")[0]}</div>
                  <div className="font-black text-3xl text-white leading-tight">{ev.date.split(" ")[1]}</div>
                </div>
                <div>
                  <h3 className="text-white font-sans font-bold text-base mb-1.5 leading-snug">{ev.title}</h3>
                  <p className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="py-24 px-6" style={{ backgroundColor: LIGHT_GOLD }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>Viața comunitară</p>
            <h2 className="text-4xl" style={{ color: DARK }}>Activitățile noastre</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {community.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border flex gap-4" style={{ borderColor: `${DARK}08` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ backgroundColor: WINE }}>
                  {c.icon}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base mb-1.5" style={{ color: DARK }}>{c.title}</h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: `${DARK}60` }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-24 px-6" style={{ backgroundColor: WINE }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4 text-white/60">Sprijiniți parohia</p>
          <h2 className="text-4xl text-white mb-5">
            Fiți parte din<br />
            <em style={{ color: GOLD }}>comunitatea noastră.</em>
          </h2>
          <p className="font-sans text-white/65 mb-10 max-w-md mx-auto text-sm leading-relaxed">
            Donațiile susțin activitățile parohiei, întreținerea bisericii și programele sociale. Fiecare contribuție, oricât de mică, contează.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["€10", "€25", "€50", "€100"].map((amt) => (
              <button key={amt} className="font-sans font-bold h-11 px-8 rounded-xl text-sm border-2 border-white/30 text-white hover:bg-white/15 transition-colors">
                {amt}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#donate-form" className="inline-flex items-center justify-center gap-2 font-sans font-semibold h-12 px-10 rounded-xl text-sm bg-white" style={{ color: WINE }}>
              <Heart className="w-4 h-4" /> Donează Online
            </a>
            <a href="#volunteer" className="inline-flex items-center justify-center gap-2 font-sans font-semibold h-12 px-10 rounded-xl text-sm text-white border border-white/25 hover:bg-white/10 transition-colors">
              <Users className="w-4 h-4" /> Devino Voluntar
            </a>
          </div>
        </div>
      </section>

      {/* Donate form */}
      <section id="donate-form" className="py-20 px-6" style={{ backgroundColor: LIGHT_GOLD }}>
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>Contribuție online</p>
            <h2 className="text-3xl" style={{ color: DARK }}>Formularul de donație</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: `${DARK}08` }}>
            <div className="mb-5">
              <label className="font-sans text-xs font-bold uppercase tracking-widest block mb-2" style={{ color: `${DARK}50` }}>Suma donației</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {["€10", "€25", "€50", "€100"].map((amt) => (
                  <button key={amt} className="font-sans font-semibold text-sm h-10 px-5 rounded-xl border-2 transition-colors hover:border-amber-600 hover:text-amber-700" style={{ borderColor: `${DARK}15`, color: DARK }}>
                    {amt}
                  </button>
                ))}
              </div>
              <input placeholder="Altă sumă (€)" className="w-full h-11 rounded-xl border px-3 font-sans text-sm outline-none" style={{ borderColor: `${DARK}15`, color: DARK }} />
            </div>
            <div className="space-y-3 mb-5">
              <div>
                <label className="font-sans text-xs font-bold uppercase tracking-widest block mb-1.5" style={{ color: `${DARK}50` }}>Nume complet</label>
                <input placeholder="Ion Popescu" className="w-full h-11 rounded-xl border px-3 font-sans text-sm outline-none" style={{ borderColor: `${DARK}15`, color: DARK }} />
              </div>
              <div>
                <label className="font-sans text-xs font-bold uppercase tracking-widest block mb-1.5" style={{ color: `${DARK}50` }}>Email</label>
                <input placeholder="ion@exemplu.com" className="w-full h-11 rounded-xl border px-3 font-sans text-sm outline-none" style={{ borderColor: `${DARK}15`, color: DARK }} />
              </div>
              <div>
                <label className="font-sans text-xs font-bold uppercase tracking-widest block mb-1.5" style={{ color: `${DARK}50` }}>Destinație donație (opțional)</label>
                <select className="w-full h-11 rounded-xl border px-3 font-sans text-sm outline-none" style={{ borderColor: `${DARK}15`, color: DARK }}>
                  <option>Fond general al parohiei</option>
                  <option>Întreținerea și restaurarea bisericii</option>
                  <option>Programul social (mese, haine)</option>
                  <option>Școala duminicală</option>
                </select>
              </div>
            </div>
            <button className="w-full h-12 rounded-xl font-sans font-bold text-sm text-white" style={{ backgroundColor: WINE }}>
              Confirmă donația
            </button>
            <p className="font-sans text-xs text-center mt-3" style={{ color: `${DARK}40` }}>
              Plată securizată · Chitanță trimisă pe email · Donațiile sunt deductibile fiscal în Austria (§ 18 EStG)
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>Alătură-te</p>
            <h2 className="text-4xl" style={{ color: DARK }}>Devino voluntar</h2>
            <p className="font-sans text-sm mt-3 max-w-md mx-auto" style={{ color: `${DARK}55` }}>
              Voluntarii noștri fac posibilă fiecare activitate. Fie că ai o oră sau o zi pe lună — suntem recunoscători pentru orice ajutor.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              {[
                { icon: <Heart className="w-4 h-4" />, title: "Ministerul social", desc: "Distribuire lunară de alimente și haine. Sâmbăta a 3-a din lună, 10:00–13:00." },
                { icon: <Music className="w-4 h-4" />, title: "Corul parohial", desc: "Repetițiile vineri la 19:00. Primim membrii noi de orice nivel, cu voce sau fără experiență." },
                { icon: <BookOpen className="w-4 h-4" />, title: "Școala duminicală", desc: "Profesori voluntari pentru copii 5–17 ani. Duminică după Liturghia de la 10:30." },
                { icon: <Users className="w-4 h-4" />, title: "Evenimente parohiale", desc: "Ajutor la organizarea hramului, agapelor și evenimentelor culturale." },
              ].map((v, i) => (
                <div key={i} className="flex gap-4 rounded-2xl p-5 border" style={{ borderColor: `${DARK}08` }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-white" style={{ backgroundColor: GOLD }}>
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm mb-1" style={{ color: DARK }}>{v.title}</h3>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: `${DARK}55` }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-8 border" style={{ backgroundColor: LIGHT_GOLD, borderColor: `${DARK}08` }}>
              <h3 className="font-sans font-bold text-base mb-5" style={{ color: DARK }}>Înscrie-te ca voluntar</h3>
              <div className="space-y-3">
                <div>
                  <label className="font-sans text-xs font-bold uppercase tracking-widest block mb-1.5" style={{ color: `${DARK}50` }}>Nume complet</label>
                  <input placeholder="Ion Popescu" className="w-full h-11 rounded-xl border px-3 font-sans text-sm outline-none bg-white" style={{ borderColor: `${DARK}12`, color: DARK }} />
                </div>
                <div>
                  <label className="font-sans text-xs font-bold uppercase tracking-widest block mb-1.5" style={{ color: `${DARK}50` }}>Telefon / Email</label>
                  <input placeholder="+43 ... sau ion@email.com" className="w-full h-11 rounded-xl border px-3 font-sans text-sm outline-none bg-white" style={{ borderColor: `${DARK}12`, color: DARK }} />
                </div>
                <div>
                  <label className="font-sans text-xs font-bold uppercase tracking-widest block mb-1.5" style={{ color: `${DARK}50` }}>Domeniu preferat</label>
                  <select className="w-full h-11 rounded-xl border px-3 font-sans text-sm outline-none bg-white" style={{ borderColor: `${DARK}12`, color: DARK }}>
                    <option>Ministerul social</option>
                    <option>Corul parohial</option>
                    <option>Școala duminicală</option>
                    <option>Evenimente parohiale</option>
                    <option>Orice este nevoie</option>
                  </select>
                </div>
                <button className="w-full h-11 rounded-xl font-sans font-bold text-sm text-white" style={{ backgroundColor: WINE }}>
                  Trimite cererea
                </button>
              </div>
              <p className="font-sans text-xs mt-3 text-center" style={{ color: `${DARK}40` }}>
                Vă vom contacta în termen de 3 zile lucrătoare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-10 px-6 border-t font-sans" style={{ backgroundColor: DARK, borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-bold text-white mb-2">Parohia Sfânta Treime</div>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>Comunitate ortodoxă română în Vienna, întemeiată în 1976.</p>
          </div>
          <div>
            <div className="font-bold text-white mb-2 flex items-center gap-2"><MapPin className="w-4 h-4" style={{ color: GOLD }} />Adresă & Transport</div>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Dampfgasse 14, 1030 Wien<br />U3 Erdberg · Bus 74A</p>
          </div>
          <div>
            <div className="font-bold text-white mb-2 flex items-center gap-2"><Clock className="w-4 h-4" style={{ color: GOLD }} />Cancelarie</div>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Marți–Vineri: 10:00–13:00<br />+43 1 789 456 12<br />office@sf-treime.at</p>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          <span>© 2026 Parohia Ortodoxă Română Sfânta Treime, Wien</span>
          <span>Demo — <a href="/" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.45)" }}>built by Vladimir Rusacov</a></span>
        </div>
      </footer>
    </div>
  );
}
