// Tasarım yönü: Toprak Editoryali — sıcak kâğıt yüzeyleri, güçlü serif hiyerarşi ve sakin mikro-hareketler.
import { BrandMark } from "@/components/BrandMark";
import { formatMenuPrice, menuData } from "@/data/menu";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CakeSlice,
  Clock3,
  Coffee,
  CupSoda,
  Flame,
  Instagram,
  MapPin,
  Navigation,
  Palette,
  Phone,
  Plus,
  Sparkles,
  Utensils,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";

type CategoryId =
  | "sicak-kahveler"
  | "soguk-kahveler"
  | "sicak-icecekler"
  | "soguk-icecekler"
  | "tatlilar"
  | "yiyecekler"
  | "makarnalar"
  | "ekstralar"
  | "workshop";
type AllergenId = "gluten" | "milk" | "caffeine" | "egg" | "almond";

type Category = {
  id: CategoryId;
  label: string;
  eyebrow: string;
  description: string;
  icon: LucideIcon;
};

type MenuItem = {
  id: string;
  category: CategoryId;
  name: string;
  price: string;
  description: string;
  icon: LucideIcon;
  allergens: AllergenId[];
};

const allergenLabels: Record<AllergenId, string> = {
  gluten: "Glüten içerir",
  milk: "Süt içerir",
  caffeine: "Kafein içerir",
  egg: "Yumurta içerir",
  almond: "Badem içerir",
};

const categoryMeta: Record<
  string,
  { id: Exclude<CategoryId, "workshop">; eyebrow: string; description: string; icon: LucideIcon }
> = {
  "Sıcak Kahveler": {
    id: "sicak-kahveler",
    eyebrow: "Kavrulmuş & dengeli",
    description: "Günün temposuna eşlik eden espresso bazlı sıcak kahve seçkimiz.",
    icon: Coffee,
  },
  "Soğuk Kahveler": {
    id: "soguk-kahveler",
    eyebrow: "Serin ve dengeli",
    description: "Yaz ritmine uygun buzlu kahve ve latte çeşitlerimiz.",
    icon: Coffee,
  },
  "Sıcak İçecekler": {
    id: "sicak-icecekler",
    eyebrow: "Fincanda durulmak",
    description: "Çay, salep ve sıcak çikolata ile yumuşak bir mola.",
    icon: CupSoda,
  },
  "Soğuk İçecekler": {
    id: "soguk-icecekler",
    eyebrow: "Taze ve ferah",
    description: "Limonata, frozen ve soda ile serinleyen seçkiler.",
    icon: CupSoda,
  },
  Tatlılar: {
    id: "tatlilar",
    eyebrow: "Tatlı bir ara",
    description: "Kahvenin yanında yavaşlamak için özenle hazırlanan tatlılar.",
    icon: CakeSlice,
  },
  Yiyecekler: {
    id: "yiyecekler",
    eyebrow: "Fırından günlük",
    description: "Baget, panini ve kahvaltı tabağıyla doyurucu lezzetler.",
    icon: Wheat,
  },
  "Makarnalar (Yeni)": {
    id: "makarnalar",
    eyebrow: "Yakında menüde",
    description: "Fettuccine tabanlı yeni makarna seçkimiz çok yakında.",
    icon: Utensils,
  },
  Ekstralar: {
    id: "ekstralar",
    eyebrow: "İsteğe bağlı",
    description: "Şurup, süt ve espresso ile fincanınızı kişiselleştirin.",
    icon: Plus,
  },
};

const categories: Category[] = [
  ...menuData.kategoriler.map((kategori) => {
    const meta = categoryMeta[kategori.kategori_adi];
    return {
      id: meta.id,
      label: kategori.kategori_adi,
      eyebrow: meta.eyebrow,
      description: meta.description,
      icon: meta.icon,
    };
  }),
  {
    id: "workshop",
    label: "Workshop & Atölye",
    eyebrow: "Üretmek için buluş",
    description: "Malzemeler bizden; ilham ve merak sizden.",
    icon: Palette,
  },
];

const atelierPhotos = [
  {
    src: "/images/atolye-raflar.png",
    alt: "Bonjour Atölye raflarında alçı objeler ve boyalar",
  },
  {
    src: "/images/atolye-calisma-masasi.png",
    alt: "Atölye masasında boyalar, palet ve kahve",
  },
  {
    src: "/images/atolye-dekor-seti.png",
    alt: "El yapımı beyaz alçı dekor seti",
  },
  {
    src: "/images/atolye-heykel.png",
    alt: "Dokulu dairesel alçı heykel",
  },
];

const menuItems: MenuItem[] = [
  ...menuData.kategoriler.flatMap((kategori) => {
    const meta = categoryMeta[kategori.kategori_adi];
    return kategori.urunler.map((urun, index) => ({
      id: `${meta.id}-${index + 1}`,
      category: meta.id,
      name: urun.isim,
      price: formatMenuPrice(urun),
      description: urun.aciklama ?? (urun.single && urun.double ? "Single / Double" : ""),
      icon: meta.icon,
      allergens: [] as AllergenId[],
    }));
  }),
  {
    id: "ceramic-painting",
    category: "workshop",
    name: "Seramik Boyama Atölyesi",
    price: "₺450",
    description: "2 saatlik eğitim ve malzeme dahil",
    icon: Palette,
    allergens: [],
  },
  {
    id: "candle-making",
    category: "workshop",
    name: "Mum Yapım Atölyesi",
    price: "₺400",
    description: "Soya wax, koku seçimi ve malzeme dahil",
    icon: Flame,
    allergens: [],
  },
];

const formatPrice = (price: string) => price;

function AllergenBadges({ allergens }: { allergens: AllergenId[] }) {
  if (allergens.length === 0) return null;

  return (
    <div
      className="mt-3 flex flex-wrap gap-1.5"
      aria-label={`İçerik ve alerjen uyarıları: ${allergens.map((allergen) => allergenLabels[allergen]).join(", ")}`}
    >
      {allergens.map((allergen) => (
        <span
          key={allergen}
          className="inline-flex min-h-6 items-center gap-1.5 rounded-full border border-[#8d6c5a]/16 bg-[#fff9ef]/58 px-2 py-1 font-sans text-[8px] font-bold uppercase leading-none tracking-[0.08em] text-[#765447] backdrop-blur-sm"
        >
          <span className="size-1 rounded-full bg-[#a25e43]/70" aria-hidden="true" />
          {allergenLabels[allergen]}
        </span>
      ))}
    </div>
  );
}

function MenuCard({ item, index, featured }: { item: MenuItem; index: number; featured: boolean }) {
  const Icon = item.icon;

  if (!featured) {
    return (
      <motion.article
        layout
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.24, delay: index * 0.045, ease: [0.23, 1, 0.32, 1] }}
        className="group relative border-b border-[#5a392b]/13 py-6 first:border-t sm:py-8"
      >
        <div className="grid grid-cols-[2.8rem_minmax(0,1fr)_auto] items-start gap-x-3.5 sm:grid-cols-[3.4rem_minmax(0,1fr)_auto] sm:gap-x-6">
          <div className="flex flex-col items-center gap-2.5 pt-0.5 text-[#8c6e5d]">
            <span className="font-sans text-[9px] font-bold tracking-[0.22em]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex size-9 items-center justify-center rounded-[46%_54%_42%_58%] border border-[#7c5847]/22 bg-[#f3e6d4]/65 text-[#6a4332] transition-transform duration-200 group-hover:-rotate-3 sm:size-11">
              <Icon strokeWidth={1.35} className="size-[1.15rem] sm:size-5" />
            </span>
          </div>

          <div className="min-w-0 pt-0.5">
            <h3 className="max-w-xl font-display text-[1.9rem] font-semibold leading-[0.92] tracking-[-0.025em] text-[#42261d] sm:text-[2.45rem]">
              {item.name}
            </h3>
            <p className="mt-2.5 max-w-md text-[0.78rem] leading-relaxed text-[#74584a] sm:text-sm">
              {item.description}
            </p>
            <AllergenBadges allergens={item.allergens} />
          </div>

          <div className="relative self-start pl-2 text-right">
            <span className="font-display text-[1.85rem] font-semibold italic tracking-[-0.045em] text-[#a25e43] sm:text-[2.25rem]">
              {formatPrice(item.price)}
            </span>
            <span className="absolute -bottom-1 right-0 h-px w-7 origin-right bg-[#a25e43]/35 transition-transform duration-200 group-hover:scale-x-150" />
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.24, delay: index * 0.045, ease: [0.23, 1, 0.32, 1] }}
      className="group relative overflow-hidden rounded-[1.9rem_0.85rem_1.9rem_0.85rem] border border-[#a25e43]/20 bg-[#f2ddca]/78 p-4 shadow-[0_18px_50px_-35px_rgba(66,38,27,0.6)] sm:p-5"
    >
      <div className="grid grid-cols-[4.25rem_minmax(0,1fr)_auto] items-center gap-3.5 sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:gap-5">
        <div
          className="flex size-[4.25rem] items-center justify-center rounded-[48%_52%_42%_58%] bg-[#a25e43] text-[#fff7ea] sm:size-20"
          aria-hidden="true"
        >
          <Icon strokeWidth={1.4} className="size-7 sm:size-8" />
        </div>

        <div className="min-w-0">
          <p className="mb-1 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8c6e5d]">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-display text-[1.55rem] font-semibold leading-[1.02] tracking-[-0.02em] text-[#42261d] sm:text-[1.85rem]">
            {item.name}
          </h3>
          <p className="mt-2 max-w-md text-[0.78rem] leading-relaxed text-[#74584a] sm:text-sm">
            {item.description}
          </p>
          <AllergenBadges allergens={item.allergens} />
        </div>

        <div className="self-start pt-1 text-right">
          <span className="font-display text-[1.7rem] font-semibold tracking-[-0.04em] text-[#a25e43] sm:text-[2rem]">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("sicak-kahveler");
  const reduceMotion = useReducedMotion();

  const active = categories.find((category) => category.id === activeCategory) ?? categories[0];
  const filteredItems = useMemo(
    () => menuItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );
  const isWorkshop = activeCategory === "workshop";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f0e4] text-[#42261d] selection:bg-[#a25e43] selection:text-[#fffaf1]">
      <header className="relative isolate min-h-[38rem] overflow-hidden border-b border-[#4c2e22]/10 sm:min-h-[43rem]">
        <img
          src="/manus-storage/bonjour-hero-editorial_75ab459e.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_50%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(249,242,231,0.98)_0%,rgba(249,242,231,0.91)_43%,rgba(249,242,231,0.28)_100%)] sm:bg-[linear-gradient(90deg,rgba(249,242,231,0.98)_0%,rgba(249,242,231,0.84)_47%,rgba(249,242,231,0.15)_100%)]" />
        <div className="absolute -right-16 top-24 -z-10 size-56 rounded-full border border-[#6c4735]/15 sm:right-[7%] sm:size-72" />

        <div className="mx-auto flex min-h-[38rem] w-full max-w-6xl flex-col px-5 pb-9 pt-5 sm:min-h-[43rem] sm:px-8 sm:pb-12 sm:pt-7 lg:px-10">
          <motion.nav
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center justify-between"
            aria-label="Marka bilgisi"
          >
            <div className="flex items-center gap-3">
              <BrandMark className="size-12 sm:size-14" priority />
              <div className="hidden sm:block">
                <p className="font-display text-lg font-semibold leading-none">Bonjour</p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#866a5b]">
                  Coffee & Bakery
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#4c2e22]/12 bg-[#fffaf0]/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#684638] backdrop-blur-md sm:px-4">
              <MapPin className="size-3.5 text-[#a25e43]" strokeWidth={1.8} />
              Ankara · Sincan
            </div>
          </motion.nav>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="mt-auto max-w-[38rem] pb-8 pt-20 sm:pb-10"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#a25e43]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#8c5c48]">
                QR Menü · Ankara
              </span>
            </div>
            <h1 className="text-balance">
              <span className="block font-display text-[clamp(4rem,20vw,7.8rem)] font-medium leading-[0.72] tracking-[-0.065em] text-[#3d231a]">
                Bonjour
              </span>
              <span className="mt-4 block font-display text-[clamp(2rem,8.8vw,4.3rem)] font-medium italic leading-none tracking-[-0.035em] text-[#a25e43]">
                Coffee & Bakery
              </span>
            </h1>
            <p className="mt-6 max-w-sm text-base font-medium leading-relaxed text-[#65473a] sm:text-lg">
              Kahve, Sanat ve Yaşam Alanı
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#7d6153]">
              Günün ritmini iyi kahve, fırından çıkan sıcak lezzetler ve birlikte üretmenin keyfiyle yavaşlatın.
            </p>

            <a
              href="#menu"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#45291f] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#fff8ee] shadow-[0_14px_35px_-18px_rgba(61,35,26,0.8)] transition-transform duration-150 active:scale-[0.97]"
            >
              Bugünün seçkisine bakın
              <ArrowUpRight className="size-4" />
            </a>
          </motion.div>

          <div className="flex items-end justify-between border-t border-[#4c2e22]/12 pt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#826455]">
            <span>Kahve · Patisserie · Atölye</span>
            <span className="hidden sm:inline">Aşağı kaydır</span>
          </div>
        </div>
      </header>

      <LayoutGroup>
        <div className="sticky top-0 z-40 border-b border-[#4a2d21]/10 bg-[#f8f0e4]/92 shadow-[0_12px_40px_-32px_rgba(66,38,29,0.75)] backdrop-blur-xl">
          <div className="no-scrollbar mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-8 lg:px-10" role="tablist" aria-label="Menü kategorileri">
            {categories.map((category) => {
              const Icon = category.icon;
              const selected = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveCategory(category.id)}
                  className={
                    "relative isolate flex min-h-11 shrink-0 items-center gap-2 overflow-hidden rounded-full px-4 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-200 active:scale-[0.97] " +
                    (selected ? "text-[#fff9ef]" : "text-[#705142] hover:bg-[#eadcc9]/70")
                  }
                >
                  {selected && (
                    <motion.span
                      layoutId="active-category"
                      className="absolute inset-0 -z-10 rounded-full bg-[#4b2d22]"
                      transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
                    />
                  )}
                  <Icon className="size-4" strokeWidth={1.6} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <main id="menu" className="relative isolate scroll-mt-20 overflow-hidden">
          <div className="fluid-canvas pointer-events-none absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
            <span className="fluid-blob fluid-blob--coffee" />
            <span className="fluid-blob fluid-blob--beige" />
            <span className="fluid-blob fluid-blob--cream" />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/manus-storage/bonjour-paper-relief_bae60f96.jpg')] bg-cover bg-fixed bg-center opacity-[0.16] mix-blend-multiply" />
          <section className="mx-auto w-full max-w-5xl px-5 pb-24 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`heading-${active.id}`}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                className="mb-8 grid gap-5 border-b border-[#4a2d21]/12 pb-7 sm:grid-cols-[1fr_0.75fr] sm:items-end sm:gap-10 sm:pb-9"
              >
                <div>
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3 pt-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#a25e43]">
                      <span>{String(categories.findIndex((category) => category.id === active.id) + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}</span>
                      <span className="h-px w-8 bg-[#a25e43]/60" />
                      <span>{active.eyebrow}</span>
                    </div>
                    <BrandMark className="size-10 sm:hidden" />
                  </div>
                  <h2 className="font-display text-[clamp(2.8rem,12vw,5rem)] font-medium leading-[0.9] tracking-[-0.045em] text-[#42261d]">
                    {active.label}
                  </h2>
                </div>
                <div className="sm:pb-1">
                  <p className="max-w-md text-sm leading-relaxed text-[#76594b] sm:text-[0.95rem]">
                    {active.description}
                  </p>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a7967]">
                    {filteredItems.length} seçki
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {isWorkshop && (
                  <motion.aside
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="relative mb-5 min-h-56 overflow-hidden rounded-[2.5rem_0.85rem_2.5rem_0.85rem] bg-[#5a3527] p-6 text-[#fff7eb] shadow-[0_24px_70px_-36px_rgba(66,38,29,0.9)] sm:min-h-64 sm:p-8"
                  >
                    <img
                      src={atelierPhotos[0].src}
                      alt={atelierPhotos[0].alt}
                      className="absolute inset-0 h-full w-full object-cover opacity-75"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(62,34,25,0.91)_0%,rgba(62,34,25,0.68)_56%,rgba(62,34,25,0.16)_100%)]" />
                    <img
                      src={atelierPhotos[3].src}
                      alt=""
                      aria-hidden="true"
                      className="absolute -right-6 -top-7 size-40 rotate-12 object-contain opacity-80 sm:right-1 sm:top-0 sm:size-48"
                      loading="lazy"
                    />
                    <div className="relative z-10 flex min-h-44 max-w-md flex-col justify-between sm:min-h-48">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f4d7c4]">
                        <Sparkles className="size-4" />
                        Bonjour Atölye
                      </div>
                      <div>
                        <h3 className="max-w-sm font-display text-4xl font-semibold leading-[0.95] tracking-[-0.035em] sm:text-5xl">
                          Atölyede üret,
                          <br />
                          kahvede dinlen.
                        </h3>
                        <div className="mt-4 flex items-center gap-2 text-xs text-[#f8e8da]">
                          <Clock3 className="size-4" strokeWidth={1.6} />
                          Kontenjanlar sınırlıdır
                        </div>
                      </div>
                    </div>
                  </motion.aside>
                )}

                {isWorkshop && (
                  <div className="mb-5 grid gap-3.5 sm:gap-4">
                    {atelierPhotos.slice(1).map((photo) => (
                      <img
                        key={photo.src}
                        src={photo.src}
                        alt={photo.alt}
                        className="min-h-56 w-full rounded-[2.5rem_0.85rem_2.5rem_0.85rem] object-cover sm:min-h-64"
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}

                <div className={isWorkshop ? "grid gap-3.5 sm:gap-4" : "grid gap-0"} aria-live="polite">
                  {filteredItems.map((item, index) => (
                    <MenuCard key={item.id} item={item} index={index} featured={isWorkshop} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {!isWorkshop && (
              <aside className="relative mt-12 overflow-hidden rounded-[2.2rem_0.8rem_2.2rem_0.8rem] bg-[#543126] px-5 py-7 text-[#fff6ea] shadow-[0_24px_70px_-42px_rgba(66,38,29,0.95)] sm:px-8 sm:py-9">
                <img
                  src={atelierPhotos[1].src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover opacity-42"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(67,36,27,0.96)_0%,rgba(67,36,27,0.78)_62%,rgba(67,36,27,0.25)_100%)]" />
                <img
                  src={atelierPhotos[2].src}
                  alt=""
                  aria-hidden="true"
                  className="absolute -right-8 -top-9 size-36 rotate-12 object-contain opacity-75 sm:right-2 sm:size-44"
                  loading="lazy"
                />
                <div className="relative z-10 max-w-md">
                  <p className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.24em] text-[#efc7b0]">
                    <Palette className="size-3.5" />
                    Kil, renk ve birlikte üretmek
                  </p>
                  <h3 className="mt-3 max-w-sm font-display text-[2.15rem] font-semibold leading-[0.95] tracking-[-0.03em] sm:text-4xl">
                    Kahve soğumadan bir iz bırakın.
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory("workshop");
                      window.requestAnimationFrame(() =>
                        document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" }),
                      );
                    }}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-[#f7ddcb]/45 pb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#fff6ea] transition-colors hover:border-[#fff6ea] active:scale-[0.97]"
                  >
                    Atölye seçkisine bakın
                    <ArrowUpRight className="size-4" />
                  </button>
                </div>
              </aside>
            )}

            <div className="mt-12 flex items-start gap-3 border-t border-[#4a2d21]/10 pt-5 text-xs leading-relaxed text-[#806557]">
              <Sparkles className="mt-0.5 size-4 shrink-0 text-[#a25e43]" strokeWidth={1.5} />
              <p>
                Rozetler temel içerik bilgisini gösterir. Çapraz temas riski, ürün içerikleri ve atölye kontenjanları için ekibimizden güncel bilgi alabilirsiniz.
              </p>
            </div>
          </section>
        </main>
      </LayoutGroup>

      <footer className="relative overflow-hidden bg-[#3d241b] text-[#f7eadb]">
        <div className="absolute -right-28 -top-36 size-80 rounded-full border border-[#f2d3bd]/10" />
        <div className="absolute -right-16 -top-20 size-52 rounded-full border border-[#f2d3bd]/10" />
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-[1.15fr_0.85fr] sm:gap-16">
            <div>
              <BrandMark className="size-14 bg-[#f0d9c5]" />
              <p className="mt-7 max-w-lg font-display text-[2.6rem] font-medium leading-[0.95] tracking-[-0.035em] sm:text-5xl">
                Bir kahve uzağınızdayız.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#d4bbaa]">
                Kahve, üretim ve sakin bir mola için Bonjour’da buluşalım.
              </p>
            </div>

            <div className="grid gap-6 text-sm">
              <div className="flex items-start gap-3 border-b border-[#f8eadb]/12 pb-5">
                <MapPin className="mt-0.5 size-5 shrink-0 text-[#d88a68]" strokeWidth={1.5} />
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#b99e8e]">Adres</p>
                  <address className="not-italic leading-relaxed text-[#f8eadb]">
                    Menderes, Necip Fazıl Blv No:29 D:B, Sincan / Ankara
                  </address>
                </div>
              </div>
              <a href="tel:+903120000000" className="group flex items-start gap-3 border-b border-[#f8eadb]/12 pb-5">
                <Phone className="mt-0.5 size-5 shrink-0 text-[#d88a68]" strokeWidth={1.5} />
                <div className="flex-1">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#b99e8e]">İletişim</p>
                  <span className="transition-colors group-hover:text-[#eaa282]">+90 (312) 000 00 00</span>
                </div>
                <ArrowUpRight className="size-4 text-[#9e8070]" />
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Menderes%2C%20Necip%20Faz%C4%B1l%20Blv%20No%3A29%20D%3AB%2C%20Sincan%2C%20Ankara"
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#f8eadb]/16 px-4 text-[10px] font-bold uppercase tracking-[0.13em] transition-colors hover:bg-[#f8eadb] hover:text-[#3d241b] active:scale-[0.97]"
                >
                  <Navigation className="size-4" />
                  Yol tarifi
                </a>
                <a
                  href="https://www.instagram.com/bonjour_coffeebakery?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bonjour Coffee & Bakery Instagram hesabını yeni sekmede aç"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#f8eadb]/16 px-4 text-[10px] font-bold uppercase tracking-[0.13em] transition-colors hover:bg-[#f8eadb] hover:text-[#3d241b] active:scale-[0.97]"
                >
                  <Instagram className="size-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-[#f8eadb]/10 pt-5 text-[9px] font-semibold uppercase tracking-[0.19em] text-[#9f8171] sm:flex-row sm:items-center sm:justify-between">
            <span>Bonjour Coffee & Bakery</span>
            <span>Kahve · Sanat · Yaşam Alanı</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
