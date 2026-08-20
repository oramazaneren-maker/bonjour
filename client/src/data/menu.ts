export type MenuProduct = {
  isim: string;
  aciklama?: string;
  fiyat?: string;
  single?: string | null;
  double?: string | null;
};

export type MenuCategory = {
  kategori_adi: string;
  urunler: MenuProduct[];
};

export const menuData: { kategoriler: MenuCategory[] } = {
  kategoriler: [
    {
      kategori_adi: "Sıcak Kahveler",
      urunler: [
        { isim: "Espresso", single: "₺100", double: "₺140" },
        { isim: "Americano", single: "₺150", double: "₺175" },
        { isim: "Latte", single: "₺150", double: "₺175" },
        { isim: "Flat White", single: null, double: "₺210" },
        { isim: "Cortado", single: "₺175", double: null },
        { isim: "Mocha", single: "₺190", double: null },
        { isim: "Caramel Macchiato", single: "₺190", double: null },
        { isim: "White Chocolate Mocha", single: "₺190", double: null },
        { isim: "Filtre Kahve", aciklama: "Süt + ₺50", single: "₺140", double: null },
        { isim: "Türk Kahvesi", aciklama: "Süt + ₺50", single: "₺110", double: "₺150" },
        { isim: "Dibek Kahvesi", single: "₺110", double: "₺150" },
        { isim: "Menengiç Kahvesi", single: "₺110", double: "₺150" },
      ],
    },
    {
      kategori_adi: "Soğuk Kahveler",
      urunler: [
        { isim: "Ice Americano", single: "₺150", double: "₺180" },
        { isim: "Ice Latte", single: "₺175", double: "₺210" },
        { isim: "Ice Hazelnut Latte", single: "₺190", double: "₺210" },
        { isim: "Ice Mocha", single: "₺190", double: "₺210" },
        { isim: "Ice Caramel Macchiato", single: "₺190", double: "₺210" },
        { isim: "Ice White Chocolate Mocha", single: "₺190", double: "₺210" },
        { isim: "Affogato", single: "₺230", double: null },
        { isim: "Ice Cookie Latte", single: "₺190", double: "₺210" },
        { isim: "Ice Filtre Kahve", single: "₺170", double: "₺190" },
        { isim: "Ice Toffee Nut Latte", single: "₺190", double: "₺210" },
        { isim: "Ice Salted Caramel Latte", single: "₺190", double: "₺210" },
        { isim: "Ice Irish Cream Latte", single: "₺190", double: "₺210" },
      ],
    },
    {
      kategori_adi: "Sıcak İçecekler",
      urunler: [
        { isim: "Bardak Çay", fiyat: "₺50" },
        { isim: "Fincan Çay", fiyat: "₺75" },
        { isim: "Sıcak Çikolata", fiyat: "₺150" },
        { isim: "Fındıklı Sıcak Çikolata", fiyat: "₺170" },
        { isim: "Çilekli Sıcak Çikolata", fiyat: "₺170" },
        { isim: "Salep", fiyat: "₺150" },
        { isim: "Çilekli Salep", fiyat: "₺170" },
        { isim: "Bitki Çayları", fiyat: "₺175" },
        { isim: "Ballı Sıcak Süt", fiyat: "₺100" },
        { isim: "Chai Tea Latte", fiyat: "₺170" },
      ],
    },
    {
      kategori_adi: "Soğuk İçecekler",
      urunler: [
        { isim: "Limonata", single: "₺140", double: "₺170" },
        { isim: "Çilekli Limonata", single: "₺160", double: "₺190" },
        { isim: "Portakal Suyu", single: "₺170", double: null },
        { isim: "Milkshake (Çilek, Çikolata)", single: "₺190", double: "₺230" },
        { isim: "Frozen (Çilek, Muz, Mango, Orman Meyveli, Kivi, Blueberry, Kavun, Ananas)", single: "₺180", double: "₺220" },
        { isim: "Churchill", single: "₺110", double: "₺135" },
        { isim: "Cool Lime", single: "₺180", double: "₺220" },
        { isim: "Berry Hibiscus", single: "₺180", double: "₺220" },
        { isim: "Mojito", single: "₺170", double: "₺210" },
        { isim: "Su", single: "₺25", double: null },
        { isim: "Soda", single: "₺70", double: null },
      ],
    },
    {
      kategori_adi: "Tatlılar",
      urunler: [
        { isim: "Cedric Tatlılar (Limon, Frambuaz, Mango, Antep Fıstığı)", fiyat: "₺280" },
        { isim: "Magnolia (Çilek, Lotus, Orman Meyveli)", fiyat: "₺250" },
        { isim: "Profiterol", fiyat: "₺200" },
        { isim: "American Brownie", fiyat: "₺250" },
        { isim: "Sufle (+1 Top Dondurma ₺50)", fiyat: "₺280" },
        { isim: "San Sebastian", fiyat: "₺280" },
        { isim: "Cheesecake (Limon, Frambuaz, Double Frenk Üzümü)", fiyat: "₺290" },
        { isim: "Kruvasan", fiyat: "₺190" },
        { isim: "Polka", fiyat: "₺280" },
        { isim: "Kubbe Lotus", fiyat: "₺280" },
        { isim: "Vanilla Ice", fiyat: "₺210" },
        { isim: "Tiramisu", fiyat: "₺280" },
        { isim: "Orman Meyveli Pasta (Lady)", fiyat: "₺290" },
        { isim: "Ekler (1 Porsiyon)", fiyat: "₺290" },
      ],
    },
    {
      kategori_adi: "Yiyecekler",
      urunler: [
        { isim: "Pizza", fiyat: "₺300" },
        { isim: "4 Peynirli Baget", fiyat: "₺190" },
        { isim: "Ay Çekirdekli Beyaz Peynirli Panini", fiyat: "₺190" },
        { isim: "Pocaccio Beyaz Peynirli Sandviç", fiyat: "₺190" },
        { isim: "Hindi Fümeli Baget", fiyat: "₺190" },
        { isim: "Tost", fiyat: "₺160" },
        { isim: "Kahvaltı Tabağı", fiyat: "₺320" },
        { isim: "Patates Kızartması", fiyat: "₺120" },
        { isim: "Cookie (Tuzlu)", fiyat: "₺160" },
      ],
    },
    {
      kategori_adi: "Makarnalar (Yeni)",
      urunler: [
        {
          isim: "Pesto Soslu Fettuccine",
          aciklama: "Fesleğen pesto sosu, Parmesan peyniri ve zeytinyağı ile hazırlanan ferah, hafif ve aromatik bir lezzet.",
          fiyat: "₺275",
        },
        {
          isim: "Fettuccine Alfredo",
          aciklama: "Tavuk ve kremalı Parmesan sosuyla hazırlanan klasik İtalyan lezzeti.",
          fiyat: "₺275",
        },
        {
          isim: "Trüflü Kremalı Fettuccine",
          aciklama: "Trüf aromalı özel krema sosuyla hazırlanan, yoğun ve benzersiz bir lezzet.",
          fiyat: "₺275",
        },
      ],
    },
    {
      kategori_adi: "Ekstralar",
      urunler: [
        { isim: "Şurup", fiyat: "₺40" },
        { isim: "Süt", fiyat: "₺50" },
        { isim: "Espresso", fiyat: "₺50" },
        { isim: "Dondurma", fiyat: "₺50" },
        { isim: "Laktozsuz Süt", fiyat: "₺25" },
        { isim: "Kremşanti", fiyat: "₺25" },
        { isim: "Bal", fiyat: "₺40" },
      ],
    },
  ],
};

export function formatMenuPrice(urun: MenuProduct): string {
  if (urun.fiyat) return urun.fiyat;
  return [urun.single, urun.double].filter((value): value is string => Boolean(value)).join(" / ");
}
