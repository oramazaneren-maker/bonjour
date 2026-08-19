# Bonjour Coffee & Bakery — Tasarım Yönü

## Üç Stil Yaklaşımı

### 1. Tema Adı: Toprak Editoryali
**Çok Kısa Tanım:** Bağımsız bir gastronomi dergisinin zarafetini, Ankara’daki sıcak bir atölye mekânının dokunsal malzemeleriyle birleştiren sakin ve rafine bir yön. Menü, ürün listesinden çok özenle düzenlenmiş bir editoryal seçki gibi hissedilir.

**Olasılık:** 0.037

### 2. Tema Adı: Paris Sabahı
**Çok Kısa Tanım:** İnce çizgiler, yüksek kontrastlı tipografi ve siyah-krem dengesine dayanan daha klasik bir Fransız pastanesi yorumu. Zarif ancak daha resmi ve nostaljik bir atmosfer taşır.

**Olasılık:** 0.082

### 3. Tema Adı: Seramik Bahçe
**Çok Kısa Tanım:** Organik formlar, daha oyunbaz renk blokları ve el yapımı seramik hissiyle şekillenen çağdaş bir atölye estetiği. Workshop tarafını öne çıkarır; kafe kimliğini daha enerjik gösterir.

**Olasılık:** 0.014

## Seçilen Yaklaşım: Toprak Editoryali

### Tasarım Akımı
**Çağdaş editoryal minimalizm**, Japon wabi-sabi duyarlılığı ve modern Avrupa kafe kimliğinin kontrollü bir birleşimi. Kusursuz dijital yüzeyler yerine kâğıt, kil, kahve ve doğal ışık çağrışımı veren katmanlı ama sessiz bir arayüz amaçlanır.

### Temel İlkeler
1. **Sessiz lüks:** Gösterişli efektler yerine iyi tipografi, rafine boşluk ve kontrollü kontrast kullanılacak.
2. **Dokunsal sadelik:** Kâğıt dokusu, ince çizgiler ve organik köşeler; ekranı fiziksel bir menü kartı gibi hissettirecek.
3. **Editoryal ritim:** Başlık, fiyat ve açıklamalar net bir tipografik hiyerarşiyle; tekdüze kart ızgarası yerine akışkan ve asimetrik bir kompozisyonla sunulacak.
4. **Mobil rahatlık:** Başparmak erişimi, yatay kategori kaydırması, geniş dokunma alanları ve düşük bilişsel yük öncelikli olacak.

### Renk Felsefesi
Arka plan için sıcak kırık krem, ana metin için koyu espresso, ikincil yüzeyler için yulaf-beji kullanılacak. **Bonjour Terra** adlı yanık toprak tonu, markanın imza rengi olarak seçili kategori, fiyat vurgusu ve atölye kartlarında kontrollü biçimde yer alacak. Renkler iştah açıcı olmaktan çok mekânın kahve–seramik–sanat birlikteliğini hissettirecek; hiçbir yüzey saf beyaz veya sert siyah olmayacak.

### Yerleşim Paradigması
Mobilde tek kolonlu ancak monoton olmayan **editoryal akış** kullanılacak. Hero, soldan hizalı güçlü bir tipografik blok ve sağ üstte/arka planda kırpılmış organik marka formuyla açılacak. Kategori çubuğu yapışkan ve yatay kaydırılabilir olacak. Ürünler, ince ayırıcılarla bir “seçki listesi” ritminde; workshop kartları ise daha geniş, renkli ve damga benzeri rozetlerle ayrışacak. Masaüstünde ana içerik iki bölümlü bir dergi sayfası gibi nefes alacak.

### İmza Unsurları
1. Kahve çekirdeği ile seramik paleti formunu birleştiren organik **B monogramı**.
2. Bölümler boyunca tekrarlanan ince, el çizimi hissindeki kontur çizgileri ve küçük numaralandırmalar.
3. Workshop alanında kullanılan toprak renkli “ATÖLYE” damgası ve kil yüzeyi çağrıştıran yumuşak doku.

### Etkileşim Felsefesi
Etkileşimler sessiz ve güven verici olacak. Kategori seçiminde agresif geçişler yerine kısa bir renk kayması ve hareketli alt çizgi; kart girişlerinde küçük bir yukarı süzülme; dokunmada hafif sıkışma tepkisi kullanılacak. Filtre değişiminde içerik kaybolup yeniden oluşmayacak, doğal bir editoryal yeniden dizilim hissi verecek.

### Animasyon
Framer Motion ile filtrelenen liste `AnimatePresence` kullanarak 180–260 ms aralığında geçiş yapacak. Kartlar 36–50 ms gecikmeli kademeli biçimde, `opacity: 0` ve yaklaşık 10–14 px aşağı konumdan görünecek. Aktif kategori göstergesi ortak `layoutId` ile akacak. Hero öğeleri 600 ms içinde yavaş değil, kontrollü bir ease-out ile yerleşecek. `prefers-reduced-motion` tercihinde dekoratif hareketler kaldırılacak; işlevsel durum değişimleri anında anlaşılır kalacak.

### Tipografi Sistemi
Başlıklar ve fiyat vurguları için **Cormorant Garamond**; gövde, kategori butonları ve mikro metinler için **Manrope** kullanılacak. Marka başlığı mobilde 46–58 px aralığında, bölüm başlıkları 34–42 px aralığında olacak. Gövde metni 15–16 px ve rahat satır yüksekliğinde tutulacak. Büyük/küçük harf ayrımı, italik vurgu ve geniş harf aralıklı küçük etiketler ile tipografik derinlik kurulacak.

### Marka Özü
**Kahveyi, fırını ve üretme keyfini aynı sakin yaşam alanında buluşturan; Ankara’daki meraklı şehir insanı için özenli ve dokunsal bir buluşma noktası.**

Kişilik: **Zarif, sıcak, yaratıcı.**

### Marka Sesi
Başlıklar kısa, şiirsel ve davetkâr; CTA ve mikro metinler doğrudan ama nazik olacak. Abartılı pazarlama dili, ünlem yoğunluğu ve jenerik ifadeler kullanılmayacak.

Örnek satırlar:
- “Günün ritmi, iyi bir kahveyle yavaşlar.”
- “Bir fincan seçin; gerisini mekân anlatsın.”

### Wordmark ve Logo
Wordmark, yüksek kontrastlı serif harflerle yazılan “Bonjour” sözcüğünün son harfinde elde çizilmiş hissi veren küçük bir kıvrım ve altında mikro ölçekte “Coffee & Bakery · Ankara” imzasından oluşacak. Sembol; iki oval kahve çekirdeğini, seramik paleti benzeri açık bir daire içinde birleştirerek soyut bir **B** oluşturacak. Sembol metinsiz, güçlü siluetli ve küçük favicon ölçüsünde de tanınır kalacak.

### İmza Marka Rengi
**Bonjour Terra — `#A25E43`**. Kızıl kil, tarçın ve kavrulmuş kahve arasındaki sıcaklığı temsil eder; yalnızca seçili ve anlamlı anlarda kullanılarak markaya ait kalır.

### Görsel Varlık İlkesi
Ürün fotoğrafları kullanılmayacak. Ürün kartlarında zarif çizgisel ikonlar ve dokulu, soyut placeholder yüzeyleri yer alacak. Üretilen görseller yalnızca hero arka planında, atölye vurgusunda ve marka sembolünde dekoratif/kimlik kurucu amaçla kullanılacak; ürün görseli gibi sunulmayacak.

## Stil Kararları

### Editoryal Ürün Sunumu
Standart ürünler gölgeli ve bağımsız uygulama kartları olarak değil; ince ayırıcılar, büyük serif ürün adları, italik fiyatlar ve küçük sıra numaralarıyla bir **editoryal seçki listesi** şeklinde sunulur. Kapsül/kart yüzeyi yalnızca özel atölye içeriklerinde kullanılır.

### Tekrarlanan İmza Motifleri
Organik B monogramı, elle çizilmiş hissi veren ince kontur çizgileri ve küçük bölüm/ürün numaraları hero, menü akışı, atölye vurgusu ve footer boyunca tekrar eder. Bu üçlü Bonjour’un sahiplenilebilir görsel sistemi kabul edilir.

### Sakin Davet Dili
CTA ve mikro metinler doğrudan satış çağrısı taşımaz. “Menüyü keşfet” yerine “Bugünün seçkisine bakın”, “Atölye seçkisine bakın” gibi daha yumuşak ve editoryal ifadeler kullanılır.
