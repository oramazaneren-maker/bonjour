# Bonjour QR Menü — Doğrulama Notları

## 17 Ağustos 2026

Mobil ve masaüstü tam sayfa görünümleri kontrol edildi. Hero metni, yatay kategori çubuğu, editoryal ürün listesi, atölye vurgusu ve footer farklı ekran genişliklerinde taşma olmadan görüntülendi.

Canlı tarayıcı testinde **Workshop & Atölye** sekmesine tıklandığında aktif kategori göstergesi doğru sekmeye geçti; bölüm başlığı `04 / 04`, açıklama ve iki atölye ürünüyle güncellendi. **Seramik Boyama Atölyesi — 450₺** ve **Mum Yapım Atölyesi — 400₺** içerikleri doğru görüntülendi.

`pnpm check` ve `pnpm build` komutları başarıyla tamamlandı. Vite, uzaktaki kalıcı görsel varlık URL’lerini çalışma zamanında çözmek üzere korudu; production çıktısı `dist/` altında üretildi.

## Prototip Notu

Footer’daki `+90 (312) 000 00 00` telefon numarası ve genel Instagram yönlendirmesi prototip yer tutucularıdır; yayın öncesinde işletmenin doğrulanmış iletişim bilgileriyle değiştirilmelidir.

## Son Rötuşlar — Birinci Kontrol Turu

`pnpm check` ve `pnpm build` yeniden başarıyla tamamlandı. Menü verisindeki sekiz yiyecek/içecek ürününün tamamı için içerik uyarısı tanımlandı; iki atölye kaydı ürün olmadığı için rozet taşımıyor. Instagram bağlantısı verilen `bonjour_coffeebakery` hesabına yönleniyor ve `target="_blank"` ile `rel="noopener noreferrer"` özelliklerini içeriyor.

Canlı tarayıcı testinde **Kahveler** kategorisinde kafein/süt rozetleri; **Fırın & Patisserie** kategorisinde ise Taze Kruvasan için **Glüten içerir** ve **Süt içerir**, Çikolatalı Cookie için **Glüten içerir**, **Süt içerir** ve **Yumurta içerir** rozetleri doğrulandı. Kategori filtresi içerik, seçki sayısı ve aktif sekmeyi doğru güncelledi.

## Son Rötuşlar — İkinci Kontrol Turu

Mobil `390 × 844` ve masaüstü `1440 × 900` tam sayfa görünümleri ayrı ayrı kontrol edildi. Alerjen rozetleri ürün adları ve açıklamalarıyla dengeli hizalandı; yatay kategori çubuğu, fiyatlar, atölye tanıtımı ve footer taşma veya çakışma göstermedi. Bağımsız görsel değerlendirme tasarımın Toprak Editoryali yönünü koruduğunu ve teslim edilebilir durumda olduğunu belirtti.

Canlı DOM ölçümünde üç fluid katmanın sırasıyla `28s`, `34s` ve `31s` süreli animasyonlarla çalıştığı doğrulandı. Instagram öğesinin hedefi verilen tam URL, `target` değeri `_blank`, `rel` değeri `noopener noreferrer` olarak okundu. Kahveler görünümünde üç ürün için erişilebilir alerjen grubu DOM’da mevcut bulundu.
